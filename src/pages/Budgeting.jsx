import React, { useState } from "react";

const Budgeting = () => {
  const [budgets, setBudgets] = useState([
    { category: "Food", limit: 5000, spent: 3000 },
    { category: "Transport", limit: 2000, spent: 1500 },
    { category: "Entertainment", limit: 3000, spent: 1000 },
  ]);

  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-300 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-2xl max-w-4xl w-full">
        <h2 className="text-black text-sm font-semibold mb-4">Budget Management</h2>
        <table className="w-full text-sm text-gray-700 border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300 text-left">Category</th>
              <th className="p-2 border border-gray-300 text-left">Budget Limit</th>
              <th className="p-2 border border-gray-300 text-left">Amount Spent</th>
              <th className="p-2 border border-gray-300 text-left">Remaining</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="p-2 border border-gray-300">{budget.category}</td>
                <td className="p-2 border border-gray-300">{budget.limit}</td>
                <td className="p-2 border border-gray-300">{budget.spent}</td>
                <td className="p-2 border border-gray-300">{budget.limit - budget.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button className="bg-gray-800 text-white px-4 py-2 text-sm rounded">
            Add Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
