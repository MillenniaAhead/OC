import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import Flatpickr from 'react-flatpickr'
// import { Settings } from 'react-feather'
// import '../mycss/TimeGraph.css'
// import '../mycss/AddTip.css'
//Schedular
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


const TimeGraph = () => {
  // const [picker, setPicker] = useState(new Date())
  // const [dropdownOpen, setDropdownOpen] = useState(false)
  const history = useHistory()
  const myFunOne = () => {
    history.push('/newappointment')
  }


  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen)
  // } 
  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2022-12-21T10:00:00',
      end: '2022-12-21T12:00:00'
    }
  ]

    return (
      <>
            {/* <div className="p-3 time-graph-top-aa6 d-flex  justify-content-between">
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
            <div className="setting-icon-aa4  me-1 " style={{cursor:"pointer"}}><Settings size={25}/></div>
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
            </div> */}
            <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event')
          }
        }}
        headerToolbar={{
          center: 'today prev,next',
          end: 'dayGridMonth,timeGridWeek,timeGridDay new'
        }}
        events={events}
        eventColor='yellow'
        nowIndicator
      dateClick = { myFunOne }
      />
    </div>
            </>
    )
}

export default TimeGraph

