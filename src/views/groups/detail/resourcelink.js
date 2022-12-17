// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle, Row, Col,  Input, Form, Button, Label } from 'reactstrap'
import { Printer } from 'react-feather'
import { Link } from 'react-router-dom'
const ResourceLink = () => {
  return (
    <Card >
      <CardHeader className='d-flex justify-content-between'>
        <CardTitle>
            <span style = {{fontSize:"14px"}} className = "myTextColor">RESOURCE LINKS</span>
        </CardTitle>
      </CardHeader>
      <CardBody className=''>
        <Form className = "mb-1">
            <div className='d-flex mb-1 justify-content-between flex-sm-row flex-column rounded border p-1'>
                <div>
                    <div className="mar_b-5" >Default Registration Link</div>
                    <span style = {{color:"#538EF3"}}>https:/lab.quickcare.me/portofcorpuschristi?registration_type=default</span>
                </div>
                <div className='d-flex flex-column text-start text-lg-end'>
                    <span className='mb-25'><Button color="info">QR Code</Button> </span>
                    <span><Button color="flat-dark"><Printer size={16}/> PRINT PDF</Button> </span>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-sm-row flex-column rounded border p-1'>
                <div>
                    <div className="mar_b-5" >Patient Portal Page Link</div>
                    <span style = {{color:"#538EF3"}}>https:/lab.quickcare.me/portofcorpuschristi/results</span>
                </div>
                <div className='d-flex flex-column text-start text-lg-end'>
                    <span className='mb-25'><Button color="info">QR Code</Button> </span>
                    <span><Button color="flat-dark"><Printer size={16}/> PRINT PDF</Button> </span>
                </div>
            </div>
        </Form>
        View and Print Consent Form
        <br/>Help
      </CardBody>

    </Card>
  )
}

export default ResourceLink
