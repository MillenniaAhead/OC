import { lazy } from 'react'

const Appointment = [
  {
    path: '/timegraph',
    component: lazy(() => import('../../views/apps/san-appointment/TimeGraph'))
  },
  {
    path: '/newappointment',
    component: lazy(() => import('../../views/apps/san-appointment/NewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointment',
    component: lazy(() => import('../../views/apps/san-appointment/ViewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointmenttwo',
    component: lazy(() => import('../../views/apps/san-appointment/ViewAppointmentTwo')),
    layout: 'BlankLayout'
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/apps/san-appointment/CheckOut'))
  },
  {
    path: '/addtip',
    component: lazy(() => import('../../views/apps/san-appointment/AddTip'))
  },
  {
    path: '/selectpayment',
    component: lazy(() => import('../../views/apps/san-appointment/SelectPayment'))
  }
]

export default Appointment