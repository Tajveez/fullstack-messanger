import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function NewContact() {
  const idRef = useRef();
  const nameRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Modal.Header closeButton>Create New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>id</Form.Label>
            <Form.Control type="text" ref={idRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} />
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
