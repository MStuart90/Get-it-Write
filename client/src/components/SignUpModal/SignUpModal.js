import React, {setState, useState, state} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import "../LogInModal/LogInModal.css"


const SignUpModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [state, setState] = useState({
      email: "", password: "", username: ""
  });

  const handleEmailChange = (e) => {
     
      setState({email:e.target.value})
      
  }
  const handlePasswordChange = (e) => {
    
    setState({password:e.target.value})
}
const handleUsernameChange = (e) => {
    
    setState({username:e.target.value})
}
const submitForm = (e) => {
    e.preventDefault()
    let signUp= { password: state.password, username: state.username, email: state.email}
    
    axios.post("api/signup", signUp).then(res => {console.log(res)})
}
  return (
    <div>
      <Button style={{ marginTop: "10px", backgroundColor: "#ee6f57", borderColor: "#ee6f57", color: "#f6f5f5" }} variant="primary" size="sm" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign up</ModalHeader>
        <div className="modalForm" >
        <ModalBody>
        <form onSubmit={submitForm}>

        
        <label for="username" sm={2}>Username</label>
     
     <input type="text" onChange={handleUsernameChange} value={state.username} name="username" id="username" placeholder="username" />
  
     
        <label for="exampleEmail" sm={2}>Email</label>
     
          <input type="email" onChange={handleEmailChange} value={state.email} name="email" id="exampleEmail" placeholder="email" />
       
    
    
        <label for="examplePassword" sm={2}>Password</label>
       
          <input type="password" onChange={handlePasswordChange} value={state.password} name="password" id="examplePassword" placeholder="password" />
        {/* <input type="submit" value="Submit" /> */}
      
      </form>
        </ModalBody>
        </div>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignUpModal;