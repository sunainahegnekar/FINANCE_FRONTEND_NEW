import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="bg-[#d8d9da] p-8 rounded-lg  shadow-2xl w-96">
        <h2 className="text-black text-lg font-light mb-4 text-center">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-light py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-black-600 text-xs mt-4">
          Don't have an account? <a href="/signup" className="text-black hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
