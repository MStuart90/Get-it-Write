import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LogInModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
console.log('props', props) 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In</ModalHeader>
        <ModalBody>
        <form>
     
        <label for="exampleEmail" sm={2}>Email</label>
     
          <input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
       
    
    
        <label for="examplePassword" sm={2}>Password</label>
       
          <input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        <input type="submit" value="Submit" />
      
      </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LogInModal;