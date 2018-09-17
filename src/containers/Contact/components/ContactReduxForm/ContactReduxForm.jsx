import * as React from 'react';
import { func, bool, string, object } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendContactForm } from 'store/contact/actions';
import { getSending, getIsSent } from 'store/contact/selectors';
import { Spinner } from 'components';
import './ContactReduxForm.scss';

const validate = values => {
  const requiredMsg = 'Required';
  const errors = {};

  if (!values.email) {
    errors.email = requiredMsg;
  } else if (!values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    errors.email = 'Invalid email';
  }

  if (!values.phone) {
    errors.phone = requiredMsg
  } else if (!values.phone.match(/^[a-zA-Z0-9\-().\s]{9,15}$/)) {
    errors.phone = 'Invalid phone';
  }

  return errors;
}

const validationInputField = ({ input, type, label, meta: { touched, error } }) => (
  <div>
    <input className='contact-form__input'
      {...input}
      placeholder={label}
      type={type}
    />
    {
      !touched ? null : error ? (
        <div className='contact-form__error'>
          <span>{error}</span>
        </div>
      )
        : null
    }
  </div>
);

validationInputField.propTypes = {
  input: object,
  label: string,
  type: string,
  meta: object
}

const ContactReduxForm = props => {
  const { isSendingContactForm, isSent, sendContactForm, invalid } = props;
  return (
    <React.Fragment>
      {
        isSendingContactForm ?
          <Spinner />
          : (
            <form className='contact-form' onSubmit={sendContactForm}>
              <Field
                name='userName'
                type='text'
                label='* Full Name'
                component={validationInputField}
              />
              <Field
                name="email"
                type='email'
                label='* E-mail'
                component={validationInputField}
              />
              <Field
                name="phone"
                type='tel'
                label='* Phone'
                component={validationInputField}
              />
              <Field component='textarea' className='contact-form__input'
                name="msg"
                placeholder='Message'
              />
              <button type='submit' disabled={invalid}>Send</button>
            </form>
          )
      }
      {
        isSent ?
          (
            <div className='confirm-msg'>
              <span>We will contact you soon!</span>
            </div>
          ) : null
      }
    </React.Fragment>
  );
}

ContactReduxForm.propTypes = {
  isSendingContactForm: bool,
  isSent: bool,
  sendContactForm: func,
  invalid: bool
};


const ContactFormContainer = reduxForm({
  form: 'contact',
  validate
})(ContactReduxForm);

const mapStateToProps = state => ({
  isSendingContactForm: getSending(state),
  isSent: getIsSent(state)
});

const mapDispatchToProps = dispatch => ({
  sendContactForm: () => {
    dispatch(sendContactForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
