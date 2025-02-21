import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-black text-lg font-semibold mb-4">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-600 text-sm">Total Income</p>
            <p className="text-black text-md font-semibold">5,000</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-600 text-sm">Total Expenses</p>
            <p className="text-black text-md font-semibold">3,200</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-600 text-sm">Balance</p>
            <p className="text-black text-md font-semibold">1,800</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-black text-md font-semibold mb-2">Recent Transactions</h2>
          <div className="overflow-auto max-h-60">
            <table className="w-full text-left text-gray-700 text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Date</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Feb 20, 2025</td>
                  <td className="p-2">Groceries</td>
                  <td className="p-2">150</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Feb 19, 2025</td>
                  <td className="p-2">Salary</td>
                  <td className="p-2">2,500</td>
                </tr>
                <tr>
                  <td className="p-2">Feb 18, 2025</td>
                  <td className="p-2">Rent</td>
                  <td className="p-2">1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
