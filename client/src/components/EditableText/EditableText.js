import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import CopyButton from '../../components/CopyButton/CopyButton';


class EditableText extends Component {
    render() {
  return (
    <Form>
      <FormGroup>
        <div>Get it Write text:</div>
        <hr></hr>
       
      </FormGroup>
      
      <Button variant="primary" size="sm">Share</Button>{' '}
    </Form>
  );
}
}
export default EditableText;

 /* <CopyButton /> */