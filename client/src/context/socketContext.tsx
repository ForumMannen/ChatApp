import React, { createContext, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useUserContext } from "./UserContext";

interface SocketContextType extends Socket {}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export function useSocketContext(): SocketContextType {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext must be used within a SocketProvider");
  }
  return context;
}

interface SocketProviderProps {
  children: React.ReactNode;
}

export function SocketProvider({ children }: SocketProviderProps): JSX.Element {
  const { loggedIn } = useUserContext();
  const socket: SocketContextType = io("http://localhost:3000", {
    autoConnect: false,
  });

  useEffect(() => {
    if (loggedIn) {
      socket.connect();
    }
    return () => {
      socket.disconnect();
    };
  }, [loggedIn]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
