import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SigninPage.css';

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple signin logic - in real app, you'd validate credentials
    if (formData.email && formData.password) {
      setIsSignedIn(true);
      // Navigate to user profile after signin
      setTimeout(() => {
        navigate('/user-profile');
      }, 1000);
    }
  };

  if (isSignedIn) {
    return (
      <div className="signin-page">
        <div className="signin-container">
          <div className="success-message">
            <h2>✅ Successfully Signed In!</h2>
            <p>Redirecting to your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        
        <div className="signin-footer">
          <p>Don't have an account? <a href="#signup">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
