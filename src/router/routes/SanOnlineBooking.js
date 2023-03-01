import { lazy } from 'react'

const SanOnlineBookingRoutes = [
  {
    path: '/sanOnlineBooking/',
    component: lazy(() => import('../../views/sanOnlineBooking')),
    layout: 'BlankLayout',
    exact: true
  },
  {
    path: '/sanOnlineBooking/linkBuilder',
    component: lazy(() => import('../../views/sanOnlineBooking/LinkBuilderCover')),
    layout: 'BlankLayout',
    exact: true
  },
  {
    path: '/sanOnlineBooking/reserveWithGoogle',
    component: lazy(() => import('../../views/sanOnlineBooking/ReserveWithGoogleCover')),
    layout: 'BlankLayout',
    exact: true
  },
  {
    path: '/sanOnlineBooking/facebookAndInstagramBooking',
    component: lazy(() => import('../../views/sanOnlineBooking/FacebookAndInstagramBookingCover')),
    layout: 'BlankLayout',
    exact: true
  }
]

export default SanOnlineBookingRoutes
