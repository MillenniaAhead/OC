import React from 'react'
import Products from '../../../images/ClientList/Products.png'

const UserProducts = () => {
    return (
        <div>
            <div className='ms-5 mt-5'>
                <h1>Products</h1>
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
    >  <img className='mx-auto d-block mt-5 pt-3' src={Products} alt="" />
    <p className='mt-2'> <span className='fs-4 fw-bolder'>No products sold</span> <br />
    <span className='fs-6'>All product sales for this client will appear here.</span></p>
    </div>
             </div>
        </div>
    )
}

export default UserProducts