import React from 'react';
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12098.821564279318!2d-73.9512771522507!3d40.70248561932594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bf9880bce89%3A0x2879c30100cb4758!2sBrooklyn%2C%20NY%2011206!5e0!3m2!1sen!2sus!4v1653685756123!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>561 400 0727</p>

      <h4>Email</h4>
      <p>mckaymatt@outlook.com</p>

      <h4>Address</h4>
      <p>Brooklyn, New York 11206</p>
    </div>
  );
};

export default Contact;