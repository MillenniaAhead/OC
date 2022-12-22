import { Box } from '@mui/material'
import React from 'react'
import filter from '../../../images/ClientList/filers.jpg'
import '../CSS/ClientList.css'

const UserApoinmet = () => {
    return (
        <div>
        <div className='d-flex justify-content-between mx-5 mt-5'>
            <div >
                <h1>Appointments</h1>
            </div>
            
            <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
                           </div>
             </div>
             <div>
             <Box
      sx={{
        width: 940,
        height: 270,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  
    <div className='d-flex align-items-center ms-3'><h2>Past</h2> <p className='three '>1</p></div>
    <hr />
    <div className='d-flex'>
    <div style={{width:'100px', height:'100px'}} className='border border-1 rounded ms-3'>
        <p className='text-center'>
            <span className='fs-3'>7</span><br />
            sep <br />
            2022
        </p>
    </div>
    <div className='ms-4'>
        <h6>Haircut</h6>
        <p>11:00am, 45min with Kondeti</p>
        <h6 className='mt-3'>₹40</h6>
        <button className='text-success border border-success bg-white'>New</button>
    </div>
    </div>
    </Box>
             </div>
        </div>
    )
}

export default UserApoinmet