import '../styles/contact.css'
import ContactForm from './ContactForm';

function Contact() {
    return (
      <div className="contactContain">
        <div className="contactLeft"><ContactForm/></div>
        <div className="contactRight">
          <div className="contactRightTwo">
            <h1>CONTACT</h1>
            <div>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </div>
            <p>
              info@my-domain.com
              <br />
              Tel: 1-800-000-0000
            </p>
          </div>
        </div>
      </div>
    );
}

export default Contact;