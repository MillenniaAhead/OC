import React from 'react'
import { Card, CardBody, Col, Container, Row  } from 'reactstrap'

const StockTakesLayout = () => {
  return (
    <div>
               
<Card
  style={{
    width: '50rem',
    height: '20rem'
  }}
>
   
    
    <CardBody className='text-center text-black mt-5 '>
          <Container>
              <Row>
                  <Col xs ={12} >
                    <h5>No stocktakes here yet. </h5>
            <p className='text-secondary '> Your stocktakes will appear here</p>
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

export default StockTakesLayout