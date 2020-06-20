import React, { Component } from 'react';
import './App.css';
import Nav from './nav/nav';
import SplashPage from './splashpage/splashPage';
import { Switch } from 'react-router-dom';
import homePage from './home/home';
import myTemplates from './myTemplates/myTemplates';
import transectPage from './transectPage/transectPage';
import GridContext from './GridContext';
import gridUi from './gridUi/gridUi';
import listTemplate from './listTemplate/listTemplate';
import GridList from './gridList/gridList';
import LogIn from './LoginForm/LoginForm';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import PrivateOnlyRoute from './utils/PrivateRoute';

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
          <Switch>
            <PublicOnlyRoute exact path='/' component={SplashPage} />
            <PublicOnlyRoute exact path='/login' component={LogIn} />
            <PrivateOnlyRoute exact path='/newGrid' component={gridUi} />
            <PrivateOnlyRoute exact path='/home' component={homePage} />
            <PrivateOnlyRoute
              exact
              path='/myTemplates'
              component={myTemplates}
            />
            <PrivateOnlyRoute
              exact
              path='/transectPage'
              component={transectPage}
            />
            <PrivateOnlyRoute
              exact
              path='/template/:templateId'
              component={listTemplate}
            />
            <PrivateOnlyRoute
              exact
              path='/template/:templateId/grids'
              component={GridList}
            />
          </Switch>
        </div>
      </GridContext.Provider>
    );
  }
}

export default App;
