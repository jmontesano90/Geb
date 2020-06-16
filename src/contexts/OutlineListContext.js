import React, { Component } from 'react';

const OutlineListContext = React.createContext({
  outlineList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setOutlineList: () => {},
});
export default OutlineListContext;

export class OutlineListProvider extends Component {
  state = {
    outlineList: [],
    error: null,
  };

  setOutlineList = (outlineList) => {
    this.setState({ outlineList });
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
      outlineList: this.state.outlineList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setOutlineList: this.setOutlineList,
    };
    return (
      <OutlineListContext.Provider value={value}>
        {this.props.children}
      </OutlineListContext.Provider>
    );
  }
}
