import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_SUCCESS, SEND_CONTACT_FORM_FAILURE } from './types';

export const sendContactForm = () => ({
  type: SEND_CONTACT_FORM
});

export const sendContactFormSuccess = () => ({
  type: SEND_CONTACT_FORM_SUCCESS
});

export const sendContactFormFailure = () => ({
  type: SEND_CONTACT_FORM_FAILURE
});
