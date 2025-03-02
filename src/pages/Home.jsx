import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-lg mb-6">
        <h1 className="text-xl font-bold text-gray-900">Finance Management</h1>
        <div className="flex gap-4">
          <button
            className="text-gray-700 font-medium hover:text-gray-900 transition"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
          <button
            className="text-gray-700 font-medium hover:text-gray-900 transition"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
          <button
            className="text-red-600 font-medium hover:text-red-700 transition"
            onClick={() => navigate("/signout")}
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Take Control of Your Finances Effortlessly</h2>
        <p className="text-gray-600 mb-6">Track expenses, manage budgets, and get real-time insights with our professional expense management app.</p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/signup")}>Get Started for Free</button>
      </div>

      {/* Features Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Expense Tracking</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Budgeting Tools</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Analytics & Reports</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Multi-Currency Support</div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
        <button className="bg-gray-800 text-white py-4 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/add")}>Add Transaction</button>
        <button className="bg-gray-800 text-white py-4 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/budget")}>Budgeting</button>
        <button className="bg-gray-800 text-white py-4 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button className="bg-gray-800 text-white py-4 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/reports")}>Reports</button>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-10 p-6 text-center rounded-lg">
        <p className="text-gray-600">&copy; 2025 Finance Management. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/about" className="text-gray-700 hover:text-gray-900 transition">About</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
          <a href="/privacy" className="text-gray-700 hover:text-gray-900 transition">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;