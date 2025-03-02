import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-lg mb-6">
        <h1 className="text-xl font-bold text-gray-900">Finance Management</h1>
        <button
          className="text-gray-700 font-medium hover:text-gray-900 transition"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </nav>

      {/* About Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Finance Management App</h2>
        <p className="text-gray-600 mb-6">
          Our app is designed to help professionals and small business owners take control of their finances
          effortlessly. Track expenses, manage budgets, and gain real-time insights to make smarter financial
          decisions.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">✔ Expense Tracking</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">✔ Budget Management</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">✔ Detailed Reports</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">✔ Multi-Currency Support</div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-gray-600">
          We believe that financial clarity is the key to success. Our mission is to empower individuals and
          businesses with the tools they need to track and optimize their spending, so they can focus on what
          matters most.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-10 p-6 text-center rounded-lg">
        <p className="text-gray-600">&copy; 2025 Finance Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
