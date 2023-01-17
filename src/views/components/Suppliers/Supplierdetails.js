
import {   Card, CardBody, CardHeader,  Form, FormGroup, Input, InputGroup, Label  } from 'reactstrap'

const Supplierdetails = () => {
  return (
    <div>
      <h3 className='text-center text-black'>Add a new supplier</h3>
         <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3>Supplier details</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for="suppliername"> Supplier name </Label>
                        <Input type="text" name="suppliername" id="suppliername"  placeholder='e.g. L’Oreal'/>
                     </FormGroup>
                     <FormGroup>
                        <Label for="Productdescription"> Product description </Label>
                        <Input type="text" name="Productdescription" id="Productdescription"  placeholder='e.g. Local provider of hair products' />
                     </FormGroup>
                              
                </Form>
            </CardBody> 
         </Card>

    </div>
  )
}

export default Supplierdetails