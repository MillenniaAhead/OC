
import {  Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const BasicinfoCard = () => {
  return (
    <div>
         <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3> Basic Info</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for="productName"> Product name </Label>
                        <Input type="text" name="product name" id="productName"  />
                     </FormGroup>
                     <FormGroup>
                        <Label for="productName"> Product barcode <span className='text-secondary'>(Optional)</span> </Label>
                        <Input type="text" name="product name" id="productName"  placeholder='UPC, EAN, GTIN' />
                     </FormGroup>
                      
                      <Label>Product brand</Label><br></br>
                     <Label className='text-success'>Select a brand</Label>
                        <div class ="container">
                            <div class =" row">
                              <div class="col-6"> left side </div>
                              <div class="col-6"> right side</div>
                            </div>
                        </div>
                     <FormGroup>
                        <Label for="productName"> Short description<span className='text-secondary'>(Optional)</span> </Label>
                        <Input type="text" name="product name" id="productName"  placeholder='UPC, EAN, GTIN' />
                     </FormGroup>
                     <FormGroup>
                        <Label for="productName"> Product description<span className='text-secondary'>(Optional)</span> </Label>
                        <Input type="text" name="product name" id="productName"  placeholder='UPC, EAN, GTIN' />
                     </FormGroup>
                     <Label>Product category</Label><br></br>
                     <Label className='text-success'>Select a category</Label>

                      
                </Form>
            </CardBody> 
         </Card>

    </div>
  )
}

export default BasicinfoCard