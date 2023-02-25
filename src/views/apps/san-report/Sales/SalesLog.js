import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const SalesLog = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div className='h-100 report-container'>
       <div className="side-menu-wrapper-aaa3">
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
      </div>
      <div className="side-menu-wrapper-aaa4">
        <NavLink to='/san-reports/reports'><ArrowLeft/></NavLink>
      </div>
        <div id='payment-summary-container' className=''>
            <div>
                <div className='top-box-xxx2'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Sales log</span>
                <div className='text-ccc3'>Sales log</div>
                </div>
                <div>
                <UncontrolledButtonDropdown className='export-dropdown-aaa1'>
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
             <button className="filter-deals filter-aaa1"><div className="d-flex justify-content-center align-items-center"><span className='text-ddd1'>Filter</span><Filter size={20}/>
             </div>
             </button>
             </div>
            </div>
            <div className='d-flex'>
                <div className='table-first-column-aaa4'>
                    <div>Invoice Date</div>
                    <div>Total</div>
                    <div>2 Jan 2023, 1:15am</div>
                    <div>3 Jan 2023, 2:15am</div>
                    <div>4 Jan 2023, 3:15am</div>
                </div>
            <div className="payment-summary-body-container">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Qty</th>
                            <th>Gross Sales</th>
                            <th>Discounts</th>
                            <th>Refunds</th>
                            <th>Net Sales</th>
                            <th>Tax</th>
                            <th>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>3</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>1</td>
                        <td>₹155.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹155.00</td>
                        <td>₹0.00</td>
                        <td>₹155.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>1</td>
                        <td>₹155.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹155.00</td>
                        <td>₹0.00</td>
                        <td>₹155.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>1</td>
                        <td>₹40.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹40.00</td>
                        <td>₹0.00</td>
                        <td>₹40.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 3 of 3 results</div>
        </div>
        </div>
    )
}

export default SalesLog
