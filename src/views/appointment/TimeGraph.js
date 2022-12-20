import React, { useState } from 'react'
import { Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import { Settings } from 'react-feather'
import '../mycss/TimeGraph.css'

const TimeGraph = () => {
  const [picker, setPicker] = useState(new Date())

  // ** States
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

    return (
            <div className="p-3 time-graph-top-aa6 d-flex  justify-content-between">
                <div className="select-team-member-aa6">
                <Input type='select' name='select' bsSize='lg' id='select-lg'>
            <option>Working</option>
            <option>All</option>
            <option>Rahul</option>
            <option>Ravi</option>
            <option>Ajay </option>
          </Input>
                </div>
            <div className="date-picker-aa6">
            <Flatpickr
        value={picker}
        id='hf-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d'
        }}
      />
            </div>
            <div className="d-flex time-graph-top-right-aa6">
            <div className="setting-icon-aa4  me-1" style={{cursor:"pointer"}}><Settings size={25}/></div>
            <div className="select-no-of-day-aa6 me-1">
            <Input type='select' name='select' bsSize='lg' id='select-lg'>
            <option>Day</option>
            <option>3 Days</option>
            <option>Week</option>
          </Input>
          </div>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle style={{background:'black'}} caret>
        Add
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          New appointment
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          New blocked time
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          New sale
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
         Let it snow
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
            </div>
            </div>
    )
}

export default TimeGraph