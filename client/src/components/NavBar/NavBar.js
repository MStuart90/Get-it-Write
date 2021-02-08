import React, { useState } from 'react';
import { Collapse, Button,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.png';
import LogInModal from '../LogInModal/LogInModal'



const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // const toggleNavbar = () => setCollapsed(!collapsed);