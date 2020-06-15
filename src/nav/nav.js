import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { Hyph } from '../utils/Utils';
import TokenService from '../services/token-service';

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          className='log'
          style={{ textDecoration: 'none' }}
        >
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/login' className='log' style={{ textDecoration: 'none' }}>
          Log in
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div className='nav'>
        <nav role='navigation'>
          <div className='navOptions'>
            <Link
              to='/home'
              className='icon'
              style={{ textDecoration: 'none' }}
            >
              <img src='https://imgur.com/wB7hyOH.jpg'></img>
            </Link>

            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </nav>
      </div>
    );
  }
}
