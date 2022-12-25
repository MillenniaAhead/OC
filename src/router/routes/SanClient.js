import { lazy } from 'react'

const SanClientRoutes = [
  {
    path: '/sanclient/user',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/User'))
  },
  {
    path: '/sanclient/section',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/Section'))
  },
  {
    path: '/sanclient/tip',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/SanTips'))
  },
  {
    path: '/sanclient/addClient',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/AddClient'))
  }
]

export default SanClientRoutes
