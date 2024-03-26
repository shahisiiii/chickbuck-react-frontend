import React, { useState } from 'react';
import './Signup.css';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate(); // Update this line

  const initialFormData = Object.freeze({
    first_name: '',
    email: '',
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`register/`, {
        first_name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate('/login'); // Change history.push to navigate
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-light">
            <div className="card-body">
              <div className="chick-logo mb-4">
                {/* Use the imported ChickBuckLogo */}
                <img
                  width={120}
                  src="../../../Images/chickbuck_logo.jpg"
                  alt="logo2"
                />
              </div>
              <div className="container mt-4 mb-4 pb-3 pt-4">
                <h4 className="bebas-neue-regular">
                  {' '}
                  LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR EMAIL!
                </h4>
              </div>
              <form onSubmit={handleSubmit}> {/* Add onSubmit to form */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="name"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange} // Add onChange to input fields
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="username"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange} // Add onChange to input fields
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange} // Add onChange to input fields
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control custom-input"
                    id="password"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange} // Add onChange to input fields
                  />
                </div>
                <div className="mb-4 mt-4 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the terms and conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-dark mt-3">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
