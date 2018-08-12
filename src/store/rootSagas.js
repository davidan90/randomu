import { all, call } from 'redux-saga/effects';
import users from './users/sagas';
import contact from './contact/sagas';

function* rootSaga() {
  yield all([
    call(users),
    call(contact)
  ]);
}

export default rootSaga;
