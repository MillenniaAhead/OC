import React from 'react'
import { Card, CardBody, Col, Container, Row  } from 'reactstrap'

const StockOrderLayout = () => {
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
                    <h5>Product list is not yet set up</h5>
            <p className='text-secondary '> Set up your product list in minutes by <br></br>
importing your products fast and easy.</p>
                         </Col>
                  <Col xs = {12}>
                  
                  </Col>
              </Row>
          </ Container>

    </CardBody>

</Card>


    </div>
  )
}

export default StockOrderLayout