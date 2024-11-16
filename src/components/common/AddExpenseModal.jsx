"use client";

import React, { useState } from "react";

const AddExpenseModal = ({ isOpen, onClose, onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("");
  const [splitType, setSplitType] = useState("equal");
  const [participants, setParticipants] = useState("");
  const [customAmounts, setCustomAmounts] = useState({}); // Track custom amounts

  if (!isOpen) return null;

  const handleCustomAmountChange = (participant, value) => {
    setCustomAmounts((prev) => ({
      ...prev,
      [participant]: parseFloat(value) || 0,
    }));
  };

  const handleAddExpense = () => {
    const participantList = participants.split(",").map((p) => p.trim());
  
    // Validate custom splits if applicable
    if (splitType === "custom") {
      const totalCustomAmount = Object.values(customAmounts).reduce((sum, val) => sum + val, 0);
      const roundedTotalCustomAmount = parseFloat(totalCustomAmount.toFixed(2)); // Round to 2 decimals
      const roundedAmount = parseFloat(amount).toFixed(2); // Round to 2 decimals
  
      if (roundedTotalCustomAmount !== parseFloat(roundedAmount)) {
        alert("Custom split amounts must add up to the total amount!");
        return;
      }
    }
  
    const expense = {
      description,
      amount: parseFloat(amount),
      payer,
      splitType,
      participants: participantList,
      customAmounts: splitType === "custom" ? customAmounts : {},
    };
  
    onAddExpense(expense);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Paid By</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Participants</label>
          <input
            type="text"
            placeholder="Enter participants, separated by commas"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Split Type</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={splitType}
            onChange={(e) => setSplitType(e.target.value)}
          >
            <option value="equal">Equal</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {splitType === "custom" && (
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-700 mb-2">Custom Amounts</h4>
            {participants.split(",").map((participant, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">{participant.trim()}</span>
                <input
                  type="number"
                  className="w-1/2 rounded-md border-gray-300 shadow-sm"
                  onChange={(e) => handleCustomAmountChange(participant.trim(), e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddExpense}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;