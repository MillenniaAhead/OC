import { lazy } from 'react'

const GroupRoutes = [
  // group list
  {
    path: '/groups/list/:id',
    component: lazy(() => import('../../views/groups/list')),
    exact: true
  },

  // groups/users P2
  {
    path: '/groups/users',
    component: lazy(() => import('../../views/groups/users')),
    exact: true
  },

  {
    path: '/groups/details/:id',
    component: lazy(() => import('../../views/groups/detail')),
    exact: true
  }
]

export default GroupRoutes
