import React, { useState } from "react";
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setSuccessMessage("⚠️ Please enter your email!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "41d2df9e-9e17-48ba-a547-4242c7226c8b"); 
    formData.append("email", email);
    formData.append("subject", "New Subscription");
    formData.append("message", `New subscriber: ${email}`);
    formData.append("from_name", "Portfolio Footer Subscribe");
    formData.append("to_email", "Samar.arouj2020@gmail.com"); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then(res => res.json());

      if (res.success) {
        setSuccessMessage(`🎉 Thank you! You are subscribed.`);
        setEmail("");
      } else {
        setSuccessMessage("⚠️ Something went wrong. Please try again.");
      }

      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    } catch (error) {
      setSuccessMessage("⚠️ Something went wrong. Please try again.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>I am a full stack developer from Tunisia, I develop robust and modern web and mobile applications.</p>
        </div>
        <div className="footer-top-right">
          <form className="footer-email-form" onSubmit={handleSubscribe}>
                <div className="footer-email-input">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <button type="submit" className="footer-subscribe">Subscribe</button>
                </div>
                </form>


          {showMessage && <p className="footer-success animate">{successMessage}</p>}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2023 Samar Arrouj. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
