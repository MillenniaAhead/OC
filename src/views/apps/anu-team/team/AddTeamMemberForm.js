import React, { useState } from 'react'
import { Camera, X, Home, Search } from 'react-feather'
import { Label, Input, InputGroup, InputGroupText, Button, Modal, ModalFooter, ModalBody, ModalHeader, ButtonGroup } from 'reactstrap'
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { NavLink } from 'react-router-dom'

const AddTeamMemberForm = () => {

  //for date pickr
  const [picker1, setPicker1] = useState(new Date())
  const [picker2, setPicker2] = useState(new Date())
  const [picker3, setPicker3] = useState(new Date())

  //For buttonGroup
  const [rSelected, setRSelected] = useState(1)

  //For modals 
  const [centeredModal, setCenteredModal] = useState(false)
  const [centeredModal1, setCenteredModal1] = useState(false)
  //For Collect data from input fields
  const [formData, setFormData] = useState({notes:'', allow_calendar_booking:"allow-calendar-booking", color:'#FF6A8D', team_member_permission:'5'})
  //For allow booking from calendar 
  const [switch1, setswitch1] = useState(true)
  //for service section
  const [block1, setBlock1] = useState()

  //For select services from modal
  const [service, setService] = useState([])

  //For collect commission modal data
  const [commissionData, setCommissionData] = useState({effective_date:picker3})
  
  //For select services from modal
  const addService = (event) => {
    if (service.includes(event.target.value)) {
      const deselect = service.filter(
        (myservice) => myservice !== event.target.value
        )
        setService(deselect)
      } else {
      setService([...service, event.target.value])
    }
  }


  //For Collect data from input fields
  const collectData = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value})
      
  }


  //For collect image data
  const collectImage = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  //On click of add new member
  const submitForm = () => {
    console.log({...formData, start_date:picker1, end_date:picker2 })
    console.log({...commissionData, effective_date:picker3, services:service})
  }

  //For allow booking from calendar
  const switch1Fun = (e) => {
    setswitch1(!switch1)
    if (switch1) {
      setFormData({...formData, [e.target.name]:""})
      setBlock1({display:'none'})
    } else {
      setFormData({...formData, [e.target.name]:e.target.value})
      setBlock1()
    }
  }


  //For select a color
const selectColor = (e) => {
    e.target.style.border = '2px solid blue'
  }

  //For collect commision modal info
  const CollectCommissionData = (e) => {
       setCommissionData({...commissionData, [e.target.name]:e.target.value})
  }

    return (
        <div className="add-team-member-form-container-va" style={{marginBottom:"70px"}}>
            <div className="top-va">
                <NavLink to="/businessSettings"><div><X size={45}  strokeWidth={1.2}/></div></NavLink>
                <Button.Ripple onClick={submitForm} className="btn-va" color='dark'>Add team member</Button.Ripple>
            </div>
            <div className="new-member-body-va">
                <div className='mb-2 text-vc'>Add new team member</div>
                <div className="form-box-va">
                    <div className='top-info-va'>
                    <div className='text-va'>Basic info</div>
                    </div>
                    <div className="top-info-va">
                        <div className='box-vc'>
                          <label htmlFor="team_member_profile_image">
                        <div className='select-photo-va' style={{cursor:'pointer'}}><Camera size={40} color="#1bb70b" /></div>
                        </label>
                        <input onChange={collectImage} style={{display:'none'}} type="file" name="team_member_profile_image" id="team_member_profile_image" />
                        <div className='input-wrapper-va'>
                            <div className='box-vd'>
                                <div className='me-1 input-va'>
                    <Label className='text-vb' for='first-name'>
                    First name
                    </Label>
                    <Input type='text' name="first_name" id='first-name' onChange={collectData} bsSize='lg' placeholder='' />
                    </div>
                    <div className="input-va">
                    <Label className='text-vb' for='last-name'>
                    Last name
                    </Label>
                    <Input  type='text' name='last_name' id='last-name' onChange={collectData} bsSize='lg' placeholder='' />
                    </div>
                    </div>
                    <Label className='text-vb mt-1' for='team-member-title'>
                    Team member title
                    </Label>
                    <Input name="team_member_title" type='text' onChange={collectData} id='team-member-title' bsSize='lg' placeholder='' />
                    <div className='text-ve fs-6'>This title will be visible to clients</div>
                    </div>
                    <div className='form-floating mb-0'>
                    </div>
                    </div>
                    <Label className='text-vb mt-1' for='notes'>
            Notes (Optional)
          </Label>
          <Input
            name='notes'
            type='textarea'
            id='notes'
            onChange={collectData}
            placeholder='Add private notes viewable in the team member settings only'
            style={{ minHeight: '100px', fontSize:"16px"}}
            className={classnames({ 'text-danger': formData.notes.length > 1000 })}
          />
        <span
          className={classnames('textarea-counter-value float-end', {
            'bg-danger': formData.notes.length > 1000
          })}
        >
          {`${formData.notes.length}/1000`}
        </span>
        </div>
        <div className="top-info-va">
            <div className='text-vb text-vg'>Contact</div>
            <div className='mb-1 text-vf'>Team member contacts are confidential and won't be shared with your clients.</div>
            <div className="box-vd">
            <div className='input-va me-1'>
            <Label className='text-vb' for='email'>
                    Email
                    </Label>
                    <Input type='text' name='email' id='email' onChange={collectData} bsSize='lg' placeholder='mail@example.com' />
                    </div>
        <div className='input-va'>
        <Label className='text-vb' for='input-large'>
                    Mobile number
                    </Label>
        <InputGroup className=''>
        <InputGroupText>@</InputGroupText>
        <Input name='mobile_number' onChange={collectData} bsSize='lg' placeholder='Username' />
      </InputGroup>
      </div>
      </div>
        </div>
        <div className="top-info-vb">
            <div className='text-vb mb-1 text-vg'>Employment</div>
            <div className='box-vd'>
            <div className='input-va me-1'>
            <Label className='form-label text-vb' for='start-date'>
        Start date
      </Label>
      <Flatpickr className='form-control' name='start_date' value={picker1} onChange={date => setPicker1(date)} id='start-date' />
      </div> 
      <div className='input-va'>
      <Label className='form-label text-vb' for='end-date'>
        End date
      </Label>
      <Flatpickr className='form-control' value={picker2} onChange={date => setPicker2(date)} id='end-date' />
      </div> 
      </div>
        </div>
                </div>
            
            <div className="form-box-va">
                <div className='top-info-va'>
                <div className='text-va'>Work at</div>
                <div className='text-vf'>Choose the locations where this team member works.</div>
                </div>
                <div className='top-info-vb d-flex align-items-center'>
                    <div className='address-logo-va me-1'><Home size={40} color="#1bb70b"/></div>
                    <div style={{width:'fit-content'}}>
                        <div className="text-vb">UIUX Designer</div>
                        <div className='text-ve fs-5'>No business address added</div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>
                    Booking
                    </div>
                </div>
                <div className="top-info-vb">
                    <div className='d-flex'>
                    <div className='form-switch form-check-success me-1'>
              <Input onChange={switch1Fun} type='switch' id='allow-calendar-booking' name='allow_calendar_booking' value='allow-calendar-booking' checked={switch1} />
            </div>
            <div>
                        <label style={{cursor:'pointer'}} htmlFor='allow-calendar-booking' className='text-vb'>Allow calendar bookings</label>
                        <div className="text-ve fs-5">Allow this team member to receive bookings on the calendar.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
            <div className='text-va'>Calendar colour</div>
                <div className='text-vf'>Choose a colour to see this team members appointments in the calendar.</div>
                </div>
                <div className="top-info-vb">
                <div className="text-vb mb-1">Select colour</div>
                <div className='d-flex'>
                <Label onClick={selectColor} for='color-1' className='btn-vb btn-vb1'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#FF6A8D' id='color-1' defaultChecked/>
            </div>
                <Label onClick={selectColor} for='color-2' className='btn-vb btn-vb2'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E775EA' id='color-2'/>
            </div>
                <Label onClick={selectColor} for='color-3' className='btn-vb btn-vb3'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#ABC6EF' id='color-3'/>
            </div>
                <Label onClick={selectColor} for='color-4' className='btn-vb btn-vb4'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#588CEB' id='color-4'/>
            </div>
                <Label onClick={selectColor} for='color-5' className='btn-vb btn-vb5'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#5FE2E2' id='color-5'/>
            </div>
                <Label onClick={selectColor} for='color-6' className='btn-vb btn-vb6'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#16D8B5' id='color-6'/>
            </div>
                <Label onClick={selectColor} for='color-7' className='btn-vb btn-vb7'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#57C589' id='color-7'/>
            </div>
                <Label onClick={selectColor} for='color-8' className='btn-vb btn-vb8'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E4D16BA6' id='color-8'/>
            </div>
                <Label onClick={selectColor} for='color-9' className='btn-vb btn-vb9'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E4E831' id='color-9'/>
            </div>
                <Label onClick={selectColor} for='color-10' className='btn-vb btn-vb10'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E8C263' id='color-10'/>
            </div>
                </div>
                </div>
            </div>
            <div className="form-box-va" style={block1}>
                <div className="top-info-va">
                    <div className='text-va'>Services</div>
                    <div className='text-vf'>Add the services this team member can offer.</div>
                </div>
                <div className="top-info-vb">
                    <div className='services-box-va'>
                    <div className='text-vf'>All services (5)</div>
                    <div onClick={() => setCenteredModal1(!centeredModal1)} style={{color:"#1bb70b", cursor:'pointer'}} className='text-vf'>Edit</div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>Commission</div>
                    <div className='text-vf'>Set how much commission this team member makes.You can set tiered commission based on different
sales ranges for services,products,vochers and membership. <NavLink to="#">Learn more</NavLink></div>
                 </div>
                    <div className="top-info-vb">
                        <div style={{cursor:'pointer'}} onClick={() => setCenteredModal(!centeredModal)} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
            </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>Team member permission</div>
                </div>
                <div className="top-info-vb">
                    <div className="w-50">
<input onChange={collectData} name='team_member_permission' type="range" className="form-range" min="0" max="5" id="customRange2"/>
</div>
                </div>
            </div>
            </div>

            {/* Select services */}
            <Modal
                        isOpen={centeredModal1}
                        toggle={() => setCenteredModal1(!centeredModal1)}
                        className="modal-dialog-centered my-modal-va p-0"
                      >
          <div className="d-flex justify-content-between p-1"><div className="modal-option-heading-a5">Select services</div><X style={{cursor:'pointer'}} onClick={() => setCenteredModal1(!centeredModal1)} /></div>
                        <ModalBody className="my-modal-a5">
                          <div className="modal-option-search-box-wrapper-a5">
                          <InputGroup className="input-group-merge mt-1 mb-1">
        <InputGroupText>
          <Search size={18} />
        </InputGroupText>
        <Input style={{fontSize:'22px', fontWeight:'500', color:'black'}} placeholder='' />
      </InputGroup>
                          </div>
                          <Label for="all-services"  className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="all_services"
                                value="All services"
                                id='all-services'
                                onChange={addService}
                              />
                            </label>
                            <div className="list-item-names-d5">All services</div>
                          </Label>
                          <Label for='Hair' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="Hair"
                                value="Hair"
                                readOnly
                                id='Hair'
                                onChange={addService}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-b5">Hair</div>
                            </div>
                          </Label>
                          <Label for="Haircut" className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service2"
                                value="Haircut "
                                id='Haircut'
                                onChange={addService}
                                readOnly
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Haircut</div>
                            <div className="list-item-names-c5">30 min</div>
                            </div>
                          </Label>
                          <Label for='Beard-Trim' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service3"
                                value="Beard Trim"
                                id='Beard-Trim'
                                onChange={addService}
                                readOnly
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Beard Trim</div>
                            <div className="list-item-names-c5">30 min</div>
                            </div>
                          </Label>
                          <Label for='Bows-&-Lashes' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service3"
                                value="Brows & Lashes"
                                id='Bows-&-Lashes'
                                onChange={addService}
                                readOnly
                              />
                            </label>
                            <div>
                            <div className="list-item-names-b5">Brows & Lashes</div>
                            </div>
                          </Label>
                          <Label for='Classic-Fill' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service3"
                                value="Classic Fill"
                                id='Classic-Fill'
                                onChange={addService}
                                readOnly
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Classic Fill</div>
                            <div className="list-item-names-c5">1 h</div>
                            </div>
                          </Label>
                          <div className="d-flex justify-content-center mt-1">
                            <Button.Ripple
                              color="dark me-1"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                              outline
                            >
                              close
                            </Button.Ripple>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>

            {/* //Commission modal */}
            <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered my-modal-va p-0'>
          <div className="top-info-va">
            <div className='d-flex justify-content-between'>
           <div className='text-va'>Commission</div>
           <div onClick={() => setCenteredModal(!centeredModal)}><X style={{cursor:'pointer'}} size={30}/></div>
           </div>
           <div className='text-vf'>Set how much commission Kondeti can make. You can set tiered commission based
on different sales ranges for services, products, vouchers and memberships.</div>
</div>
      <div className="top-info-va box-vd">
        <div className='me-1 input-va'>
<Label className='form-label text-vb' for='default-picker'>
        Effective date
      </Label>
      <Flatpickr style={{fontSize:"800"}} className='form-control' value={picker3} onChange={date => setPicker3(date)} id='default-picker' />
      <div className="text-ve fs-6" style={{marginTop:"5px"}}>The first day Kondeti gets commission.</div>
      </div>
      <div className='input-va'>
      <Label className='form-label text-vb' for='select-lg'>
            Commission cycle
          </Label>
          <Input onChange={CollectCommissionData} type='select' name='commission_cycle' id='select-lg'>
            <option>Every day</option>
            <option>Every week</option>
            <option>Every 2 weeks</option>
            <option>Every 4 weeks</option>
            <option>Every month</option>
            <option>Every quarter</option>
            <option>Every 6 months</option>
            <option>Every year</option>
          </Input>
          <div className="text-ve fs-6" style={{marginTop:"5px"}}>If you set tiers for commission, this is the 
timeframe when the cycle will reset.</div>
</div>
          </div>
          <div className="top-info-va">
          <div className='text-vb'>Service commission</div>
          <div style={{background:'rgba(229, 229, 229, 0.4)'}} >
            <div className='d-flex flex-row-reverse' style={{padding:'4px'}}>
          <X/>
          </div>    
          <div className="commission-input-wrapper-va">
            <div className='d-flex'>
              <div>
                <Label className='text-vb'>
                  From
                </Label>
                <Input type='text' name="from" id='from' onChange={CollectCommissionData} bsSize='lg' placeholder='0.00' />
              </div>
              <div className='ms-1 me-1'>
                <Label className='text-vb'>
                  to
                </Label>
                <Input type='text' name="to" id='to' onChange={CollectCommissionData} bsSize='lg' placeholder='&#8734;' />
              </div>
            </div>
            <div className='d-flex'>
              <div className='box-ve'>
            <Label className='text-vb'>
                  Commission
                </Label>
            <InputGroup>
        <InputGroupText>%</InputGroupText>
        <Input bsSize='lg' placeholder='0.00' />
      </InputGroup>
      </div>
      <ButtonGroup style={{alignSelf:'end'}} className='ms-1 me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected(2)} active={rSelected === 2}>
            %
          </Button>
          <Button color='success' onClick={() => setRSelected(3)} active={rSelected === 3}>
          </Button>
        </ButtonGroup>
            </div>
          </div>
          </div> 
          <button onClick={() => setCenteredModal(!centeredModal)} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></button>
          </div>
          <div className="top-info-va">
          <div className='text-vb'>Product commission</div>
          <button onClick={() => setCenteredModal(!centeredModal)} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></button>
          </div>
          <div className="top-info-va">
          <div className='text-vb'>Voucher commission</div>
          <button onClick={() => setCenteredModal(!centeredModal)} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></button>
          </div>
          <ModalFooter>
            <Button color='dark' onClick={() => setCenteredModal(!centeredModal)}>
              Cancel
            </Button>
            <Button color='dark' onClick={() => setCenteredModal(!centeredModal)}>
              Save
            </Button>
            </ModalFooter>
        </Modal>
        </div>
    )
}

export default AddTeamMemberForm