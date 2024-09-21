import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  // Get email from location state (passed from RequestOtp component)
  const location = useLocation();
  const { email } = location.state || {};  // Extract email from the passed state

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      setMessage("Please enter OTP.");
      return;
    }

    try {
      // Make API call to verify OTP
      const response = await axios.post(
        'http://localhost:5000/auth/verify-otp',
        { otp, email },  // Send both OTP and email as required by the backend
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      // If OTP is successfully verified, navigate to ResetPassword
      setMessage(response.data.message);
      navigate('/reset-password', { state: { email } });  // Pass email to ResetPassword
    } catch (error) {
      // Show error message from the server
      setMessage(error.response?.data.error || 'An error occurred.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
      <form onSubmit={handleVerifyOtp}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Verify OTP
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default VerifyOtp;
