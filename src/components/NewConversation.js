import React, { useRef, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversation({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevIds) => {
      if (prevIds.includes(contactId)) {
        return prevIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevIds, contactId];
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create New Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Form.Group></Form.Group>
          <Button>Submit</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
