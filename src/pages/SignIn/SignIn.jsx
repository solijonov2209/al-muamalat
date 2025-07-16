import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Logo from '../../assets/svg/Logo';
import SignImage from '../../assets/signinimg.png';
import './signin.css';

export const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
      // ....
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.password) {
        errors.password = 'Password is required';
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

            <form className="sign-form" onSubmit={formik.handleSubmit}>
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

              <input
                className="sign-input"
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && (
                <div className="error-text">{formik.errors.password}</div>
              )}

              <button className="sign-button" type="submit">
                Sign In
              </button>
              <Link to="/register" className="sign-subtitle">
                Create a new account !
              </Link>
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
