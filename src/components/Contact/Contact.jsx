import React, { useState } from "react";
import './Contact.css';
import mail_icon from '../../assets/mail_icon.png';
import location_icon from '../../assets/location_icon.png';
import call_icon from '../../assets/call_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import github_icon from '../../assets/github_icon.png';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "41d2df9e-9e17-48ba-a547-4242c7226c8b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("🎉 Thank you! Your message has been sent successfully. I will contact you soon.");
      setShowMessage(true);
      event.target.reset();

     
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } else {
      setSuccessMessage("⚠️ Something went wrong. Please try again later.");
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" /><p>Samar.arouj2020@gmail.com</p> 
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" /><p>+216 29 682 128</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /><p>Tunisia, Ariana</p> 
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="LinkedIn Icon" />
              <a href="https://www.linkedin.com/in/samar-arrouj-525003231/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="GitHub Icon" />
              <a href="https://github.com/SamarrArrouj" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"/>
          <label>Your Email</label>
          <input type="text" placeholder="Enter your email" name="email"/>
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">Submit now</button>

          {/* Message animé */}
          {showMessage && (
            <p className="contact-success animate">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
