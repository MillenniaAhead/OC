import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter} from 'react-feather'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'

const AppointmentSummary = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div id='report-container' className='h-100 d-flex'>
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
        <div id='payment-summary-container' className=''>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Appointment summary</span>
                <div className='text-ccc3'>Appointment summary</div>
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
