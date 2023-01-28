import React, { useState } from 'react'
import { Button, Input, Label } from 'reactstrap'
import '../mycss3/Permissions.css'

const Commission = () => {
   const [commisssionData, setCommisssionData] = useState(['Calculate by item sale price before discount', 'Calculate by item sale price including tax', 'Calculate by service price before membership discount'])

   const CommissionData = (event) => {
    if (commisssionData.includes(event.target.value)) {
      const deselect = commisssionData.filter(
        (mycommission) => mycommission !== event.target.value
        )
        setCommisssionData(deselect)
      } else {
        setCommisssionData([...commisssionData, event.target.value])
    }
  }

  const HandleSubmit = () => {
    console.log(commisssionData)
  }


  return (
    <div className="commission-container-x2a" style={{marginBottom:"70px"}}>
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
            <Input onChange={CommissionData} name='commission' value='Calculate by item sale price before discount' type='checkbox' id='primary-checkbox1' defaultChecked />
            <Label className='form-check-label' style={{color:'black', fontSize:'17px'}} for='primary-checkbox1'>
            Calculate by item sale price before discount
            </Label>
          </div>
        </div>
        <div className="d-flex align-items-center">
        <div className='form-check form-check-success'>
            <Input onChange={CommissionData} name='commission' value='Calculate by item sale price including tax' type='checkbox' id='primary-checkbox2' defaultChecked />
            <Label className='form-check-label' style={{color:'black', fontSize:'17px'}} for='primary-checkbox2'>
            Calculate by item sale price including tax
            </Label>
          </div>
        </div>
        <div className='text-x2a'>Changes to commission and tax settings will only apply to new invoices,
existing invoices are not impacted.</div>
        <div className="d-flex align-items-center">
        <div className='form-check form-check-success'>
            <Input onChange={CommissionData} name='commission' value='Calculate by service price before membership discount' type='checkbox' id='primary-checkbox3' defaultChecked />
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
