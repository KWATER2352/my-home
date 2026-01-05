import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function CA_TabsExample({ overviewContent, technicalContent, moreContent, yayContent }) {
  const [activeKey, setActiveKey] = useState('overview');

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <Nav variant="tabs" className="project-tabs">
        <Nav.Item>
          <Nav.Link eventKey="overview">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="technical">Querying</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="neural">Small Neural Network</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="trees">Decision Trees</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className="project-tab-content">
        <Tab.Pane eventKey="overview">
          {overviewContent}
        </Tab.Pane>
        <Tab.Pane eventKey="technical">
          {technicalContent}
        </Tab.Pane>
        <Tab.Pane eventKey="neural">
          {moreContent}
        </Tab.Pane>
        <Tab.Pane eventKey="trees">
          {yayContent}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default CA_TabsExample;