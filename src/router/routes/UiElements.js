import { lazy } from 'react'

const UiElementRoutes = [
  {
    path: '/ui-element/typography',
    component: lazy(() => import('../../views/ui-elements/typography'))
  },
  {
    path: '/icons/reactfeather',
    component: lazy(() => import('../../views/ui-elements/icons'))
  },
  {
    path: '/cards/basic',
    component: lazy(() => import('../../views/ui-elements/cards/basic'))
  },
  {
    path: '/cards/advance',
    component: lazy(() => import('../../views/ui-elements/cards/advance'))
  },
  {
    path: '/cards/statistics',
    component: lazy(() => import('../../views/ui-elements/cards/statistics'))
  },
  {
    path: '/cards/analytics',
    component: lazy(() => import('../../views/ui-elements/cards/analytics'))
  },
  {
    path: '/cards/action',
    component: lazy(() => import('../../views/ui-elements/cards/actions'))
  }
]

export default UiElementRoutes
