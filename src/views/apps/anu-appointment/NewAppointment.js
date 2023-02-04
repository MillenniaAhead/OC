import React, { useState } from 'react'
import "./mycss/NewAppointment.css"
import Flatpickr from 'react-flatpickr'
import { Search, RefreshCw, ChevronDown, X } from 'react-feather'
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Label, InputGroup, InputGroupText, Alert } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const NewAppointment = () => {

  // For services dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)

  //For date-picker
  const [picker, setPicker] = useState(new Date())
  //For collect data
  const [startTime, setStartTime] = useState(null)
  const [teamMember, setTeamMember] = useState('Select a team member')
  const [myduration, setDuration] = useState(null)
  const [service, setService] = useState(["Choose a service"])

  //For Alert message
  const [display1, setDisplay1] = useState("none")
  const [display2, setDisplay2] = useState("none")
  //For red border
  const [border1, setBorder1] = useState()
  const [border2, setBorder2] = useState()
  //For aler comp
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  //For select Start time
  const SelectStartTime = (current) => {
    setStartTime(current.target.value)
  }

  //For services dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2)
  }
  
  //For select Service name
  const SelectService = (e) => {
    setService([e.target.id])
    setDisplay1("none")
    setBorder1()
  } 
  //For select Service name
  const ChildSelectService = (e) => {
    setService([e.target.parentElement.id])
    toggleDropdown()
    e.stopPropagation()
  }
  //For select Service name
  const SecondChildSelectService = (e) => {
    setService([e.target.parentElement.parentElement.id])
    toggleDropdown()
    e.stopPropagation()
  }

//For select Duration
const SelectDuration = (current) => {
  setDuration(current.target.value)
}
//For select Team member
const SelectTeamMember = (current) => {
 setTeamMember(current.target.value)
 setDisplay2("none")
 setBorder2()
}

//for submit function
  const saveAppointment = () => {
    if (service[0] === "Choose a service") {
       setDisplay1('block')
       setBorder1({borderColor:'red'})
       setVisible1(true)
        setTimeout(() => {
          setVisible1(false)
        }, 3000)
      } else if (teamMember === "Select a team member") {
        setDisplay2('block')
        setBorder2({borderColor:'red'})
        setVisible2(true)
         setTimeout(() => {
           setVisible2(false)
         }, 3000)
    } else {
    const finalData = {date:picker, start_time:startTime, services:service, duration:myduration, team_member:teamMember}
    console.log(finalData)
    // Store data to backend with the help of axios
    axios.post('http://localhost:4000/api/newAppointments', finalData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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
        <div className="my-alert-comp">
      <Alert color='danger' isOpen={visible1}>
        <div className='alert-body text-center'>
        Please select a Service
        </div>
      </Alert>
      </div>
      <div className="my-alert-comp">
      <Alert color='danger' isOpen={visible2}>
        <div className='alert-body text-center'>
        Please select a Employee
        </div>
      </Alert>
      </div>
          <div className="box-aa1">
        <div style={{cursor:"pointer"}} className="date-box-aa1 d-flex align-items-center" >
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
</div>
        <div style={{cursor:"pointer"}} className="repeatation d-flex align-items-center" ><div style={{paddingRight:"4px"}} className='d-flex align-items-start repeat'><RefreshCw strokeWidth={2.5} size={15}/></div><div className='repeat'> Repeat</div></div>
        </div>
        <div className="box-bb1">
          <div className="select-time d-flex flex-column">
            <Label className='form-label text-aa1' for='select-lg'>
            Start time
          </Label>
          <Input type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectStartTime}>
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
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={border1}  className="service-field">
              <DropdownToggle style={{padding:"0"}} color="light">
              <div className='text-bb1 d-flex justify-content-between' style={{background:'white'}}><div>{service[0]}</div> <div size={10}><ChevronDown/></div></div>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu' style={{width:"100%", height:'300px', overflow:'scroll'}}>
                  <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Hair</div>
                </div>
                <DropdownItem id='Haircut'  onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Haircut</div>
<div className='text-ee1' onClick={SecondChildSelectService}>45min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}>₹40</div>
                </DropdownItem>
                <DropdownItem id="Hair Color" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Hair Color</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 1h 45miin</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹57</div>
                </DropdownItem>
                <DropdownItem id='Blow Dry' onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Blow Dry</div>
<div className='text-ee1' onClick={SecondChildSelectService}>35min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}>₹35</div>
                </DropdownItem>
                <DropdownItem id="Balayage" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Balayage</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 2h 30min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹150</div>
                </DropdownItem>
                <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Face</div>
                </div>
                <DropdownItem id="Facial" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Facial</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 1h</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹115</div>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
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
              <Input style={border2} type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectTeamMember}>
                <option value='Select a team member'>Select a team member</option>
                <option value="Renu">Renu</option>
                <option value="Veerat">Veerat</option>
                <option value="Chaman">Chaman</option>
                <option value="Tiku">Tiku</option>
                </Input>
            <div style={{display:display2}} className='mb-1 empty-warning'>Employee is required</div>

          </div>
        </div>
        { service[0] !== "Choose a service" && teamMember !== "Select a team member" && <div className="box-bb1 box-dd1">
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
            <ButtonDropdown isOpen={dropdownOpen2} toggle={toggleDropdown2}  className="service-field">
              <DropdownToggle style={{padding:"0"}} color="light">
              <div className='text-bb1 d-flex justify-content-between' style={{background:'white'}}><div>Select a service</div> <div size={10}><ChevronDown/></div></div>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu' style={{width:"100%", height:'300px', overflow:'scroll'}}>
                  <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Hair</div>
                </div>
                <DropdownItem id='Haircut'  onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Haircut</div>
<div className='text-ee1' onClick={SecondChildSelectService}>45min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}>₹40</div>
                </DropdownItem>
                <DropdownItem id="Hair Color" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Hair Color</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 1h 45miin</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹57</div>
                </DropdownItem>
                <DropdownItem id='Blow Dry' onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Blow Dry</div>
<div className='text-ee1' onClick={SecondChildSelectService}>35min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}>₹35</div>
                </DropdownItem>
                <DropdownItem id="Balayage" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Balayage</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 2h 30min</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹150</div>
                </DropdownItem>
                <div tag='div' className="service-option-category" >
                  <div className='text-ff1'>Face</div>
                </div>
                <DropdownItem id="Facial" onClick={SelectService} tag='div' className="service-option" >
                  <div>
                  <div className='text-dd1' onClick={SecondChildSelectService}>Facial</div>
<div className='text-ee1' onClick={SecondChildSelectService}> 1h</div>
</div>
<div className='text-dd1' onClick={ChildSelectService}> ₹115</div>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>}
        <div className="box-cc1 d-flex flex-column">
          <label htmlFor="Appointment notes" className='text-aa1'>Appointment notes</label>
          <textarea className='text-bb1' name="" id="" cols="30" rows="10" placeholder='Add an appointment note (visible to team only)'></textarea>
        </div>
      </div>
      <div className="right-container-aa1">
        <div className='w-100 d-flex justify-content-center'>
        <InputGroup className='m-2'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input style={{fontSize:'14px'}} placeholder='Search client' />
      </InputGroup>
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

