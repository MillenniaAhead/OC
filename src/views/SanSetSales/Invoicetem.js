import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'


const Invoicetem = () => {
    return (
        <div className='mx-5'>
            
           <div className='mx-5'>
           <div className="container mx-5">
            <div className="row">
            <div className='d-flex justify-content-between mx-5 mt-5 '>
            <div>
            <p className='fs-5'>Settings . <span className='text-dark'> Invoice template </span></p>
              <h1 className='text-dark mt-3'>Invoice template</h1>
               
            </div>
            <div className='me-5'>
            <button type="button" className="btn btn-dark me-4 mt-1 px-3 fw-normal fs-4 py-1">Save</button>

            </div>
        </div>
                
                <div className="col-lg-6 ">
                    <div className='ms-5 mt-4'>
                    <h2 className='text-dark'>Invoice settings</h2>
                    <p className='mt-3 fs-5'>Customize the content displayed on invoices issued to your clients</p>
                    </div>
                   
                </div>
                <div className="col-lg-6 ">
                    <div className='border rounded mt-4 me-5 p-2'>
                    <div className='form-check form-check-success'>
                    <Input type='checkbox' id='success-checkbox' defaultChecked />
                    <Label className='form-check-label' for='success-checkbox'>
                    Automatically print receipts upon sale completion
                    </Label>
                </div>
                    <div className='form-check form-check-success mt-2'>
                    <Input type='checkbox' id='success-checkbox' defaultChecked />
                    <Label className='form-check-label' for='success-checkbox'>
                    Show client mobile and email on invoices
                    </Label>
                </div>
                    <div className='form-check form-check-success mt-2'>
                    <Input type='checkbox' id='success-checkbox' defaultChecked />
                    <Label className='form-check-label' for='success-checkbox'>
                    Show client address on invoices
                    </Label>
                </div>
                <Label className='form-label mt-2 fs-5' for='basicInput'>
                Invoice title
            </Label>
            <Input type='text' id='basicInput' placeholder='Invoice' />
                <Label className='form-label mt-2 fs-5' for='basicInput'>
                Receipt custom line 1
            </Label>
            <Input type='text' id='basicInput'  />
                <Label className='form-label mt-2 fs-5' for='basicInput'>
                Receipt custom line 2
            </Label>
            <Input type='text' id='basicInput'  />
                <Label className='form-label mt-2 fs-5' for='basicInput'>
                Receipt footer
            </Label>
            <Input type='text' id='basicInput'  />
                    </div>

                </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Invoicetem