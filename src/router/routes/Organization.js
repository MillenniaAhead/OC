import { lazy } from 'react'

const OrganizationRoutes = [
  // group list
  {
    path: '/organization/list',
    component: lazy(() => import('../../views/organization/list')),
    exact: true
  },

  // group users
  {
    path: '/organization/user',
    component: lazy(() => import('../../views/organization/user')),
    exact: true
  }
]

export default OrganizationRoutes
