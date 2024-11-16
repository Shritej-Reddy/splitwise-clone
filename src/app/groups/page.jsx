"use client";

import React, { useState } from "react";
import GroupList from "@/components/tabs/GroupList";
import AddExpenseModal from "@/components/common/AddExpenseModal";
import FloatingButton from "@/components/common/FloatingButton";

const GroupsSummary = ({ groups }) => {
  const totalBalance = groups.reduce(
    (sum, group) => sum + group.expenses.reduce((gSum, exp) => gSum + exp.amount, 0),
    0
  );

  return (
    <div className="p-4 bg-primary text-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">Groups Summary</h3>
      <p>Total Balance: ${totalBalance}</p>
    </div>
  );
};

export default function GroupsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const mockGroups = [
    {
      id: "1",
      name: "Vacation Trip",
      members: ["Alice", "Bob", "Charlie"],
      expenses: [
        { id: "e1", description: "Hotel", amount: 300, paidBy: "Alice" },
        { id: "e2", description: "Dinner", amount: 90, paidBy: "Bob" },
      ],
    },
    {
      id: "2",
      name: "Office Lunch",
      members: ["Alice", "David"],
      expenses: [{ id: "e3", description: "Pizza", amount: 40, paidBy: "David" }],
    },
  ];

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, groupId: "1" }]); // Mocking group ID for now
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Groups</h2>
      {/* Add Groups Summary */}
      <GroupsSummary groups={mockGroups} />
      <GroupList expenses={expenses} />
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}