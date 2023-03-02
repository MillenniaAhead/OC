import React, { useState, useEffect } from 'react'
import "./mycss/NewAppointment.css"
import Flatpickr from 'react-flatpickr'
import { Search, RefreshCw, ChevronDown, X } from 'react-feather'
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Label, InputGroup, InputGroupText, Alert } from 'reactstrap'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const EditAppointment = () => {

  // For services dropdown
  const [dropdownOpen1, setDropdownOpen1] = useState(false)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)
  
  //For date-picker
  const [picker, setPicker] = useState(new Date())
  //For collect data
  const [startTime, setStartTime] = useState("")
  const [teamMember, setTeamMember] = useState('Select a team member')
  const [myduration, setDuration] = useState("")
  const [service, setService] = useState(["Choose a service"])
  const [notes, setNotes] = useState("")

  //For Alert message
  const [display1, setDisplay1] = useState("none")
  const [display2, setDisplay2] = useState("none")
  //For red border
  const [border1, setBorder1] = useState()
  const [border2, setBorder2] = useState()
  //For aler comp
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  //demo price to complete functionality
  const [myPrice, setMyPrice] = useState("")
  //demo services for complete functionality\
  const myServices = [{ name:'Haircut', price:40}, {name:'Hair Color', price:57}, {name:'Blow Dry', price:35}, {name:'Balayage', price:150}, {name:'Facial', price:115}]
  

  // For start time options value logic
  const times = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 5) {
      const hour = i % 12 || 12
      const minute = j < 10 ? 0 + j : j
      const amPm = i >= 12 ? "pm" : "am"
      times.push(`${hour}:${minute} ${amPm}`)
    }
  }

  //Get id by route path
  const { id } = useParams()
  
  //Get data by id for update a appointment
  useEffect(() => {
    axios.get(`http://localhost:4000/api/newAppointments/${id}`)
    .then(res => {
        setPicker(res.data.date)
        setStartTime(res.data.start_time)
        setService(res.data.services)
        setDuration(res.data.duration)
        setTeamMember(res.data.team_member)
        setNotes(res.data.appointment_note)
        setMyPrice(myServices.filter((data) => data.name === res.data.services[0])[0].price)
    })
    .catch(err => console.log(err))
  }, [])

  //For select Start time
  const SelectStartTime = (current) => {
    setStartTime(current.target.value)
  }

  //For services dropdown
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1)
  }
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2)
  }
  
  //For select Service name
  const SelectService = (e) => {
    setService([e.target.id])
    setDisplay1("none")
    setBorder1()
    setMyPrice(myServices.filter((data) => data.name === e.target.id)[0].price)
  } 
  //For select Service name
  const ChildSelectService = (e) => {
    setService([e.target.parentElement.id])
    toggleDropdown1()
    e.stopPropagation()
    setMyPrice(myServices.filter((data) => data.name === e.target.parentElement.id)[0].price)
  }
  //For select Service name
  const SecondChildSelectService = (e) => {
    setService([e.target.parentElement.parentElement.id])
    toggleDropdown1()
    e.stopPropagation()
    setMyPrice(myServices.filter((data) => data.name === e.target.parentElement.parentElement.id)[0].price)
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

//For appointment notes
const notesFun = (e) => {
  setNotes(e.target.value)
}

//For redirect
const history = useHistory()

//for submit (On Click on save appointment)
  const saveAppointment = () => {
    //If service not selected
    if (service[0] === "Choose a service") {
       setDisplay1('block')
       setBorder1({borderColor:'red'})
       setVisible1(true)
        setTimeout(() => {
          setVisible1(false)
        }, 3000)
        //If team member not selected
      } else if (teamMember === "Select a team member") {
        setDisplay2('block')
        setBorder2({borderColor:'red'})
        setVisible2(true)
         setTimeout(() => {
           setVisible2(false)
         }, 3000)
    } else {
    const finalData = {date:picker, start_time:startTime, services:service, duration:myduration, team_member:teamMember, appointment_note:notes}
    // Update data with the help of axios
    axios.put(`http://localhost:4000/api/newAppointments/${id}`, finalData)
    .then(res => {
      console.log(res)
      setVisible3(true)
      setTimeout(() => {
      history.push('/timegraph')
        setVisible3(false)
      }, 3000)
    })
    .catch(err => console.log(err))
    }
  }

  return (
    <div className='new-appointment-container'>
      {/* For alert */}
        <div className="my-alert-comp-2">
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
      <div className="my-alert-comp my-alert-comp-2">
      <Alert color='success' isOpen={visible3}>
        <div className='alert-body text-center fs-4'>
        Appointment updated successfully
        </div>
      </Alert>
      </div>
      <div className="top-container-aa1">
      <div>Edit appointment</div>
      <NavLink to='/timegraph'>
      <X size={30} className='top-cross-aa1'/>
      </NavLink>
      </div>
      <div className="left-container-aa1">
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
          {/* for start time dropdown */}
          <div className="select-time d-flex flex-column">
            <Label className='form-label text-aa1' for='select-lg'>
            Start time
          </Label>
          <Input value={startTime}  type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectStartTime}>
            {times.map((time, key) => <option key={key}>{time.split(" ")[0].split(":")[1] < 10 ? `${time.split(" ")[0].split(":")[0]}:0${time.split(" ")[0].split(":")[1]} ${time.split(" ")[1]}` : time }</option>)}
          </Input>
          </div>
          {/* for services dropdwon */}
          <div className="service d-flex flex-column">
            <label htmlFor="" className='text-aa1'>
              service
              </label>
            <ButtonDropdown isOpen={dropdownOpen1} toggle={toggleDropdown1} style={border1}  className="service-field">
              <DropdownToggle style={{padding:"10px", background:'white'}} color="light">
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
          {/* for duration dropdown */}
          <div className="duration d-flex flex-column">
          <Label className='form-label text-aa1' for='select-lg'>
              Duration
              </Label>
            <Input value={myduration} type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectDuration}>
              <option>5min</option>
              <option>10min</option>
              <option>15min</option>
              <option>20min</option>
              <option>25min</option>
              <option>30min</option>
              <option>35min</option>
              <option>40min</option>
              <option>45min</option>
              <option>50min</option>
              <option>55min</option>
              <option>1h</option>
              <option>1h 5min</option>
              <option>1h 10min</option>
              <option>1h 15min</option>
              </Input>
          </div>
          {/* for team-member dropdwon */}
          <div className="team-member d-flex flex-column">
          <Label className='form-label text-aa1' for='select-lg'>
              Team member
              </Label>
              <Input value={teamMember} style={border2} type='select' name='select' bsSize='lg' id='select-lg' onChange={SelectTeamMember}>
                <option value='Select a team member'>Select a team member</option>
                <option value="Kondeti Anusha">Kondeti Anusha</option>
                <option value="Wendy Smith">Wendy Smith</option>
                </Input>
            <div style={{display:display2}} className='mb-1 empty-warning'>Employee is required</div>

          </div>
        </div>
        {<div className="box-bb1 box-dd1">
          {/* for start time dropdown 2 */}
        <div className="select-time d-flex flex-column">
            <Label className='form-label text-aa1' for='select-lg'>
            {service.length}Start time
          </Label>
          <Input type='select' name='select' bsSize='lg' id='select-lg'>
          {times.map((time, key) => <option key={key}>{time.split(" ")[0].split(":")[1] < 10 ? `${time.split(" ")[0].split(":")[0]}:0${time.split(" ")[0].split(":")[1]} ${time.split(" ")[1]}` : time }</option>)}
          </Input>
          </div>
          {/* for services dropdwon 2 */}
          <div className="service d-flex flex-column">
            <label htmlFor="" className='text-aa1'>
              service
              </label>
            <ButtonDropdown isOpen={dropdownOpen2} toggle={toggleDropdown2}  className="service-field">
              <DropdownToggle style={{padding:"10px", background:"white"}} color="light">
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
          <textarea value={notes} onChange={notesFun} className='text-bb1' name="" id="" cols="30" rows="10" placeholder='Add an appointment note (visible to team only)'></textarea>
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
        <div className="total-amount text-cc1">₹{myPrice} {`(${myduration})`}</div>
        <div className="btn-box-aa1 d-flex justify-content-between">
          <button className='express-checkout btn-aa1'>Express checkout</button>
          <button className="save-appointment btn-aa1" onClick={saveAppointment}>Save appointment</button>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default EditAppointment

