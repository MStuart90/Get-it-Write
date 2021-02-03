import React from "react";
import "./categories.css";
import {
  UncontrolledCollapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";

function Categories() {
  return (
    <div className="p-2">
      <Button color="info" id="toggler">
        Categories
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card id="categoriesCard">
          <CardBody>
            <Form>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="category1" />{" "}
                    Professional Emails
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="category2" /> Casual
                    Emails
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="category3" />{" "}
                    Professional Texts
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="category4" /> Casual
                    Texts
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default Categories;
