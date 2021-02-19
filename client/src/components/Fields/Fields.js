import React, { useContext, useEffect, useState } from "react";
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
import { FieldsContext } from "../../contexts/fieldsContext";

const Fields = ({ fadeIn, categoryText }) => {
  const fields = useContext(FieldsContext);
  const proOptions = [
    `Hi,\n\nThanks for reaching out, but I'm not interested.\n\nBest regards, ${fields.fieldsAttributes.firstName}.`,
    `Hi,\n\nYou're spamming. I'm not interested, so please stop sending me email.\n\nBest regards, ${fields.fieldsAttributes.firstName}.`,
    `Hi,\n\nI'm enjoying a holiday at ${fields.fieldsAttributes.UNIQUE_LOCATION} and will be off the grid until the ${fields.fieldsAttributes.UNIQUE_DATE}! I'll get back to you that week.\nYou could also reach out to my colleagues via ${fields.fieldsAttributes.supportEmail}.\n\nThanks for your patience and talk to you then!\n\nBest regards,\n${fields.fieldsAttributes.fullName}`,
    `Hi,\n\nThanks for reaching out! Our support reps will check your message and forward it to the best person when necessary.\nWe'll get back to you within 48 hours.\nIf your issue can't wait, you can also reach us via live chat on ${fields.fieldsAttributes.supportWebsite} or call ${fields.fieldsAttributes.supportPhone}.\n\nBest regards,\n${fields.fieldsAttributes.fullName}`,
    `Hi ${fields.fieldsAttributes.UNIQUE_PERSON},\n\nHope you're doing well!\nI just wanted to follow up and ask whether you have any news on ${fields.fieldsAttributes.UNIQUE_SUBJECT}?\nLooking forward to hearing from you.\n\nBest regards, ${fields.fieldsAttributes.firstName}.`,
  ];

  const [currentFields, setCurrentFields] = useState([]);

  useEffect(() => {
    fields.dispatch({ type: "RESET" });
    if (proOptions[categoryText] === "") {
      return;
    } else {
      const searchPattern = /{{([^}]+)}}/g;
      let tempFields = [];
      let i;
      while ((i = searchPattern.exec(proOptions[categoryText]))) {
        tempFields.push("{{" + i[1] + "}}");
      }
      setCurrentFields(tempFields);
    }
  }, [categoryText]);

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    name = `${name.slice(2).slice(0, -2)}`;
    fields.dispatch({ type: name, value });
    // console.log(fields.fieldsAttributes.UNIQUE_LOCATION);
  };

  return (
    <div style={{backgroundColor: "#f6f5f5", height: "100%"}}>
      <CardHeader tag="h4">Fields</CardHeader>
      <CardBody>
        <Container>
          {/* <Col>
            <Fade in={!fadeIn}>
              <Row>
                <p>Please choose a category to view related input fields.</p>
              </Row>
            </Fade>
          </Col> */}
          <Fade in={fadeIn} className="mt-3">
            <FormGroup row>
              <Col sm={12}>
                {currentFields.map((field, k) => {
                  return (
                    <Input
                      className="mb-2"
                      type="text"
                      name={field}
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
