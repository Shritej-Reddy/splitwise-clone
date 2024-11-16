import React, { useState } from 'react';
import FriendList from '../components/tabs/FriendList';
import AddExpenseModal from '../components/common/AddExpenseModal';
import FloatingButton from '../components/common/FloatingButton';

const FriendsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense, friendId: '1' }]); // Assuming friendId is '1' for now
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Friends</h2>
      <FriendList expenses={expenses} />
      
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
};

export default FriendsPage;