import { ADD_QUESTION, DELETE_QUESTION } from "../actions/types";

const initialState = {
  questionsList: []
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      // spread operator because we dont want to change the whole state at once
      // we either add to the state or part of the state
      return {
        ...state,
        // concat as it returns a new array,
        // whereras push add to the current array
        questionsList: state.questionsList.concat({
          id: 99,
          'possible answer': 'scale',
          question: action.data,
          visible: true
        })
      };
      
    case DELETE_QUESTION:
      return {
        ...state,
        foodList: state.foodList.filter((item) => 
          item.id !== id)
      };
    default:
      return state;
  }
};

export default questionReducer;
