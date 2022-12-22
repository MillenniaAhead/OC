import React from 'react'
import { useHistory } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useSelector } from 'react-redux'


const TimeGraph = () => {
  const history = useHistory()
  const myFunOne = () => {
    history.push('/newappointment')
  }

  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2022-12-21T10:00:00',
      end: '2022-12-21T12:00:00'
    }
  ]

  const NewAppointment = useSelector(state => state.AppointmentReducer)
  const AppointmentArray = NewAppointment.appointment
  console.log(AppointmentArray)

    return (
      <>
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

