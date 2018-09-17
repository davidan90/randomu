import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './users/reducers';
import contact from './contact/reducers';

const reducers = combineReducers({
  users,
  contact,
  form: formReducer
});

export default reducers;
