import React from 'react'
import filter from '../../../images/ClientList/filers.jpg'
import Rcalender from '../../../images/ClientList/roundCalender.png'
import send from '../../../images/ClientList/send.png'
import logo from '../../../images/ClientList/logo.png'
import Box from '@mui/material/Box'
import { Avatar } from 'antd'


const ClientFeed = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mt-5 mx-3'>
               <div>
               <h1>Client feed</h1>
               </div>
               <div className='d-flex flex-row'>
               <div><img src={Rcalender} alt="" /></div>
               <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
                           </div>
               </div>
            </div>
            <form className='bg-white mx-5 d-flex justify-content-between'>
                <input className='border-0 px-5 text-center text-muted' type="text"  placeholder='Add a note...'/>
                <img className='me-3' src={send} alt="" />
            </form>
            <div className='mt-3'>
            <Box
      sx={{
        width: 940,
        height: 202,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        
        margin:'0px auto'
        
      }}
    >
   <div className='d-inline'> 
  <div  className='float-start'> <Avatar style={{width:"80px", height:'80px', fontSize:'28px' }} className="text-center ms-3 p-3" >J</Avatar></div>
      <div className='mt-2'> <p><span className='fs-3 fw-bolder '>New appointment booked</span> <br />
    7 Sep 2022 at 7:39pm by Kondeti</p></div>
    <div> 
        <p className='text-start ms-4 mt-5'><span className='fs-4 fw-bolder  '>Haircut (₹40) with Kondeti on</span> <br />
        7 Sep 2022 at 11:00am</p></div>
   
   </div>
  </Box>
            </div>
            <div className='mt-3'>
            <Box
      sx={{
        width: 940,
        height: 116,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        
        margin:'0px auto'
        
      }}
    >
   <div className='d-flex mt-3 ms-3'>
    <div><img src={logo} alt="" /></div>
    <div><p><span className='fs-4 fw-bolder  '>Client created</span> <br />
    7 Sep 2022 at 7:39pm</p></div>
   </div>
  </Box>
            </div>
        </div>
    )
}

export default ClientFeed