import { lazy } from 'react'
// import './App.css'
const ProjectAnuServicesRoutes = [
  // {
  //   path: '/AddCatModal',
  //   component: lazy(() => import('../../views/ProjectAnuSevices/AddCatModal'))
  // },
  // {
  //   path: '/AddNewModal',
  //   component: lazy(() => import('../../views/ProjectAnuSevices/AddNewModal'))
  // },
  {
    path: '/AttractClient',
    component: lazy(() => import('../../views/ProjectAnuSevices/AttractClient'))
  },
  // {
  //   path: '/CategoryModal',
  //   component: lazy(() => import('../../views/ProjectAnuSevices/CategoryModal'))
  // },
  {
    path: '/CreateMemberShip',
    component: lazy(() => import('../../views/ProjectAnuSevices/CreateMemberShip'))
  },
  {
    path: '/MemberShip',
    component: lazy(() => import('../../views/ProjectAnuSevices/MemberShip'))
  },
  
  {
    path: '/NewProduct',
    component: lazy(() => import('../../views/ProjectAnuSevices/NewProduct'))
  },
  {
    path: '/SelectCategory',
    component: lazy(() => import('../../views/ProjectAnuSevices/SelectCategory'))
  },
  {
    path: '/SelectMember',
    component: lazy(() => import('../../views/ProjectAnuSevices/SelectMember'))
  },
  {
    path: '/VoucherSetting',
    component: lazy(() => import('../../views/ProjectAnuSevices/VoucherSetting'))
  },
  {
    path: '/Voucher',
    component: lazy(() => import('../../views/ProjectAnuSevices/Voucher'))
  },
  {
    path: '/VoucherTypes',
    component: lazy(() => import('../../views/ProjectAnuSevices/VoucherTypes'))
  }
  // {
  //   path: '/SelectMemModal',
  //   component: lazy(() => import('../../views/ProjectAnuSevices/SelectMemModal'))
  // }

]


export default ProjectAnuServicesRoutes