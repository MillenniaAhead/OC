import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'

const InternalStockConsumption = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div id='report-container' className='h-100 d-flex'>
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
        <div id='payment-summary-container' className='w-100'>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Internal stock </span>
                <div className='text-ccc3'>Internal stock </div>
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
            <div>
                <div className='mb-3 total-summary-aaa15'>
                    <div className='text-aaa15'>Summary</div>
                    <table className='w-100 table-aaa4'>
                        <tbody className='tbody-aaa4 tbody-aaa15'>
                            <tr className='tr-aaa4'>
                            <td>Internal Use Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Damaged Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Lost Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Out of Date Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Adjustment Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Transfer Total</td>
                            <td>₹0.00</td>
                            </tr>
                            <tr className='tr-aaa4'>
                            <td>Other Total</td>
                            <td>₹0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <div className='text-aaa9'>Internal use</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Damaged</div>
                <div className="d-flex">
                <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                    <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Lost</div>
                    <div className="d-flex">
                <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                    <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                    <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Out of date</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Adjustment</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Transfer</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
                    <div className='text-aaa9'>Other</div>
                    <div className="d-flex">
                    <div className='table-first-column-aaa4'>
                    <div>Product Name</div>
                    <div>Total</div>
                </div>
                <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa15'>
                        <tr className='tr-aaa4'>
                            <th>Quantity used</th>
                            <th>Avg. const price</th>
                            <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td>0</td>
                        <td></td>
                        <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='d-flex justify-content-center text-ddd9'>Showing 0 of 0 results</div>
            </div>
        </div>
        </div>
    )
}

export default InternalStockConsumption
