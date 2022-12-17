// ** Reactstrap Imports
import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'
import { User, Mail, Phone } from 'react-feather'
const Organization = ({ data }) => {
  return data !== null ? (
    <Card className='invoice-preview-card'>
      <CardBody className='invoice-padding pb-0'>
        {/* Header */}
        <div className='d-flex justify-content-start flex-md-row flex-column mt-1'>
          <div>
            <div className='logo-wrapper'>
              <img width = {196} height = {196} src={require('@src/assets/images/icons/group_detail.png').default}/>
            </div>
          </div>
          <div className='mt-md-0' style = {{marginLeft:"30px"}}>
            <h3 className = "mar_t-10">
              ORGANIZATION: <span className='invoice-number'>{data.invoice.name}</span>
            </h3>
            <Row className = "mt-3">
                <Col xs = "1" ><img src={require('@src/assets/images/icons/groupdetails_daydate.png').default}/></Col>
                <Col xs = "10">{data.invoice.dueDate}</Col>
            </Row>
            <Row className = "mt-3">
                <Col xs = "1" ><img src={require('@src/assets/images/icons/groupdetails_location.png').default}/></Col>
                <Col xs = "10">{data.invoice.address}</Col>
            </Row>
          </div>
        </div>
        {/* /Header */}
      </CardBody>
      {/* Address and Contact */}
      <CardBody className='mar_l-10'>
        <Row className='invoice-spacing'>
          <Col className='p-0' xl='5' style = {{borderRight:"1px solid #CCCCCC"}}>
            <h3 className='mb-2'>CLIENT LEADS</h3>
            <CardText className='mb-1'><User size={16}/> {data.invoice.client.name}</CardText>
            <CardText className='mb-1'><Mail size={16}/> {data.invoice.client.email}</CardText>
            <CardText className='mb-1'><Phone size={16}/> {data.invoice.client.phone}</CardText>
          </Col>
          <Col className='p-0 mt-xl-0 mt-2' xl='1'></Col>
          <Col className='p-0 mt-xl-0 mt-2' xl='6'>
            <h3 className='mb-2'>PRIMARY HEALTH LEADS</h3>
            <CardText className='mb-1'><User size={16}/> {data.invoice.health.name}</CardText>
            <CardText className='mb-1'><Mail size={16}/> {data.invoice.health.email}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : null
}

export default Organization
