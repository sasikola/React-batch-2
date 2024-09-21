import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RequestOtp = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      // Send OTP request to the server
      const response = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      // If OTP is sent successfully, navigate to the verify-otp page
      setMessage(response.data.message);
      navigate("/verify-otp", { state: { email } }); // Pass the email to the VerifyOtp component
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response);
        setMessage(error.response.data.error);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in request setup:", error.message);
      }
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
