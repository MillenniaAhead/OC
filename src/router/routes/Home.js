import { lazy } from 'react'

const HomeRoute = [
    {
        path: '/home',
        component: lazy(() => import('../../views/Home/Home'))
      }
]

export default HomeRoute