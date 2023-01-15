import { lazy } from 'react'

const AnuAppointment = [
  {
    path: '/timegraph',
    component: lazy(() => import('../../views/apps/anu-appointment/TimeGraph'))
  },
  {
    path: '/newappointment',
    component: lazy(() => import('../../views/apps/anu-appointment/NewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointment',
    component: lazy(() => import('../../views/apps/anu-appointment/ViewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointmenttwo',
    component: lazy(() => import('../../views/apps/anu-appointment/ViewAppointmentTwo')),
    layout: 'BlankLayout'
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/apps/anu-appointment/CheckOut'))
  },
  {
    path: '/addtip',
    component: lazy(() => import('../../views/apps/anu-appointment/AddTip'))
  },
  {
    path: '/selectpayment',
    component: lazy(() => import('../../views/apps/anu-appointment/SelectPayment'))
  }
]

export default AnuAppointment