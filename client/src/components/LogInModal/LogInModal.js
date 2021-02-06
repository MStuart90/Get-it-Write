
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>SIGN IN</ModalHeader>
        <ModalBody>
          Sign In or Sign Up
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Sign In</Button>{' '}
          <Button color="secondary" onClick={toggle}>Sign Up</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;