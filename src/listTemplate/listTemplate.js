import React, { Component } from 'react';
import transectGeneration from '../transect';
import Grid from '../grid/grid';
import GridConfigurationButton from '../gridUi/buttons/gridConfigurationButton';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import GridContext from '../GridContext';

class listTemplate extends Component {
  static contextType = GridContext;
  constructor(props) {
    super(props);
    if (!this.props.location.state.template) {
      this.props.history.replace('/home');
    }

    this.state = {
      gridInformation: {
        name: {
          value: this.props.location.state.template.name.value,
          touched: false,
        },
        x: {
          value: this.props.location.state.template.x.value,
          touched: false,
        },
        y: {
          value: this.props.location.state.template.y.value,
          touched: false,
        },
        transectCount: {
          value: this.props.location.state.template.transectCount.value,
          touched: false,
        },
        partialTransectCount: {
          value: this.props.location.state.template.partialTransectCount.value,
          touched: false,
        },
        partialTransectLength: {
          value: this.props.location.state.template.partialTransectLength.value,
          touched: false,
        },
        minimum: {
          value: this.props.location.state.template.minimum.value,
          touched: false,
        },
        id: this.props.location.state.template.id,
      },
      data: {
        x: [],
        y: [],
        xPartial: [],
        yPartial: [],
        direction: [],
        partialTransectLength: 0,
        id: this.props.location.state.template.id,
      },
      ready: false,
    };
  }

  handleUpdateGrid = (gridInformation) => {
    let data = transectGeneration(
      gridInformation,
      this.props.location.state.template.id
    );
    this.setState({
      gridInformation: gridInformation,
      data: data,
      ready: true,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let data = transectGeneration(
      this.state.gridInformation,
      this.props.location.state.template.id
    );
    this.setState({
      gridInformation: this.state.gridInformation,
      data: data,
      ready: true,
    });
  }

  render() {
    let buttons;
    if (this.state.ready === true) {
      buttons = (
        <section id='saveOptions'>
          <GridConfigurationButton
            data={this.state.data}
          ></GridConfigurationButton>
        </section>
      );
    }
    let i;
    let selectedData = [];
    for (i = 0; i < this.context.data.length; i++) {
      if (this.context.data[i].id === this.state.gridInformation.id) {
        selectedData.push(this.context.data[i]);
      }
    }

    let link;
    if (selectedData.length !== 0) {
      link = (
        <Link
          to={{
            pathname: `/template/${this.state.gridInformation.id}/grids`,
            state: {
              template: this.state.gridInformation,
            },
          }}
        >
          Previous Sampling Events
        </Link>
      );
    }
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>{this.state.gridInformation.name.value}</h2>
          </header>

          {link}

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <button type='submit'> Generate new sampling event?</button>
            {
              <Grid
                data={this.state.data}
                info={this.state.gridInformation}
              ></Grid>
            }
            {buttons}
          </form>
        </main>
        <Footer />
      </section>
    );
  }
}
export default listTemplate;
