import React, { useState } from 'react';
import axios from 'axios';

const RequestOtp = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center">Request OTP</h2>
      <form onSubmit={handleRequestOtp}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded w-full">
          Request OTP
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default RequestOtp;
