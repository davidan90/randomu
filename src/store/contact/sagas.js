import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SEND_CONTACT_FORM } from './types';
import { sendContactFormSuccess, sendContactFormFailure } from './actions';

function* watcherSendingContactForm() {
  yield takeLatest(SEND_CONTACT_FORM, sendingContactForm);
}

export function* sendingContactForm() {
  try {
    yield delay(2000);
    yield put(sendContactFormSuccess());

  } catch (error) {
    yield put(sendContactFormFailure());
  }
}

export default watcherSendingContactForm;
