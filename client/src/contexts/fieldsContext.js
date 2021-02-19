import React, { createContext, useReducer } from "react";
import { fieldsReducer } from "../reducers/fieldsReducer";

export const FieldsContext = createContext();

const fieldsState = {
  firstName: "{{firstName}}",
  UNIQUE_LOCATION: "{{UNIQUE_LOCATION}}",
  UNIQUE_DATE: "{{UNIQUE_DATE}}",
  supportEmail: "{{supportEmail}}",
  fullName: "{{fullName}}",
  supportWebsite: "{{supportWebsite}}",
  supportPhone: "{{supportPhone}}",
  UNIQUE_PERSON: "{{UNIQUE_PERSON}}",
  UNIQUE_SUBJECT: "{{UNIQUE_SUBJECT}}",
};

const FieldsContextProvider = (props) => {
  const [fieldsAttributes, dispatch] = useReducer(fieldsReducer, fieldsState);

  return (
    <FieldsContext.Provider value={{ fieldsAttributes, dispatch }}>
      {props.children}
    </FieldsContext.Provider>
  );
};

export default FieldsContextProvider;
