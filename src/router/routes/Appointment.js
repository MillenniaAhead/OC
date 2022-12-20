import { lazy } from 'react'

const Appointment = [
  {
    path: '/addtip',
    component: lazy(() => import('../../views/appointment/AddTip'))
  },
  {
    path: '/selectpayment',
    component: lazy(() => import('../../views/appointment/SelectPayment'))
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/appointment/CheckOut'))
  },
  {
    path: '/timegraph',
    component: lazy(() => import('../../views/appointment/TimeGraph'))
  }
]

export default Appointment