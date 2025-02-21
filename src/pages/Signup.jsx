import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#D8D9DA] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-black text-lg font-light mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded text-sm hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-xs text-center mt-4">
          Already have an account? <a href="/login" className="text-black">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
