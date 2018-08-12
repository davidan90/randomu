import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE } from './types';

export const getAllUsers = () => ({
  type: GET_ALL_USERS
});

export const getAllUsersSuccess = users => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: {
    users
  }
});

export const getAllUsersFailure = error => ({
  type: GET_ALL_USERS_FAILURE,
  payload: {
    error
  }
});
