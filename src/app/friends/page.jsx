"use client";

import React, { useState } from "react";
import FriendList from "@/components/tabs/FriendList";
import AddExpenseModal from "@/components/common/AddExpenseModal";
import FloatingButton from "@/components/common/FloatingButton";

const FriendsSummary = ({ friends }) => {
  const totalOwed = friends
    .filter((f) => f.balance < 0)
    .reduce((sum, f) => sum + Math.abs(f.balance), 0);

  const totalOwedToYou = friends
    .filter((f) => f.balance > 0)
    .reduce((sum, f) => sum + f.balance, 0);

  return (
    <div className="p-4 bg-primary text-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">Friends Summary</h3>
      <p>You Owe: ${totalOwed}</p>
      <p>Owed to You: ${totalOwedToYou}</p>
    </div>
  );
};

export default function FriendsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const mockFriends = [
    {
      id: "1",
      name: "Bob",
      balance: -50, // You owe Bob
      transactions: [
        { id: "t1", description: "Dinner", amount: 30, paidBy: "Bob" },
        { id: "t2", description: "Cab", amount: 20, paidBy: "Bob" },
      ],
    },
    {
      id: "2",
      name: "Charlie",
      balance: 70, // Charlie owes you
      transactions: [
        { id: "t3", description: "Hotel", amount: 100, paidBy: "You" },
        { id: "t4", description: "Drinks", amount: 30, paidBy: "Charlie" },
      ],
    },
  ];

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, friendId: "1" }]); // Mocking friend ID for now
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Friends</h2>
      {/* Add Friends Summary */}
      <FriendsSummary friends={mockFriends} />
      <FriendList expenses={expenses} />
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}