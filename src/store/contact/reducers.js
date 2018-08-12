import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_SUCCESS, SEND_CONTACT_FORM_FAILURE } from './types';
import { initialState } from './selectors';

const users = (state = initialState, { type }) => {
  switch (type) {
    case SEND_CONTACT_FORM:
      return { ...state, sending: true, isSent: false };

    case SEND_CONTACT_FORM_SUCCESS:
      return { ...state, sending: false, isSent: true };

    case SEND_CONTACT_FORM_FAILURE:
    default:
      return state;
  }
}

export default users;
