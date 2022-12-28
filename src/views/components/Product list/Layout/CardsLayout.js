import React from 'react'
import { Card, CardBody, Col, Container, Row  } from 'reactstrap'
import ProductsModalBasic from '../ProductsCard/ProductsModalBasic'

const CardsLayout = () => {
  return (
    <div>
               
<Card
  style={{
    width: '62.7rem',
    height: '20rem'
  }}
>
   
    
    <CardBody className='text-center text-black mt-5 '>
          <Container>
              <Row>
                  <Col xs ={12} >
                                     
                    <h5>No products yet</h5>
            <p className='text-secondary '> Your products will appear here.<br></br> Import
    products in minutes and<br></br>  start selling them
    online and at your location.</p>
                         </Col>
                  <Col xs = {12}>
                  < ProductsModalBasic  />
                  </Col>
              </Row>
          </ Container>

    </CardBody>

</Card>


    </div>
  )
}

export default CardsLayout