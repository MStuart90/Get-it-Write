import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Fade,
  FormGroup,
  Input,
} from "reactstrap";

const Fields = ({ selectedCategory, fadeIn }) => {
  console.log("THE SELECTED CATEGORY IS!!! ", selectedCategory);

  return (
    <div style={{backgroundColor: "#f6f5f5", height: "50%"}}>
      <CardHeader tag="h4">Fields</CardHeader>
      <CardBody>
        <Container>
          <Col>
            <Row>
              <p>Please choose a category to view related input fields.</p>
            </Row>
          </Col>
          <Fade in={fadeIn} className="mt-3">
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  placeholder="First name..."
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  placeholder="Last name..."
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  placeholder="Location..."
                />
              </Col>
            </FormGroup>
          </Fade>
        </Container>
      </CardBody>
    </div>
  );
};

export default Fields;
