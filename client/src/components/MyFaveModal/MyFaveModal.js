/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { FaPenNib, FaTrashAlt, FaSuitcase } from "react-icons/fa";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const MyFaveModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{padding: '0px', margin: '0px'}}>
      <Button
        style={{
          marginTop: "0px",
          backgroundColor: "#ee6f57",
          borderColor: "#ee6f57",
          color: "#f6f5f5",
          float: "right",
        }}
        variant="primary"
        size="sm"
        onClick={toggle}
      >
        My Favorites
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>My Favorites</ModalHeader>
        <ModalBody>
          <ListGroup>
            <ListGroupItem>
              Out of Office <FaSuitcase style={{ float: "right", marginLeft: '1rem' }} />&nbsp;
              <FaTrashAlt style={{ float: "right", marginLeft: '1rem' }} />
              <FaPenNib style={{ float: "right" }} />
            </ListGroupItem>
            <ListGroupItem>Cover Letter<FaSuitcase style={{ float: "right", marginLeft: '1rem' }} />&nbsp;
              <FaTrashAlt style={{ float: "right", marginLeft: '1rem' }} />
              <FaPenNib style={{ float: "right" }} /></ListGroupItem>
            <ListGroupItem>Rick Roll email<FaSuitcase style={{ float: "right", marginLeft: '1rem' }} />&nbsp;
              <FaTrashAlt style={{ float: "right", marginLeft: '1rem' }} />
              <FaPenNib style={{ float: "right" }} /></ListGroupItem>
            <ListGroupItem>Follow Up email<FaSuitcase style={{ float: "right", marginLeft: '1rem' }} />&nbsp;
              <FaTrashAlt style={{ float: "right", marginLeft: '1rem' }} />
              <FaPenNib style={{ float: "right" }} /></ListGroupItem>
            <ListGroupItem>Appreciation email<FaSuitcase style={{ float: "right", marginLeft: '1rem' }} />&nbsp;
              <FaTrashAlt style={{ float: "right", marginLeft: '1rem' }} />
              <FaPenNib style={{ float: "right" }} /></ListGroupItem>
          </ListGroup>
        </ModalBody>
        <ModalFooter>
          {/* <Button style={{ marginTop: "10px", backgroundColor: "#ee6f57", borderColor: "#ee6f57", color: "#f6f5f5", float: "right" }} variant="primary" size="sm" onClick={toggle}>Do Something</Button>{' '} */}
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#ee6f57",
              borderColor: "#ee6f57",
              color: "#f6f5f5",
              float: "right",
            }}
            variant="primary"
            size="sm"
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyFaveModal;
