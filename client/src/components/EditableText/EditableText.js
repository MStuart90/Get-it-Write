import React, { Component } from "react";
import { Button, Form, Input, CardHeader } from "reactstrap";
import "./EditableText.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class EditableText extends React.Component {
  constructor(props) {
    console.log('props higher', props)
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryText !== this.props.categoryText) {

      this.setState({value: this.props.categoryText})
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  clearWasClicked() {
    this.setState({ value: "" });

  }

  render() {
    console.log('state!!! ', this.state)
    console.log('PROPS ', this.props)
    return (
      <Form 
      style={{ height: "100%" }} 
      onSubmit={this.handleSubmit}>
        <CardHeader tag="h4">Text</CardHeader>

        <div
          className="formDiv"
          style={{
            marginBottom: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
            paddingLeft:"10px", 
            paddingRight:"10px"
          }}
        >
          <Input
            className="textArea"
            id="editableTextArea"
            type="textarea"
            style={{ height: "35vh" }}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder="We help YOU get it right"
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
          >
            <a href="mailto:">Create email</a>
          </Button>{" "}

          <Button id='clearButton'
          onClick={this.clearWasClicked.bind(this)}
            style={{ marginLeft: "10px", marginTop: "10px" }}
            variant="primary"
            size="sm"
          >
          Clear
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
