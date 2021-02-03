import React, { useState } from "react";
import "./categories.css";
import {
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";

const Categories = () => {
  // setting states for both toggle menus and a state to track the user's selected category
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(true);

  // initial toggle controllers
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);

  // changing the category field colors and disabling radio buttons based on user's category selection
  const selected = (props) => {
    setSelectedCategory(selectedCategory);
    // console.log("selected category: ", props.target.id);

    const selectedToString = props.target.id;
    // console.log(selectedToString);

    if (selectedToString.startsWith("pro", 0) === true) {
      document.getElementById("casualRadioBtns").setAttribute("disabled", "");
      document
        .getElementById("casualCategoriesCard")
        .classList.add("disabledCategory");
      document.getElementById("casualCategoryBtn").classList.add("disabledBtn");
      //   console.log("casual categories disabled");
    } else if (selectedToString.startsWith("cas", 0) === true) {
      document
        .getElementById("professionalRadioBtns")
        .setAttribute("disabled", "");
      document
        .getElementById("proCategoriesCard")
        .classList.add("disabledCategory");
      document
        .getElementById("professionalCategoryBtn")
        .classList.add("disabledBtn");

      //   console.log("professional categories disabled");
    }
  };

  return (
    <Container className="p-2">
      <Card>
        <CardHeader tag="h4">Categories</CardHeader>
        <CardBody>
          <Container>
            {/* row holding Professional categories */}
            <Row className="categoriesRow">
              <Col>
                <Button
                  color="info"
                  onClick={toggle1}
                  className="categoriesBtn"
                  id="professionalCategoryBtn"
                >
                  Professional
                </Button>
                <Collapse isOpen={isOpen1}>
                  <Card id="proCategoriesCard" className="">
                    <CardBody>
                      <Form>
                        <FormGroup tag="fieldset" id="professionalRadioBtns">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="professionalCategory1"
                              />{" "}
                              Emails
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="professionalCategory2"
                              />{" "}
                              Texts
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="professionalCategory3"
                              />{" "}
                              Voicemail Scripts
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            {/* row holding Casual categories */}
            <Row className="categoriesRow">
              <Col>
                <Button
                  color="info"
                  onClick={toggle2}
                  className="categoriesBtn"
                  id="casualCategoryBtn"
                >
                  Casual
                </Button>
                <Collapse isOpen={isOpen2}>
                  <Card id="casualCategoriesCard" className="">
                    <CardBody>
                      <Form>
                        <FormGroup tag="fieldset" id="casualRadioBtns">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="casualCategory1"
                              />{" "}
                              Emails
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="casualCategory2"
                              />{" "}
                              Texts
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="casualCategory3"
                              />{" "}
                              Voicemail Scripts
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onClick={selected}
                                id="casualCategory4"
                              />{" "}
                              Misc.
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Button
              outline
              color="info"
              size="sm"
              onClick={() => {
                // reset casual categories
                document
                  .getElementById("casualRadioBtns")
                  .removeAttribute("disabled");
                document
                  .getElementById("casualCategoriesCard")
                  .classList.remove("disabledCategory");
                document
                  .getElementById("casualCategoryBtn")
                  .classList.remove("disabledBtn");

                // reset professional categories
                document
                  .getElementById("professionalRadioBtns")
                  .removeAttribute("disabled");
                document
                  .getElementById("proCategoriesCard")
                  .classList.remove("disabledCategory");
                document
                  .getElementById("professionalCategoryBtn")
                  .classList.remove("disabledBtn");

                // reset clicked radio buttons to empty
                let radioElement = document.getElementsByName("radio1");
                for (let i = 0; i < radioElement.length; i++) {
                  radioElement[i].checked = false;
                }
              }}
            >
              Reset Selections
            </Button>
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Categories;
