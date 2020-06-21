import React, { Component } from 'react';
import GridOld from '../../grid/gridOld';

class gridSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridInformation: {},
      data: {},
    };
  }
  render() {
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>{this.props.location.state.template.name.value}</h2>
          </header>
        </main>
        {
          <GridOld
            data={this.props.location.state.data}
            info={this.props.location.state.template}
          />
        }
      </section>
    );
  }
}

export default gridSingle;
