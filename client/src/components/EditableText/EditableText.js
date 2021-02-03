import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import CopyButton from './components/CopyButton/CopyButton';


class EditableText extends Component {
    render() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleText">Get it Write text:</Label>
        <hr></hr>
        <Input className="textArea" type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <CopyButton />
      <Button variant="primary" size="sm">Share</Button>{' '}
    </Form>
  );
}
}
export default EditableText;
