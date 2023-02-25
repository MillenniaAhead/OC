import React from 'react'
import {Input, Label, InputGroup, InputGroupText, Button } from 'reactstrap'

const SanTips = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                       <div className='ms-3'>
                       <p>Settings. <span className='text-dark'>Tips</span></p>
                       <h2 className='text-dark fw-bold'>Tips</h2>
                       <h4 className='mt-3 text-dark fw-bold'>Point of Sale tipping</h4>
                       <p className='mt-1'>Choose if you would like to ask clients to tip while creating a sale.</p>
                       </div>
                       <div className='ms-3 mt-5 '>
                        <h4 className='text-dark fw-bold '>Suggested tip values</h4>
                        <p className='mt-1'>The tip values are default options, clients will also be able to add a <br />
                        custom amount.</p>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='mt-5 pt-3'>
                            <div className='mt-5 border me-5'>
                            <div className='d-flex mt-2 ms-3 flex-row'>
           
                            <div className='form-check form-check-success'>
                        <Input type='checkbox' id='success-checkbox' defaultChecked />
                        <Label className='form-check-label ms-1'  for='success-checkbox'>
                       <h3> Enable tipping during Point of Sale checkout</h3>
                       <p>Ask clients to tip whilst checking their sale out in Point of Sale. If <br />
this feature is disabled, it is still possible to add a custom tip via <br />
the cart menu.</p>
                        </Label>
                    </div>
                    
                        </div>
                            </div>
                            <div className="mt-2 border me-5 ps-3 pt-3">
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>1.Tip value</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='10' />
                        </InputGroup>
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>2.Tip value</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='18' />
                        </InputGroup>
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>3.Tip value</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='25' />
                        </InputGroup>
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>4.Tip value</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='35' />
                        </InputGroup>
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>5.Tip value</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='45' />
                        </InputGroup>
                            <Label className='form-label' for='input-large'>
                            <span className='text-dark fw-bolder fs-5 mt-2'>Default section</span>
                            </Label>
                            <InputGroup className='mb-2'>
                            <InputGroupText>%</InputGroupText>
                            <Input  placeholder='No tip' />
                        </InputGroup>
                            </div>
                            
                        </div>
                        <div className='float-end me-5 mt-2'><Button.Ripple color='dark'>Save</Button.Ripple></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SanTips