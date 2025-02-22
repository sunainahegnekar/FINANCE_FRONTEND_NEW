import React, { useState } from "react";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
    type: "expense",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Added:", formData);
    setFormData({ amount: "", category: "", date: "", description: "", type: "expense" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-500">
      <div className="max-w-lg w-full bg-[#D8D9DA] shadow-2xl p-6 rounded-lg">
        <h2 className="text-black text-sm font-light mb-4">Add New Transaction</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-gray-700 text-xs font-light block mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm p-2 text-sm"
            />
          </div>
          <div className="mb-3">
            <label className="text-gray-700 text-xs font-light block mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm p-2 text-sm"
            />
          </div>
          <div className="mb-3">
            <label className="text-gray-700 text-xs font-light block mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm p-2 text-sm"
            />
          </div>
          <div className="mb-3">
            <label className="text-gray-700 text-xs font-light block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-sm p-2 text-sm"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="text-gray-700 text-xs font-light block mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-sm p-2 text-sm"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white text-sm font-light py-2 rounded-sm">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
