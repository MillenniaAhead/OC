// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import ProductDetailsRoutes from './ProductDetails' 
import ReviewStocktakesRoutes from './ReviewStocktakes'
// import AccountSetUpRoutes from './AccountSetUp'

//My work
import AnuAppointment from './AnuAppointment'
import AnuPromote from './AnuPromote'
import SanReport from './SanReport'
import AnuTeam from "./AnuTeam"

/*
Customization Routes
*/
import OverviewRoutes from './Overview'
import GroupRoutes from './Groups'
import OrganizationRoutes from './Organization'

import CountDetailsRoutes from './CountDetails'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
// const DefaultRoute = '/dashboard/ecommerce'

// ** Default Route P2 update
const DefaultRoute = '/overview'


// ** Merge Routes
const Routes = [
  // ...AccountSetUpRoutes,
  ...AnuTeam,
  ...SanReport,
  ...AnuPromote,
  ...AnuAppointment,
  ...OverviewRoutes,
  ...GroupRoutes,
  ...OrganizationRoutes,
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartsRoutes,
  ...ProductDetailsRoutes,
  ...CountDetailsRoutes,
  ...ReviewStocktakesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
