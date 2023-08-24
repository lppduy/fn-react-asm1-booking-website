import './RegisterForm.css';

import React from 'react';

const RegisterForm = () => {
  return (
    <div className="form">
      <h1 className="form-title">Save time, save money!</h1>
      <span className="form-desc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="form-input__container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default RegisterForm;
