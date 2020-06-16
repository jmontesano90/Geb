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
      templates: [],
      data: [],
    };
    this.handleAddTemplate = this.handleAddTemplate.bind(this);
    this.handleAddData = this.handleAddData.bind(this);
    this.handleDeleteData = this.handleDeleteData.bind(this);
    this.handleDeleteTemplate = this.handleDeleteTemplate.bind(this);
  }

  handleAddTemplate = (template) => {
    this.state.templates.unshift(template);
    this.setState({ templates: this.state.templates });
  };

  handleDeleteTemplate = (id) => {
    let temp = this.state.templates;
    temp.splice(id, 1);
    this.setState({
      templates: temp,
    });
  };

  handleAddData = (data) => {
    this.state.data.unshift(data);
    this.setState({ data: this.state.data });
  };

  handleDeleteData = (id) => {
    let temp = this.state.data;
    temp.splice(id, 1);
    this.setState({
      data: temp,
    });
  };

  render() {
    const value = {
      templates: this.state.templates,
      data: this.state.data,
      handleAddData: this.handleAddData,
      handleAddTemplate: this.handleAddTemplate,
      handleDeleteData: this.handleDeleteData,
      handleDeleteTemplate: this.handleDeleteTemplate,
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
