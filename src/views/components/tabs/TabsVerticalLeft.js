// ** React Imports
import { useState } from 'react'
import Layout from '../Product list/Layout/Layout'
// ** Reactstrap Imports
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap'
import CardsLayout from '../Product list/Layout/CardsLayout'
import Stocktakes from '../Stocktakes/Stocktakes'
import StockOrders from '../Stock-orders/StockOrders'
import Suppliers from '../Suppliers/Suppliers'

const TabsVerticalLeft = () => {
  // ** State
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-left'>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Product list
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
           Inventory
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
           Stocktakes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '5'}
            onClick={() => {
              toggle('5')
            }}
          >
           Stock orders
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '6'}
            onClick={() => {
              toggle('6')
            }}
          >
           Suppliers
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
          <div>
            < Layout />
            <CardsLayout />
             
          </div>
        </TabPane>
        <TabPane tabId='3'>
             
        </TabPane>
        <TabPane tabId='4'>
          < Stocktakes />
        </TabPane>
        <TabPane tabId='5'>
          <StockOrders />
        </TabPane>
        <TabPane tabId='6'>
         <Suppliers />
        </TabPane>
      </TabContent>
    </div>
  )
}
export default TabsVerticalLeft
