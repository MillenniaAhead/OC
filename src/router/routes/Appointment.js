import { lazy } from 'react'

const Appointment = [
  {
    path: '/timegraph',
    component: lazy(() => import('../../views/appointment/TimeGraph'))
  },
  {
    path: '/newappointment',
    component: lazy(() => import('../../views/appointment/NewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointment',
    component: lazy(() => import('../../views/appointment/ViewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointmenttwo',
    component: lazy(() => import('../../views/appointment/ViewAppointmentTwo')),
    layout: 'BlankLayout'
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/appointment/CheckOut'))
  },
  {
    path: '/addtip',
    component: lazy(() => import('../../views/appointment/AddTip'))
  },
  {
    path: '/selectpayment',
    component: lazy(() => import('../../views/appointment/SelectPayment'))
  }
]

export default Appointment