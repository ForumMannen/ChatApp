import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const userContextValue: UserContextType = {
    username,
    setUsername,
    loggedIn,
    setLoggedIn,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
