import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { sendContactForm } from 'store/contact/actions';
import { getSending, getIsSent } from 'store/contact/selectors';
import { Spinner } from 'components';
import './ContactForm.scss';

class ContactForm extends React.Component {

  static propTypes = {
    isSendingContactForm: bool,
    isSent: bool,
    sendContactForm: func
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      msg: '',
      isEmailValid: false,
      isPhoneValid: false,
      isFormValid: false
    };
  }

  handleChange = (event, stateProp) => {
    const value = event.target.value;

    this.setState({ [stateProp]: value }, () => {
      this.validateField(stateProp, value);
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendContactForm();
  }

  validateField = (stateProp, value) => {
    let { isEmailValid, isPhoneValid, errorMsg } = this.state;

    switch (stateProp) {
      case 'email':
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'phone':
        isPhoneValid = value.match(/^[a-zA-Z0-9\-().\s]{9,15}$/);
        break;
      default:
        break;
    }
    this.setState({ errorMsg, isEmailValid, isPhoneValid }, this.validateForm);
  }

  validateForm = () => {
    this.setState(state => (
      { isFormValid: state.isEmailValid && state.isPhoneValid && state.name !== '' }
    ));
  }

  render() {
    const { name, email, phone, msg, isFormValid, isEmailValid, isPhoneValid } = this.state;
    const { isSendingContactForm, isSent } = this.props;

    return (
      <React.Fragment>
        {
          isSendingContactForm ?
            <Spinner />
            : (
              <form className='contact-form' onSubmit={this.handleSubmit}>
                <input type='text' className='contact-form__input'
                  placeholder='* Full Name'
                  value={name}
                  onChange={e => this.handleChange(e, 'name')}
                />
                <input type='email' className='contact-form__input'
                  placeholder='* E-mail'
                  value={email}
                  onChange={e => this.handleChange(e, 'email')}
                />
                <div className='contact-form__error'>
                  {isEmailValid ? null : (email === '') ? null : <span>Invalid Email</span>}
                </div>
                <input type='tel' className='contact-form__input'
                  placeholder='* Phone'
                  value={phone}
                  onChange={e => this.handleChange(e, 'phone')}
                />
                <div className='contact-form__error'>
                  {isPhoneValid ? null : (phone === '') ? null : <span>Invalid Phone</span>}
                </div>
                <textarea className='contact-form__input'
                  placeholder='Message'
                  value={msg}
                  onChange={e => this.handleChange(e, 'msg')}
                />
                <button type='submit' disabled={!isFormValid}>Send</button>
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
}

const mapStateToProps = state => ({
  isSendingContactForm: getSending(state),
  isSent: getIsSent(state)
});

const mapDispatchToProps = dispatch => ({
  sendContactForm: () => {
    dispatch(sendContactForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
