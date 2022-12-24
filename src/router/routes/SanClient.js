import { lazy } from 'react'

const SanClientRoutes = [
  {
    path: '/sanclient/user',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/User'))
  },
  {
    path: '/sanclient/addClient',
    component: lazy(() => import('../../views/SanClient/SAN_Clients/AddClient'))
  }
]

export default SanClientRoutes
