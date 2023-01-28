import React, { useState } from 'react'
import "../mycss3/Permissions.css"
import { Table, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Permissions = () => {
  //BOOKINGS & CLIENTS
  const [accessOwnCalendar, setAccessOwnCalendar] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [accessOtherStaffCalendars, setAccessOtherStaffCalendars] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [canBookAppointments, setCanBookAppointments] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [home, setHome] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [clients, setClients] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [canSeeClientContactInfo, setCanSeeClientContactInfo] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [canDownloadClients, setCanDownloadClients] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])
  const [messages, setMessages] = useState(["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"])

  const accessOwnCalendarFun = (e) => {
      if (accessOwnCalendar.includes(e.target.value)) {
        setAccessOwnCalendar(accessOwnCalendar.filter((level) => level !== e.target.value))
     } else {
      setAccessOwnCalendar([...accessOwnCalendar, e.target.value])
     }
  }
  
  const accessOtherStaffCalendarsFun = (e) => {
      if (accessOtherStaffCalendars.includes(e.target.value)) {
        setAccessOtherStaffCalendars(accessOtherStaffCalendars.filter((level) => level !== e.target.value))
     } else {
      setAccessOtherStaffCalendars([...accessOtherStaffCalendars, e.target.value])
     }
  }
  
  const canBookAppointmentsFun = (e) => {
      if (canBookAppointments.includes(e.target.value)) {
        setCanBookAppointments(canBookAppointments.filter((level) => level !== e.target.value))
     } else {
      setCanBookAppointments([...canBookAppointments, e.target.value])
     }
  }

  const homeFun = (e) => {
      if (home.includes(e.target.value)) {
        setHome(home.filter((level) => level !== e.target.value))
     } else {
      setHome([...home, e.target.value])
     }
  }

  const clientsFun = (e) => {
      if (clients.includes(e.target.value)) {
        setClients(clients.filter((level) => level !== e.target.value))
     } else {
      setClients([...clients, e.target.value])
     }
  }

  const canSeeClientContactInfoFun = (e) => {
      if (canSeeClientContactInfo.includes(e.target.value)) {
        setCanSeeClientContactInfo(canSeeClientContactInfo.filter((level) => level !== e.target.value))
     } else {
      setCanSeeClientContactInfo([...canSeeClientContactInfo, e.target.value])
     }
  }

  const canDownloadClientsFun = (e) => {
      if (canDownloadClients.includes(e.target.value)) {
        setCanDownloadClients(canDownloadClients.filter((level) => level !== e.target.value))
     } else {
      setCanDownloadClients([...canDownloadClients, e.target.value])
     }
  }

  const messagesFun = (e) => {
      if (messages.includes(e.target.value)) {
        setMessages(messages.filter((level) => level !== e.target.value))
     } else {
      setMessages([...messages, e.target.value])
     }
  }

  const showAccessOwnCalendar = () => {
    console.log({AccessOwnCalendar:accessOwnCalendar})
  }
  
  const showAccessOtherStaffCalendars = () => {
    console.log({AccessOtherStaffCalendars:accessOtherStaffCalendars})
  }

  const showCanBookAppointments = () => {
    console.log({CanBookAppointments:canBookAppointments})
  }

  const showHome = () => {
    console.log({Home:home})
  }

  const showClients = () => {
    console.log({Clients:clients})
  }

  const showCanSeeClientContactInfo = () => {
    console.log({CanSeeClientContactInfo:canSeeClientContactInfo})
  }

  const showCanDownloadClients = () => {
    console.log({CanDownloadClients:canDownloadClients})
  }

  const showMessages = () => {
    console.log({Messages:messages})
  }
  return (
    <div className='permission-container-x1a'>
        <div className='mb-1'>
            <span className='text-x1a'>Settings</span>
            <span className='text-x1c' style={{marginLeft:'8px'}}>Permissions</span>
        </div>
        <div className='text-x1b mb-3'>Permissions</div>
        <div className="permission-body-x1a">
            <div className='text-x1a mb-2'>Setup which sections are accesible to each user permission level.  All logged in staff can access the calendar, and
owner accounts have full system access. </div>
<div className="table-one-x1a">
<div className="table-first-column-x1a">
    <div>BOOKINGS & CLIENTS</div>
    <div onClick={showAccessOwnCalendar}>Access own calendar</div>
    <div onClick={showAccessOtherStaffCalendars}>Access other staff calendars</div>
    <div onClick={showCanBookAppointments}>Can book appointments</div>
    <div onClick={showHome}>Home</div>
    <div onClick={showClients}>Clients</div>
    <div  onClick={showCanSeeClientContactInfo}>Can see client contact info</div>
    <div onClick={showCanDownloadClients}>Can download clients</div>
    <div onClick={showMessages}>Messages</div>
</div>
<div className="table-wrapper-x1a">
<Table className='table-x1a'>
      <tbody>
        <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div htmlFor='basic_a1' className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'BASIC')} onChange={accessOwnCalendarFun} value='BASIC' type='checkbox' id='basic_a1'/>
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'LOW')} onChange={accessOwnCalendarFun} value='LOW' type='checkbox' id='low_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'MEDIUM')} onChange={accessOwnCalendarFun} value='MEDIUM' type='checkbox' id='medium_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'HIGH')} onChange={accessOwnCalendarFun} value='HIGH' type='checkbox' id='high_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'OWNER')} onChange={accessOwnCalendarFun} value='OWNER' type='checkbox' id='owner_a1'/>
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={accessOtherStaffCalendars.some((level) => level === 'BASIC')} onChange={accessOtherStaffCalendarsFun} type='checkbox' id='primary-checkboxb1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={accessOtherStaffCalendars.some((level) => level === 'LOW')} onChange={accessOtherStaffCalendarsFun} type='checkbox' id='primary-checkboxb2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={accessOtherStaffCalendars.some((level) => level === 'MEDIUM')} onChange={accessOtherStaffCalendarsFun} type='checkbox' id='primary-checkboxb3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={accessOtherStaffCalendars.some((level) => level === 'HIGH')} onChange={accessOtherStaffCalendarsFun} type='checkbox' id='primary-checkboxb4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={accessOtherStaffCalendars.some((level) => level === 'OWNER')} onChange={accessOtherStaffCalendarsFun} type='checkbox' id='primary-checkboxb5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canBookAppointments.some((level) => level === 'BASIC')} onChange={canBookAppointmentsFun} type='checkbox' id='primary-checkboxc1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canBookAppointments.some((level) => level === 'LOW')} onChange={canBookAppointmentsFun} type='checkbox' id='primary-checkboxc2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canBookAppointments.some((level) => level === 'MEDIUM')} onChange={canBookAppointmentsFun} type='checkbox' id='primary-checkboxc3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canBookAppointments.some((level) => level === 'HIGH')} onChange={canBookAppointmentsFun} type='checkbox' id='primary-checkboxc4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canBookAppointments.some((level) => level === 'OWNER')} onChange={canBookAppointmentsFun} type='checkbox' id='primary-checkboxc5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={home.some((level) => level === 'BASIC')} onChange={homeFun} type='checkbox' id='primary-checkboxd1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={home.some((level) => level === 'LOW')} onChange={homeFun} type='checkbox' id='primary-checkboxd2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={home.some((level) => level === 'MEDIUM')} onChange={homeFun} type='checkbox' id='primary-checkboxd3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={home.some((level) => level === 'HIGH')} onChange={homeFun} type='checkbox' id='primary-checkboxd4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={home.some((level) => level === 'OWNER')} onChange={homeFun} type='checkbox' id='primary-checkboxd5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={clients.some((level) => level === 'BASIC')} onChange={clientsFun} type='checkbox' id='primary-checkboxe1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={clients.some((level) => level === 'LOW')} onChange={clientsFun} type='checkbox' id='primary-checkboxe2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={clients.some((level) => level === 'MEDIUM')} onChange={clientsFun} type='checkbox' id='primary-checkboxe3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={clients.some((level) => level === 'HIGH')} onChange={clientsFun} type='checkbox' id='primary-checkboxe4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={clients.some((level) => level === 'OWNER')} onChange={clientsFun} type='checkbox' id='primary-checkboxe5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canSeeClientContactInfo.some((level) => level === 'BASIC')} onChange={canSeeClientContactInfoFun} type='checkbox' id='primary-checkboxf1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canSeeClientContactInfo.some((level) => level === 'LOW')} onChange={canSeeClientContactInfoFun} type='checkbox' id='primary-checkboxf2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canSeeClientContactInfo.some((level) => level === 'MEDIUM')} onChange={canSeeClientContactInfoFun} type='checkbox' id='primary-checkboxf3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canSeeClientContactInfo.some((level) => level === 'HIGH')} onChange={canSeeClientContactInfoFun} type='checkbox' id='primary-checkboxf4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canSeeClientContactInfo.some((level) => level === 'OWNER')} onChange={canSeeClientContactInfoFun} type='checkbox' id='primary-checkboxf5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canDownloadClients.some((level) => level === 'BASIC')} onChange={canDownloadClientsFun} type='checkbox' id='primary-checkboxg1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canDownloadClients.some((level) => level === 'LOW')} onChange={canDownloadClientsFun} type='checkbox' id='primary-checkboxg2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canDownloadClients.some((level) => level === 'MEDIUM')} onChange={canDownloadClientsFun} type='checkbox' id='primary-checkboxg3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canDownloadClients.some((level) => level === 'HIGH')} onChange={canDownloadClientsFun} type='checkbox' id='primary-checkboxg4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canDownloadClients.some((level) => level === 'OWNER')} onChange={canDownloadClientsFun} type='checkbox' id='primary-checkboxg5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={messages.some((level) => level === 'BASIC')} onChange={messagesFun} type='checkbox' id='primary-checkboxh1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={messages.some((level) => level === 'LOW')} onChange={messagesFun} type='checkbox' id='primary-checkboxh2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={messages.some((level) => level === 'MEDIUM')} onChange={messagesFun} type='checkbox' id='primary-checkboxh3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={messages.some((level) => level === 'HIGH')} onChange={messagesFun} type='checkbox' id='primary-checkboxh4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={messages.some((level) => level === 'OWNER')} onChange={messagesFun} type='checkbox' id='primary-checkboxh5'  />
          </div></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>SERVICES</div>
        <div>Services</div>
        <div>Memberships</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
<div className="table-first-column-x1a">
    <div>SALES</div>
    <div>Can check out sales</div>
    <div>Can edit prices at checkout</div>
    <div>Can void invoices</div>
    <div>Daily sales</div>
    <div>Appointments</div>
    <div>Invoices</div>
    <div>Vouchers</div>
    <div>Memberships</div>
    <div>Product orders</div>
</div>
<div className="table-wrapper-x1a">
<Table className='table-x1a'>
      <tbody>
        <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <div className="table-one-x1a">
<div className="table-first-column-x1a">
    <div>STAFF</div>
    <div>Working hours</div>
    <div>Closed dates</div>
    <div>Staff members</div>
    <div>Permission levels</div>
    <div>Gets notifications about tips</div>
    <div>Appointment review reply</div>
</div>
<div className="table-wrapper-x1a">
<Table className='table-x1a'>
      <tbody>
        <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>INVENTORY</div>
        <div>Products</div>
        <div>Import products in bulk</div>
        <div>Perform bulk operations</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>REPORTS</div>
        <div>All reports</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
<div className="table-first-column-x1a">
    <div>SETUP</div>
    <div>Account setup</div>
    <div>Point of sale</div>
    <div>Client setting</div>
    <div>Online booking</div>
    <div>Wallet and card processing</div>
    <div>Marketing</div>
    <div>Online store</div>
</div>
<div className="table-wrapper-x1a">
<Table className='table-x1a'>
      <tbody>
        <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>VOUCHERS</div>
        <div>View voucher list</div>
        <div>Manage vouchers</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>CONSULTATION FORMS</div>
        <div>Manage forms</div>
        <div>View client responses</div>
        <div>Complete forms</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
    <div className="table-first-column-x1a">
        <div>NOTES</div>
        <div>Veiw notes</div>
        <div>Manage own notes</div>
        <div>Manage all notes</div>
    </div>
    <div className="table-wrapper-x1a">
        <Table className="table-x1a">
            <tbody>
            <tr className="tr-x1a">
          <th>BASIC</th>
          <th>LOW</th>
          <th>MEDIUM</th>
          <th>HIGH</th>
          <th>OWNER</th>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td>
            <div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input type='checkbox' id='primary-checkbox'  />
          </div></td>
        </tr>
            </tbody>
        </Table>
    </div>
    </div>
    <div className="table-one-x1a">
        <NavLink to="/businessSettings"><Button color="dark" className="fs-3 fw-bolder">Save Chages</Button></NavLink>
    </div>
        </div>
    </div>
  )
}

export default Permissions
