import React from 'react'
import { Card, CardBody, Col, Container, Row  } from 'reactstrap'
import SuppliersModal from '../SupplierModal/SuppliersModal'

const SuppliersLayout = () => {
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
                  <div className="d-flex flex-column align-items-center">
                                      <div className=""><h5>No suppliers here yet.</h5></div>
                                      <div className=""> <p>Your suppliers will appear here</p></div>
                                      <div className=""> <SuppliersModal /> </div>
                                                                
                               </div>
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

export default SuppliersLayout