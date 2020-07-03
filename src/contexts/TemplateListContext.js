import React, { Component } from 'react';

const TemplateListContext = React.createContext({
  templateList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTemplateList: () => {},
});
export default TemplateListContext;

export class TemplateListProvider extends Component {
  state = {
    templateList: [],
    gridList: [],
    error: null,
  };

  setTemplateList = (templateList) => {
    this.setState({ templateList });
  };
  setGridList = (gridList) => {
    console.log('yes I ran');
    this.setState({ gridList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      templateList: this.state.templateList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTemplateList: this.setTemplateList,
    };
    return (
      <TemplateListContext.Provider value={value}>
        {this.props.children}
      </TemplateListContext.Provider>
    );
  }
}
