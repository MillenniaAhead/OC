import React from 'react'
import Addpaytype from './Addpaytype'
import Cashmodal from './Cashmodal'
import OthersModal from './OthersModal'

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
            <Addpaytype/>

            </div>
            
        </div>
        <div className="border rounded mx-5 mt-2 p-2">
                <Cashmodal/>
            </div>
        <OthersModal/>
            </div>
        </div>
    )
}

export default PaymentType