import { ADD_QUESTION, DELETE_QUESTION } from "../actions/types";

const initialState = {
  questionsList: []
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return;
    case DELETE_QUESTION:
      return;
    default:
      return state;
  }
};

export default questionReducer;