import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'

const SalesByMonth = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div id='report-container' className='h-100 d-flex'>
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
        <div id='payment-summary-container' className='w-100'>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Sales by month</span>
                <div className='text-ccc3'>Sales by month</div>
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
                <div className='d-flex' style={{margin:'32px 0'}}>
             <Flatpickr
               style={{width:'330px', border:'1px solid #d9d9d9'}}
               value={picker}
               id='range-picker'
               className='form-control text-ddd1'
               onChange={date => setPicker(date)}
               options={{
                 mode: 'range',
                 defaultDate: ['2020-02-01', '2020-02-15']
               }}
             />
             <button style={{width:'150px'}} className="filter-deals"><div className="d-flex justify-content-center align-items-center"><span className='text-ddd1'>Filter</span><Filter size={20}/>
             </div>
             </button>
             </div>
            </div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Month</div>
                    <div>Total</div>
                    <div>October 2022</div>
                    <div>November 2022</div>
                    <div>December 2022</div>
                    <div>January 2023</div>
                    <div>February 2023</div>
                    <div>March 2023</div>
                    <div>April 2023</div>
                    <div>May 2023</div>
                    <div>June 2023</div>
                    <div>July 2023</div>
                    <div>August 2023</div>
                    <div>September 2023</div>
                    <div>October 2023</div>
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
                        <td>3</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        <td>₹0.00</td>
                        <td>₹270.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 13 of 13 results</div>
        </div>
        </div>
    )
}

export default SalesByMonth
