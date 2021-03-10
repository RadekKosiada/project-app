import { createStore, combineReducers } from 'redux';
import questionReducer from './reducers/questionReducer';

const rootReducer = combineReducers({
  question: questionReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;