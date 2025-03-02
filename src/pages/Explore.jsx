import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-lg mb-6">
        <h1 className="text-xl font-bold text-gray-900">Explore Features</h1>
        <button
          className="text-red-600 font-medium hover:text-red-700 transition"
          onClick={() => navigate("/signout")}
        >
          Sign Out
        </button>
      </nav>

      {/* Hero Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Discover Powerful Tools for Financial Management</h2>
        <p className="text-gray-600 mb-6">Track expenses, set budgets, and analyze financial trends with ease.</p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-900 transition" onClick={() => navigate("/get-started")}>Get Started</button>
      </div>

      {/* Features Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Explore Our Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-200" onClick={() => navigate("/dashboard")}>
            <h4 className="font-semibold text-gray-900">Dashboard</h4>
            <p className="text-gray-600 text-sm">Get an overview of your financial health.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-200" onClick={() => navigate("/budgeting")}>
            <h4 className="font-semibold text-gray-900">Budgeting</h4>
            <p className="text-gray-600 text-sm">Set and track your budgets efficiently.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-200" onClick={() => navigate("/add-transaction")}>
            <h4 className="font-semibold text-gray-900">Add Transaction</h4>
            <p className="text-gray-600 text-sm">Log your expenses and income.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-200" onClick={() => navigate("/reports")}>
            <h4 className="font-semibold text-gray-900">Reports</h4>
            <p className="text-gray-600 text-sm">Analyze financial trends and insights.</p>
          </div>
        </div>
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

export default Explore;