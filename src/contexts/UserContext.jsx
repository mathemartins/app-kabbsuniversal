import { createContext, useState } from "react";

export const UserContexts = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return (
    <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
  );
};
