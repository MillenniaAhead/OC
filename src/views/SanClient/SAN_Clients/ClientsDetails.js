import React from 'react'
// import div from '@mui/material/div'
import plusCircle from '../../../images/ClientList/plus-circle.png'


const ClientsDetails = () => {
    return (
        <div>
            <div className='mx-5 my-3'>
                <h1>Client details</h1>
            </div>
            <div>
            <div
      style={{
        width: 940,
        height: 340,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >
       <div className='d-flex justify-content-between mx-3 mt-2'> <h3>Basic info</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div>
       <hr />
       <div className='d-flex justify-content-between mx-3 mt-1'> <h5>Birthday</h5> <button className='border-0 bg-white text-success fs-5'>+ Add</button></div> 

       <div className='d-flex justify-content-between mx-3 mt-1'> <h5>Gender</h5> <button className='border-0 bg-white fs-5'>Male</button></div>
       <div className='d-flex justify-content-between mx-3 mt-1'> <h5>Joined</h5> <button className='border-0 bg-white fs-5'>September 7, 2022</button></div>
       <div className='d-flex justify-content-between mx-3 mt-1'> <h5>Client source</h5> <button className='border-0 bg-white text-success fs-5'>+ Add</button></div>
       <p className='text-success mt-3 ms-3'>john@example.com</p>
    </div>
            </div>
            <div className='mt-3'>
            <div
     style={{
        width: 940,
        height: 165,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >    <div className='d-flex justify-content-between mx-3 mt-2 text-dark'> <h3>Address</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div> 
    <hr />
    <div className='d-flex mt-1 ms-3'>
        <div><img src={plusCircle} alt="" /></div> <div><p className='fs-4  ms-2'>Add address</p></div>
    </div>
    </div>
            </div>
            <div className='mt-3'>
            <div
      style={{
        width: 940,
        height: 290,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  
        <div className='d-flex justify-content-between mx-3 mt-2'> <h3>Notifications</h3> <button className='border-0 bg-white text-success fs-5'>Edit</button></div> 
        <hr />
        <div className='ms-4'>
            <h5>Client notifications</h5>
            <p className='text-muted'>Client doesn’t accept notifications</p>
            <hr />
        </div>
        <div className='ms-4'>
            <h5>Marketing notifications</h5>
            <p className='text-muted'>Client accepts marketing notifications</p>
           
        </div>
    
    </div>
            </div>
        </div>
    )
}

export default ClientsDetails