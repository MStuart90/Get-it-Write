
import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import EditableText from './components/EditableText/EditableText';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';

class App extends Component {
  render() {
    return (
      <div>
       
          <header className='header'>
            <Row>
              <Col className='navBar'><NavBar />Nav bar Goes Here</Col>
            </Row>
          </header>
          <article>
            <Row className='rows'>
              <Col style={{paddingRight: "0px" }} className='editText'><EditableText /></Col>
              <Col style={{paddingLeft: "0px" }} className='columns' ><Categories /></Col>
            </Row>
          </article>
          <footer>
            <Row>
              <Col className='footer'><Footer />Footer Goes Here</Col>
            </Row>
          </footer>
      
      </div>
    );
  }
}

export default App;