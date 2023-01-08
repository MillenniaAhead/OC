import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const DiscountSummary = () => {
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
                <span className='text-bbb3'>Discount summary</span>
                <div className='text-ccc3'>Discount summary</div>
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
            <div className="payment-summary-body-container">
                    <div className='text-aaa9'>Discounts</div>
                <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Discount</div>
                    <div>Total</div>
                </div>
                <div className='payment-summary-body-container-child'>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa9'>
                        <tr className='tr-aaa4'>
                            <th>Items Discounted</th>
                            <th>Items Value</th>
                            <th>Discount Amount</th>
                            <th>Discount Refunds</th>
                            <th>Net Discounts</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd3 text-bbb9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Discounts by service</div>
                <div className='d-flex'>
                <div className='table-first-column-aaa4'>
                    <div>Service Name</div>
                    <div>Total</div>
                </div>
                <div className='payment-summary-body-container-child'>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa9'>
                        <tr className='tr-aaa4'>
                            <th>Items Discounted</th>
                            <th>Service Value</th>
                            <th>Discount Amount</th>
                            <th>Discount Refunds</th>
                            <th>Net Discounts</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd3 text-bbb9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Discounts by product</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className='payment-summary-body-container-child'>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa9'>
                        <tr className='tr-aaa4'>
                            <th>Items Discounted</th>
                            <th>Product Value</th>
                            <th>Discount Amount</th>
                            <th>Discount Refunds</th>
                            <th>Net Discounts</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd3 text-bbb9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Discounts by team member</div>
                    <div className="d-flex">
                <div className='table-first-column-aaa4'>
                    <div>Team member</div>
                    <div>Total</div>
                </div>
                <div className='payment-summary-body-container-child'>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa9'>
                        <tr className='tr-aaa4'>
                            <th>Items Discounted</th>
                            <th>Items Value</th>
                            <th>Discount Amount</th>
                            <th>Discount Refunds</th>
                            <th>Net Discounts</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd3 text-bbb9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Discounts by type</div>
                    <div className="d-flex">
                <div className='table-first-column-aaa4'>
                    <div>Type</div>
                    <div>Total</div>
                </div>
                <div className='payment-summary-body-container-child'>
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa9'>
                        <tr className='tr-aaa4'>
                            <th>Items Discounted</th>
                            <th>Items Value</th>
                            <th>Discount Amount</th>
                            <th>Discount Refunds</th>
                            <th>Net Discounts</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd3 text-bbb9'>Showing 0 of 0 results</div>
            </div>
        </div>
        </div>
    )
}

export default DiscountSummary