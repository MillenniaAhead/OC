import { lazy } from 'react'

const AnuPromote = [
    {
        path: '/promote/deals',
        component: lazy(() => import('../../views/anu-promote/Deals'))
    },
    {
        path: '/promote/dealstwo',
        component: lazy(() => import('../../views/anu-promote/DealsTwo'))
    },
    {
        path: '/promote/integrations',
        component: lazy(() => import('../../views/anu-promote/Integrations'))
    },
    {
        path: '/promote/stepone',
        component: lazy(() => import('../../views/anu-promote/StepOne')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/steptwo',
        component: lazy(() => import('../../views/anu-promote/StepTwo')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/steptwoedit/:id',
        component: lazy(() => import('../../views/anu-promote/StepTwoEdit')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepthree',
        component: lazy(() => import('../../views/anu-promote/StepThree')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepthreeedit/:id',
        component: lazy(() => import('../../views/anu-promote/StepThreeEdit')),
        layout: 'BlankLayout'
    },
    {
        path: '/promote/stepfour',
        component: lazy(() => import('../../views/anu-promote/StepFour')),
        layout: 'BlankLayout'
    }
]

export default AnuPromote