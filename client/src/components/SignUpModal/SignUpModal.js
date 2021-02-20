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
     
      setState({...state, email:e.target.value})
      
  }
  const handlePasswordChange = (e) => {
    
    setState({...state, password:e.target.value})
}
const handleUsernameChange = (e) => {
    
    setState({...state, username:e.target.value})
}
const submitForm = (e) => {
    e.preventDefault()
    let signUp= { password: state.password, name: state.username, email: state.email}
    console.log(signUp)
    axios.post("api/users", signUp).then(res => {console.log(res)})
    
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
          <Button
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  backgroundColor: "#ee6f57",
                  borderColor: "#ee6f57",
                  color: "#f6f5f5",
                }}
                type="submit"
                value="Submit"
                onClick={toggle}
              >
                {" "}
                Submit{" "}
              </Button>
              <Button style={{ marginTop: "10px", backgroundColor: "#ee6f57", borderColor: "#ee6f57", color: "#f6f5f5" }} onClick={toggle}>Cancel</Button>
      
      </form>
        </ModalBody>
        </div>
        {/* <ModalFooter>
          <Button style={{ marginTop: "10px", backgroundColor: "#ee6f57", borderColor: "#ee6f57", color: "#f6f5f5" }} onClick={toggle}>Submit</Button>{' '}
          
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default SignUpModal;