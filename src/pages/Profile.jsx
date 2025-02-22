import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">User Profile</h2>
        
        {/* Profile Image Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <span className="text-sm">Avatar</span>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 cursor-not-allowed" 
              placeholder="John Doe" 
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 cursor-not-allowed" 
              placeholder="johndoe@example.com" 
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Phone Number</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 cursor-not-allowed" 
              placeholder="+1234567890" 
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-medium">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring focus:ring-gray-300" 
              placeholder="********" 
            />
          </div>

          <button className="w-full bg-gray-800 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-900 transition duration-200">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
