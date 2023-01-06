import { lazy } from 'react'

const RoutePromote = [
    {
        path: '/promote/deals',
        component: lazy(() => import('../../views/mypromote/Deals'))
    },
    {
        path: '/promote/integrations',
        component: lazy(() => import('../../views/mypromote/Integrations'))
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