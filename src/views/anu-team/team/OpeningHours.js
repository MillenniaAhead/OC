import React, { useState } from 'react'
import '../mycss3/AddTeamMemberForm.css'
import '../mycss3/OpeningHours.css'
import { Input, Label, Button, Alert } from 'reactstrap'
import { X } from 'react-feather'
import axios from 'axios'
const OpeningHours = () => {
    //For alert
    const [visible1, setVisible1] = useState(false)
    //For select start and end time
    const defaultTime = {start_time:'11:00am', end_time:"10:00pm"}
    const [daysTime, setDaysTime] = useState({
        monday: {...defaultTime},
        tuesday: {...defaultTime},
        wednesday: {...defaultTime},
        thursday: {...defaultTime},
        friday: {...defaultTime},
        saturday: {...defaultTime},
        sunday:{...defaultTime}
        })

    //For collect data from dropdown
    const handleDayTime = (day, e) => {
        setDaysTime({
        ...daysTime,
        [day]: { ...daysTime[day], [e.target.name]: e.target.value }
        })
        }            

    // For send data to database
    const showData = () => {
        axios.post('http://localhost:4000/api/openingHours', daysTime)
        .then(res => {
            console.log(res)
            setVisible1(true)
            setTimeout(() => {
              setVisible1(false)
            }, 3000)
              })
        .catch(err => console.log(err))
    }

    //For time array
    const hoursArray = [
        "12:00am", "1:00am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
        "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"
      ]

    return (
        <div className="opening-hours-container-qqa" style={{marginBottom:"70px"}}>
            {/* for alert */}
      <div className="my-alert-comp my-alert-comp-2">
      <Alert color='danger' isOpen={visible1}>
        <div className='alert-body text-center'>
        Opening hours added successfully
        </div>
      </Alert>
      </div>
            <div className="top-va" style={{borderBottom:"1px solid #1bb70b"}}>
                <div style={{cursor:"pointer"}}><X size={45} strokeWidth={1.2} /></div>
                <Button.Ripple className="btn-va" color='dark' onClick={showData}>Save</Button.Ripple>
            </div>
            <div className="opening-hours-body-">
                <div className='text-qqa'>
                    Opening hours
                </div>
                <div className="main-box-qqa">
                    {/* Monday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox1' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox1'>
                                Monday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('monday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('monday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Tuesday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox2' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox2'>
                                Tuesday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('tuesday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('tuesday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Wednesday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox3' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox3'>
                                Wednesday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('wednesday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('wednesday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Thursday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox4' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox4'>
                                Thursday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('thursday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('thursday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Friday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox5' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox5'>
                                Friday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('friday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('friday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Saturday */}
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox6' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox6'>
                                Saturday
                            </Label>
                        </div>
                        {/* dropdown */}
                        <Input value={defaultTime.start_time} onChange={(e) => handleDayTime('saturday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input value={defaultTime.end_time} onChange={(e) => handleDayTime('saturday', e)} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                        {hoursArray.map((hour, key) => <option key={key}>{hour}</option>)}
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    {/* Sunday */}
                    <div className="child-box-qqb">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqb'>
                            <Input type='checkbox' id='primary-checkbox7' defaultChecked/>
                            <Label style={{color:'black'}} className='form-check-label fs-4 ms-1 ' htmlFor='primary-checkbox7'>
                                Sunday
                            </Label>
                        </div>
                            <div className='fs-4 close-qqa'>
                                Closed
                            </div>
                    </div>
                    <div className="child-box-qqc">
                    <div className='form-switch form-check-primary'>
              <Input type='switch' id='switch-primary' name='primary' defaultChecked />
            </div>
            <div>
                        <div className='text-qqb'>Update team working hours </div>
                        <div className='text-qqc'>Override this location's team members working hours (starting from tommorow with the new working hours
you set here).  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningHours
