import { takeLatest, put } from 'redux-saga/effects';
import usersApi from 'api/users';
import { GET_ALL_USERS } from './types';
import { getAllUsersSuccess, getAllUsersFailure } from './actions';

let page = 0;

function* watcherProcessingAllUsers() {
  yield takeLatest(GET_ALL_USERS, processingAllUsers);
}

export function* processingAllUsers() {
  try {
    const response = yield usersApi.getAll(++page);
    const users = response.results;

    yield put(getAllUsersSuccess(users));

  } catch (error) {
    yield put(getAllUsersFailure(error));
  }
}

export default watcherProcessingAllUsers;
