import axios from 'axios'
import React, { useState } from 'react'
import { Label, Input, InputGroup, InputGroupText, Button } from 'reactstrap'
import X from '../../images/ClientList/x.png'


const ServiceCharge = () => {
  const [service, setService] = useState({
    name:"",
    dec:"",
    apply:"",
    automatically:"",
    rateType:"",
    taxRate:""
  })
  const setData = (e) => {
    console.log(e?.target?.value)
    const {name, value} = e?.target
    setService((preval) => {
        return {
            ...preval,
            [name]: value
        }
     })
   }
   
   const handleAdd = async (e) => {
    e?.preventDefault()

    console.log(service)
    axios.post('http://localhost:8000/api/sansetsales/service', service)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

    return (
      <div>
      <div className='d-flex justify-content-between'>
      <div><img src={X} alt="" /></div>
      <div> <Button.Ripple color='dark' onClick={handleAdd}>Add</Button.Ripple>
</div>
</div>
        <div className='mx-5'>
            <div className="mx-5">
             
              </div>
                <div className="text-center">
                    <h1 className='text-dark fw-bolder'>Add a new service charge</h1>
                    <p className='fs-5'>Create a service charge to apply to services and items sold at checkout.</p>
                </div>
                <div className='mx-5'>
                <div className="border rounded mt-1 mx-5">
                    <hr className='mt-4'/>
                    <div className='w-50 p-3'>
                    
              <div className='d-flex justify-content-between'>
            <div><p className='text-dark'>Name</p></div>
            <div><p>0/100</p></div>
              </div>
            
            <Input type='email' onChange={setData} value={service.name} name='name' id='basicInput' placeholder='Enter Name' />
                    </div>
                    <div className='w-50 p-3'>
                    
              <div className='d-flex justify-content-between'>
            <div><p className='text-dark'>Description</p></div>
            <div><p>0/360</p></div>
              </div>
            
              <Input type='textarea' onChange={setData} value={service.dec} name='dec' id='exampleText' rows='3' placeholder='Enter a description of your service charge' />
              <p>For internal use only</p>
                    </div>
                </div>
                <div className="border rounded mt-2 mx-5 ">
                    <div className="p-2">
                    <h3 className='text-dark fw-bolder'>Set up</h3>
                    <p className='text-dark'>Create a service charge to apply to services and items sold at checkout.</p>
                    </div>
                    <hr />
                    <div className="p-2">
                <h5 className='text-dark fw-bolder'>Apply service charge on</h5>            
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' value="Full" onChange={setData}  name="apply" id='radio-success'  />
            <Label className='form-check-label' for='radio-success'>
            Full sale value
            </Label>
          </div>
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' onChange={setData} value="Only" name="apply" id='radio-success'  />
            <Label className='form-check-label' for='radio-success'>
            Only selected item types
            </Label>
          </div>
          <h5 className='text-dark fw-bolder mt-2'>Additional options</h5>
          <div className='form-check form-check-success mb-2'>
            <Input type='checkbox' onChange={setData} value="Automatically" id='success-checkbox' defaultChecked />
            <Label className='form-check-label' for='success-checkbox'>
            Automatically apply during checkout
            </Label>
          </div>
                </div>
                </div>
                <div className="border rounded mt-2 mx-5 ">
                    <div className="p-2">
                    <h3 className='text-dark fw-bolder'>Rate</h3>
                    <p className='text-dark'>Set the service charge rate.</p>
                    </div>
                    <hr />
                    <div className="p-2">
                <h5 className='text-dark fw-bolder'>Rate type</h5>            
                <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Flat rate
            </Label>
          </div>
          <div className="ms-3 mt-1">
          <h6 className='text-dark fw-bolder'>Rate value</h6>
          <InputGroup className='mb-2 ms-2 w-50'>
        <InputGroupText>
            ₹
        </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>  
          </div>
          <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Percentage
            </Label>
          </div>
          <div className='form-check form-check-success mt-1'>
            <Input type='radio' name='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
            Only selected item types
            </Label>
          </div>
            
                </div>
                </div>
                <div className="border rounded mt-2 mx-5">
                    <h3 className='text-dark fw-bolder p-2'>Tax rate</h3>
                    <hr />
                    <div className='mb-1 ms-2 w-50'>
          <Label className='form-label text-dark'  for='select-basic'>
          Tax
          </Label>
          <Input type='select' onChange={setData} name='select' id='select-basic'>
            <option>No Tax</option>
            <option>10%</option>
            <option>20%</option>
          </Input>
        </div>
                </div>
                </div>
            </div>
        
      </div>
    )
}

export default ServiceCharge