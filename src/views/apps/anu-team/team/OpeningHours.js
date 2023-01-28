import React, { useState } from 'react'
import '../mycss3/AddTeamMemberForm.css'
import '../mycss3/OpeningHours.css'
import { Input, Label, Button } from 'reactstrap'
import { X } from 'react-feather'

const OpeningHours = () => {
    const [mondayTime, setMondayTime] = useState({})
    const [tuesdayTime, setTuesdayTime] = useState({})
    const [wednesdayTime, setWednesdayTime] = useState({})
    const [thursdayTime, setThursdayTime] = useState({})
    const [fridayTime, setFridayTime] = useState({})
    const [saturdayTime, setSaturdayTime] = useState({})

    const mondayFun = (e) => {
        setMondayTime({...mondayTime, [e.target.name]:e.target.value})
    }
    
    const tuesdayFun = (e) => {
        setTuesdayTime({...tuesdayTime, [e.target.name]:e.target.value})
    }

    const wednesdayFun = (e) => {
        setWednesdayTime({...wednesdayTime, [e.target.name]:e.target.value})
    }

    const thursdayFun = (e) => {
        setThursdayTime({...thursdayTime, [e.target.name]:e.target.value})
    }

    const fridayFun = (e) => {
        setFridayTime({...fridayTime, [e.target.name]:e.target.value})
    }

    const saturdayFun = (e) => {
        setSaturdayTime({...saturdayTime, [e.target.name]:e.target.value})
    }
    const showData = () => {
        console.log({one:mondayTime, two:tuesdayTime, three:wednesdayTime, four:thursdayTime, five:fridayTime, six:saturdayTime})
    }
    return (
        <div className="opening-hours-container-qqa" style={{marginBottom:"70px"}}>
            <div className="top-va" style={{borderBottom:"1px solid #1bb70b"}}>
                <div><X size={45} strokeWidth={1.2} /></div>
                <Button.Ripple className="btn-va" color='dark' onClick={showData}>Save</Button.Ripple>
            </div>
            <div className="opening-hours-body-">
                <div className='text-qqa'>
                    Opening hours
                </div>
                <div className="main-box-qqa">
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox1' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox1'>
                                Monday
                            </Label>
                        </div>
                        <Input onChange={mondayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onChange={mondayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox2' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox2'>
                                Tuesday
                            </Label>
                        </div>
                        <Input onChange={tuesdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onChange={tuesdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox3' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox3'>
                                Wednesday
                            </Label>
                        </div>
                        <Input onChange={wednesdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onClick={wednesdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox4' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox4'>
                                Thursday
                            </Label>
                        </div>
                        <Input onChange={thursdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onChange={thursdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox5' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox5'>
                                Friday
                            </Label>
                        </div>
                        <Input onChange={fridayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onChange={fridayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
                    <div className="child-box-qqa">
                        <div className='form-check form-check-success d-flex align-items-center checkbox-qqa'>
                            <Input type='checkbox' id='primary-checkbox6' defaultChecked />
                            <Label style={{color:'black'}} className='form-check-label fs-3 fw-bolder ms-1 ' htmlFor='primary-checkbox6'>
                                Saturday
                            </Label>
                        </div>
                        <Input onChange={saturdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='start_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='dash-qqa'>-</div>
                        <Input onChange={saturdayFun} type='select' style={{ color: 'black' }} className='fs-4 select-qqa' name='end_time' id='select-lg'>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00am</option>
                        </Input>
                        <div className='plus-qqa'>+</div>
                    </div>
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
