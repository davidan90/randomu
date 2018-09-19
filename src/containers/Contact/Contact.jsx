import { ContactReduxForm } from './components';
import './Contact.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='contact-section'>
        <div className='contact-section__title'>
          <h2>Contact</h2>
        </div>
        <article className='contact-section__article'>
          {/* <ContactForm /> */}
          <ContactReduxForm />
        </article>
      </section>
    );
  }
}

export default Contact;
