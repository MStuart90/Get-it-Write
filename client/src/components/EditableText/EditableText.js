import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CardHeader} from 'reactstrap';
// import CopyButton from '../../components/CopyButton/CopyButton';
import './EditableText'


class EditableText extends Component {
    render() {
  return (
    <Form ClassName="EditText">
      <FormGroup>
        <div>
        <CardHeader tag="h4">Get it Write text:</CardHeader>
          </div>
        <Input type="textarea" name="text"/>
      </FormGroup>
      <Button variant="primary" size="sm">Share</Button>{' '}
      <Button variant="primary" size="sm">Create email</Button>{' '}
      <Button variant="primary" size="sm">Copy</Button>{' '}
    </Form>
  );
}
}
export default EditableText;

 /* <CopyButton /> */