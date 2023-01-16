import React from 'react'
import { Card, CardBody, Col, Container, Row  } from 'reactstrap'
import ImportProductsModal from '../ProductsModal/ImportProductsModal'


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
                                 <div class="d-flex flex-column align-items-center">
                                      <div class=""><h5>No products yet</h5></div>
                                      <div class="">  <p className='text-secondary '> Your products will appear here.<br></br> Import
                        products in minutes and<br></br>  start selling them
                        online and at your location.</p></div>
                                      <div class="">  <ImportProductsModal /></div>
                                                                
                               </div>      
              
                         </Col>
                 
              </Row>
          </ Container>

    </CardBody>

</Card>


    </div>
  )
}

export default CardsLayout