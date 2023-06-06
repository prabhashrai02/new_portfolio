import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineAlternateEmail, MdLocationOn } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="contact_card">
          <h2>Get in Touch</h2>
          <br />
          <div className="contact_card_detail">
            <MdOutlineAlternateEmail className="contact_card_icon"/>
            <a className="no_decoration" href="https://www.google.com/search?q=prabhashrai02&oq=prabhashrai02&aqs=chrome.0.69i59j69i60l3j69i61j69i60l2.4022j0j1&sourceid=chrome&ie=UTF-8"  target="_blank" rel="noreferrer">
              <h3>prabhashrai02</h3>
            </a>
          </div>
          <br />
          <div className="contact_card_detail">
            <BsFillTelephoneFill className="contact_card_icon"/>
            <a className="no_decoration" href="tel:+916386335806">
              <h3>+916386335806</h3>
            </a>
          </div>
          <br />
          <div className="contact_card_detail">
            <MdEmail className="contact_card_icon"/>
            <a className="no_decoration" href="mailto:prabhashsahaj@gmail.com">  
              <h3>prabhashsahaj@gmail.com</h3>
            </a>
          </div>
          <br />
          <div className="contact_card_detail">
            <MdLocationOn className="contact_card_icon"/>
            <a className="no_decoration" href="https://www.google.com/maps?q=varanasi+india&um=1&ie=UTF-8&sa=X&ved=2ahUKEwir7rX4lcf6AhVk2jgGHSZ2DvEQ_AUoAXoECAIQAw"  target="_blank" rel="noreferrer">
              <h3>Varanasi, India</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
