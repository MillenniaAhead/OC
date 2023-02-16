import { lazy } from 'react'

const AccountSetUpRoutes = [
  
  {
    path: '/Upper',
    component: lazy(() => import('../../views/accountsetup/Upper/Upper'))
  },
  
  {
    path: '/Uiuxdesing',
    component: lazy(() => import('../../views/accountsetup/Uiuxdesing/Uiuxdesigne'))
  },
  {
    path: '/UIUX',
    component: lazy(() => import('../../views/accountsetup/UIUX/Uiux'))
  },
  
  {
    path: '/Resource6',
    component: lazy(() => import('../../views/accountsetup/Resource6/Resource6'))
  },
  {
    path: '/Resource6',
    component: lazy(() => import('../../views/accountsetup/Resource6/Resource6'))
  },
  
  {
    path: '/Resource',
    component: lazy(() => import('../../views/accountsetup/Resource/Resource3'))
  },
  {
    path: '/outlet',
    component: lazy(() => import('../../views/accountsetup/outlet/App'))
  },
  
  {
    path: '/Online',
    component: lazy(() => import('../../views/accountsetup/online/Online'))
  },
  {
    path: '/invoice',
    component: lazy(() => import('../../views/accountsetup/invoice/Invoice'))
  },
  {
    path: '/hours',
    component: lazy(() => import('../../views/accountsetup/hours/Hours'))
  },
  {
    path: '/edit',
    component: lazy(() => import('../../views/accountsetup/edit/Edit'))
  },
  {
    path: '/choice2',
    component: lazy(() => import('../../views/accountsetup/choice2/Choice'))
  },
  {
    path: '/choice',
    component: lazy(() => import('../../views/accountsetup/choice/Choices'))
  },
  {
    path: '/close',
    component: lazy(() => import('../../views/accountsetup/closedate/Close'))
  }
  

]
export default AccountSetUpRoutes