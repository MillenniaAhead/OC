import React, { useState } from 'react'
import "../mycss3/Permissions.css"
import { Table, Input, Button, Alert } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Permissions = () => {
  //For alert
  const [visible1, setVisible1] = useState(false)
  
  //For BOOKINGS & CLIENTS
  const accessLevels = ["BASIC", "LOW", "MEDIUM", "HIGH", "OWNER"]

  const [accessOwnCalendar, setAccessOwnCalendar] = useState(accessLevels)
  const [accessOtherStaffCalendars, setAccessOtherStaffCalendars] = useState(accessLevels)
  const [canBookAppointments, setCanBookAppointments] = useState(accessLevels)
  const [Home, setHome] = useState(accessLevels)
  const [Clients, setClients] = useState(accessLevels)
  const [canSeeClientContactInfo, setCanSeeClientContactInfo] = useState(accessLevels)
  const [canDownloadClients, setCanDownloadClients] = useState(accessLevels)
  const [Messages, setMessages] = useState(accessLevels)

  const stateMapper = {
    accessOwnCalendar: setAccessOwnCalendar,
    accessOtherStaffCalendars: setAccessOtherStaffCalendars,
    canBookAppointments: setCanBookAppointments,
    Home: setHome,
    Clients: setClients,
    canSeeClientContactInfo: setCanSeeClientContactInfo,
    canDownloadClients: setCanDownloadClients,
    Messages: setMessages
  }

  // For collect data by user selection
  const CollectPermissionData = (stateName, e) => {
    const setState = stateMapper[stateName]
    if (setState) {
        setState((state) => {
        if (state.includes(e.target.value)) {
          return state.filter((level) => level !== e.target.value)
        } else {
          return [...state, e.target.value]
        }
      })
    }
  }

  // For send data to backend database
  const SubmitData = () => {
    axios.post("http://localhost:4000/api/permissions", { bookings_and_clients:[{ access_own_calendar:accessOwnCalendar, access_other_staff_calendars:accessOtherStaffCalendars, can_book_appointments:canBookAppointments, home:Home, clients:Clients, can_see_client_contact_info:canSeeClientContactInfo, can_download_clients:canDownloadClients, messages:Messages }]})
      .then(res => {
        console.log(res.data)
        setVisible1(true)
            setTimeout(() => {
              setVisible1(false)
            }, 3000)
              })
      .catch(err => console.log(err))
  }
  
  return (
    <div className='permission-container-x1a'>
      {/* for alert */}
      <div className="my-alert-comp my-alert-comp-2">
      <Alert color='danger' isOpen={visible1}>
        <div className='alert-body text-center'>
        Permissions added successfully
        </div>
      </Alert>
      </div>
        <div className='mb-1'>
            <span className='text-x1a'>Settings</span>
            <span className='text-x1c' style={{marginLeft:'8px'}}>Permissions</span>
        </div>
        <div className='text-x1b mb-3'>Permissions</div>
        <div className="permission-body-x1a">
            <div className='text-x1a mb-2'>Setup which sections are accesible to each user permission level.  All logged in staff can access the calendar, and
owner accounts have full system access. </div>
      {/* BOOKINGS & CLIENTS */}
    <div className="table-one-x1a">
<div className="table-first-column-x1a">
    <div>BOOKINGS & CLIENTS</div>
    <div>Access own calendar</div>
    <div>Access other staff calendars</div>
    <div>Can book appointments</div>
    <div>Home</div>
    <div>Clients</div>
    <div>Can see client contact info</div>
    <div>Can download clients</div>
    <div>Messages</div>
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
            <Input checked={accessOwnCalendar.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("accessOwnCalendar", e)} value='BASIC' type='checkbox' id='basic_a1'/>
          </div>
          </td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("accessOwnCalendar", e)} value='LOW' type='checkbox' id='low_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("accessOwnCalendar", e)} value='MEDIUM' type='checkbox' id='medium_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("accessOwnCalendar", e)} value='HIGH' type='checkbox' id='high_a1'/>
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input checked={accessOwnCalendar.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("accessOwnCalendar", e)} value='OWNER' type='checkbox' id='owner_a1'/>
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={accessOtherStaffCalendars.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("accessOtherStaffCalendars", e)} type='checkbox' id='primary-checkboxb1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={accessOtherStaffCalendars.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("accessOtherStaffCalendars", e)} type='checkbox' id='primary-checkboxb2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={accessOtherStaffCalendars.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("accessOtherStaffCalendars", e)} type='checkbox' id='primary-checkboxb3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={accessOtherStaffCalendars.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("accessOtherStaffCalendars", e)} type='checkbox' id='primary-checkboxb4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={accessOtherStaffCalendars.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("accessOtherStaffCalendars", e)} type='checkbox' id='primary-checkboxb5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canBookAppointments.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("canBookAppointments", e)} type='checkbox' id='primary-checkboxc1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canBookAppointments.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("canBookAppointments", e)} type='checkbox' id='primary-checkboxc2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canBookAppointments.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("canBookAppointments", e)} type='checkbox' id='primary-checkboxc3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canBookAppointments.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("canBookAppointments", e)} type='checkbox' id='primary-checkboxc4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canBookAppointments.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("canBookAppointments", e)} type='checkbox' id='primary-checkboxc5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={Home.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("Home", e)} type='checkbox' id='primary-checkboxd1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={Home.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("Home", e)} type='checkbox' id='primary-checkboxd2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={Home.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("Home", e)} type='checkbox' id='primary-checkboxd3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={Home.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("Home", e)} type='checkbox' id='primary-checkboxd4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={Home.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("Home", e)} type='checkbox' id='primary-checkboxd5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={Clients.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("Clients", e)} type='checkbox' id='primary-checkboxe1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={Clients.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("Clients", e)} type='checkbox' id='primary-checkboxe2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={Clients.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("Clients", e)} type='checkbox' id='primary-checkboxe3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={Clients.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("Clients", e)} type='checkbox' id='primary-checkboxe4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={Clients.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("Clients", e)} type='checkbox' id='primary-checkboxe5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canSeeClientContactInfo.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("canSeeClientContactInfo", e)} type='checkbox' id='primary-checkboxf1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canSeeClientContactInfo.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("canSeeClientContactInfo", e)} type='checkbox' id='primary-checkboxf2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canSeeClientContactInfo.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("canSeeClientContactInfo", e)} type='checkbox' id='primary-checkboxf3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canSeeClientContactInfo.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("canSeeClientContactInfo", e)} type='checkbox' id='primary-checkboxf4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canSeeClientContactInfo.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("canSeeClientContactInfo", e)} type='checkbox' id='primary-checkboxf5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={canDownloadClients.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("canDownloadClients", e)} type='checkbox' id='primary-checkboxg1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={canDownloadClients.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("canDownloadClients", e)} type='checkbox' id='primary-checkboxg2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={canDownloadClients.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("canDownloadClients", e)} type='checkbox' id='primary-checkboxg3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={canDownloadClients.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("canDownloadClients", e)} type='checkbox' id='primary-checkboxg4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={canDownloadClients.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("canDownloadClients", e)} type='checkbox' id='primary-checkboxg5'  />
          </div></td>
        </tr>
        <tr className="tr-x1a">
          <td><div className='form-check form-check-dark'>
            <Input value='BASIC' checked={Messages.some((level) => level === 'BASIC')} onChange={(e) => CollectPermissionData("Messages", e)} type='checkbox' id='primary-checkboxh1'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value="LOW" checked={Messages.some((level) => level === 'LOW')} onChange={(e) => CollectPermissionData("Messages", e)} type='checkbox' id='primary-checkboxh2'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='MEDIUM' checked={Messages.some((level) => level === 'MEDIUM')} onChange={(e) => CollectPermissionData("Messages", e)} type='checkbox' id='primary-checkboxh3'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='HIGH' checked={Messages.some((level) => level === 'HIGH')} onChange={(e) => CollectPermissionData("Messages", e)} type='checkbox' id='primary-checkboxh4'  />
          </div></td>
          <td><div className='form-check form-check-dark'>
            <Input value='OWNER' checked={Messages.some((level) => level === 'OWNER')} onChange={(e) => CollectPermissionData("Messages", e)} type='checkbox' id='primary-checkboxh5'  />
          </div></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    {/* SERVICES */}
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
    {/* SALES */}
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
    {/* STAFF */}
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
    {/* INVENTORY */}
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
    {/* REPORTS */}
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
    {/* SETUP */}
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
    {/* VOUCHERS */}
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
    {/* CONSULTATION FORMS */}
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
    {/* NOTES */}
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
        <NavLink to="#" onClick={SubmitData}><Button color="dark" className="fs-3 fw-bolder">Save Chages</Button></NavLink>
    </div>
        </div>
    </div>
  )
}

export default Permissions
