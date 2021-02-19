import React, { useEffect, useState } from "react";
import {
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Fade,
  FormGroup,
  Input,
} from "reactstrap";

const Fields = ({ fadeIn, categoryText, setUpdatedCategoryText }) => {
  const [currentFields, setCurrentFields] = useState([]);
  const [customFields, setCustomFields] = useState([]);

  useEffect(() => {
    if (categoryText === "") {
      return;
    } else {
      const searchPattern = /{{([^}]+)}}/g;
      let tempFields = [];
      let i;
      while ((i = searchPattern.exec(categoryText))) {
        tempFields.push("{{" + i[1] + "}}");
      }
      setCurrentFields(tempFields);
    }
  }, [categoryText]);

  console.log("currentFields state: ", currentFields);

  const handleInputChange = (event) => {
    const { value } = event.target;
    let grabbingCustomFields = currentFields;
    let indexNumber = event.target.id;

    grabbingCustomFields.splice(indexNumber, 1, value);
    // console.log("grabbingCustomFields array: ", grabbingCustomFields);

    setCustomFields(grabbingCustomFields);
    console.log("customFields: ", customFields);

    // let newCategoryText = categoryText.replace(/{{([^}]+)}}/g, customFields);
    // console.log("newCategoryText: ", newCategoryText);

    for (let l = 0; l < currentFields.length; l++) {
      console.log("currentFields i: ", currentFields[l]);
      // categoryText.replace(currentFields[l], customFields[l]);
    }

    console.log(categoryText);
  };

  return (
    <div style={{backgroundColor: "#f6f5f5", height: "100%"}}>
      <CardHeader tag="h4">Fields</CardHeader>
      <CardBody>
        <Container>
          <Col>
            <Fade in={!fadeIn}>
              <Row>
                <p>Please choose a category to view related input fields.</p>
              </Row>
            </Fade>
          </Col>
          <Fade in={fadeIn} className="mt-3">
            <FormGroup row>
              <Col sm={12}>
                {currentFields.map((field, k) => {
                  return (
                    <Input
                      className="mb-2"
                      type="text"
                      name="text"
                      key={k}
                      id={k}
                      placeholder={field}
                      onChange={handleInputChange}
                    />
                  );
                })}
              </Col>
            </FormGroup>
          </Fade>
        </Container>
      </CardBody>
    </div>
  );
};

export default Fields;
