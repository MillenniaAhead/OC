// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle, Row, Col,  Input, Form, Button, Label } from 'reactstrap'
import { User, Mail, Phone } from 'react-feather'
import { Link } from 'react-router-dom'
const Setup = () => {
  return (
    <Card >
      <CardHeader className='d-flex justify-content-between'>
        <CardTitle>
            <span style = {{fontSize:"14px"}} className = "myTextColor">SETUP</span>
        </CardTitle>
      </CardHeader>
      <CardBody className=''>
      <Form>
          <Row>
            <Col xs = {6}>
                <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                    EDIT GROUP
                </Button.Ripple>
            </Col>
            <Col xs = {6}>
                <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                    ADD LOCATION
                </Button.Ripple>
            </Col>
          </Row>
          <Row>
            <Col xs = {6}>
                <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                    ADD TEAMMATES
                </Button.Ripple>
            </Col>
            <Col xs = {6}>
                <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                    UPLOAD PARTICIPANTS
                </Button.Ripple>
            </Col>
          </Row>
            
        </Form>
        {/* /Header */}
      </CardBody>

    </Card>
  )
}

export default Setup
