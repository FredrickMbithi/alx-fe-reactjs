import { createContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}