import { lazy } from 'react'

const RoutePromote = [
    {
        path: '/navigationpromote',
        component: lazy(() => import('../../views/mypromote/NavPromote'))
    }
]

export default RoutePromote