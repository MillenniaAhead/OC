import React from 'react'
import { Box } from '@mui/material'
import credit from '../../../images/ClientList/creditCard.png'

const UserPayment = () => {
    return (
        <div>
            <div className='ms-5 mt-5'>
                <h1>Payment methods</h1>
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
    >  <img className='mx-auto d-block mt-5 pt-3' src={credit} alt="" />
    <p className='mt-2'> <span className='fs-4 fw-bolder'>No payment methods</span> <br />
    <span className='fs-6'>This client has no payment methods.</span></p>
    </Box>
             </div>
        </div>
    )
}

export default UserPayment