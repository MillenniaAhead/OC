import React from 'react'
import Box from '@mui/material/Box'
import plusCircle from '../../images/ClientList/plus-circle.png'


const ClientsDetails = () => {
    return (
        <div>
            <div className='mx-5 my-3'>
                <h1>Client details</h1>
            </div>
            <div>
            <Box
      sx={{
        width: 940,
        height: 340,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >
       <div className='d-flex justify-content-between mx-3 mt-3'> <h3>Basic info</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div>
       <hr />
       <div className='d-flex justify-content-between mx-3 mt-3'> <h5>Birthday</h5> <button className='border-0 bg-white text-success fs-5'>+ Add</button></div> 

       <div className='d-flex justify-content-between mx-3 mt-3'> <h5>Gender</h5> <button className='border-0 bg-white fs-5'>Male</button></div>
       <div className='d-flex justify-content-between mx-3 mt-3'> <h5>Joined</h5> <button className='border-0 bg-white fs-5'>September 7, 2022</button></div>
       <div className='d-flex justify-content-between mx-3 mt-3'> <h5>Client source</h5> <button className='border-0 bg-white text-success fs-5'>+ Add</button></div>
       <p className='text-success mt-4 ms-3'>john@example.com</p>
    </Box>
            </div>
            <div className='mt-3'>
            <Box
      sx={{
        width: 940,
        height: 174,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >    <div className='d-flex justify-content-between mx-3 mt-3'> <h3>Address</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div> 
    <hr />
    <div className='d-flex mt-3 ms-3'>
        <div><img src={plusCircle} alt="" /></div> <div><p className='fs-5 ms-2'>Add address</p></div>
    </div>
    </Box>
            </div>
            <div className='mt-3'>
            <Box
      sx={{
        width: 940,
        height: 290,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  
        <div className='d-flex justify-content-between mx-3 mt-3'> <h3>Notifications</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div> 
        <hr />
        <div className='ms-4'>
            <h6>Client notifications</h6>
            <p className='text-muted'>Client doesn’t accept notifications</p>
            <hr />
        </div>
        <div className='ms-4'>
            <h6>Marketing notifications</h6>
            <p className='text-muted'>Client accepts marketing notifications</p>
           
        </div>
    
    </Box>
            </div>
        </div>
    )
}

export default ClientsDetails