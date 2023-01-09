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
    path: '/datatables/basic',
    component: lazy(() => import('../../views/tables/data-tables/basic'))
  }
]

export default SanSetSalesRoutes
