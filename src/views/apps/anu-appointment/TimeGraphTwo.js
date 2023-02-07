import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function MyCalendar() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[{ title: 'Event 1', date: '2023-03-01' }, { title: 'Event 2', date: '2023-03-02' }, { title: 'Event 3', date: '2023-03-03' }]}
        />
      </div>
      <div style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[{ title: 'Event 4', date: '2023-03-01' }, { title: 'Event 5', date: '2023-03-02' }, { title: 'Event 6', date: '2023-03-03' }]}
        />
      </div>
    </div>
  )
}

export default MyCalendar
