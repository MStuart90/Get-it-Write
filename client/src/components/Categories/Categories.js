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

const Categories = ({ setSelectedCategoryInApp, setFadeInApp }) => {
  // setting states for the two main toggle menus and a state to track the user's selected category
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // setting state to track the user's selected category
  const [selectedCategory, setSelectedCategory] = useState(true);

  // setting states for the subcategory dropdown toggle menus attached to each radio button
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  // initial toggle controllers for the two main category menus
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);

  // toggle controller handling all subcategory menus, making sure only one subcategory is toggled open at any given time
  const toggle3 = (props) => {
    // console.log("Category chosen: ", props.target.id);

    if (props.target.id.startsWith("pro")) {
      if (props.target.id.endsWith("1")) {
        setIsOpen3(true);
        setIsOpen4(false);
        setIsOpen5(false);
      } else if (props.target.id.endsWith("2")) {
        setIsOpen3(false);
        setIsOpen4(true);
        setIsOpen5(false);
      } else if (props.target.id.endsWith("3")) {
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(true);
      }
    }

    if (props.target.id.startsWith("cas")) {
      if (props.target.id.endsWith("1")) {
        setIsOpen6(true);
        setIsOpen7(false);
        setIsOpen8(false);
      } else if (props.target.id.endsWith("2")) {
        setIsOpen6(false);
        setIsOpen7(true);
        setIsOpen8(false);
      } else if (props.target.id.endsWith("3")) {
        setIsOpen6(false);
        setIsOpen7(false);
        setIsOpen8(true);
      }
    }

    disableCategory(props);
  };

  // changing the category field colors and disables radio buttons based on user's category selection
  const selected = (props) => {
    setSelectedCategory(selectedCategory);

    const selectedOptionValue = props.target.value;
    // console.log("Subcategory chosen: ", selectedOptionValue);
    setSelectedCategoryInApp(selectedOptionValue);
    setFadeInApp(true);
    disableCategory(props);

    // setting selectedCategory to local storage for use in the editable text box
    localStorage.setItem("selectedCategory", selectedOptionValue);
  };

  // function to disable the category not chosen by the user
  function disableCategory(props) {
    // targeting the professional category
    if (props.target.id.startsWith("pro", 0) === true) {
      document.getElementById("casualRadioBtns").setAttribute("disabled", "");
      document
        .getElementById("casualCategoriesCard")
        .classList.add("disabledCategory");
      document.getElementById("casualCategoryBtn").classList.add("disabledBtn");
      setIsOpen2(false);
    }
    // targeting the casual category
    else if (props.target.id.startsWith("cas", 0) === true) {
      document
        .getElementById("professionalRadioBtns")
        .setAttribute("disabled", "");
      document
        .getElementById("proCategoriesCard")
        .classList.add("disabledCategory");
      document
        .getElementById("professionalCategoryBtn")
        .classList.add("disabledBtn");
      setIsOpen1(false);
    }
  }

  return (
    <div
      style={{ backgroundColor: "#f6f5f5", height: "50%" }}
      className="categoriesCard"
    >
      <CardHeader tag="h4">Categories</CardHeader>
      <CardBody>
        <Container>
          {/*=============== row holding Professional categories ===============*/}
          <Row className="categoriesRow">
            <Col>
              <Button
                style={{
                  backgroundColor: "#00334e",
                  borderColor: "#00334e",
                  color: "#f6f5f5",
                }}
                onClick={toggle1}
                className="categoriesBtn"
                id="professionalCategoryBtn"
              >
                Professional
              </Button>
              <Collapse isOpen={isOpen1}>
                <Card
                  style={{
                    backgroundColor: "#145374",
                    borderColor: "#145374",
                    color: "#f6f5f5",
                  }}
                  id="proCategoriesCard"
                  className=""
                >
                  <CardBody>
                    <Form>
                      <FormGroup tag="fieldset" id="professionalRadioBtns">
                        <FormGroup check>
                          <Label check>
                            {/*-----------  professionalCategory1 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="professionalCategory1"
                            />{" "}
                            Emails
                          </Label>
                          <Collapse isOpen={isOpen3}>
                            <FormGroup>
                              {/*______  professionalSubCategory1 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="professionalSubCategory1"
                                onChange={selected}
                              >
                                <option value="proOption1-default" id="default">
                                  Select
                                </option>
                                <option value="proOption1-01">
                                  Unsolicited
                                </option>
                                <option value="proOption1-02">Spam</option>
                                <option value="proOption1-03">
                                  On Vacation
                                </option>
                                <option value="proOption1-04">
                                  Out of Office
                                </option>
                                <option value="proOption1-05">Follow Up</option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            {/*-----------  professionalCategory2 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="professionalCategory2"
                            />{" "}
                            Texts
                          </Label>
                          <Collapse isOpen={isOpen4}>
                            <FormGroup>
                              {/*______  professionalSubCategory2 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="professionalSubCategory2"
                                onChange={selected}
                              >
                                <option value="proOption2-default" id="default">
                                  Select
                                </option>
                                <option value="proOption2-06">
                                  I'm not available
                                </option>
                                <option value="proOption2-07">
                                  I'll get back to you
                                </option>
                                <option value="proOption2-08">Thank you</option>
                                <option value="proOption2-09">
                                  Setup Meeting
                                </option>
                                <option value="proOption2-10">Sick Day</option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            {/*-----------  professionalCategory3 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="professionalCategory3"
                            />{" "}
                            Students
                          </Label>
                          <Collapse isOpen={isOpen5}>
                            <FormGroup>
                              {/*______  professionalSubCategory3 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="professionalSubCategory3"
                                onChange={selected}
                              >
                                <option value="proOption3-default" id="default">
                                  Select
                                </option>
                                <option value="proOption3-11">
                                  Assignment Extension
                                </option>
                                <option value="proOption3-12">
                                  Office Hours
                                </option>
                                <option value="proOption3-13">
                                  Absence Request
                                </option>
                                <option value="proOption3-14">
                                  Question About...
                                </option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
          {/*===============  row holding Casual categories ===============*/}
          <Row className="categoriesRow">
            <Col>
              <Button
                style={{
                  backgroundColor: "#00334e",
                  borderColor: "#00334e",
                  color: "#f6f5f5",
                }}
                onClick={toggle2}
                className="categoriesBtn"
                id="casualCategoryBtn"
              >
                Personal
              </Button>
              <Collapse isOpen={isOpen2}>
                <Card
                  style={{
                    backgroundColor: "#145374",
                    borderColor: "#145374",
                    color: "#f6f5f5",
                  }}
                  id="casualCategoriesCard"
                  className=""
                >
                  <CardBody>
                    <Form>
                      <FormGroup tag="fieldset" id="casualRadioBtns">
                        <FormGroup check>
                          <Label check>
                            {/*-----------  casualCategory1 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="casualCategory1"
                            />{" "}
                            Emails
                          </Label>
                          <Collapse isOpen={isOpen6}>
                            <FormGroup>
                              {/*______  casualSubCategory1 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="casualSubCategory1"
                                onChange={selected}
                              >
                                <option
                                  value="casualOption1-default"
                                  id="default"
                                >
                                  Select
                                </option>
                                <option value="casualOption1-15">
                                  Thanks for the reply
                                </option>
                                <option value="casualOption1-16">
                                  Long time no see
                                </option>
                                <option value="casualOption1-17">
                                  How are you?
                                </option>
                                <option value="casualOption1-18">
                                  Check your phone
                                </option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            {/*-----------  casualCategory2 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="casualCategory2"
                            />{" "}
                            Texts
                          </Label>
                          <Collapse isOpen={isOpen7}>
                            <FormGroup>
                              {/*______  casualSubCategory2 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="casualSubCategory2"
                                onChange={selected}
                              >
                                <option
                                  value="casualOption2-default"
                                  id="default"
                                >
                                  Select
                                </option>
                                <option value="casualOption2-19">
                                  Can't make it
                                </option>
                                <option value="casualOption2-20">
                                  I'm down!
                                </option>
                                <option value="casualOption2-21">
                                  Weekend Plans
                                </option>
                                <option value="casualOption2-22">
                                  You're awesome
                                </option>
                                <option value="casualOption2-23">
                                  Check this out L0L
                                </option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>

                        <FormGroup check>
                          <Label check>
                            {/*-----------  casualCategory3 -----------*/}
                            <Input
                              type="radio"
                              name="radio1"
                              onClick={toggle3}
                              id="casualCategory3"
                            />{" "}
                            Misc.
                          </Label>
                          <Collapse isOpen={isOpen8}>
                            <FormGroup>
                              {/*______  casualSubCategory3 ______*/}
                              <Input
                                type="select"
                                name="select"
                                id="casualSubCategory3"
                                onChange={selected}
                              >
                                <option
                                  value="casualOption3-default"
                                  id="default"
                                >
                                  Select
                                </option>
                                <option value="casualOption3-24">
                                  New phone, who dis?
                                </option>
                                <option value="casualOption3-25">
                                  Rick Rolled
                                </option>
                                <option value="casualOption3-26">
                                  Basket Weaving
                                </option>
                                <option value="casualOption3-27">
                                  Happy Birthday
                                </option>
                              </Input>
                            </FormGroup>
                          </Collapse>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#ee6f57",
              borderColor: "#ee6f57",
              color: "#f6f5f5",
            }}
            variant="primary"
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

              // close subcategory dropdown menus
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
              setIsOpen6(false);
              setIsOpen7(false);
              setIsOpen8(false);

              // reset clicked radio buttons to empty
              let radioElement = document.getElementsByName("radio1");
              for (let i = 0; i < radioElement.length; i++) {
                radioElement[i].checked = false;
              }

              // reset selected dropdown options to default
              let selectElement = document.getElementsByTagName("select");
              for (let j = 0; j < selectElement.length; j++) {
                selectElement[j].selectedIndex = 0;
              }
            }}
          >
            Reset Selections
          </Button>
        </Container>
      </CardBody>
    </div>
  );
};

export default Categories;
