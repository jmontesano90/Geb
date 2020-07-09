import React, { Component } from 'react';
import TokenService from '../services/token-service';
import { Button, Input } from '../utils/Utils';
import './LoginForm.css';
import Footer from '../footer/footer';
import AuthApiService from '../services/auth-api-service';
import GridContext from '../GridContext';

export default class LoginForm extends Component {
  state = { error: null };
  static contextType = GridContext;
  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = '';
    password.value = '';

    this.props.history.replace('/home');
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        console.log(user_name.value);
        TokenService.saveAuthToken(res.authToken);
        //this.context.updateUserId(AuthApiService.getUserId(user_name.value));
        user_name.value = '';
        password.value = '';

        this.props.history.replace('/home');
        // this.props.onLoginSuccess();
        // this.props.history.replace('/home');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div id='outerSection'>
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='user_name'>
            <label htmlFor='LoginForm__user_name'>User name</label>
            <Input name='user_name' id='LoginForm__user_name'></Input>
          </div>
          <div className='password'>
            <label htmlFor='LoginForm__password'>Password</label>
            <Input
              name='password'
              type='password'
              id='LoginForm__password'
            ></Input>
          </div>
          <Button type='submit'>Login</Button>
        </form>
        <Footer />
      </div>
    );
  }
}
