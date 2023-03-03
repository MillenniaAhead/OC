import { lazy } from 'react'

const AnuAppointment = [
  {
    path: '/timegraph',
    component: lazy(() => import('../../views/anu-appointment/TimeGraph'))
  },
  {
    path: '/newappointment',
    component: lazy(() => import('../../views/anu-appointment/NewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/editAppointment/:id',
    component: lazy(() => import('../../views/anu-appointment/EditAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointment/:id',
    component: lazy(() => import('../../views/anu-appointment/ViewAppointment')),
    layout: 'BlankLayout'
  },
  {
    path: '/viewappointmenttwo',
    component: lazy(() => import('../../views/anu-appointment/ViewAppointmentTwo')),
    layout: 'BlankLayout'
  },
  {
    path: '/checkout/:id',
    component: lazy(() => import('../../views/anu-appointment/CheckOut'))
  },
  {
    path: '/addtip/:id',
    component: lazy(() => import('../../views/anu-appointment/AddTip'))
  },
  {
    path: '/selectpayment/:id',
    component: lazy(() => import('../../views/anu-appointment/SelectPayment'))
  }
]

export default AnuAppointment