import React from 'react'
import filter from '../../../images/ClientList/filers.jpg'
import star from '../../../images/ClientList/halfStar.png'

const Reviews = () => {
    return (
        <div>
            <div className='mx-4 mt-5'>
            <h2>Reviews</h2>
            <p className='fs-5'>See star ratings and reviews left by clients after their visit. Learn more</p>
            </div>
            <div className='border rounded mx-4 mt-4 d-flex justify-content-between align-items-center' style={{height:'90px',  backgroundColor:'rgba(217, 217, 217, 0.16)'}}>
            <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
                           </div>
            </div>
            <div style={{height:'390px'}} className='border rounded  mx-4 mt-5'>
                
                <img style={{margin:'80px 580px 0px'}} className='text-center'  src={star} alt="" />
                <h4 className='text-center mt-2'>No reviews</h4>
                <p className='text-center mt-3 fs-5 text-dark fw-normal'>Registered Outletcontrols users can rate completed <br />
appointments,boosting your profile and <br />
encouraging new clients to book</p>

            </div>
        </div>
    )
}

export default Reviews