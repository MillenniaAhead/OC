import React from 'react'
import tax from '../../images/SSS/taxfrom.png'
import I from '../../images/SSS/Iround.png'
import TaxAdd from './TaxAdd'
import { Button } from 'reactstrap'
import ApplyDefultmodal from './ApplyDefultmodal'

const Taxrate = () => {
    return (
        <div className='mx-5'>
             <div className='mx-5'>
             <div className='d-flex justify-content-between mx-5 mt-5 '>
            <div>
            <p className='fs-5'>Settings .  <span className='text-dark'>  Taxese </span></p>
              <h1 className='text-dark mt-3'>Taxes</h1>
              <h3 className='text-dark mt-3'>Tax rates</h3>
               
            </div>
            <div >
            <button type="button" className="btn btn-dark me-4 mt-1 px-3 fw-normal fs-4 py-1">Add new</button>

            </div>
        </div>
        <div className="border mx-5 mt-2">
                
                    <img className='d-block mx-auto my-3' src={tax} alt="" />
                <p className='fs-5 text-center'>Add your tax rates and use groups for multiple taxes, <br />
for example combining city and state taxes</p>
<div className='d-flex justify-content-center my-3'><TaxAdd/></div>
        </div>
        <div className='d-flex justify-content-between mx-5 mt-5 '>
            <div>
            <h3 className='text-dark mt-3'>Tax defaults</h3>
            <p>Setup the default taxes for your business, you can still override defaults in the <br />
settings of individual products and services</p>
            </div>
            <div className='mt-2'>
           <ApplyDefultmodal/>
            </div>
        </div>
        <div className="mx-5 border p-2">
            <h5 className='text-dark '>UIUX Designer</h5>
            <p>Products Default: No tax .Services Default: No tax </p>
        </div>
        <div className="bg-light-success p-1 mt-2 mx-5">
           <div className='d-flex m-1'>
           <div>
                <img src={I} alt="" />
            </div>
            <div className='ms-1'>
                <p className='text-dark'>Tax calculation <br />
Your retail prices are including taxes.<span className='text-success'> Change this setting</span></p>
            </div>
           </div>
        </div>
             </div>
        </div>
    )
}

export default Taxrate