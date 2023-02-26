// ** Routes Imports
import AppRoutes from './Apps'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import PageLayoutsRoutes from './PageLayouts'
import ProductDetailsRoutes from './ProductDetails' 
import ReviewStocktakesRoutes from './ReviewStocktakes'
import AnuServicesRoutes from './Service'
import SanClientRoutes from './SanClient'
import AccountSetUpRoutes from './AccountSetUp'

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
import NewSaleRoutes from './Newsale'
import HomeRoute from './Home'
import CalenderRoute from './Calender'
import SettingClients from './Settingclients'
import SanSetSalesRoutes from './SanSetSales'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
// const DefaultRoute = '/dashboard/ecommerce'

// ** Default Route P2 update
const DefaultRoute = '/overview'


// ** Merge Routes
const Routes = [
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
  ...PageLayoutsRoutes,
  ...TablesRoutes,
  ...ChartsRoutes,
  ...ProductDetailsRoutes,
  ...CountDetailsRoutes,
  ...ReviewStocktakesRoutes,
  ...AnuServicesRoutes,
  ...NewSaleRoutes,
  ...HomeRoute,
  ...CalenderRoute,
  ...SettingClients,
  ...SanSetSalesRoutes,
  ...SanClientRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
