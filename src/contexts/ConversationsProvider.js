import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }
  // https://youtu.be/tBr-PybP_9c?t=2387
  return (
    <ConversationsContext.Provider
      value={{ conversations, createConversation }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}
