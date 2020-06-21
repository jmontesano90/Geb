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
import { Route } from 'react-router-dom';
import dummyData from './dummyData/dummyData';
import dummyTemplates from './dummyData/dummyTemplates';

class App extends Component {
  state = {
    templates: [],
    data: [],
  };

  componentDidMount() {
    this.state.templates.unshift(dummyTemplates());
    this.state.data.unshift(dummyData());

    this.setState({
      templates: this.state.templates,
      data: this.state.data,
    });
  }

  handleAddTemplate = (template, cb) => {
    this.state.templates.unshift(template);
    this.setState({ templates: this.state.templates }, cb);
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
          <Route path='/' component={Nav} />

          <PublicOnlyRoute exact path='/' component={SplashPage} />
          <PublicOnlyRoute path='/login' component={LogIn} />
          <PrivateOnlyRoute path='/newGrid' component={gridUi} />
          <PrivateOnlyRoute path='/home' component={homePage} />
          <PrivateOnlyRoute path='/myTemplates' component={myTemplates} />
          <PrivateOnlyRoute path='/transectPage' component={transectPage} />
          <PrivateOnlyRoute
            exact
            path='/template/:templateId'
            component={listTemplate}
          />
          <PrivateOnlyRoute
            path='/template/:templateId/grids'
            component={GridList}
          />
        </div>
      </GridContext.Provider>
    );
  }
}

export default App;
