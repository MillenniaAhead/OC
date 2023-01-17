import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const SalesByChannel = () => {
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
                <span className='text-bbb3'>Sales by channel</span>
                <div className='text-ccc3'>Sales by channel</div>
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
             </div>
            </div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Channel</div>
                    <div>Total</div>
                    <div>Offline</div>
                    <div>Online store</div>
                    <div>Marketing-Blast messages</div>
                    <div>Google</div>
                    <div>Marketing-Auto campaigns</div>
                    <div>Book now link</div>
                    <div>Instagram</div>
                    <div>Faceboook</div>
                    <div>Fresha</div>
                </div>
            <div className="payment-summary-body-container">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Sales Qty</th>
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
                        <td>3</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr style={{height:'69px'}} className='tr-aaa4'>
                        <td>03</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr  style={{height:'69px'}} className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 9 of 9 results</div>
        </div>
        </div>
    )
}

export default SalesByChannel
