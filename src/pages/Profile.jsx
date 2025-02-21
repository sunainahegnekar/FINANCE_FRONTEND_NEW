import React from "react";

const Profile = () => {
  return (
    <div className="bg-white mt-20 min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-black text-sm font-semibold text-center mb-4">User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-light">Full Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md text-sm" 
            placeholder="John Doe" 
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-light">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md text-sm" 
            placeholder="johndoe@example.com" 
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-light">Phone Number</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md text-sm" 
            placeholder="+1234567890" 
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-light">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border border-gray-300 rounded-md text-sm" 
            placeholder="********" 
          />
        </div>
        <button className="w-full bg-black text-white text-xs font-light py-2 rounded-md">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
