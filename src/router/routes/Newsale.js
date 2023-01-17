import { lazy } from 'react'

const NewSaleRoutes = [
  // 
  {
    path: '/newsale',
    component: lazy(() => import('../../views/Newsale/NewsalePage'))
  },
  {
    path: '/setup',
    component: lazy(() => import('../../views/Newsale/Setup'))
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/Newsale/Checkout'))
  },
  {
    path: '/products',
    component: lazy(() => import('../../views/Newsale/Products'))
  },
  {
    path: '/productlist',
    component: lazy(() => import('../../views/Newsale/ProductList'))
  },
  {
    path: '/import',
    component: lazy(() => import('../../views/Newsale/ImportProduct'))
  },
  {
    path: '/new',
    component: lazy(() => import('../../views/Newsale/NewProduct'))
  },
  {
    path: '/services',
    component: lazy(() => import('../../views/Newsale/Services'))
  },
  {
    path: '/memberships',
    component: lazy(() => import('../../views/Newsale/Memberships'))
  },
  {
    path: '/create',
    component: lazy(() => import('../../views/Newsale/CreateMembership'))
  },
  {
    path: '/createmembership',
    component: lazy(() => import('../../views/Newsale/CreateMembershipPage'))
  },
  {
    path: '/vouchers',
    component: lazy(() => import('../../views/Newsale/Vouchers'))
  },
  {
    path: '/createvoucher',
    component: lazy(() => import('../../views/Newsale/CreateVoucher'))
  },
  {
    path: '/dailysales',
    component: lazy(() => import('../../views/Newsale/Dailysales'))
  },
  {
    path: '/appointments',
    component: lazy(() => import('../../views/Newsale/Appointments'))
  },
  {
    path: '/saleshistory',
    component: lazy(() => import('../../views/Newsale/SalesHistory'))
  },
  {
    path: '/payment',
    component: lazy(() => import('../../views/Newsale/PaymentPage'))
  },
  {
    path: '/voucher',
    component: lazy(() => import('../../views/Newsale/Voucher'))
  },
  {
    path: '/membership',
    component: lazy(() => import('../../views/Newsale/Membership'))
  }
]

export default NewSaleRoutes