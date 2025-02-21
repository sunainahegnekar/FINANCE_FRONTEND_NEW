import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/DashBoard";
import AddTransaction from "./pages/AddTransaction";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Budgeting from "./pages/Budgeting";

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

        

      </Routes>
    </Router>
  );
};

export default App;
