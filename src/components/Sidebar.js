import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContact from "./NewContact";
import NewConversation from "./NewConversation";

import Settings from "./Settings";
export default function Sidebar({ id }) {
  const CONV_KEY = "conversations";
  const CONT_KEY = "contacts";
  const SETT_KEY = "settings";
  const [activeKey, setActiveKey] = useState(CONV_KEY);
  return (
    <div style={{ width: "350px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONV_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={SETT_KEY}>Settings</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONV_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONT_KEY}>
            <Contacts />
          </Tab.Pane>
          <Tab.Pane eventKey={SETT_KEY}>
            <Settings />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0">
          New {activeKey === "conversations" ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal>
        {activeKey === "conversations" ? <NewConversation /> : <NewContact />}
      </Modal>
    </div>
  );
}
