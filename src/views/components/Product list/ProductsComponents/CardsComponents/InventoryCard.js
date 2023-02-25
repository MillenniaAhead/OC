import React from 'react'
import { Link } from 'react-router-dom'
import {  Card, CardBody, CardHeader, FormGroup, Input, Label, Form, InputGroup } from 'reactstrap'

const InventoryCard = () => {
  return (
    <div>
           <Card
         className="my-2"
         color="secondary"
         outline
           >
            <CardHeader>
                <h3> Inventory</h3>
                <p>Manage stock levels of this product through Outlet Control.</p>

            </CardHeader>
            <CardBody>
            <Form>
                     <FormGroup>
                        <Label for ="sku"> SKU <span className='text-secondary'>(Stock Keeping Unit) </span></Label>
                        <Input type="text" name="sku" id="supplyPrice"  />
                     </FormGroup>       
                     <span className='text-success'>Generate SKU automatically</span>

                     <div>
                    <span className='text-success'> Add another SKU code</span>
                    </div>  
                    <hr></hr>       
                    <span> Supplier</span>                                  
                    <span className='text-success'> Select a supplier</span>  
                    <hr></hr>        
                    <span> Stock quantity</span>  
                    <div className=' d-flex justify-content-start align-content-center'>
                        <div className='form-switch form-check-success'>
                        <Input type='switch' id='switch-success' name='success' defaultChecked />
                        </div>    
                        <p className='text-secondary'>Track stock quantity</p>
                     </div>    
                     <FormGroup>
                        <Label for ="currentstock"> Current stock quantity</Label>
                        <Input type="text" name="currentstock" id="currentstock"  />
                     </FormGroup>      
                     <hr></hr>                  
                     <p>Low stock and reordering</p>
                     <p>Outlet Control will automatically notify you and pre-fill the recorder quantity set for
future stock orders.<Link> Learn more </Link></p> 
                        <div class ="container">
                            <div class =" row">
                              <div class="col-6"> 
                                 <InputGroup>
                                    <FormGroup>
                                        <Label for="lowstock"> Low stock level </Label>
                                        <Input type="text" name="lowstocke" id="lowstock" placeholder='0 '  />
                                        <p>The level to get notified to reorder</p>
                                    </FormGroup>
                                 </InputGroup>
                               </div>
                              <div class="col-6"> 
                              <InputGroup>
                                    <FormGroup>
                                        <Label for="recordquantity"> Reorder quantity </Label>
                                        <Input type="text" name="recordquantity" id="recordquantity" placeholder='0'  />
                                        <p>The default amount to order</p>
                                    </FormGroup>
                                 </InputGroup>
                              </div>
                            </div>
                        </div>

                        <div className=' d-flex justify-content-start align-content-center'>
                        <div className='form-switch form-check-success'>
                        <Input type='switch' id='switch-success' name='success' defaultChecked />
                        </div>    
                        <p>Receive low stock notifications.</p>
                     </div>
                </Form>
            </CardBody> 
         </Card>
    </div>
  )
}

export default InventoryCard