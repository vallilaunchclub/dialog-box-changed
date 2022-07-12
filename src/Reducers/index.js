import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import productReducer from './productReducer';
import dealReducer from './dealReducer';

const appReducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
  product: productReducer,
  deal: dealReducer
});

export default appReducer;