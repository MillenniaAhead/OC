import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import Avatar from '@components/avatar'
import '../../san-report/mycss2/PaymentSummary.css'
import '../mycss3/AddTeamMemberForm.css'
import { NavLink } from 'react-router-dom'
import { Sun, X } from 'react-feather'
import { Modal, ModalFooter, Button, Input, Label } from 'reactstrap'

const WorkingHours = () => {
  //For date pickr
    const [picker, setPicker] = useState(new Date())
    //For modals
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  const [centeredModal3, setCenteredModal3] = useState(false)

  //For location permission checkbox
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)
  const [locationAccess, setLocationAccess] = useState(['Kondeti Anusha', 'Wendy Smith'])

  //For location permission checkbox
  const CollectLocationPermissionData = (e) => {
    if (e.target.value === "Kondeti Anusha") {
      setCheck1(!check1)
    } else {
      setCheck2(!check2)
    }
    if (locationAccess.includes(e.target.value)) {
      const newArray = locationAccess.filter((name) => name !== e.target.value)
      setLocationAccess([...newArray])
    } else {
      setLocationAccess([...locationAccess, e.target.value])
    }
  }

  //for Repeat schedule modal
  const [repeatData, setRepeatData] = useState({repeat_schedule:"Update this shift only"})

  //For working hour info
  const [workingHours, setWorkingHours] = useState()

  //For working hour info
  const WorkingHourData = (e) => {
    setWorkingHours({...workingHours, [e.target.name]:e.target.value})
  }

  const CollectRepeatData = (e) => {
     setRepeatData({[e.target.name]:e.target.value})
  }

  const HandleWorkingHours = () => {
    console.log(workingHours)
    console.log(repeatData)
    console.log(locationAccess)
  }

  return (
    <div className='h-100 report-container p-2'>

     <div id='payment-summary-container' className='w-100'>
         <div>
             <div className='top-box-xxx2'>
                 <div>
             <span className='text-aaa3 pe-1'>Settings</span>
             <span className='text-bbb3'>Working hours</span>
             <div className='text-ccc3'>Working hours</div>
             </div>
             </div>
             <div className='my-top-xxx1 box-sb'>
          <Flatpickr
            value={picker}
            id='range-picker'
             className='date-picker-aaa1'
            onChange={date => setPicker(date)}
            options={{
              mode: 'range',
              defaultDate: ['2020-02-01', '2020-02-15']
            }}
          />
          </div>
         </div>
           <div className="d-flex">
         <div className='table-first-column-working-hour'>
                 <div className='d-flex align-items-center'><span className='text-sa'>Team member</span><NavLink onClick={() => setCenteredModal3(!centeredModal3)} to="#" style={{color:"#1bb70b", marginLeft:"4px"}} className="text-sa">Change</NavLink></div>
                 <div className='d-flex align-items-center'><Avatar className="me-1 d-flex justify-content-center align-items-center" style={{width:"50px", height:"50px", color:"#1bb70b", background:'rgba(27, 183, 11, 0.4)'}} size="lg" content='K' /><span><p className='text-sa'>Kondeti Anusha</p><p>52h</p></span></div>
                 <div className='d-flex align-items-center'><Avatar className="me-1 d-flex justify-content-center align-items-center" style={{width:"50px", height:"50px", color:"#1bb70b", background:'rgba(27, 183, 11, 0.4)'}} size='lg' content='W' /><span><p className='text-sa'>Wendy Smith</p><p>52h</p></span></div>
             </div>
         <div className="payment-summary-body-container">
             <table className='w-100 table-aaa4'>
                 <thead className='thead-working-hour'>
                     <tr className='tr-aaa4'>
                         <th onClick={() => setCenteredModal2(!centeredModal2)}>Mon, 13 Oct</th>
                         <th>Mon, 14 Oct</th>
                         <th>wed, 15 Oct</th>
                         <th>Thu, 16 Oct</th>
                         <th>Fri, 17 Oct</th>
                         <th>Sat, 18 Oct</th>
                         <th>sun, 19 Oct</th>
                     </tr>
                 </thead>
                 <tbody className='tbody-working-hour'>
                     <tr className='tr-aaa4'>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td></td>
                     </tr>
                     <tr className='tr-aaa4'>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td><div onClick={() => setCenteredModal1(!centeredModal1)}>10:00am-7:00pm</div></td>
                     <td></td>
                     </tr>
                 </tbody>
             </table>
         </div>
         </div>
             <div className='box-sa'><Sun size={26} className="me-1"/> The team roster shows your availability for bookings and is not linked to your business opening hours. To set your opening hours, <NavLink to="#" style={{color:"#1bb70b"}}> click here </NavLink></div>
     </div>
     <div>
      {/* Edit working hours */}
     <Modal isOpen={centeredModal1} toggle={() => setCenteredModal1(!centeredModal1)} className='modal-dialog-centered my-modal-va p-0'>
        <div className='d-flex justify-content-between top-info-va'>
            <div className="fs-3 fw-bolder">Edit Kondeti's Hours</div>
            <div onClick={() => setCenteredModal1(!centeredModal1)} style={{cursor:"pointer"}}><X/></div>
        </div>
        <div className='box-sd top-info-va'> 
            <div className="text-sa fs-4 box-sc">Monday, 3 Oct</div>
          <Input onChange={WorkingHourData} type='select' style={{color:'black'}} className='box-sc fs-4 fw-bolder' name='start_time' id='select-lg'>
            <option>6:00am</option>
            <option>7:00am</option>
            <option>8:00am</option>
            <option>9:00am</option>
            <option>10:00am</option>
            <option>11:00am</option>
            <option>12:00am</option>
          </Input>
          <div className='box-se'>-</div>
          <Input onChange={WorkingHourData}  type='select' style={{color:'black'}} className='box-sc fs-4 fw-bolder' name='end_time' id='select-lg'>
            <option>6:00am</option>
            <option>7:00am</option>
            <option>8:00am</option>
            <option>9:00am</option>
            <option>10:00am</option>
            <option>11:00am</option>
            <option>12:00am</option>
          </Input>
          <button onClick={() => setCenteredModal1(!centeredModal1)} className="btn-vc"><span className="plus-va">+</span></button>
        </div>
          <div className="box-vd top-info-va">
            <div className="input-va me-1">
          <Label className='form-label text-vb' htmlFor='select-lg'>
            Repeats
          </Label>
          <Input onChange={WorkingHourData} style={{color:'black'}} className='fs-4' type='select' name='repeats' id='select-lg'>
            <option>Every day</option>
            <option>Every week</option>
            <option>Every 2 weeks</option>
            <option>Every 4 weeks</option>
            <option>Every month</option>
            <option>Every quarter</option>
            <option>Every 6 months</option>
            <option>Every year</option>
          </Input>
          </div>
            <div className="input-va">
          <Label className='form-label text-vb' htmlFor='select-lg'>
            End repeat
          </Label>
          <Input onChange={WorkingHourData} style={{color:'black'}} className='fs-4 fw-bold' type='select' name='end_repeats' id='select-lg'>
            <option>Every day</option>
            <option>Every week</option>
            <option>Every 2 weeks</option>
            <option>Every 4 weeks</option>
            <option>Every month</option>
            <option>Every quarter</option>
            <option>Every 6 months</option>
            <option>Every year</option>
          </Input>
          </div>
          </div>
        <ModalFooter>
            <Button className='fs-3' color='dark' style={{color:"red", marginRight:"auto"}} onClick={() => setCenteredModal1(!centeredModal1)} outline>
              Delete
            </Button>
            <Button className='fs-3' color='dark' onClick={() => setCenteredModal1(!centeredModal1)} outline>
              Cancel
            </Button>
            <Button className='fs-3' color='dark' onClick={() => {
              setCenteredModal1(!centeredModal1)
             HandleWorkingHours() 
             }}>
              Save
            </Button>
            </ModalFooter>
        </Modal>

        {/* Repeating modal */}
             <Modal isOpen={centeredModal2} toggle={() => setCenteredModal2(!setCenteredModal2)} className='modal-dialog-centered my-modal-va p-0'>
             <div className='d-flex justify-content-between top-info-va'>
            <div className="fs-3 fw-bolder">Edit Kondeti's Hours</div>
            <div onClick={() => setCenteredModal2(!centeredModal2)} style={{cursor:"pointer"}}><X/></div>
        </div>
        <div className="top-info-vb mt-1" style={{fontSize:'18px'}}>
        You have edited a shift that repeats weekly. Updating
upcoming shifts will overwrite Kondeti's ongoing Monday
schedule.
        </div>
        <div className='top-info-va'>
        <div className='form-check form-check-success mt-1 d-flex align-items-center'>
              <Input value='Update this shift only' onChange={CollectRepeatData}  name="repeat_schedule" type='radio' id='Update this shift only' defaultChecked />
              <Label style={{color:'black'}} className='form-check-label fs-3 ms-1' htmlFor='Update this shift only'>
              Update this shift only
              </Label>
            </div>
        <div className='form-check form-check-success mt-1'>
              <Input value='Update upcoming shifts' onChange={CollectRepeatData} type='radio' name="repeat_schedule" id='Update upcoming shifts'/>
              <Label style={{color:'black'}} className='form-check-label fs-3 ms-1' htmlFor='Update upcoming shifts'>
              Update upcoming shifts
              </Label>
            </div>
        </div>
        <ModalFooter>
            <Button className='fs-3' color='dark' onClick={() => setCenteredModal2(!centeredModal2)} outline>
              Cancel
            </Button>
            <Button className='fs-3' color='dark' onClick={() => {
              setCenteredModal2(!centeredModal2)
             HandleWorkingHours() 
             }}>Update</Button>
            </ModalFooter>
        </Modal>

        {/* UIUX Designer roster */}
        <Modal isOpen={centeredModal3} toggle={() => setCenteredModal3(!setCenteredModal3)} className='modal-dialog-centered my-modal-va p-0'>
        <div className='d-flex justify-content-between top-info-va'>
          <div>
            <div className="fs-3 fw-bolder">UIUX Designer roster</div>
            <div className='fs-4'>Assign which team members can be booked at this location. </div>
            </div>
            <div onClick={() => setCenteredModal3(!centeredModal3)} style={{cursor:"pointer"}}><X/></div>
        </div>
        <div className='top-info-va'>
          <div className='d-flex'>
        <div className='form-check form-check-success d-flex align-items-center'>
            <Input type='checkbox' id='primary-checkbox1' defaultChecked />
            <Label style={{color:'black'}} className='form-check-label ms-1 fs-4' htmlFor='primary-checkbox1'>
            All staff members
            </Label>
            </div>
            <div className='text-sb' style={{marginLeft:"5px"}}>2</div>
          </div>
          <div className='box-vd mt-1'>
          <div className='form-check form-check-success d-flex align-items-center input-va'>
            <Input checked={check1} value='Kondeti Anusha' onChange={CollectLocationPermissionData} type='checkbox' id='primary-checkbox2' />
            <Label className='form-check-label ms-1 me-1' htmlFor='primary-checkbox2'>
            <div className='d-flex align-items-center'><Avatar className="me-1 d-flex justify-content-center align-items-center" style={{width:"50px", height:"50px", color:"#1bb70b", background:'rgba(27, 183, 11, 0.4)'}} size="lg" content='K' /><div className='text-sa'>Kondeti Anusha</div></div>
            </Label>
          </div>
          <div className='form-check form-check-success d-flex align-items-center input-va'>
            <Input checked={check2} value='Wendy Smith' onChange={CollectLocationPermissionData} type='checkbox' id='primary-checkbox3' />
            <Label className='form-check-label ms-1' htmlFor='primary-checkbox3'> 
            <div className='d-flex align-items-center'><Avatar className="me-1 d-flex justify-content-center align-items-center" style={{width:"50px", height:"50px", color:"#1bb70b", background:'rgba(27, 183, 11, 0.4)'}} size="lg" content='W' /><div className='text-sa'>Wendy Smith</div></div>
            </Label>
          </div>
          </div>
        </div>
        <ModalFooter>
            <Button className='fs-3' color='dark' onClick={() => setCenteredModal3(!centeredModal2)} outline>
              Cancel
            </Button>
            <Button className='fs-3' color='dark' onClick={() => {
              setCenteredModal3(!centeredModal3)
             HandleWorkingHours() 
             }}>
              Apply
            </Button>
            </ModalFooter>
        </Modal>
     </div>
     </div>
  )
}

export default WorkingHours
