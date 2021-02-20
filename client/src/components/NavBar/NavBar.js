import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import logo from './logosmall.png';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal'
import "./navbar.css";

const Example = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Navbar style={{ height: "100%", width: "100%"}} className="gradientStyle">
      <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="Logo" id='logo' /></NavbarBrand>
          <Nav navbar>
            <NavItem>
            <div style={{ float:'right' }}>
            <LogInModal buttonLabel={'Log In'}/>
            </div>
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