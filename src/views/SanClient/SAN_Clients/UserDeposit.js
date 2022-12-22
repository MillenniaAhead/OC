import React from 'react'
import filter from '../../../images/ClientList/filers.jpg'
import database from '../../../images/ClientList/database.png'
import { Box } from '@mui/material'

const UserDeposit = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mx-5 mt-5'>
            <div>
                <h1>Deposits</h1>
            </div>
            
            <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
                           </div>
             </div>
             <div className='text-center'>
             <Box
      sx={{
        width: 940,
        height: 270,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  <img className='mx-auto d-block mt-5 pt-3' src={database} alt="" />
    <p className='mt-2'> <span className='fs-4 fw-bolder'>No deposits found</span> <br />
    <span className='fs-6'>The client has no deposits.</span></p>
    </Box>
             </div>
        </div>
    )
}

export default UserDeposit