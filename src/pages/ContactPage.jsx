import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-lg mb-6">
        <h1 className="text-xl font-bold text-gray-900">Finance Management</h1>
        <div className="flex gap-4">
          <button
            className="text-gray-700 font-medium hover:text-gray-900 transition"
            onClick={() => navigate("/")}
          >
            Home
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

      {/* Contact Form Section */}
      <div className="bg-white shadow-xl rounded-lg p-10 text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">Have any questions or need support? Reach out to us.</p>
        <form className="text-left">
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="w-full bg-gray-800 text-white py-2 rounded-md text-lg hover:bg-gray-900 transition">
            Send Message
          </button>
        </form>
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

export default ContactPage;
