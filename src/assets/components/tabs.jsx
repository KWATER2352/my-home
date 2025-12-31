import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function TabsExample({ overviewContent, technicalContent, requirementsContent }) {
  const [activeKey, setActiveKey] = useState('overview');

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <Nav variant="tabs" className="project-tabs">
        <Nav.Item>
          <Nav.Link eventKey="overview">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="technical">Design</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="requirements">Requirements</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className="project-tab-content">
        <Tab.Pane eventKey="overview">
          {overviewContent}
        </Tab.Pane>
        <Tab.Pane eventKey="technical">
          {technicalContent}
        </Tab.Pane>
        <Tab.Pane eventKey="requirements">
          {requirementsContent}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default TabsExample;