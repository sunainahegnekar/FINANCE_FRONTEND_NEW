import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/DashBoard";
import AddTransaction from "./pages/AddTransaction";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Budgeting from "./pages/Budgeting";
import FinanceLanding from "./pages/Landing";
import Homepage from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import SignOut from "./pages/Signout";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Explore from "./pages/Explore";
import PricingPage from "./pages/Pricing";
import Features from "./pages/Features";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashBoard" element={<Dashboard />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/budget" element={<Budgeting />} />
        <Route path="/" element={<FinanceLanding />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage  />} />
        <Route path="/signout" element={<SignOut  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/privacy" element={<PrivacyPolicy  />} />
        <Route path="/explore" element={<Explore  />} />
        <Route path="/pricing" element={<PricingPage  />} />
        <Route path="/features" element={<Features  />} />

      </Routes>
    </Router>
  );
};

export default App;
