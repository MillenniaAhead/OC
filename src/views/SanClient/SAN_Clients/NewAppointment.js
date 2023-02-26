import React from 'react'
import Round from '../../../images/snr/Group 134.png'
import clock from '../../../images/snr/clock.jpg'
import mic from '../../../images/snr/mice.jpg'
import calender from '../../../images/snr/calendar.jpg'
import X from '../../../images/ClientList/x.png'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle } from 'reactstrap'

const SANService = () => {
    return (
        <div>
       <NavLink to='/'><img src={X} alt="" /></NavLink>

       <img className='rounded mx-auto d-block' src={Round} alt="" />
       <h2  className='text-center mt-3 mb-4'>Your automated message is set up</h2>
       
       
       <Card   className='mx-auto' style={{ width: '720px' }}>
      <CardBody>
        <CardTitle>New appointment message details</CardTitle>
       
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={clock} alt="" /> Automatically sends to all clients when their new appointment is
  <br /> <span className='mx-5'>booked.</span></p>
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={mic} alt="" /> Sent by email and app notifications</p>
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={calender} alt="" /> Clients who book their own appointments online may still receive <br />
        <span className='ms-5'>messages.<span style={{color:'#1BB70B'}}>Learn more</span> </span></p>
        
    
      </CardBody>
    </Card>
       
      
        </div>
    )
}

export default SANService