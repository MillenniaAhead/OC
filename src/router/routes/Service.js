import { lazy } from 'react'

const AnuServicesRoutes = [
  {
    path: '/anu-services/newCategory',
    component: lazy(() => import('../../views/anu-services/newCategory'))
  },
  {
    path: '/anu-services/advancedPricing',
    component: lazy(() => import('../../views/anu-services/advancedPricing'))
  },
  {
    path: '/anu-services/editSingleService',
    component: lazy(() => import('../../views/anu-services/editSingleService'))
  },
  {
    path: '/anu-services/newPackage',
    component: lazy(() => import('../../views/anu-services/newPackage'))
  },
  {
    path: '/anu-services/newProduct',
    component: lazy(() => import('../../views/anu-services/newproduct'))
  },
  {
    path: '/anu-services/selectBrand',
    component: lazy(() => import('../../views/anu-services/selectBrand'))
  },
  {
    path: '/anu-services/selectBrand',
    component: lazy(() => import('../../views/anu-services/selectBrand'))
  },
  {
    path: '/anu-services/serviceMenu',
    component: lazy(() => import('../../views/anu-services/serviceMenu'))
  },
  {
    path: '/anu-services/serviceMenu2',
    component: lazy(() => import('../../views/anu-services/serviceMenu2'))
  },
  {
    path: '/anu-services/serviceType',
    component: lazy(() => import('../../views/anu-services/serviceType'))
  },
  {
    path: '/anu-services/singleService',
    component: lazy(() => import('../../views/anu-services/singleService'))
  }
]

export default AnuServicesRoutes
