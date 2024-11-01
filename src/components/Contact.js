import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('sgbIndustries31', 'template_fqbs4fe', form.current, 'c2htRDv7G1s_2NbUf')
    .then((result) => {
        console.log(result.text);
        swal("Success!", "Message sent successfully!", "success");
        form.current.reset(); // Clear the form after successful submission
    }, (error) => {
        console.log(error.text);
        swal("Error", "An error occurred, please try again.", "error");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Let's Get In Touch</h2>
        <p>Feel free to reach out through any of the platforms below or send us a message directly:</p>
        
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/sgbindustries?igsh=dHliamRmMnZwbWg5" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:shreeganeshbesan@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
        </ul>
        
        <div className="address">
          <p><strong>Address:</strong> G-1 75/84, Shivani Food Products, Industrial Area, Dahod Road, Banswara 327001</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="first_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="from_email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone" required/>
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
