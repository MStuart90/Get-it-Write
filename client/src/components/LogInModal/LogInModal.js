import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import "./LogInModal.css"


const LogInModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
  const [modal, setModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  const toggle = () => setModal(!modal);
  const [state, setState] = useState({
      email: "", password: ""
      
  });

  const handleEmailChange = (e) => {
     console.log(e.target.value)
      setState({...state, email:e.target.value})
      
  }
  const handlePasswordChange = (e) => {
    
    setState({...state, password:e.target.value})
}

const submitForm = (e) => {
    e.preventDefault()
    let logIn= { password: state.password, email: state.email,}
    setloggedIn(true)
    console.log(logIn)
    axios.post("api/auth", logIn).then(res => {
     console.log(res)
})}

console.log('are they logged in ', loggedIn)
  return (
    <div>
      {loggedIn ? <Button style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  backgroundColor: "#ee6f57",
                  borderColor: "#ee6f57",
                  color: "#f6f5f5",
                }}
                type="submit"
                value="Submit"
                onClick={() => setloggedIn(false)}
              >
                {" "}
                Logout</Button> : <Button style={{ marginTop: "10px", backgroundColor: "#ee6f57", borderColor: "#ee6f57", color: "#f6f5f5" }} variant="primary" size="sm" onClick={toggle}>{buttonLabel}</Button>}
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In</ModalHeader>
        <div className="modalForm" >
          
        <ModalBody>
        <form onSubmit={submitForm}>
        <label for="exampleEmail" sm={2}>Email</label>
     
          <input type="email" onChange={handleEmailChange}  name="email" id="exampleEmail" placeholder="email" />
       
    
    
        <label for="examplePassword" sm={2}>Password</label>
       
          <input type="password" onChange={handlePasswordChange}  name="password" id="examplePassword" placeholder="password" />
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
        {/* <input type="cancel" Value="cancel" /> */}
      
      </form>
        </ModalBody>
        </div>
        
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LogInModal;