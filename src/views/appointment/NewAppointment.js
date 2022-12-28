import React, { Fragment, useState } from 'react'
import "../mycss/NewAppointment.css"
import Flatpickr from 'react-flatpickr'
import { Search, Repeat, ChevronDown, X } from 'react-feather'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Label } from 'reactstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './appointmentRedux'

const NewAppointment = () => {
  const [picker, setPicker] = useState(new Date())
  const [startTime, setStartTime] = useState(null)
  const [teamMember, setTeamMember] = useState(null)
  const [duration, setDuration] = useState(null)
  const [service, setService] = useState(["Choose a service"])
  const [display1, setDisplay1] = useState("none")
  const [display2, setDisplay2] = useState("none")
  const SelectDuration = (current) => {
    setDuration(current.target.value)
  }
  const SelectStartTime = (current) => {
    setStartTime(current.target.value)
  }
  const SelectTeamMember = (current) => {
   setTeamMember(current.target.value)
   setDisplay2("none")
  }
  const SelectService = (current) => {
  setService(current.target.textContent.split(/\s+/))
  setDisplay1("none")
} 
  const dispatch = useDispatch()
const { PostAppointment } = bindActionCreators(actionCreators, dispatch)

const history = useHistory()


  const saveAppointment = () => {
    if (service[0] === "Choose a service") {
       setDisplay1('block')
    } else if (teamMember === null) {
       setDisplay2('block')
    } else {
    PostAppointment([picker, startTime, service, duration, teamMember])
    history.push('/timegraph')
    }
  }
  return (
    <div className='new-appointment-container'>
      <div className="top-container-aa1">
      <div>New appointment</div>
      <NavLink to='/timegraph'>
      <X size={30} className='top-cross-aa1'/>
      </NavLink>
      </div>
      <div className="left-container-aa1">
          <div className="box-aa1">
        <div style={{cursor:"pointer"}} className="date-box-aa1 d-flex align-items-center" ><Fragment>
      <Flatpickr
        value={picker}
        id='hf-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'm-d-y'
        }}
      />
    </Fragment>
</div>
        <div style={{cursor:"pointer"}} className="repeatation d-flex align-items-center" ><div style={{paddingRight:"4px"}} className='d-flex align-items-start repeat'><Repeat size={15}/></div><div className='repeat'> Repeat</div></div>
        </div>
        <div className="box-bb1">
          <div className="select-time d-flex flex-column">
            <Label className='form-label text-aa1' for='select-lg'>
            Start time
          </Label>
          <Input type='select' name='select' bsSize='lg' id={'select-lg'} onChange={SelectStartTime}>
              <option value="12:00">12:00 am</option>
              <option value="12:05">12:05 am</option>
              <option value="12:10">12:10 am</option>
              <option value="12:15">12:15 am</option>
              <option value="12:20">12:20 am</option>
              <option value="12:25">12:25 am</option>
          </Input>
          </div>
          <div className="service d-flex flex-column">
            <label htmlFor="" className='text-aa1'>
              service
              </label>
            <UncontrolledButtonDropdown  className="service-field">
              <DropdownToggle style={{background:"white", padding:"10px 10px 8px", margin:"0 4px"}} color="light">
              <div className='text-bb1 d-flex justify-content-between'><div>{service[0]}</div> <div size={10}><ChevronDown/></div></div>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu' style={{width:"100%"}}>
                  <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Hair</div>
                </div>
                <DropdownItem onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1'>Haircut</div>
<div className='text-ee1'> 45min</div>
</div>
<div className='text-dd1'> ₹40</div>
                </DropdownItem>
                <DropdownItem onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1'>Hair-Color</div>
<div className='text-ee1'> 1h 45miin</div>
</div>
<div className='text-dd1'> ₹57</div>
                </DropdownItem>
                <DropdownItem onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SelectService}>Blow-Dry</div>
<div className='text-ee1'> 35min</div>
</div>
<div className='text-dd1'> ₹35</div>
                </DropdownItem>
                <DropdownItem onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SelectService}>Balayage</div>
<div className='text-ee1'> 2h 30min</div>
</div>
<div className='text-dd1'> ₹150</div>
                </DropdownItem>
                <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Face</div>
                </div>
                <DropdownItem onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SelectService}>Facial</div>
<div className='text-ee1'> 1h</div>
</div>
<div className='text-dd1'> ₹115</div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <div style={{display:display1}} className='mb-1 empty-warning'>Service is required</div>
          </div>
          <div className="duration d-flex flex-column">
          <Label className='form-label text-aa1' for='select-lg'>
              Duration
              </Label>
            <Input type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectDuration}>
              <option value="30min">30min</option>
              <option value="35min">35min</option>
              <option value="40min">40min</option>
              <option value="45min">45min</option>
              <option value="50min">50min</option>
              </Input>
          </div>
          <div className="team-member d-flex flex-column">
          <Label className='form-label text-aa1' for='select-lg'>
              Team member
              </Label>
              <Input type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectTeamMember}>
                <option value={null}>Select a team member</option>
                <option value="Renu">Renu</option>
                <option value="Veerat">Veerat</option>
                <option value="Chaman">Chaman</option>
                <option value="Tiku">Tiku</option>
                </Input>
            <div style={{display:display2}} className='mb-1 empty-warning'>Employee is required</div>

          </div>
        </div>
        { service[0] !== "Choose a service" && teamMember !== null && <div className="box-bb1 box-dd1">
        <div className="select-time d-flex flex-column">
            <Label className='form-label text-aa1' for='select-lg'>
            Start time
          </Label>
          <Input type='select' name='select' bsSize='lg' id='select-lg'>
          <option value="12:00">12:00 am</option>
              <option value="12:05">12:05 am</option>
              <option value="12:10">12:10 am</option>
              <option value="12:15">12:15 am</option>
              <option value="12:20">12:20 am</option>
              <option value="12:25">12:25 am</option>
          </Input>
          </div>
          <div className="service d-flex flex-column">
            <label htmlFor="" className='text-aa1'>
              service
              </label>
            <UncontrolledButtonDropdown  className="service-field">
              <DropdownToggle style={{background:"white", padding:"10px 10px 8px", margin:"0 4px"}} color="light">
              <div className='text-bb1 d-flex justify-content-between'><div>Choose a service</div> <div size={10}><ChevronDown/></div></div>
              </DropdownToggle>
              <DropdownMenu style={{width:"100%"}}>
                <DropdownItem tag='div'>
                  Haircut
                </DropdownItem>
                <DropdownItem tag='div'>
                  Beard trim
                </DropdownItem>
                <DropdownItem tag='div'>
                  Haircut & Beard trim
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>}
        <div className="box-cc1 d-flex flex-column">
          <label htmlFor="Appointment notes" className='text-aa1'>Appointment notes</label>
          <textarea className='text-bb1' name="" id="" cols="30" rows="10" placeholder='Add an appointment note (visible to team only)'></textarea>
        </div>
      </div>
      <div className="right-container-aa1">
        <div className='w-100 d-flex justify-content-center'>
        <div className="search-field-aa1">
        <div className="search-icon-aa1"><Search size={18}/></div>
        <input placeholder="Search client " className='text-bb1'/>
        </div>
        </div>
        <div className="description-box-aa1">
          <div className="description-icon-aa1"><Search size={60} strokeWidth={0.5}/></div>
        <div className="description-text-aa1">Use the search to add a client or <br /> keep empty to save as walk-in</div>
        </div>
        <div className="bottom-box-aa1">
        <div className="total-amount text-cc1">Total free (0min)</div>
        <div className="btn-box-aa1 d-flex justify-content-between">
          <button className='express-checkout btn-aa1'>Express checkout</button>
          <button className="save-appointment btn-aa1" onClick={saveAppointment}>Save appointment</button>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default NewAppointment

