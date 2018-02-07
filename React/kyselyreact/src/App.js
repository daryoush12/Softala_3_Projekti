import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from 'css/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';


class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
