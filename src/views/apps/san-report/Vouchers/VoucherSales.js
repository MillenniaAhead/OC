import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const VoucherSales = () => {
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
                <span className='text-bbb3'>Voucher sales</span>
                <div className='text-ccc3'>Voucher sales</div>
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
             <button className="filter-deals filter-aaa1"><div className="d-flex justify-content-center align-items-center"><span className='text-ddd1'>Filter</span><Filter size={20}/>
             </div>
             </button>
             </div>
            </div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>date</div>
                    <div>Total</div>
                </div>
            <div className="payment-summary-body-container">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Invoice no.</th>
                            <th>Customer</th>
                            <th>Issued Value</th>
                            <th>Discount</th>
                            <th>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td></td>
                        <td></td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 0 of 0 results</div>
        </div>
        </div>
    )
}

export default VoucherSales
