
import {   Card, CardBody, CardHeader,  Form, FormGroup, Input, InputGroup, Label  } from 'reactstrap'

const StockinfoCard = () => {
   
  return (
    <div>
         <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3> Stocktake info</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for="stockName"> Stocktake name <span  className='text-secondary'>(Optional) </span></Label>
                        <Input type="text" name="stockName" id="stockName"  />
                     </FormGroup>
                                        
                     <FormGroup>
                        <Label for="StocktakeDescription"> Stocktake description <span  className='text-secondary'>(Optional) </span> </Label>
                        <Input type="text" name="StocktakeDescription" id="StocktakeDescription"   />
                     </FormGroup>
                                                              
                </Form>
            </CardBody> 
         </Card>

    </div>
  )
}

export default StockinfoCard