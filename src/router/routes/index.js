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
// <<<<<<< HEAD
import AnuServicesRoutes from './Service'
// =======
import ProductDetailsRoutes from './ProductDetails' 
import ReviewStocktakesRoutes from './ReviewStocktakes'

//My work
import AnuAppointment from './AnuAppointment'
import SanPromote from './SanPromote'
import SanReport from './SanReport'
// >>>>>>> 076cf41dac391fbec1c7046b3d31edaea00cd5dd

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
// <<<<<<< HEAD
  ...AnuServicesRoutes,
// =======
  ...SanReport,
  ...SanPromote,
  ...AnuAppointment,
// >>>>>>> 076cf41dac391fbec1c7046b3d31edaea00cd5dd
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
// <<<<<<< HEAD
  ...ChartsRoutes,
// =======
  ...ChartsRoutes,
  ...ProductDetailsRoutes,
  ...CountDetailsRoutes,
  ...ReviewStocktakesRoutes

// >>>>>>> 076cf41dac391fbec1c7046b3d31edaea00cd5dd
  
]

export { DefaultRoute, TemplateTitle, Routes }
