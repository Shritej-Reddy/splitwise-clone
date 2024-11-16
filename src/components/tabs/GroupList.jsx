"use client";

import React, { useState, useEffect } from "react";
import { mockGroups } from "@/data/mockData";

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Simulate fetching groups from mock data
    setGroups(mockGroups);
  }, []);

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div
          key={group.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-gray-800">{group.name}</h3>
          <p className="text-gray-600">Members: {group.members.join(", ")}</p>
          <div className="mt-2">
            <h4 className="text-md font-semibold text-gray-700">Expenses:</h4>
            {group.expenses.map((expense) => (
              <div key={expense.id} className="text-sm text-gray-600">
                {expense.description} - ${expense.amount} (Paid by {expense.paidBy})
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;