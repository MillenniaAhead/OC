import { Circle } from 'react-feather'

export default [
  {
    header: 'Appointment'
  },
  {
    id: 'View Appointment',
    title: 'View Appointment',
    icon: <Circle size={20} />,
    navLink: '/viewappointment'
  },
  {
    id: 'Timegraph',
    title: 'Calendar',
    icon: <Circle size={20} />,
    navLink: '/timegraph'
  }
]