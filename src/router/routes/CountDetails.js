import { lazy } from 'react'

const CountDetailsRoutes = [
  {
    path: '/sanproducts/countproducts',
    component: lazy(() => import('../../views/sanproducts/countproducts.js'))
  }

  
]

export default CountDetailsRoutes