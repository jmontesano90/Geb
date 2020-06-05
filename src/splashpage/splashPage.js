import React, { Component } from 'react';
import './splashPage.css';

class SplashPage extends Component {
  render() {
    return (
      <section>
        <main role='main'>
          <header
            role='banner'
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(https://imgur.com/F4KxSGu.jpg)`,
            }}
          >
            <h1>Geb</h1>
            <h2>Grid Randomizer</h2>
          </header>
          <section>
            <header>
              <h3>Generate custom transects on the fly</h3>
            </header>

            <p>
              Whether you're a ecologist sampling vegetation, or a biologist
              sampling mosquito larvae you know the value of transect based
              sampling. Geb is a tool designed to generate transect lines to
              survey inside a grid of dimensions of you're choosing.{' '}
            </p>
          </section>

          <section>
            <h3>Truly randomize your sampling</h3>
            <img
              src='https://imgur.com/dtDXC87.png'
              alt='Overlayed grid'
              className='grid'
            ></img>
            <p>
              Say you wanted to sample the vegetation in the area above, Geb
              will generate lines(transects) for you to follow and sample the
              vegetation on!
            </p>
          </section>
          <section>
            <header>
              <h3>Save Custom Transects</h3>
            </header>

            <p>
              No matter how many different sites you visit you may make custom
              grids for all of them and then simply click that configuration and
              Geb will generate transects for you to sample on that day. The
              transects will be completely randomly generated so you will not
              have to worry about any sort of bias in your sampling!
            </p>
          </section>
          <section>
            <header>
              <h3>Keep track of your progress</h3>
            </header>
            <p>
              Whenever a site is sampled, Geb will record the transect
              configuration and any comments you wish to place about the day
              (humidity, cloud cover, how you were feeling etc)
            </p>
          </section>
          <section>
            <header>
              <h3>Start Sampling Now</h3>
            </header>
            <form className='signup-form'>
              <div>
                <label htmlFor='first-name'>First name</label>
                <input
                  placeholder='First Name'
                  type='text'
                  name='first-name'
                  id='first-name'
                />
              </div>
              <div>
                <label htmlFor='last-name'>Last name</label>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  placeholder='Last Name'
                />
              </div>
              <div>
                <label htmlFor='username'>Email</label>
                <input type='text' name='username' id='username' />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' />
              </div>
              <button type='submit'>Sign Up</button>
            </form>
            <h3>Continue without signing up</h3>
          </section>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default SplashPage;
