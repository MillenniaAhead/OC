import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter, ArrowLeft} from 'react-feather'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'
import { NavLink } from 'react-router-dom'

const AppointmentSummary = () => {
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
                <span className='text-bbb3'>Appointment summary</span>
                <div className='text-ccc3'>Appointment summary</div>
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
            <div>
                <div className='text-aaa15'>Appointments by team member</div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Team member</div>
                    <div>Total</div>
                </div>
            <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Appointments</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr>
                             <td>0</td>
                             <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 0 of 0 results</div>
                <div className='text-aaa15'>Appointments by service</div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>Service Name</div>
                    <div>Total</div>
                </div>
            <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                        <th>Appointments</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr>
                             <td>0</td>
                             <td>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 0 of 0 results</div>
                </div>
        </div>
        </div>
    )
}

export default AppointmentSummary
