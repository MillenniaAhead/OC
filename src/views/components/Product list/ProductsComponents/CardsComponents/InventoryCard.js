import React from 'react'
import {  Card, CardBody, CardHeader } from 'reactstrap'
const InventoryCard = () => {
  return (
    <div>
           <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3> Inventory</h3></CardHeader>
            <CardBody>
                <h4>test body</h4>
            </CardBody> 
         </Card>
    </div>
  )
}

export default InventoryCard