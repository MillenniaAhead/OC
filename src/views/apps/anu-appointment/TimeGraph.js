import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios'

const TimeGraph = () => {

  const [events, setEvents] = useState([])
  
  const history = useHistory()

  //Redirect to new appointment
  const myFunOne = () => {
    history.push(`/newappointment`)
  }


  const myFunction = (id) => {
    history.push(`/viewappointment/${id}`)
  }
  
  const myFun = (myData) => {
    const newEvents =  myData.map((data) => {
      const date = new Date(data.date)
  const start_time = data.start_time
  const duration = data.duration

  // Get start time
  const new_date = `${date.getFullYear()}-${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
  const hour_in_am = start_time.split(" ")[0].split(":")[0] % 12 > 9 ? start_time.split(" ")[0].split(":")[0] % 12 : `0${start_time.split(" ")[0].split(":")[0] % 12}`
  const hour_in_pm = (start_time.split(" ")[0].split(":")[0] % 12) + 12
  const minutes = start_time.split(" ")[0].split(":")[1]
  let hours = start_time.split(" ").includes("am") ? hour_in_am : hour_in_pm
  const start0 = `${new_date}T${hours}:${minutes}:00`

  // Get end time
  const [myDuration] = duration.split("min")
  const minutes1 = Number(minutes) +  Number(myDuration)
  const new_minutes1 = minutes1 > 59 ? minutes1 % 60 : minutes1
  
  if (minutes1 > 59) {
    hours = Number(hours) + 1 < 10 ? `0${Number(hours) + 1}` : Number(hours) + 1
  }
  const end0 = `${new_date}T${hours}:${new_minutes1}:00`

  return  { id:data._id, title:data.services[0], start:start0, end:end0}
})
setEvents(newEvents)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/api/newAppointments')
    .then(res => {
      console.log(res.data)
      myFun(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
      <>
            <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          center: 'today prev,next',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        eventColor='#A5DFF8'
        nowIndicator  
        dateClick = {myFunOne}
        eventClick={(event) => {
          myFunction(event.event.id)
          }}
      />
    </div>
    <style>
        {`
        .fc-timegrid-slots tbody tr {
          height: 40px;
        }
        @media (max-width: 767px) {
          .fc-header-toolbar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
          }
          .fc-header-toolbar .fc-center {
            display: none;
          }
          .fc-header-toolbar .fc-left,
          .fc-header-toolbar .fc-right {
            width: 100%;
            text-align: center;
          }
          .fc-toolbar-chunk{
            padding-right:30px
          }
        }
          @media (max-width:650px){
            .fc-header-toolbar .fc-toolbar-chunk:first-child{
              margin-bottom:10px
            }
          }
          @media (max-width:415px){
            .fc-header-toolbar .fc-toolbar-chunk:last-child{
              margin-top:10px
            }
          }
        `}
      </style>
    </>
    )
}

export default TimeGraph

