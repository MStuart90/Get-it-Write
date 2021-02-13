import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import logo from './logo.png';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal'
import "./navbar.css";

const Example = (props) => {
  // const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
  return (
    <div>
      <Navbar style={{ height: "100%", width: "100%"}} className="gradientStyle">
      <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="Logo" id='logo' /></NavbarBrand>
          <Nav navbar>
            <NavItem>
              <LogInModal buttonLabel={'Log In'}/>
              <SignUpModal  buttonLabel={'Sign Up'}/>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
      </Navbar>
        </div>
  );
}
export default Example;