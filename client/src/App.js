
import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import EditableText from './components/EditableText/EditableText';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
       <Container>
          <header className='header'>
            <Row>
              <Col className='navBar'><NavBar />Nav bar Goes Here</Col>
            </Row>
          </header>
          <article>
            <Row className='rows'>
              <Col className='editText'><EditableText /></Col>
              <Col className='columns'>Category, and other components</Col>
            </Row>
          </article>
          <footer>
            <Row>
              <Col className='footer'><Footer />Footer Goes Here</Col>
            </Row>
          </footer>
      </Container>
      </div>
    );
  }
}

export default App;