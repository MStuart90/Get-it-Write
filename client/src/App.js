
import React, { Component } from 'react';
import './App.css';
import { Header, Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
       <Container>
          <header className='header'>
            <Row>
              <Col>Header Goes Here</Col>
            </Row>
          </header>
          <article>
            <Row className='rows'>
              <Col className='columns'>Editable Text Area</Col>
              <Col className='columns'>Category, and other components</Col>
            </Row>
          </article>
          <footer className='footer'>
            <Row>
              <Col>Footer Goes Here</Col>
            </Row>
          </footer>
      </Container>
      </div>
    );
  }
}

export default App;