import { lazy } from 'react'

const SanPromote = [
    {
        path: '/promote/deals',
        component: lazy(() => import('../../views/apps/san-promote/Deals'))
    },
    {
        path: '/promote/dealstwo',
        component: lazy(() => import('../../views/apps/san-promote/DealsTwo'))
    },
    {
        path: '/promote/integrations',
        component: lazy(() => import('../../views/apps/san-promote/Integrations'))
    },
    {
        path: '/promote/stepone',
        component: lazy(() => import('../../views/apps/san-promote/StepOne')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/steptwo',
        component: lazy(() => import('../../views/apps/san-promote/StepTwo')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/steptwoedit/:id',
        component: lazy(() => import('../../views/apps/san-promote/StepTwoEdit')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepthree',
        component: lazy(() => import('../../views/apps/san-promote/StepThree')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepfour',
        component: lazy(() => import('../../views/apps/san-promote/StepFour')),
        layout: 'BlankLayout'
    }
]

export default SanPromote