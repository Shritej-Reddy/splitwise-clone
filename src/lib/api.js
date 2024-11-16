import { mockGroups, mockFriends } from '../data/mockData';

// Simulate API calls
export const getGroups = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockGroups), 500); // Simulates network delay
  });
};

export const getFriends = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockFriends), 500);
  });
};