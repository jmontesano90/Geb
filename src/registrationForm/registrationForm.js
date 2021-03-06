import React, { Component } from 'react';
import TokenService from '../services/token-service';
import { Button, Input, Required } from '../utils/Utils';

export default class RegistrationForm extends Component {
  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );
    full_name.value = '';
    user_name.value = '';
    password.value = '';

    this.props.history.replace('/home');
  };

  render() {
    const { error } = this.state;
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'
          ></Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
          ></Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
          ></Input>
        </div>
        <Button type='submit'>Register</Button>
      </form>
    );
  }
}
