import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequestOtp from './Authentication/RequestOtp';
import VerifyOtp from './Authentication/VerifyOtp';
import ResetPassword from './Authentication/ResetPassword';
import RegisterForm from './Authentication/RegisterForm';


const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/request-otp" element={<RequestOtp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
