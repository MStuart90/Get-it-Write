import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  Fade,
} from "reactstrap";

const Fields = ({ selectedCategory }) => {
  console.log("THE SELECTED CATEGORY IS!!! ", selectedCategory);
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <Card>
      <CardHeader tag="h4">Fields</CardHeader>
      <CardBody>
        <Container>
          <Col>
            <Row>
              <p>Please choose a category to view related input fields.</p>
            </Row>
            <Button color="primary" onClick={toggle}>
              Toggle Fade
            </Button>
          </Col>
          <Fade in={fadeIn} className="mt-3">
            <Col>
              <Row className="field1">
                <p>field1</p>
              </Row>
              <Row className="field2">
                <p>field2</p>
              </Row>
            </Col>
            <Col>
              <Row className="field3">
                <p>field3</p>
              </Row>
              <Row className="field4">
                <p>field4</p>
              </Row>
            </Col>
          </Fade>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Fields;
