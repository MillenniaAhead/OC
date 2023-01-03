import { lazy } from "react"

const SanReport = [
  {
    path: "/san-reports/dashboard",
    component: lazy(() => import("../../views/apps/san-report/SanReport"))
  },
  {
    path: "/san-reports/reports",
    component: lazy(() => import("../../views/apps/san-report/Reports"))
  },
  {
    path: "/san-reports/payment-summary",
    component: lazy(() => import("../../views/apps/san-report/Finances/PaymentSummary"))
  },
  {
    path: "/san-reports/finances-summary",
    component: lazy(() => import("../../views/apps/san-report/Finances/FinancesSummary"))
  },
  {
    path: "/san-reports/payment-transactions",
    component: lazy(() => import("../../views/apps/san-report/Finances/PaymentTransactions"))
  },
  {
    path: "/san-reports/taxes-summary",
    component: lazy(() => import("../../views/apps/san-report/Finances/TaxesSummary"))
  },
  {
    path: "/san-reports/service-charges",
    component: lazy(() => import("../../views/apps/san-report/Finances/ServiceCharges"))
  },
  {
    path: "/san-reports/tips-collected",
    component: lazy(() => import("../../views/apps/san-report/Finances/TipsCollected"))
  },
  {
    path: "/san-reports/discount-summary",
    component: lazy(() => import("../../views/apps/san-report/Finances/DiscountSummary"))
  },
  {
    path: "/san-reports/outstanding-invoices",
    component: lazy(() => import("../../views/apps/san-report/Finances/OutstandingInvoices"))
  },
  {
    path: "/san-reports/stock-on-hand",
    component: lazy(() => import("../../views/apps/san-report/Inventory/StockOnHand"))
  },
  {
    path: "/san-reports/product-sale-performance",
    component: lazy(() => import("../../views/apps/san-report/Inventory/ProductSalePerformance"))
  },
  {
    path: "/san-reports/stock-movement-log",
    component: lazy(() => import("../../views/apps/san-report/Inventory/StockMovementLog"))
  },
  {
    path: "/san-reports/stock-movement-summary",
    component: lazy(() => import("../../views/apps/san-report/Inventory/StockMovementSummary"))
  },
  {
    path: "/san-reports/internal-stock-consumption",
    component: lazy(() => import("../../views/apps/san-report/Inventory/InternalStockConsumption"))
  },
  {
    path: "/san-reports/sales-by-item",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByItem"))
  },
  {
    path: "/san-reports/sales-by-type",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByType"))
  },
  {
    path: "/san-reports/sales-by-service",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByService"))
  },
  {
    path: "/san-reports/sales-by-product",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByProduct"))
  },
  {
    path: "/san-reports/sales-by-location",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByLocation"))
  },
  {
    path: "/san-reports/sales-by-channel",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByChannel"))
  },
  {
    path: "/san-reports/sales-by-client",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByClient"))
  },
  {
    path: "/san-reports/sales-by-team-member-breakdown",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByTeamMemberBreakdown"))
  },
  {
    path: "/san-reports/sales-by-team-member",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByTeamMember"))
  },
  {
    path: "/san-reports/sales-by-hour",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByHour"))
  },
  {
    path: "/san-reports/sales-by-hour-of-day",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByHourOfDay"))
  },
  {
    path: "/san-reports/sales-by-day",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByDay"))
  },
  {
    path: "/san-reports/sales-by-month",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByMonth"))
  },
  {
    path: "/san-reports/sales-by-quarter",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByQuarter"))
  },
  {
    path: "/san-reports/sales-by-year",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesByYear"))
  },
  {
    path: "/san-reports/sales-Log",
    component: lazy(() => import("../../views/apps/san-report/Sales/SalesLog"))
  },
  {
    path: "/san-reports/vouchers-outstanding-sales",
    component: lazy(() => import("../../views/apps/san-report/Vouchers/VouchersOutstandingBalance"))
  },
  {
    path: "/san-reports/voucher-sales",
    component: lazy(() => import("../../views/apps/san-report/Vouchers/VoucherSales"))
  },
  {
    path: "/san-reports/voucher-redemptions",
    component: lazy(() => import("../../views/apps/san-report/Vouchers/VoucherRedemptions"))
  },
  {
    path: "/san-reports/deposits-activity",
    component: lazy(() => import("../../views/apps/san-report/Deposits/DepositsActivity"))
  },
  {
    path: "/san-reports/deposits-outstanding-balance",
    component: lazy(() => import("../../views/apps/san-report/Deposits/DepositsOutstandingBalance"))
  },
  {
    path: "/san-reports/team-member-working-hour",
    component: lazy(() => import("../../views/apps/san-report/Team/TeamMemberWorkingHour"))
  },
  {
    path: "/san-reports/tips-by-team-member",
    component: lazy(() => import("../../views/apps/san-report/Team/TipsByTeamMember"))
  },
  {
    path: "/san-reports/team-members-commission-summary",
    component: lazy(() => import("../../views/apps/san-report/Team/TeamMembersCommissionSummary"))
  },
  {
    path: "/san-reports/team-members-commission-detailed",
    component: lazy(() => import("../../views/apps/san-report/Team/TeamMembersCommissionDetailed"))
  },
  {
    path: "/san-reports/appointments-list",
    component: lazy(() => import("../../views/apps/san-report/Appointments/AppointmentsList"))
  },
  {
    path: "/san-reports/appointments-summary",
    component: lazy(() => import("../../views/apps/san-report/Appointments/AppointmentSummary"))
  },
  {
    path: "/san-reports/appointments-cancellations",
    component: lazy(() => import("../../views/apps/san-report/Appointments/AppointmentsCancellations"))
  },
  {
    path: "/san-reports/client-list",
    component: lazy(() => import("../../views/apps/san-report/Clients/ClientList"))
  },
  {
    path: "/san-reports/client-retention",
    component: lazy(() => import("../../views/apps/san-report/Clients/ClientRetention"))
  }
]


export default SanReport