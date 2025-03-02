import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session (adjust according to your authentication setup)
    localStorage.removeItem("userToken");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sign Out</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to sign out?</p>
        <div className="flex gap-4 justify-center">
          <button 
            className="bg-red-600 text-white px-6 py-2 rounded-md text-lg hover:bg-red-700 transition"
            onClick={handleSignOut}
          >
            Yes, Sign Out
          </button>
          <button 
            className="bg-gray-800 text-white px-6 py-2 rounded-md text-lg hover:bg-gray-900 transition"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
