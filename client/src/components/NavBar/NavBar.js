import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import logo from './logosmall.png';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal'

const Example = (props) => {
  // const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><img src={logo} style={{ width:'30%' }}  alt="Logo" id='logo' /></NavbarBrand>
          <Nav navbar>
            <NavItem>
            {/* <Button style={{ marginTop: "10px" }} variant="primary" size="sm"> */}
            <div style={{ marginBottom:'5px', float:'right' }}>
            <LogInModal buttonLabel={'Log In'}/>
            </div>
            {/* </Button> */}
            </NavItem>
            {/* <Button style={{ marginTop: "10px" }}> */}
            <SignUpModal buttonLabel={'Sign Up'}/>
            {/* </Button> */}
            <NavItem>
            </NavItem>
          </Nav>
      </Navbar>
        </div>
  );
}
export default Example;