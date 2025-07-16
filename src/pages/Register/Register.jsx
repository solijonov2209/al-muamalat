import React from 'react';
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import SignImage from '../../assets/signinimg.png';
import '../SignIn/signin.css';
import './registe.css';

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
      // ....
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.phone) {
        errors.phone = 'Phone is required';
      }

      return errors;
    },
  });

  return (
    <div className="sign-in">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="sign-left">
            <Link className="sign-logo" to="/">
              <Logo />
            </Link>
            <h1 className="sign-title">Get started</h1>
            <p className="register-text">
              Already have an account?{' '}
              <Link to="/signin" className="register-link">
                Sign In
              </Link>
            </p>

            <form className="sign-form" onSubmit={formik.handleSubmit}>
              <input
                className="sign-input name-input"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <div className="error-text">{formik.errors.name}</div>
              )}

              <input
                className="sign-input email-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div className="error-text">{formik.errors.email}</div>
              )}

              <PhoneInput
                country={'uz'}
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue('phone', phone)}
                inputStyle={{
                  width: '100%',
                  height: '50px',
                  fontSize: '16px',
                }}
                placeholder="Telefon raqam"
              />
              {formik.errors.phone && (
                <div className="error-text">{formik.errors.phone}</div>
              )}

              <button className="sign-button" type="submit">
                Log In
              </button>
            </form>
          </div>

          <div className="sign-right">
            <img className="sign-image" src={SignImage} alt="image" />
            <p className="sign-text">
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
