import React, { Component } from 'react';
import Modal from "react-responsive-modal";
// import './css/style.css'
// import icon from "./assets/logo.png"
import icon from './logo.png';


class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }
