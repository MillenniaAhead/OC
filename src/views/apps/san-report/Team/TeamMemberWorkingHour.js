import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import { Filter} from 'react-feather'
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../mycss2/PaymentSummary.css'
import SideMenu from '../ReportsSideMenu'

const TeamMemberWorkingHour = () => {
    const [picker, setPicker] = useState(new Date())

    return (
        <div id='report-container' className='h-100 d-flex'>
      <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
        <div id='payment-summary-container' className=''>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                <span className='text-aaa3 pe-1'>Reports</span>
                <span className='text-bbb3'>Team member working hour</span>
                <div className='text-ccc3'>Team member working hour</div>
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
                <div className='text-aaa15'>Kondeti Anusha</div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>date</div>
                    <div>Total</div>
                    <div>1 Jan 2023</div>
                    <div>2 Jan 2023</div>
                    <div>3 Jan 2023</div>
                </div>
            <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Start</th>
                            <th>End</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td></td>
                        <td></td>
                        <td>27h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 3 of 3 results</div>
                <div className='text-aaa15'>Wendi Smith</div>
            <div className="d-flex">
            <div className='table-first-column-aaa4'>
                    <div>date</div>
                    <div>Total</div>
                    <div>1 Jan 2023</div>
                    <div>2 Jan 2023</div>
                    <div>3 Jan 2023</div>
                </div>
            <div className="payment-summary-body-container-child">
                <table className='w-100 table-aaa4'>
                    <thead className='thead-aaa4 thead-aaa16'>
                        <tr className='tr-aaa4'>
                            <th>Start</th>
                            <th>End</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-aaa4'>
                        <tr className='tr-aaa4'>
                        <td></td>
                        <td></td>
                        <td>27h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                        <tr className='tr-aaa4'>
                        <td>10:00am</td>
                        <td>7:00pm</td>
                        <td>9h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                <div className='d-flex justify-content-center text-ddd3 mt-1'>Showing 3 of 3 results</div>
                </div>
        </div>
        </div>
    )
}

export default TeamMemberWorkingHour
