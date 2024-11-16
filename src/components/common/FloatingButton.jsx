import React from 'react';

const FloatingButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:shadow-xl"
    >
      +
    </button>
  );
};

export default FloatingButton;