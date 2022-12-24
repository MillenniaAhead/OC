import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'
import LayoutButton from './LayoutButton'

const Layout = () => {
  return (
       <Container>
         <Row>
            <Col>
              <Container>
                 <Row>
                    <Col
                       xs="12"
                       md ="6"
                    >
                        <h2>Product list</h2>
                       <p> Add and manage your products in stock. <Link> Learn more </Link></p>
                    </Col>
                    <Col
                       xs="12"
                       md= "6"
                    > 
                     <LayoutButton />
                     
                    
                    </Col>
                 </Row>

              </Container>
            
            </Col>
         </Row>
       </Container>
  )
}

export default Layout