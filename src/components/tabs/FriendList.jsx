"use client";

import React, { useState, useEffect } from "react";
import { mockFriends } from "@/data/mockData";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Simulate fetching friends from mock data
    setFriends(mockFriends);
  }, []);

  return (
    <div className="space-y-4">
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
          <p
            className={`text-sm ${
              friend.balance < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {friend.balance < 0
              ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
              : `${friend.name} owes you $${friend.balance}`
            }
          </p>
          <div className="mt-2">
            <h4 className="text-md font-semibold text-gray-700">Transactions:</h4>
            {friend.transactions.map((transaction) => (
              <div key={transaction.id} className="text-sm text-gray-600">
                {transaction.description} - ${transaction.amount} (Paid by {transaction.paidBy})
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;