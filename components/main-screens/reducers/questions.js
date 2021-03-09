const questions = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [
        ...state,
        {
          //id: action.id,
          id: 99,
          question: action.question,
          possibleAnswer: "scale",
          visible: true
        }
      ];
    case "TOGGLE_QUESTION":
      return state.map(question =>
        question.id === action.id
          ? { ...question, visible: !question.visible }
          : question
      );

    default:
      return state;
  }
  return state;
};

export default questions;