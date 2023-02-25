import React from 'react'
import notification from '../../../images/ClientList/notification.png'
// import { div } from '@mui/material'

const Notification = () => {
    return (
        <div>
            <div className=' mt-5'>
              <h2>Notifications</h2> 
                <p className='fs-5'>View the notifications automatically sent to your clients. Manage your <span className='text-success'>settings</span> or <span className='text-success'>learn more</span></p>
            </div>
            <div className='text-center'>
             <div
      style={{
        width: 940,
        height: 270,
       
       
        margin:'0px auto'
        
      }}
    >  <img className='mx-auto d-block mt-5 pt-3' src={notification} alt="" />
    <h4>No Recent Messages</h4>
    <p className='fs-6'>Outlet Control will send automated customer notifications, reminders, <br />
confirmations and much more. Make the most of this feature <br />
by saving customer contact details in Outlet Control and give it a try!</p>

<p className='fs-6'>You can manage these features on the <span className='text-success'>Client Notifications</span> <br />
setting page.</p>
    </div>
             </div>
        </div>
    )
}

export default Notification