import { combineReducers } from 'redux';
import users from './users/reducers';
import contact from './contact/reducers';

const reducers = combineReducers({
  users,
  contact
});

export default reducers;
