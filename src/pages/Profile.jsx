import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-5xl flex flex-row gap-8">
        {/* Profile Section */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-4">
            <span className="text-sm">Avatar</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-600">johndoe@example.com</p>
          <p className="text-sm text-gray-600">Joined: January 1, 2024</p>
        </div>

        {/* Expense Overview Section */}
        <div className="w-2/3 flex flex-col gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-900">Total Expenses This Month</h3>
            <p className="text-xl font-semibold text-gray-800">$1200</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-900">Expense Breakdown by Category</h3>
            <ul className="grid grid-cols-2 gap-4 mt-2">
              <li className="text-sm text-gray-600">Food: $400</li>
              <li className="text-sm text-gray-600">Transport: $300</li>
              <li className="text-sm text-gray-600">Shopping: $250</li>
              <li className="text-sm text-gray-600">Bills: $250</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-900">Recent Transactions</h3>
            <ul className="mt-2">
              <li className="text-sm text-gray-600">Groceries - $50</li>
              <li className="text-sm text-gray-600">Gas - $40</li>
              <li className="text-sm text-gray-600">Restaurant - $30</li>
            </ul>
          </div>

          <button className="bg-gray-800 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-900 transition duration-200 w-full">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
