import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { ArrowLeft} from 'react-feather'
import { NavLink } from 'react-router-dom'

const StockMovementSummary = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div className='report-container'>
      <div className="side-menu-wrapper-aaa3">
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
      </div>
      <div className="side-menu-wrapper-aaa4">
        <NavLink to='/san-reports/reports'><ArrowLeft/></NavLink>
      </div>
        <div id='payment-summary-container' className='w-100'>
            <div>
                <div className='top-box-xxx2'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Stock movement summary</span>
                <div className='text-ccc3'>Stock movement summary</div>
                </div>
                <div>
                <UncontrolledButtonDropdown className='me-2'>
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
                <div className='my-top-xxx1'>
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
             </div>
            </div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Product</div>
                </div>
            <div className="payment-summary-body-container">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa14'>
                        <tr className='tr-aaa4'>
                            <th>Barcode</th>
                            <th>Start stock</th>
                            <th>Received</th>
                            <th>Sold</th>
                            <th>Deducted</th>
                            <th>End stock</th>
                            <th>End value</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-aaa3 mt-1'>Showing 0 of 0 results</div>
        </div>
        </div>
    )
}

export default StockMovementSummary