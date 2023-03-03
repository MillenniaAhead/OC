import React from 'react'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { ArrowLeft} from 'react-feather'
import { NavLink } from 'react-router-dom'

const PaymentSummary = () => {

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
                <span className='text-bbb3'>Outstanding invoices</span>
                <div className='text-ccc3'>Outstanding invoices</div>
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
        </div>
        <div className="d-flex">
            <div className='table-first-column-aaa4' style={{marginTop:'35px'}}>
                    <div>Invoice#</div>
                    <div>Total</div>
                    <div style={{margin:'4px'}}>1</div>
                    <div>2</div>
                </div>
            <div className="payment-summary-body-container" style={{marginTop:'35px'}}>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa10'>
                        <tr className='tr-aaa4'>
                            <th>Status</th>
                            <th>Invoice Date</th>
                            <th>Due Date</th>
                            <th>Overdue</th>
                            <th>Costomer</th>
                            <th>Gross Total</th>
                            <th>Amount Due</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>₹155.00</td>
                        <td>₹155.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td><div className='text-bbb10'>UNPAID</div></td>
                        <td>31 Dec 2022 1:19</td>
                        <td>31 Dec 2022</td>
                        <td>11days</td>
                        <td>Walk-In</td>
                        <td>₹40.00</td>
                        <td>₹40.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td><div className='text-bbb10'>UNPAID</div></td>
                        <td>31 Dec 2022 1:20</td>
                        <td>31 Dec 2022</td>
                        <td>11days</td>
                        <td>Walk-In</td>
                        <td>₹115.00</td>
                        <td>₹115.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 2 of 2 results</div>
        </div>
        </div>
    )
}

export default PaymentSummary