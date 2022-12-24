import React, {useState} from 'react'
import X from '../../../images/ClientList/x.png'
import star from '../../../images/ClientList/starH.png'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import Row from 'react-bootstrap/Row'
// import Tab from 'react-bootstrap/Tab'
// import Invoice from './Invoice'
// import ClientFeed from './ClientFeed'
// import ClientsDetails from './ClientsDetails'
// import UserApoinmet from './UserApoinmet'
// import UserDeposit from './UserDeposit'
// import UserPayment from './UserPayment'
// import UserMembership from './UserMembership'
// import UserFrom from './UserFrom'
// import UserProducts from './UserProducts'
// import UserReviews from './UserReviews'
// import UserFiles from './UserFiles'


const User = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <button className='border-0'><img src={X} alt="" /></button>
                    <div className='mt-3 ms-1'>
                        <h6 className='fs-6'>0</h6>
                        <p className='fs-6'>Total sales (INR)</p>
                        <hr className='mt-3 me-3' />
                    </div>
                    <div className='mt-3 ms-1'>
                        <h6 className='fs-6'>1</h6>
                        <p className='fs-6'>Total visits</p>
                        
                    </div>
                    <div className='mt-3 ms-1'>
                        <h6 className='fs-6'>0</h6>
                        <p className='fs-6'>Completed</p>
                        
                    </div>
                    <div className='mt-3 ms-1'>
                        <h6 className='fs-6'>0</h6>
                        <p className='fs-6'>Cancelled</p>
                        
                    </div>
                    <div className='mt-3 ms-1'>
                        <h6 className='fs-6'>0</h6>
                        <p className='fs-6'>No-show</p>
                        
                    </div>
                    <div className='mt-3 ms-1'>
                        <div >
                            <img   src={star} alt="" /> <span className='fs-4 pb-4'>-</span>
                            
                        </div>
                        <p className='fs-6'>Reviews (0)</p>
                        
                    </div>
                </div>
                <div className="col-lg-10">
                <div className='nav-vertical'>
      <Nav tabs className='nav-left'>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Client feed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Tab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Tab 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake.
            Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton
            candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly
            chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Pudding
            caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Icing croissant powder jelly bonbon cake marzipan fruitcake. Tootsie roll marzipan tart marshmallow pastry
            cupcake chupa chups cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée jujubes croissant lemon
            drops cotton candy. Carrot cake candy canes powder donut toffee cookie.
          </p>
        </TabPane>
      </TabContent>
    </div>
              
                {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
        <Avatar style={{width:"160px", height:'160px', fontSize:'56px' }} className="mx-auto mt-5 ">J</Avatar>
          <Nav variant="tabs" className="flex-column">
          <p className='text-center'><span className='fs-3 fw-bolder'>John Doe</span> <br />
           john@example.com</p>
           <button type="button" className='border-0 mx-auto text-white mb-3 bg-secondary' style={{width:'122px', height:'30px'}}>NEW CLIENT</button>
            <button className='my-2 mx-2 py-2 border border-1 rounded'>Actions</button>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold'  eventKey="first">Client feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold'  eventKey="second">Client details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="third">Appointments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="forth">Deposits</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="fifth">Payment methods</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="sixth">Memberships</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="seventh">Forms</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="eighth">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="ninth">Invoices</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="tenth">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-dark text-center fs-5 fw-bold' eventKey="eleventh">Files</Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <ClientFeed/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ClientsDetails/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <UserApoinmet/>
            </Tab.Pane>
            <Tab.Pane eventKey="forth">
              <UserDeposit/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <UserPayment/>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <UserMembership/>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
              <UserFrom/>
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
              <UserProducts/>
            </Tab.Pane>
            <Tab.Pane eventKey="ninth">
            <Invoice/>
            </Tab.Pane>
            <Tab.Pane eventKey="tenth">
             <UserReviews/>
            </Tab.Pane>
            <Tab.Pane eventKey="eleventh">
              <UserFiles/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container> */}

                </div>
            </div>
            
        </div>
    )
}

export default User