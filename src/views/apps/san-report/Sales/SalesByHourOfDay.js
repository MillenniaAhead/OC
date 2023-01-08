import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const SalesByHourOfDay = () => {
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
                <div className='top-box-xxx2'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Sales by hour of day</span>
                <div className='text-ccc3'>Sales by hour  of day</div>
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
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Hour</div>
                    <div>Total</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                    <div>11:19am</div>
                </div>
            <div className="payment-summary-body-container">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa26'>
                        <tr className='tr-aaa4'>
                            <th>Sales Qty</th>
                            <th>Net Sales</th>
                            <th>Av. Sale</th>
                            <th>Sale%</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>3</td>
                        <td>₹270.00</td>
                        <td>₹90.00</td>
                        <td>100%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>1</td>
                        <td>₹115.00</td>
                        <td>₹115.00</td>
                        <td>42.59%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>0%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>0%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>0%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>0%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>0%</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>1</td>
                        <td>₹155.00</td>
                        <td>₹77.50</td>
                        <td>57.41%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 7 of 7 results</div>
        </div>
        </div>
    )
}

export default SalesByHourOfDay
