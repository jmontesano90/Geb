import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
      <nav role='navigation'>
        <div className='navOptions'>
          <Link to='/home' className='icon' style={{ textDecoration: 'none' }}>
            <img src='https://imgur.com/wB7hyOH.jpg'></img>
          </Link>

          <Link to='/' className='log' style={{ textDecoration: 'none' }}>
            Log out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
