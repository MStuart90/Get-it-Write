
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
              <Col className='navBar'><NavBar /></Col>
            </Row>
          </header>
          <main>
            <Row className='rows'>
              <Col style={{paddingRight: "0px" }} className='editText'><EditableText /></Col>
              <Col style={{paddingLeft: "0px" }} className='columns' ><Categories /></Col>
            </Row>
          </main>
          <footer>
            <Row>
              <Col className='footer'><Footer /></Col>
            </Row>
          </footer>
      
      </div>
    );
  }
}

export default App;