import { ADD_QUESTION, DELETE_QUESTION } from'./types';

export const addQuestion = (question) =>(
  {
    type: ADD_QUESTION,
    data: question
  }
) 

export const deleteQuestion = (id) =>(
  {
    type: DELETE_QUESTION,
    id: id
  }
) 