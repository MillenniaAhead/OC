// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle, Row, Col,  Input, Form, Button, Label } from 'reactstrap'
import { User, Mail, Phone } from 'react-feather'
import { Link } from 'react-router-dom'
const DailyOperation = () => {
  return (
    <Card >
      <CardHeader className='d-flex justify-content-between'>
        <CardTitle>
            <span style = {{fontSize:"14px"}} className = "myTextColor">DAILY OPERATIONS</span>
        </CardTitle>
      </CardHeader>
      <CardBody className=''>
      <Form>
            <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                <p className >Participant List</p>
                <span style = {{color:"#AAA"}}>View participants list and check out</span>
            </Button.Ripple>
            <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                <p className >Case Reports</p>
                <span style = {{color:"#AAA"}}>View test results and vaccination records</span>
            </Button.Ripple>
            <Button.Ripple outline className = "mb-2" color = "info" block tag={Link} to='/'>
                <p className >Orders</p>
                <span style = {{color:"#AAA"}}>View test orders</span>
            </Button.Ripple>
            <Button.Ripple outline color = "info" block tag={Link} to='/'>
                <p className >View Locations</p>
                <span style = {{color:"#AAA"}}>View test Locations</span>
            </Button.Ripple>
        </Form>
        {/* /Header */}
      </CardBody>

    </Card>
  )
}

export default DailyOperation
