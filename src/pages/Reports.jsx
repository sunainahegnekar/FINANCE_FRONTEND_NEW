import React from "react";

const Reports = () => {
  return (
    <div className="bg-white text-black p-6 mt-10 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Expense Reports</h2>
      
      {/* Filters Section */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <label className="text-sm font-light block mb-2">Select Date Range:</label>
        <input type="date" className="border p-2 text-sm rounded-md w-full mb-2" />
        <input type="date" className="border p-2 text-sm rounded-md w-full" />
      </div>
      
      {/* Summary Section */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="text-sm font-light">Total Income: <span className="font-medium">5,000</span></p>
        <p className="text-sm font-light">Total Expenses: <span className="font-medium">3,200</span></p>
        <p className="text-sm font-light">Balance: <span className="font-medium">1,800</span></p>
      </div>
      
      {/* Expense Breakdown Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 border">2025-02-20</td>
              <td className="p-2 border">Food</td>
              <td className="p-2 border">Lunch</td>
              <td className="p-2 border">12</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 border">2025-02-19</td>
              <td className="p-2 border">Transport</td>
              <td className="p-2 border">Bus Fare</td>
              <td className="p-2 border">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
