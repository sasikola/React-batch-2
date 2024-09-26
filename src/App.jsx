import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./Authentication/RegisterForm";
import RequestOtp from "./Authentication/RequestOtp";
import VerifyOtp from "./Authentication/VerifyOtp";
import ResetPassword from "./Authentication/ResetPassword";
import Login from "./Authentication/Login";
import Comments from "./components/Comments";

const App = () => {
  return (
    <>
      {/* <Router>
        <div className="container mx-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/request-otp" element={<RequestOtp />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router> */}

      <Comments/>
    </>
  );
};

export default App;

// fetching data from api (get) using fetch and axios
// useEffect
// useNavigate