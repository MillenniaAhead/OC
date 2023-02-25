import React from 'react'
import { Label, Input, InputGroup, InputGroupText } from 'reactstrap'


const ServiceCharge = () => {
    return (
        <div className='mx-5'>
            <div className="mx-5">
                <div className="text-center">
                    <h1 className='text-dark fw-bolder'>Add a new service charge</h1>
                    <p className='fs-5'>Create a service charge to apply to services and items sold at checkout.</p>
                </div>
                <div className='mx-5'>
                <div className="border rounded mt-1 mx-5">
                    <hr className='mt-4'/>
                    <div className='w-50 p-3'>
                    
              <div className='d-flex justify-content-between'>
            <div><p className='text-dark'>Name</p></div>
            <div><p>0/100</p></div>
              </div>
            
            <Input type='email' id='basicInput' placeholder='Enter Email' />
                    </div>
                    <div className='w-50 p-3'>
                    
              <div className='d-flex justify-content-between'>
            <div><p className='text-dark'>Description</p></div>
            <div><p>0/360</p></div>
              </div>
            
              <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Enter a description of your service charge' />
              <p>For internal use only</p>
                    </div>
                </div>
                <div className="border rounded mt-2 mx-5 ">
                    <div className="p-2">
                    <h3 className='text-dark fw-bolder'>Set up</h3>
                    <p className='text-dark'>Create a service charge to apply to services and items sold at checkout.</p>
                    </div>
                    <hr />
                    <div className="p-2">
                <h5 className='text-dark fw-bolder'>Apply service charge on</h5>            
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Full sale value
            </Label>
          </div>
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Only selected item types
            </Label>
          </div>
          <h5 className='text-dark fw-bolder mt-2'>Additional options</h5>
          <div className='form-check form-check-success mb-2'>
            <Input type='checkbox' id='success-checkbox' defaultChecked />
            <Label className='form-check-label' for='success-checkbox'>
            Automatically apply during checkout
            </Label>
          </div>
                </div>
                </div>
                <div className="border rounded mt-2 mx-5 ">
                    <div className="p-2">
                    <h3 className='text-dark fw-bolder'>Rate</h3>
                    <p className='text-dark'>Set the service charge rate.</p>
                    </div>
                    <hr />
                    <div className="p-2">
                <h5 className='text-dark fw-bolder'>Rate type</h5>            
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Flat rate
            </Label>
          </div>
          <div className="ms-3 mt-1">
          <h6 className='text-dark fw-bolder'>Rate value</h6>
          <InputGroup className='mb-2 ms-2 w-50'>
        <InputGroupText>
            ₹
        </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>  
          </div>
          <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Percentage
            </Label>
          </div>
          <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Only selected item types
            </Label>
          </div>
            
                </div>
                </div>
                <div className="border rounded mt-2 mx-5">
                    <h3 className='text-dark fw-bolder p-2'>Tax rate</h3>
                    <hr />
                    <div className='mb-1 ms-2 w-50'>
          <Label className='form-label text-dark'  for='select-basic'>
          Tax
          </Label>
          <Input type='select' name='select' id='select-basic'>
            <option>No Tax</option>
            <option>10%</option>
            <option>20%</option>
          </Input>
        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCharge