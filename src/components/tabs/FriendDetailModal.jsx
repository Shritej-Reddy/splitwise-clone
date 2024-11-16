import React from "react";

const FriendDetailModal = ({ friend, onClose }) => {
  if (!friend) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">{friend.name}</h2>
        <ul className="divide-y divide-gray-200">
          {friend.transactions.map((txn) => (
            <li key={txn.id} className="py-2">
              <p className="text-sm font-medium">{txn.name}</p>
              <p className="text-sm text-gray-600">
                {txn.amount < 0
                  ? `You paid $${Math.abs(txn.amount)}`
                  : `${friend.name} paid $${txn.amount}}`}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FriendDetailModal;
