import { lazy } from 'react'
// import './App.css'
const ProjectAnuServicesRoutes = [
  {
    path: '/AddCatModal',
    component: lazy(() => import('../../views/ProjectAnuServices/AddCatModal'))
  },
  {
    path: '/AddNewModal',
    component: lazy(() => import('../../views/ProjectAnuServices/AddNewModal'))
  },
  {
    path: '/AttractClient',
    component: lazy(() => import('../../views/ProjectAnuServices/AttractClient'))
  },
  {
    path: '/CategoryModal',
    component: lazy(() => import('../../views/ProjectAnuServices/CategoryModal'))
  },
  {
    path: '/CreateMemberShip',
    component: lazy(() => import('../../views/ProjectAnuServices/CreateMemberShip'))
  },
  {
    path: '/MemberShip',
    component: lazy(() => import('../../views/ProjectAnuServices/MemberShip'))
  },
  
  {
    path: '/NewProduct',
    component: lazy(() => import('../../views/ProjectAnuServices/NewProduct'))
  },
  {
    path: '/SelectCategory',
    component: lazy(() => import('../../views/ProjectAnuServices/SelectCategory'))
  },
  {
    path: '/SelectMember',
    component: lazy(() => import('../../views/ProjectAnuServices/SelectMember'))
  },
  {
    path: '/VoucherSetting',
    component: lazy(() => import('../../views/ProjectAnuServices/VoucherSetting'))
  },
  {
    path: '/Voucher',
    component: lazy(() => import('../../views/ProjectAnuServices/Voucher'))
  },
  {
    path: '/VoucherType',
    component: lazy(() => import('../../views/ProjectAnuServices/VoucherType'))
  },
  {
    path: '/SelectMemModal',
    component: lazy(() => import('../../views/ProjectAnuServices/SelectMemModal'))
  }

]


export default ProjectAnuServicesRoutes