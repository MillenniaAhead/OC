import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { NavLink } from 'react-router-dom'
import SideMenu from '../ReportsSideMenu'
import { ArrowLeft} from 'react-feather'

const FinancesSummary = () => {

    const [picker, setPicker] = useState(new Date())

  return (
    <div className='report-container'>
     <div className="side-menu-wrapper-aaa3">
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
      </div>
      <div className="side-menu-wrapper-aaa4">
        <NavLink to='/san-reports/reports'><ArrowLeft/></NavLink>
      </div>
    <div id='finances-summary-container' className='w-100'>
      <div>
        <span className='text-aaa3 pe-1'>Reports</span><span className='text-bbb3'>Finances summary</span>
      </div>
      <div className='text-ccc3'>Finances summary</div>
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
      <div className="finances-summary-body-box d-flex w-100">
        <div className='finances-summary-body-box-1 d-flex flex-column'>
            <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Sales</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td>Gross sales</td>
                    <td>₹270.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td>Discounts</td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td>Refunds</td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3' style={{borderTop:'1px solid #d9d9d9'}}>
                    <td style={{fontWeight:'500', color:'black'}}>Net sales</td>
                    <td style={{fontWeight:'900'}}>₹270.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td><NavLink  to='#' >Taxes</NavLink></td>
                    <td>₹0.00</td>
                </tr>
            </tbody>
            <tfoot className='tfoot-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Total sales</NavLink></td>
                    <td>₹270.00</td>
                </tr>
            </tfoot>
        </table>
        </div>
        <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Vouchers</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Voucher sales</NavLink></td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Voucher redemptions</NavLink></td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Vouchers outstanding balance</NavLink></td>
                    <td>₹0.00</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Deposits</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Deposits collections</NavLink></td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Deposits redemptions</NavLink></td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Deposits outstanding balance</NavLink></td>
                    <td>₹0.00</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        <div className='finances-summary-body-box-2 d-flex flex-column'>
        <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Payment</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td>Payments</td>
                    <td>₹126.50</td>
                </tr>
            </tbody>
            <tfoot className='tfoot-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Total payments</NavLink></td>
                    <td>₹126.50</td>
                </tr>
            </tfoot>
        </table>
        </div>
        <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Tips</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#'>Tips collected</NavLink></td>
                    <td>₹11.50</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className="box-aaa3">
        <table className='table-aaa3'>
            <thead className='thead-aaa3'>
                <tr className='tr-aaa3'>
                <th>Service charges</th>
                </tr>
            </thead>
            <tbody className='tbody-aaa3'>
                <tr className='tr-aaa3'>
                    <td>Service charges</td>
                    <td>₹0.00</td>
                </tr>
                <tr className='tr-aaa3'>
                    <td>Taxes</td>
                    <td>₹0.00</td>
                </tr>
                </tbody>
            <tfoot className='tfoot-aaa3'>
                <tr className='tr-aaa3'>
                    <td><NavLink to='#' >Total service charges</NavLink></td>
                    <td>₹0.00</td>
                </tr>
            </tfoot>
        </table>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FinancesSummary
