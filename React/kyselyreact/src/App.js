import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';


class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col>
          <div className = "box1">

          </div>
          </Col>
          <Col>
          <div className = "box1">

          </div>
          </Col>
          <Col>
          <div className = "box1">

          </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col>
          <div className = "box1">

          </div>
          </Col>
          <Col>
          <div className = "box1">

          </div>
          </Col>
          <Col>
          <div className = "box1">

          </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
