import React, { Fragment, useState } from 'react'
import X from '../../../images/ClientList/x.png'
import plusCircle from '../../../images/snr/plus-circle green.png'
import { Card,   CardText, CardFooter, CardHeader, CardTitle, CardBody, Row, Col, Input, InputGroup, InputGroupText, Form,  Label } from 'reactstrap'
import Cleave from 'cleave.js/react'
import Flatpickr from 'react-flatpickr'
import 'cleave.js/dist/addons/cleave-phone.us'
import 'flatpickr/dist/flatpickr.css'
import axios from 'axios'


const AddClient = () => {
    const options = { phone: true, phoneRegionCode: 'IN' }
    const [picker, setPicker] = useState(new Date())
    const [client, setClient] = useState({
      firstName:"",
      lastName:"",
      phone:"",
      email:"",
      gender:"",
      birthdate:picker,
      clientInfo:"",
      additionalPhone:"",
      clientSource:"",
      language:""
    })
    const setData = (e) => {
      console.log(e?.target?.value)
      const {name, value} = e?.target
      setClient((preval) => {
          return {
              ...preval,
              [name]: value
          }
       })
     }
     
     const handleSave = async (e) => {
      e.preventDefault()
  
    console.log(client)
      axios.post('http://localhost:8000/api/sanclients/client', client)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
    return (
        <div >
            <div className='d-flex justify-content-between mx-4 mt-3'>
                <div>
                    <img src={X} alt="" />
                </div>
                <div>
                <button type="button" onClick={handleSave} className="btn btn-dark px-4 py-1">Save</button>
                </div>
            </div>
            <div className="container-fulid mt-3">
                
                <div className="row">
                    <p className='text-center ms-3 my-3 fs-1 fw-bolder text-dark'>Add a new client</p>
                    <div className="col-lg-7">
                    <Card className='text-dark' style={{width:'584px', float:'right'}}>
      <CardHeader>
        <CardTitle  tag='h4'>Basic info</CardTitle>
        
      </CardHeader>
      <hr  />
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label'  for='nameMulti'>
                First Name
              </Label>
              <Input type='text'onChange={setData} value={client.firstName} name="firstName" id='nameMulti' placeholder='First Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Last Name
              </Label>
              <Input type='text' onChange={setData} value={client.lastName} name='lastName' id='lastNameMulti' placeholder='Last Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
            <Label for='phone-number'>Phone Number</Label>
      <InputGroup className='input-group-merge'>
        <InputGroupText>+91</InputGroupText>
        <Cleave className='form-control'name='phone' onChange={setData} value={client.phone} placeholder='1 234 567 8900' options={options} id='phone-number' />
      </InputGroup>
              
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                Email
              </Label>
              <Input type='email' onChange={setData} value={client.email} name='email' id='EmailMulti' placeholder='Email' />
            </Col>
            <Col md='12' sm='12' className='mb-1'>
            <Label className='form-label' for='select-basic'>
            Gender
          </Label>
          <Input type='select' onChange={setData}  name='gender' id='select-basic'>
            <option>Select Option</option>
            <option>Male</option>
            <option>Female</option>
            
          </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
            <Fragment>
            <Label className='form-label' for='date-time-picker'>
       Birth of Date
      </Label>
      <Flatpickr
         
        value={picker}
        name="birthdate"
        id='date-time-picker'
        className='form-control'
       
          onChange={(date) => {
            setPicker(date) 
            
          }}
      />
      </Fragment>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
    <Card style={{width:'584px', float:'right'}}>
      
    <CardHeader>
          <CardTitle tag='h4'>Important client info</CardTitle>
          <p className='fw-bold'>Important client info will only be visible to you and team members.</p>
        </CardHeader>
          <hr />
          <CardBody>
          <CardText>
            Client info
          <Input type='textarea' onChange={setData} value={client.clientInfo} name='clientInfo' id='exampleText' rows='3' placeholder='Textarea' />
          </CardText>
        
          </CardBody>
      </Card>
    <Card style={{width:'584px', float:'right'}}>
      
    <CardHeader>
          <CardTitle tag='h4'>Additional info</CardTitle>
        </CardHeader>
          <hr />
          <CardBody>
          <Label for='phone-number'>Phone Number</Label>
      <InputGroup className='input-group-merge'>
        <InputGroupText>+91</InputGroupText>
        <Cleave className='form-control' name='additionalPhone' placeholder='1 234 567 8900' options={options} id='phone-number' />
      </InputGroup>
      <Label className='form-label' for='select-basic'>
      Client source
          </Label>
          <Input type='select' onChange={setData}  name='clientSource' id='select-basic'>
            <option>Walk-in</option>
            <option>...</option>
            <option>...</option>
            
          </Input>
          </CardBody>
      </Card>
    <Card style={{width:'584px', float:'right'}}>
      
    <CardHeader>
          <CardTitle tag='h4'>Address</CardTitle>
        </CardHeader>
          <hr />
          <CardBody>
         <img src={plusCircle} alt="" /><span className='fs-4 ms-2 text-success'>Add new address</span>
          </CardBody>
      </Card>

    
                    </div>
                    <div className="col-lg-5">
                      <Card style={{width:'350px'}}>
                        <div className='m-2'>
                        <h4>Notifications</h4>
                        <p>Choose how you’d like to keep this
client up to date about their <br />
appointments and sales, like vouchers <br />
and memberships.</p>    
                         
                        </div>
                        <hr />
                        <div className="m-2">
                          <h5>Client notifications</h5>
                          <div className='d-flex mt-2 flex-row'>
           
            <div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div>
            <Label for='switch-success' className='form-check-label mb-50'>
            Send email notifications
            </Label>
          </div>
                        </div>
                        <hr className='mt-2'/>
                        <div className="m-2">
                          <h5>Marketing notifications</h5>
                          <div className='d-flex mt-2 flex-row'>
           
            <div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div>
            <Label for='switch-success' className='form-check-label mb-50'>
            Client accepts email <br />
marketing notifications
            </Label>
          </div>
                          <div className='d-flex mt-2 flex-row'>
           
            <div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div>
            <Label for='switch-success' className='form-check-label mb-50'>
            Clients accepts text message <br />
marketing notifications
            </Label>
          </div>
                        </div>
                        <hr className='mt-2'/>
                        <div className='m-2'>
                          <h5>Preferred language</h5>

          <Input type='select' onChange={setData} name='language' id='select-basic'>
            <option>Select languages</option>
            <option>English</option>
            <option>Hindi</option>
            
          </Input>
                        </div>
                      </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient