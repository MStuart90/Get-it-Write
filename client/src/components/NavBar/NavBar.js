import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.png';


const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="Logo" id='logo' /></NavbarBrand>
        {/* <NavbarBrand href="/" className="mr-auto">Get It Write</NavbarBrand> */}
        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
        </div>
  );
}

export default Example;




// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import './navbar.css';
// import logo from './logo.png';

// console.log(logo);

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="Logo" id='logo' /></NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;