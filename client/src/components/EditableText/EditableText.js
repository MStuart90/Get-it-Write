import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import {CopyToClipboard} from 'react-copy-to-clipboard';


class EditableText extends Component {
    render() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleText">Get it Write text:</Label>
        <hr></hr>
        <Input className="textArea" type="textarea" name="text" id="exampleText" />
      </FormGroup>

      {/* <CopyToClipboard text="Hello!"> */}
      <Button variant="primary" size="sm">Copy to clipboard</Button>{' '}
      <Button variant="primary" size="sm">Share</Button>{' '}
      {/* </CopyToClipboard> */}

    </Form>
  );
}
}
export default EditableText;
