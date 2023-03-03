import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { Filter } from 'react-feather'
import {NavLink} from 'react-router-dom'
import SideMenu from './ReportsSideMenu'

const SanReport = () => {
  //For datepicker
  const [picker, setPicker] = useState(new Date())
  
  //For rechart 
  const data = [
     {
       name: '12 Dec',
       pv: 0
     },
     {
       name: '13 Dec',
       pv: 0
     },
     {
       name: '14 Dec',
       pv: 0
     },
     {
       name: '15 Dec',
       pv: 0
     },
     {
       name: '16 Dec',
       pv: 0
     },
     {
       name: '17 Dec',
       pv: 0
     },
     {
       name: '18 Dec',
       pv: 0
     },
     {
       name: '19 Dec',
       pv: 0
     }
   ]

   const CustomTooltip = ({ active, payload }) => {
     if (active && payload) {
       return (
         <div className='recharts-custom-tooltip'>
           <span>{`${payload[0].value}%`}</span>
         </div>
       )
     }
     return null
   }
    return (
        <div className='report-container'>
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
      <div id="dashboard-container">
            <div className='text-eee1'>Dashboard</div>
            <div className='text-fff1'>Track and manage your business stats here. <NavLink to='#'>Learn more</NavLink></div>
            <div className='d-flex my-top-xxx1'>
      <Flatpickr
        value={picker}
        id='range-picker'
        className='date-picker-aaa1'
        onChange={date => setPicker(date)}
        options={{
          mode: 'range',
          defaultDate: ['2020-02-01', '2020-02-15']
        }}
      />
      <button className="filter-deals filter-aaa1"><div className="d-flex justify-content-center align-items-center"><span className='text-ddd1'>Filter</span><Filter size={20}/>
      </div>
      </button>
      </div>
        <Row>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
              <div>
                <div className="text-aaa1">Total Appointments</div>
                <div className="text-bbb1">0</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Completed <span>0 (0%)</span></li>
                    <li>Not Completed <span>0 (0%)</span></li>
                    <li>Cancelled <span>0 (0%)</span></li>
                    <li>No-show <span>0 (0%)</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
            <div>
                <div className="text-aaa1">Online Appointments</div>
                <div className="text-bbb1">0 (0%)</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Completed <span>0 (0%)</span></li>
                    <li>Not Completed <span>0 (0%)</span></li>
                    <li>Cancelled <span>0 (0%)</span></li>
                    <li>No-show <span>0 (0%)</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
            <div>
                <div className="text-aaa1">Occupancy</div>
                <div className="text-bbb1">0%</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Working Hours <span>0min </span></li>
                    <li>Booked Hours <span>0min (0%)</span></li>
                    <li>Unbooked Hours <span>0min (0%)</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
            <div>
                <div className="text-aaa1">Total Sales</div>
                <div className="text-bbb1">₹0</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Services <span>₹0 (0%)</span></li>
                    <li>Products <span>₹0 (0%)</span></li>
                    <li>Shipping <span>₹0 (0%)</span></li>
                    <li>Late cancellation <span>₹0 (0%)</span></li>
                    <li>No-show fees <span>₹0 (0%)</span></li>
                    <li>Memberships <span>₹0 (0%)</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
            <div>
                <div className="text-aaa1">Average Sale</div>
                <div className="text-bbb1">₹0</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Sales Count <span>0</span></li>
                    <li>Av. Service Sale <span>₹0</span></li>
                    <li>Av. Product Sale <span>₹0</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col style={{padding:'8px'}} md='6' lg='4'>
          <Card className='h-100'>
            <CardBody className='card-body-aaa1 pb-0'>
            <div>
                <div className="text-aaa1">Client Retention (Sales)</div>
                <div className="text-bbb1">0%</div>
                <div className="text-ccc1">- 0% previous day</div>
                <ul className='p-0 mb-0'>
                    <li>Returning <span>₹0 (0%)</span></li>
                    <li>New <span>₹0 (0%)</span></li>
                    <li>Walk-In <span>₹0 (0%)</span></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div>
      <Card className='mt-1' style={{border:'1px solid #d9d9d9'}}>
      <CardBody>
      <div className='text-aaa1 mb-4'>Total appointments</div>
        <div className='recharts-wrapper'>
          <ResponsiveContainer width={'100%'} height={250}>
            <LineChart height={300} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke={'#1bb70b'} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
         <div className='text-ggg1 d-flex justify-content-center mt-1'><span className='me-1'>Total appointments</span><span>Online booking</span></div>
      </CardBody>
    </Card>
      <Card className='mt-1' style={{border:'1px solid #d9d9d9'}}>
      <CardBody>
        <div className='text-aaa1 mb-4'>Total sales</div>
        <div className='recharts-wrapper'>
          <ResponsiveContainer width={'100%'} height={250}>
            <LineChart height={300} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke={'#1bb70b'} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
         <div className='text-ggg1 d-flex justify-content-center mt-1'><span className='me-1'>Services</span><span>Products</span></div>
      </CardBody>
    </Card>
      </div>
        </div>
      </div>
    )
}

export default SanReport