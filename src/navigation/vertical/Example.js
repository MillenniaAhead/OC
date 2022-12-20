import { Circle } from 'react-feather'

export default [
  {
    header: 'Appointment'
  },
  {
    id: 'New Appointment',
    title: 'New Appointment',
    icon: <Circle size={20} />,
    navLink: '/newappointment'
  },
  {
    id: 'View Appointment',
    title: 'View Appointment',
    icon: <Circle size={20} />,
    navLink: '/viewappointment'
  },
  {
    id: 'Add tip',
    title: 'Add tip',
    icon: <Circle size={20} />,
    navLink: '/addtip'
  },
  {
    id: 'Select payment',
    title: 'Select payment',
    icon: <Circle size={20} />,
    navLink: '/selectpayment'
  },
  {
    id: 'Checkout',
    title: 'Checkout',
    icon: <Circle size={20} />,
    navLink: '/checkout'
  },
  {
    id: 'Timegraph',
    title: 'Timegraph',
    icon: <Circle size={20} />,
    navLink: '/timegraph'
  }
]