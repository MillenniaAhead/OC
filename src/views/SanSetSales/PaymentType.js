import React from 'react'
import lock from '../../images/SSS/lock.png'
import menup from '../../images/SSS/menu.png'

const PaymentType = () => {
    return (
        <div className='mx-5'>
            <div className="mx-5">
            <div className='d-flex justify-content-between mx-5 mt-5 '>
            <div>
            <p className='fs-5'>Settings .  <span className='text-dark'>  Payment types </span></p>
              <h1 className='text-dark '>Payment types</h1>
             
               
            </div>
            <div >
            <button type="button" className="btn btn-dark me-4 mt-1 px-3 fw-normal fs-4 py-1">Add payment type</button>

            </div>
            
        </div>
        <div className="border rounded mx-5 mt-2 p-2">
                <div className="d-flex justify-content-between">
                    <div className='text-dark'>
                        <img src={menup} alt="" /> <span className='fs-4 ms-1 fw-bold'>Cash</span>
                    </div>
                    <div>
                        <img src={lock} alt="" />
                    </div>
                </div>
            </div>
        <div className="border rounded mx-5 mt-2 p-2">
                <div className="d-flex justify-content-between">
                    <div className='text-dark'>
                        <img src={menup} alt="" /> <span className='fs-4 ms-1 fw-bold'>Other</span>
                    </div>
                    <div>
                        <img src={lock} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PaymentType