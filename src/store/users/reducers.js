import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE } from './types';
import { initialState } from './selectors';

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, processing: true };

    case GET_ALL_USERS_SUCCESS:
      return state.all
        ? { ...state, processing: false, all: state.all.concat(payload.users) }
        : { ...state, processing: false, all: payload.users };

    case GET_ALL_USERS_FAILURE:
      return { ...state, processing: false, error: payload.error };

    default:
      return state;
  }
}

export default users;
