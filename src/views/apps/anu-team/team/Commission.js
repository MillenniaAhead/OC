import React, { useState } from 'react'
import { Button, Input, Label } from 'reactstrap'
import '../mycss3/Permissions.css'
import axios from 'axios'

const Commission = () => {
  //For alert
  const [visible1, setVisible1] = useState(false)
  //For select commissions
   const [commission0, setCommission] = useState(['Calculate by item sale price before discount', 'Calculate by item sale price including tax', 'Calculate by service price before membership discount'])
   const CommissionData = (event) => {
    if (commission0.includes(event.target.value)) {
      const deselect = commission0.filter(
        (mycommission) => mycommission !== event.target.value
        )
        setCommission(deselect)
      } else {
        setCommission([...commission0, event.target.value])
    }
  }

  //For store data to database
  const HandleSubmit = () => {
    axios.post('http://localhost:4000/api/commissions', { commission:commission0 })
    .then(res => {
      console.log(res)
      setVisible1(true)
      setTimeout(() => {
        setVisible1(false)
      }, 3000)
    })
    .catch(err => console.log(err))
    console.log(commission0)
  }


  return (
    <div className="commission-container-x2a" style={{marginBottom:"70px"}}>
      {/* for alert */}
      <div className="my-alert-comp my-alert-comp-2">
      <Alert color='danger' isOpen={visible1}>
        <div className='alert-body text-center'>
        Commission added successfully
        </div>
      </Alert>
      </div>
      <div className="top-x2a mt-2 mb-2">
      <div>
        <div className='mb-1'>
          <span className='text-x1a'>Settings</span>
          <span className='text-x1c' style={{marginLeft:'8px'}}>commssions</span>
        </div>
        <div className='text-x1b'>Commission</div>
      </div>
      <Button onClick={HandleSubmit} color='dark' style={{height:'fit-content'}} className='fs-3 fw-bolder btn-x2a'>Save</Button>
      </div>
      <div className="commission-body-x2a">
        <div className="d-flex align-items-center mb-1">
        <div className='form-check form-check-success'>
            <Input checked={commission0.some((commission) => commission === "Calculate by item sale price before discount")} onChange={CommissionData} name='commission' value='Calculate by item sale price before discount' type='checkbox' id='primary-checkbox1'/>
            <Label className='form-check-label' style={{color:'black', fontSize:'17px'}} for='primary-checkbox1'>
            Calculate by item sale price before discount
            </Label>
          </div>
        </div>
        <div className="d-flex align-items-center">
        <div className='form-check form-check-success'>
            <Input checked={commission0.some((commission) => commission === "Calculate by item sale price including tax")} onChange={CommissionData} name='commission' value='Calculate by item sale price including tax' type='checkbox' id='primary-checkbox2'/>
            <Label className='form-check-label' style={{color:'black', fontSize:'17px'}} for='primary-checkbox2'>
            Calculate by item sale price including tax
            </Label>
          </div>
        </div>
        <div className='text-x2a'>Changes to commission and tax settings will only apply to new invoices,
existing invoices are not impacted.</div>
        <div className="d-flex align-items-center">
        <div className='form-check form-check-success'>
            <Input checked={commission0.some((commission) => commission === "Calculate by service price before membership discount")} onChange={CommissionData} name='commission' value='Calculate by service price before membership discount' type='checkbox' id='primary-checkbox3'/>
            <Label className='form-check-label' style={{color:'black', fontSize:'17px'}} for='primary-checkbox3'>
            Calculate by service price before membership discount
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commission
