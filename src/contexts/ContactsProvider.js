import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ childern }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }
  // https://youtu.be/tBr-PybP_9c?t=2387
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {childern}
    </ContactsContext.Provider>
  );
}
