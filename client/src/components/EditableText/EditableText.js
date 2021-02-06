import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CardHeader, } from 'reactstrap';
// import CopyButton from '../../components/CopyButton/CopyButton';
import './EditableText.css'


class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      
      <Form style={{height: "45vw"}} onSubmit={this.handleSubmit}>
        <CardHeader tag="h4">Get it Write text:</CardHeader>
        {/* <label></label> */}
      <div ClassName="formDiv" style={{marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}  >
          <Input className="textArea" type="textarea" style={{height: "30vw"}} value={this.state.value} onChange={this.handleChange} placeholder="Get it write text goes here"/>
          </div>
        
        <div style={{marginLeft: "40px"}}>
        <Button style={{width: "10vw"}} variant="primary" size="sm">Share</Button>{' '}
     <Button style={{width: "10vw"}} variant="primary" size="sm">Create email</Button>{' '}
     <Button style={{width: "10vw"}} variant="primary" size="sm">Copy</Button>{' '}
     <div>
       <h3></h3>
     </div>
     </div>
      </Form>
      
    );
  }
}
// class EditableText extends Component {
//   render() {
// return (
//   <Form ClassName="EditText">
//     <FormGroup>
//       <div>
//       <CardHeader tag="h4">Get it Write text:</CardHeader>
//         </div>
//       <Input type="textarea" name="text" placeholder="Get it write text goes here"/>
//     </FormGroup>
//     <Button variant="primary" size="sm">Share</Button>{' '}
//     <Button variant="primary" size="sm">Create email</Button>{' '}
//     <Button variant="primary" size="sm">Copy</Button>{' '}
//   </Form>
// );
// }
// }
export default EditableText;

 /* <CopyButton /> */