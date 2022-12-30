import React from 'react'
import filter from '../../../images/ClientList/filers.jpg'
import Rcalender from '../../../images/ClientList/roundCalender.png'
import send from '../../../images/ClientList/send.png'
import logo from '../../../images/ClientList/logo.png'
import Avatar from '@components/avatar'
// import div from '@mui/material/div'
// import { Avatar } from 'antd'


const ClientFeed = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-3 mt-5 mx-3'>
               <div className='ms-2'>
               <h1 className='text-dark'>Client feed</h1>
               </div>
               <div className='d-flex flex-row'>
               <div><img src={Rcalender} alt="" /></div>
               <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <div><img   src={filter} alt="" /></div>
                           </div>
               </div>
            </div>
            <form className='bg-white mx-5 d-flex justify-content-between'>
                <input className='border-0 px-5 text-center text-muted' type="text"  placeholder='Add a note...'/>
                <img className='me-3' src={send} alt="" />
            </form>
            <div className='mt-3'>
            <div
      style={{
        width: 940,
        height: 202,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        
        margin:'0px auto'
        
      }}
    >
   <div className='d-inline'> 
  <div  className='float-start ms-3 '> 
  
  <Avatar className='mt-2' size='xl' color='light-success' content='Jhone' initials />
  </div>
      <div className='mt-2 '> <p className='ps-1'><span className='fs-3 fw-bolder ms-1 text-dark'>New appointment booked</span> <br />
    <span className='ms-1'>7 Sep 2022 at 7:39pm by Kondeti</span></p></div>
    <div> 
        <p className='text-start ms-4 mt-5'><span className='fs-4 fw-bolder  '>Haircut (₹40) with Kondeti on</span> <br />
        7 Sep 2022 at 11:00am</p></div>
   
   </div>
  </div>
            </div>
            <div className='mt-3'>
            <div
      style={{
        width: 940,
        height: 116,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        
        margin:'0px auto'
        
      }}
    >
   <div className='d-flex mt-2 ms-3'>
    <div><img src={logo} alt="" /></div>
    <div><p><span className='fs-4 fw-bolder  '>Client created</span> <br />
    7 Sep 2022 at 7:39pm</p></div>
   </div>
  </div>
            </div>
        </div>
    )
}

export default ClientFeed