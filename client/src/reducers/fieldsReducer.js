export const fieldsReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.value,
      };
    case "UNIQUE_LOCATION":
      return {
        ...state,
        UNIQUE_LOCATION: action.value,
      };
    case "UNIQUE_DATE":
      return {
        ...state,
        UNIQUE_DATE: action.value,
      };
    case "supportEmail":
      return {
        ...state,
        supportEmail: action.value,
      };
    case "fullName":
      return {
        ...state,
        fullName: action.value,
      };
    case "supportWebsite":
      return {
        ...state,
        supportWebsite: action.value,
      };
    case "supportPhone":
      return {
        ...state,
        supportPhone: action.value,
      };
    case "UNIQUE_PERSON":
      return {
        ...state,
        UNIQUE_PERSON: action.value,
      };
    case "UNIQUE_SUBJECT":
      return {
        ...state,
        UNIQUE_SUBJECT: action.value,
      };
    case "UNIQUE_TIME":
      return {
        ...state,
        UNIQUE_TIME: action.value,
      };
    case "reasoning":
      return {
        ...state,
        reasoning: action.value,
      };
    case "sickness":
      return {
        ...state,
        sickness: action.value,
      };
    case "link":
      return {
        ...state,
        link: action.value,
      };
    case "RESET":
      return {
        firstName: "{{firstName}}",
        UNIQUE_LOCATION: "{{UNIQUE_LOCATION}}",
        UNIQUE_DATE: "{{UNIQUE_DATE}}",
        supportEmail: "{{supportEmail}}",
        fullName: "{{fullName}}",
        supportWebsite: "{{supportWebsite}}",
        supportPhone: "{{supportPhone}}",
        UNIQUE_PERSON: "{{UNIQUE_PERSON}}",
        UNIQUE_SUBJECT: "{{UNIQUE_SUBJECT}}",
        UNIQUE_TIME: "{{UNIQUE_TIME}}",
        reasoning: "{{reasoning}}",
        sickness: "{{sickness}}",
        link: "{{link}}",
      };
    default:
      return state;
  }
};
