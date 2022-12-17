// ** Reactstrap Imports
import {Row, Button, Col, Card, CardBody } from 'reactstrap'
const DetailedReport = () => {
  return (
    <Card
    style={{
        backgroundImage: `url(${require('@src/assets/images/banner/overview_launch.png').default})`
      }}>        
        <CardBody>
            <div className = "mar_t-30">
                <Row className = "mar_b-10">
                    <Col lg="1">
                    <img  style = {{right:"10px", width:"30px", height:"30px"}} src={require('@src/assets/images/icons/overview_detailreport.png').default} height='30'/>
                    </Col>
                    <Col lg="10" className = "overview_detail_text">Detailed Report for the month of September Is available now</Col>
                    <Col lg="1">c</Col>
                </Row>
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="10"><Button color="info">Download Now</Button></Col>
                    <Col lg="1">
                        
                    </Col>
                </Row>
            </div>
        </CardBody>
  </Card>
  )
}
export default DetailedReport
