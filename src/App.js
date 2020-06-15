import React, { Component } from 'react';
import './App.css';
import Nav from './nav/nav';
import SplashPage from './splashpage/splashPage';
import { Route } from 'react-router-dom';
import gridGenerator from './gridGenerator/gridGenerator';
import homePage from './home/home';
import myGrids from './myGrids/myGrids';
import transectPage from './transectPage/transectPage';
import GridContext from './GridContext';
import gridUi from './gridUi/gridUi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: [],
    };
  }
  render() {
    const value = {
      grids: this.state.grids,
    };
    return (
      <GridContext.Provider value={value}>
        <div className='App'>
          <Nav></Nav>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/newGrid' component={gridUi} />
          <Route exact path='/home' component={homePage} />
          <Route exact path='/myGrids' component={myGrids} />
          <Route exact path='/transectPage' component={transectPage} />
        </div>
      </GridContext.Provider>
    );
  }
}

export default App;
