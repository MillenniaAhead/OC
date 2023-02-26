import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import service from '../../images/SSS/invoiceservice.png'

const InvoiceService = () => {
    return (
        <div className='mx-5'>
            <div className="mx-5">
            <div className='d-flex justify-content-between mx-5 mt-5 '>
            <div>
            <p className='fs-5'>Settings .  <span className='text-dark'>  Invoice sequencing </span></p>
              <h1 className='text-dark '>Service charges</h1>
              <p className='fs-5'>Manage any extra charges that apply to services and items sold at checkout. <span className='text-success'>Learn more</span></p>
               
            </div>
            <div >
            <NavLink to="/sansetsale/charge"><button type="button" className="btn btn-dark me-4 mt-1 px-3 fw-normal fs-4 py-1">Add</button></NavLink>

            </div>
        </div>
        <div className="border mx-5 text-center">
            <img className='d-block mx-auto mt-5 mb-3' src={service} alt="" />
            <h4 className='text-dark fw-bold'>No service charge templates</h4>
            <p className='text-dark'>You don’t have any service charge templates</p>
            <Button.Ripple className='mb-4 mt-2' color='dark'>Add service charge</Button.Ripple>
        </div>
            </div>
        </div>
    )
}

export default InvoiceService