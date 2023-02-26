import React from 'react'
import credit from '../../../images/ClientList/creditCard.png'

const UserPayment = () => {
    return (
        <div>
            <div className='ms-5 mb-3 mt-5'>
                <h1 className='ms-3 text-dark'>Payment methods</h1>
            </div>
            <div className='text-center'>
             <div
      style={{
        width: 940,
        height: 270,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  <img className='mx-auto d-block mt-5 pt-3' src={credit} alt="" />
    <p className='mt-2'> <span className='fs-4 fw-bolder'>No payment methods</span> <br />
    <span className='fs-6'>This client has no payment methods.</span></p>
    </div>
             </div>
        </div>
    )
}

export default UserPayment