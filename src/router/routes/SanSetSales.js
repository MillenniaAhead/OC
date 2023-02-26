import { lazy } from 'react'

const SanSetSalesRoutes = [
  {
    path: '/sansetsale/saleinvoice',
    component: lazy(() => import('../../views/SanSetSales/SaleInvoice.js'))
  },
  {
    path: '/sansetsale/invoicetem',
    component: lazy(() => import('../../views/SanSetSales/Invoicetem.js'))
  },
  {
    path: '/sansetsale/taxrate',
    component: lazy(() => import('../../views/SanSetSales/Taxrate.js'))
  },
  {
    path: '/sansetsale/service',
    component: lazy(() => import('../../views/SanSetSales/InvoiceService.js'))
  },
  {
    path: '/sansetsale/payment',
    component: lazy(() => import('../../views/SanSetSales/PaymentType.js'))
  },
  {
    path: '/sansetsale/charge',
    component: lazy(() => import('../../views/SanSetSales/ServiceCharge.js'))
  }
]

export default SanSetSalesRoutes
