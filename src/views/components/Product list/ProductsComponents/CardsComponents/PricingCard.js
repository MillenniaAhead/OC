import React from 'react'
import {  Card, CardBody, CardHeader, FormGroup, Input, Label, Form, InputGroup } from 'reactstrap'

const PricingCard = () => {
  return (
    <div>
           <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3> Pricing</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for ="supplyPrice"> Supply price</Label>
                        <Input type="text" name="supply price" id="supplyPrice"  />
                     </FormGroup>                                     

                     <Label for ="retailSales"> Retail sales</Label><br></br>  
                     <span className="text-secondary">Allow sales of this product at checkout.</span>  
                     <div className=' d-flex justify-content-start align-content-center'>
                        <div className='form-switch form-check-success'>
                        <Input type='switch' id='switch-success' name='success' defaultChecked />
                        </div>    
                        <p>Enable retail sales</p>
                     </div> 
                      
                     <div class ="container">
                            <div class =" row">
                              <div className="col-4"> 
                                 <InputGroup>
                                    <FormGroup>
                                        <Label for="retailPrice"> Retail price</Label>
                                        <Input type="text" name="retailPrice" id="retailPrice" placeholder='0.00 '  />
                                    </FormGroup>
                                 </InputGroup>
                               </div>
                              <div className="col-4"> 
                              <InputGroup>
                                    <FormGroup>
                                        <Label for="specialPrice"> Special price </Label>
                                        <Input type="text" name="specialPrice" id="specialPrice" placeholder='0.00'  />
                                    </FormGroup>
                                 </InputGroup>
                              </div>
                              <div className="col-4"> 
                              <InputGroup>
                                    <FormGroup>
                                        <Label for="markup">Markup </Label>
                                        <Input type="text" name="markup" id="markup" placeholder='0.00'  />
                                    </FormGroup>
                                 </InputGroup>
                              </div>
                            </div>
                      </div>
                      <FormGroup>
                        <Label for ="tax"> Tax</Label>
                        <Input type="text" name="tax" id="tax"  placeholder='Default: No tax' />
                     </FormGroup>
                     <p className='text-secondary'>Team member commission</p> 
                     <p className='text-secondary bold'>Calculate team member commission when the product is sold.</p>
                     <div className=' d-flex justify-content-start align-content-center'>
                        <div className='form-switch form-check-success'>
                        <Input type='switch' id='switch-success' name='success' defaultChecked />
                        </div>    
                        <p>Enable team member commission</p>
                     </div> 
                </Form>
            </CardBody> 
         </Card>
    </div>
  )
}

export default PricingCard