import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default function NewConversation({ closeModal }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Modal.Header closeButton>Create New Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group></Form.Group>
          <Button>Submit</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
