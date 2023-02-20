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

//My work
import AnuAppointment from './AnuAppointment'
import SanPromote from './SanPromote'
import SanReport from './SanReport'
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
  ...AnuServicesRoutes,
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
  ...NewSaleRoutes,
  ...SettingClients,
  ...HomeRoute,
  ...CalenderRoute,
  ...SanSetSalesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
