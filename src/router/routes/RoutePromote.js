import { lazy } from 'react'

const RoutePromote = [
    {
        path: '/Promote',
        component: lazy(() => import('../../views/mypromote/Promote'))
    }
]

export default RoutePromote