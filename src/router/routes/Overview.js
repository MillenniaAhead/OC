import { lazy } from 'react'

const OverviewRoutes = [
  // Overview
  {
    path: '/overview',
    component: lazy(() => import('../../views/overview')),
    exact: true
  },

  // groups/users P2
  {
    path: '/gruops/users',
    component: lazy(() => import('../../views/groups/users')),
    exact: true
  }

  
]

export default OverviewRoutes
