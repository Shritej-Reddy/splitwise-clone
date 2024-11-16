import React, { useState } from 'react';
import GroupList from '../components/tabs/GroupList';
import AddExpenseModal from '../components/common/AddExpenseModal';
import FloatingButton from '../components/common/FloatingButton';

const GroupsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense, groupId: '1' }]); // Assuming groupId is '1' for now
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Groups</h2>
      <GroupList expenses={expenses} />
      
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
};

export default GroupsPage;