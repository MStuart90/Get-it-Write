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
      
      <Form ClassName="formDiv" onSubmit={this.handleSubmit}>
        <CardHeader tag="h4">Get it Write text:</CardHeader>
        <label>
      
          <Input style={{marginLeft: "40px", marginTop: "20px" }}className="textArea" type="textarea" cols="93" rows="20" value={this.state.value} onChange={this.handleChange} placeholder="Get it write text goes here"/>
        </label>
        
        <div style={{marginLeft: "40px"}}>
        <Button variant="primary" size="sm">Share</Button>{' '}
     <Button variant="primary" size="sm">Create email</Button>{' '}
     <Button variant="primary" size="sm">Copy</Button>{' '}
     <div></div>
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