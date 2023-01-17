import React from 'react'
import calender from '../../../images/automated/calendar.png'
import bell from '../../../images/automated/bell.png'
import calendar2 from '../../../images/automated/calendar (1).png'
import recalendar from '../../../images/automated/ResudleCalender.png'
import thumbs from '../../../images/automated/thumbs-up.png'
import userMinus from '../../../images/automated/user-minus.png'
import youtube from '../../../images/automated/youtube.png'

const AutomatedMessages = () => {
    return (
        <div>
             <div className='mx-4 mt-5'>
            <h2>Automated messages</h2>
            <p className='fs-5'>See star ratings and reviews left by clients after their visit. Learn more</p>
        </div>
        <div className='mx-4 mt-2'>
            <h2>Keep clients up to date with their appointments</h2>
            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={calender} alt="" />
                <h5 className='mt-3'>New appointment</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
                clients when an <br />
                appointment is booked <br />
                for them.</p>
                    <div>
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={bell} alt="" />
                <h5 className='mt-3'>Upcoming <br />
apponintment reminder</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
clients ahead of their <br />
appointment.</p>
                    <div >
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={recalendar} alt="" />
                <h5 className='mt-3'>Rescheduled <br />
appointment</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
clients when their <br />
appointment start time is <br />
changed.</p>
                    <div >
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={thumbs} alt="" />
                <h5 className='mt-3'>Thankyou for visiting</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
clients when their <br />
appointment is checked <br />
out, with a link to leave a <br />
review.</p>
                    <div >
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={calendar2} alt="" />
                <h5 className='mt-3'>New appointment</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
                clients when an <br />
                appointment is booked <br />
                for them.</p>
                    <div >
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={userMinus} alt="" />
                <h5 className='mt-3'>Cancelled appointment</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
                clients when an <br />
                appointment is booked <br />
                for them.</p>
                    <div >
                    <button type="button" class="btn btn-success">EMAIL</button>
                    <button type="button" class="btn btn-success ms-2">APP</button>
                    </div>
            </div>
                   </div>

                        </div>
                        <div className='col-lg-3 '>
                  <div className="card mt-3" style={{width:"296px", height:'400px'}}>
                        
                <div className="card-body ms-3 mt-3">
                <img src={youtube} alt="" />
                <h5 className='mt-3'>New appointment</h5>
                <p className='mt-3 fs-5'>Automatically sends to <br />
                clients when an <br />
                appointment is booked <br />
                for them.</p>
                    <div >
                    <button type="button" class="btn btn-secondary">Disabled</button>
                   
                    </div>
            </div>
                   </div>

                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default AutomatedMessages