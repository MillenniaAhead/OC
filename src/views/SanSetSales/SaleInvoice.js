import React from 'react'
import Invoicemodel from './Invoicemodel'


const SaleInvoice = () => {
    return (
        <div className='mx-5 mt-5'>
             <div >
                <p className='fs-5'>Settings . Invoice sequencing</p>
                <h1 className='text-dark'>Invoice sequencing</h1>
            </div>
            <div className='mx-2 mt-3'>
            <Invoicemodel/>
            </div>
        </div>
    )
}

export default SaleInvoice