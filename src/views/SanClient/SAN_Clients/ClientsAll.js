import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import AutomatedMessages from './AutomatedMessages'
import ClientList from './ClientList'
import Paperless from './Paperless'
import Notification from './Notification'
import Reviews from './Reviews'

const ClientsAll = () => {
    const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
    return (<div className='nav-vertical'>
    <Nav tabs className='nav-left'>
      <NavItem>
        <NavLink
          active={active === '1'}
          onClick={() => {
            toggle('1')
          }}
        >
          Clients
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          active={active === '2'}
          onClick={() => {
            toggle('2')
          }}
        >
          Clients list
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          active={active === '3'}
          onClick={() => {
            toggle('3')
          }}
        >
          Reviews
        </NavLink>
      </NavItem>
      <NavItem>
        
      </NavItem>
      <NavItem>
        <NavLink
          active={active === '4'}
          onClick={() => {
            toggle('4')
          }}
        >
          Automated messages
        </NavLink>
      </NavItem>
      
      <NavItem>
        <NavLink
          active={active === '5'}
          onClick={() => {
            toggle('5')
          }}
        >
          Forms
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          active={active === '6'}
          onClick={() => {
            toggle('6')
          }}
        >
         Notifications
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={active}>
      <TabPane tabId='1'>
      <ClientList/>
      </TabPane>
      <TabPane tabId='2'>
      <ClientList/>
      </TabPane>
      <TabPane tabId='3'>
      <Reviews/>
      </TabPane>
      <TabPane tabId='4'>
      <AutomatedMessages/>
      </TabPane>
      <TabPane tabId='5'>
      <Paperless/>
      </TabPane>
      <TabPane tabId='6'>
      <Notification/>
      </TabPane>
    </TabContent>
  </div>
    //     <Tab.Container id="left-tabs-example" defaultActiveKey="second">
    //   <Row>
    //     <Col sm={2}>
    //       <Nav variant="tabs" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="first">Clients</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="second">Clients list</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="third">Reviews</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="forth">Automated messages</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="fifth">Forms</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link className='text-dark fs-5 fw-bold' eventKey="sixth">Notifications</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Col>
    //     <Col sm={9}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first">
    //           <h1>Client</h1>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="second">
    //          <ClientList/>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="third">
    //          <Reviews/>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="forth">
    //          <AutomatedMessages/>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="fifth">
    //          <Froms/>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="sixth">
    //          <Notification/>
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>
    )
}

export default ClientsAll