import React from 'react'
import {   Card, CardBody, CardHeader,  Form, FormGroup, Input,  Label, InputGroup, InputGroupText  } from 'reactstrap'

const PhysicalAddress = () => {
    
 
  return (
    <div>
         <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3>Physical address</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for="street"> Street</Label>
                        <Input type="text" name="street" id="street"  placeholder='e.g. 12 Main Street'/>
                     </FormGroup>
                     <FormGroup>
                        <Label for="Suburb"> Suburb</Label>
                        <Input type="text" name="Suburb" id="Suburb"  />
                     </FormGroup> 
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                <FormGroup>
                        <Label for="city"> City</Label>
                        <Input type="text" name="city" id="city"  />
                     </FormGroup>
                                </div>
                                <div class="col-6">
                                <FormGroup>
                        <Label for="state"> State</Label>
                        <Input type="text" name="state" id="state"  />
                     </FormGroup>
                                </div>
                            </div>

                        </div>

                     <FormGroup>
                        <Label for="zip"> Zip / Postal Code</Label>
                        <Input type="text" name="zip" id="zip"  />
                     </FormGroup> 

                     <Label for="state"> Country</Label>
                     <InputGroup className='mb-1' size='lg'>
                        <InputGroupText>India</InputGroupText>
                        <Input placeholder='username' />
                    </InputGroup>
                              <div>
                                 <div>
                                 <div className='form-check form-check-success'>
                                    <Input type='checkbox' id='success-checkbox' defaultChecked />
                                    <Label className='form-check-label text-black' for='success-checkbox'>
                                    Same as postal Address
                                    </Label>
                                </div>
                                 </div>
                                 <div></div>
                            </div>                               
                </Form>
            </CardBody> 
         </Card>

    </div>
  )
}

export default PhysicalAddress