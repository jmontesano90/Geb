import React, { Component } from 'react';
import './App.css';
import Nav from './nav/nav';
import SplashPage from './splashpage/splashPage';
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
import GridSingle from './gridList/gridSingle/gridSingle';
import TemplateApiService from './services/template-api-service';
import TemplateListContext from './contexts/TemplateListContext';
import GridApiService from './services/grid-api-service';
import config from './config';

class App extends Component {
  state = {
    templates: [],
    data: [],
    userId: 0,
  };
  static contextType = TemplateListContext;
  componentDidMount() {
    TemplateApiService.getAllTemplates(config.USER_ID).then((templates) => {
      this.setState({ templates: templates });
    });

    GridApiService.getAllGrids(config.USER_ID).then((data) => {
      data.map((data) => {
        data.x = data.x.split(',').map(Number);
        data.y = data.y.split(',').map(Number);
        data.x_partial = data.x_partial.split(',').map(Number);
        data.y_partial = data.y_partial.split(',').map(Number);
        data.direction = data.direction.split(',').map(Number);
      });
      this.setState({ data: data });
    });

    this.setState({
      templates: this.state.templates,
      data: this.state.data,
    });
  }

  // handleAddTemplate = (template, cb) => {
  //   this.state.templates.unshift(template);
  //   this.setState({ templates: this.state.templates }, cb);
  // };
  updateUserId = (userId) => {
    console.log(userId);
    this.setState({ userId: userId });
  };

  handleAddTemplate = (template) => {
    this.state.templates.unshift(template);
    this.setState({ templates: this.state.templates });
  };

  // handleUpdateTemplates = (templates) => {
  //   this.state.templates = templates;
  //   this.setState({ templates: this.state.templates });
  // };

  handleUpdateTemplates = () => {
    TemplateApiService.getAllTemplates(config.USER_ID).then((templates) => {
      this.setState({ templates: templates });
    });
  };

  handleUpdateGrids = () => {
    GridApiService.getAllGrids(config.USER_ID).then((data) => {
      data.map((data) => {
        data.x = data.x.split(',').map(Number);
        data.y = data.y.split(',').map(Number);
        data.x_partial = data.x_partial.split(',').map(Number);
        data.y_partial = data.y_partial.split(',').map(Number);
        data.direction = data.direction.split(',').map(Number);
      });
      this.setState({ data: data });
    });
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
      handleUpdateTemplates: this.handleUpdateTemplates,
      handleUpdateGrids: this.handleUpdateGrids,
      updateUserId: this.updateUserId,
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
            exact
            path='/template/:templateId/grids'
            component={GridList}
          />
          <PrivateOnlyRoute
            exact
            path='/template/:templateId/grids/:gridId'
            component={GridSingle}
          />
        </div>
      </GridContext.Provider>
    );
  }
}

export default App;
