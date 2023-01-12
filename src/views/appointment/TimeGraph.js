import React from 'react'
import { useHistory } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '../mycss/TimeGraph.css'


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
    return (
      <>
            <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          center: 'today prev,next',
          end: 'dayGridMonth,timeGridWeek,timeGridDay new'
        }}
        events={events}
        eventColor='yellow'
        nowIndicator  
        dateClick = {myFunOne}
      />
    </div>
    </>
    )
}

export default TimeGraph

