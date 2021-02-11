import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, CardHeader } from "reactstrap";
// import CopyButton from "../../components/CopyButton/CopyButton";
import "./EditableText.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form style={{ height: "50vw" }} onSubmit={this.handleSubmit}>
        <CardHeader tag="h4">Get it Write text:</CardHeader>

        <div
          className="formDiv"
          style={{
            marginBottom: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
          }}
        >
          <Input
            className="textArea"
            type="textarea"
            style={{ height: "35vw" }}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Get it write text goes here"
          />
          <CopyToClipboard text={this.state.value}>
            <Button style={{ marginTop: "10px" }} variant="primary" size="sm">
              Copy
            </Button>
          </CopyToClipboard>

          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            variant="primary"
            size="sm"
          ><a href="mailto:">
          Create email
          </a>
          </Button>{" "}

          <div>
            <h3></h3>
          </div>
        </div>
      </Form>
    );
  }
}

export default EditableText;
