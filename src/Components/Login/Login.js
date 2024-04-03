import React, { useState } from 'react';
import axiosInstance from '../axios';
import {  useNavigate } from 'react-router-dom'; // Import useHistory hook

function Login() {
  const navigate = useNavigate(); // Use the useHistory hook
  const initialFormData = Object.freeze({
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`api/token/`, {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token');
        navigate('/');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login failure here, e.g., display error message to the user
      });
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card text-center border-light">
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
                  LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR EMAIL!
                </h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={formData.username}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control custom-input"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>

                <button type="submit" className="btn btn-dark mt-3">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
