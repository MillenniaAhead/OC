import { lazy } from 'react'

const RoutePromote = [
    {
        path: '/navigationpromote',
        component: lazy(() => import('../../views/mypromote/NavPromote'))
    },
    {
        path: '/promote/stepone',
        component: lazy(() => import('../../views/mypromote/StepOne')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/steptwo',
        component: lazy(() => import('../../views/mypromote/StepTwo')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepthree',
        component: lazy(() => import('../../views/mypromote/StepThree')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepfour',
        component: lazy(() => import('../../views/mypromote/StepFour')),
        layout: 'BlankLayout'
    }
]

export default RoutePromote