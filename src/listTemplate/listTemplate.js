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
    if (this.props.location) {
      if (!this.props.location.state.template) {
        this.props.history.replace('/home');
      }

      this.state = {
        gridInformation: {
          name: {
            value: this.props.location.state.template.name,
            touched: false,
          },
          x: {
            value: this.props.location.state.template.x,
            touched: false,
          },
          y: {
            value: this.props.location.state.template.y,
            touched: false,
          },
          transectCount: {
            value: this.props.location.state.template.transect_count,
            touched: false,
          },
          partialTransectCount: {
            value: this.props.location.state.template.partial_transect_count,
            touched: false,
          },
          partialTransectLength: {
            value: this.props.location.state.template.partial_transect_length,
            touched: false,
          },
          minimum: {
            value: this.props.location.state.template.minimum,
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
    let listTemplate;
    if (this.state) {
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
        if (
          this.context.data[i].template_id === this.state.gridInformation.id
        ) {
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
      listTemplate = (
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
            </form>
            {buttons}
          </main>
          <Footer />
        </section>
      );
    }
    return <div>{listTemplate}</div>;
  }
}
export default listTemplate;
