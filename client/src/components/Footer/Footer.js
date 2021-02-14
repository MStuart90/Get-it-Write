import React, { useState } from 'react';
import { Collapse, Row, Col, UncontrolledTooltip } from 'reactstrap';
import Gene from "../../assets/Gene.jpg"; 
import Melanie from "../../assets/Melanie.jpg"; 
import Rachel from "../../assets/Rachel.jpg"; 
import Michael from "../../assets/Michael.jpg"; 
import Maria from "../../assets/Maria.jpg"; 



const Footer = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  const imgStyle = {
    maxHeight: 50,
    maxWidth: 50
  }

  return (
    <div>
      <Row >
          <Col style={{ paddingLeft: "35px", marginTop:'10px'}} sm="6">
          <div class="addthis_inline_share_toolbox"></div>
          </Col>
          <Col style={{ paddingBottom: "0px"}} sm="6">
          <div>
        <p onMouseEnter={toggle} style={{ marginBottom: '1rem' }}>Developers</p>
        <Collapse
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div className="avatar-group">
              <a
                className=" avatar avatar-xs rounded-circle"
                style={{display: "table-cell"}} href="https://github.com/duncangw1" target="_blank"
                id="tooltip1"
              >
                <img
                  className="avatar avatar-xs rounded-circle"
                  style={imgStyle}
                  alt="Gene"
                  src= {Gene}
                ></img>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip1">
                Gene Duncan
              </UncontrolledTooltip>
              <a
                className=" avatar avatar-xs rounded-circle profile-style"
                style={{display: "table-cell"}} href="https://github.com/Rachelmoore2020" target="_blank"
                id="tooltip2"
              >
                <img
                  className="avatar avatar-xs rounded-circle"
                  style={imgStyle}
                  alt="Rachel"
                  src= {Rachel}
                ></img>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip2">
                Rachel Moore
              </UncontrolledTooltip>
              <a
                className=" avatar avatar-xs rounded-circle profile-style"
                style={{display: "table-cell"}} href="https://github.com/MStuart90" target="_blank"
                id="tooltip3"
              >
                <img
                  className="avatar avatar-xs rounded-circle"
                  style={imgStyle}
                  alt="Melanie"
                  src= {Melanie}
                ></img>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip3">
                Melanie Stuart
              </UncontrolledTooltip>
              <a
                className=" avatar avatar-xs rounded-circle profile-style"
                style={{display: "table-cell"}} href="https://github.com/DigitalAmnesia" target="_blank"
                id="tooltip4"
              >
                <img
                  className="avatar avatar-xs rounded-circle"
                  style={imgStyle}
                  alt="Michael"
                  src= {Michael}
                ></img>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip4">
                Michael Hill
              </UncontrolledTooltip>
              <a
                className=" avatar avatar-xs rounded-circle profile-style"
                style={{display: "table-cell"}} href="https://github.com/mariabyler" target="_blank"
                id="tooltip5"
              >
                <img
                  className="avatar avatar-xs rounded-circle"
                  style={imgStyle}
                  alt="Maria"
                  src= {Maria}
                ></img>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip5">
                Maria Byler 
              </UncontrolledTooltip>
            </div>
          </Collapse>
        </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingLeft: "35px", paddingBottom: "0px"}} sm="12">
          <div className="footer">

          <p>© 2021 Get it Write. All Rights Reserved</p>
          </div> 
          </Col>
        </Row>
      </div>
    
  );
}

export default Footer;