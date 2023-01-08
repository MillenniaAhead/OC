import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, File, Search, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const AppointmentsList = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div className='h-100 report-container'>
       <div className="side-menu-wrapper-aaa3">
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
      </div>
      <div className="side-menu-wrapper-aaa4">
        <NavLink to='/san-reports/reports'><ArrowLeft/></NavLink>
      </div>
        <div id='payment-summary-container' className='w-100'>
            <div>
                <div className='top-box-xxx2 w-100'>
                    <div>
                <div className='text-ccc3 mb-1'>Appointments</div>
                <div className='text-bbb3 mb-1'>View, filter and export appointments booked by your clients. <NavLink to='#'> Learn more</NavLink></div>
                </div>
                <div>
                <UncontrolledButtonDropdown>
              <DropdownToggle outline color='dark' size='lg' caret>
                Export
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                 PDf
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Excel
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  CSV
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            </div>
                </div>
                <div className='my-top-xxx1 my-top-xxx3'>
                <div className="search-field-aa5 text-bb5">
                <span className="search-icon-aa5 ps-1 pe-1"><Search size={20}/></span><input type="text" name="new-sale" id="" placeholder="Search by client, team member or service name"/>
            </div>
            <div className='d-flex my-top-xxx4'>
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
             </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="payment-summary-body-container d-flex flex-column align-items-center text-center" style={{width:'300px', overflow:'hidden'}}>
                <File size={100} />
                <div className='text-aaa35'>No results found</div>
                <div className='text-bbb35'>Try using different filter options to find
                  what you're looking for  </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AppointmentsList
