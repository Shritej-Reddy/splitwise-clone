export const mockGroups = [
  {
    id: "1",
    name: "Vacation Trip",
    members: ["Alice", "Bob", "Charlie"],
    expenses: [
      { id: "e1", description: "Hotel", amount: 300, paidBy: "Alice", split: { Alice: 100, Bob: 100, Charlie: 100 } },
      { id: "e2", description: "Dinner", amount: 90, paidBy: "Bob", split: { Alice: 30, Bob: 30, Charlie: 30 } },
    ],
  },
  {
    id: "2",
    name: "Office Lunch",
    members: ["Alice", "David"],
    expenses: [
      { id: "e3", description: "Pizza", amount: 40, paidBy: "David", split: { Alice: 20, David: 20 } },
    ],
  },
];

export const mockFriends = [
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