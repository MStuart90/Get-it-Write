import React, { useState } from 'react';
import { Collapse, Button,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.png';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal'




const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="Logo" id='logo' /></NavbarBrand>
        {/* <NavbarBrand href="/" className="mr-auto">Get It Write</NavbarBrand> */}
        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
          <Nav navbar>
            <NavItem>
              <LogInModal buttonLabel={'Log In'}/>
              <SignUpModal buttonLabel={'Sign Up'}/>
            {/* <Button color="danger" onClick={toggle}>Sign In</Button>
              <NavLink href="/components/">Sign In</NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink> */}
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
        </div>
  );
}

export default Example;