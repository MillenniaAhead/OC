import React from 'react'
import {  Input, Label } from 'reactstrap'
const CountSublayout = () => {
  return (
    <div>
        <div class="hstack gap-3">
             <div>
             <div class="bg-light border">Stocktake #1</div>
            <div class="bg-light border text-secondary">Started just now</div>
             </div>
            <div class="bg-light border ms-auto">
            <div className='form-check form-switch'>
            <Input disabled type='switch' name='customSwitchDisabled' id='exampleCustomSwitchDisabled' />
            <Label for='exampleCustomSwitchDisabled' className='form-check-label'>
            Quick-scan counting
            </Label>
          </div>
            </div>
       
            
            </div>
    </div>
  )
}

export default CountSublayout