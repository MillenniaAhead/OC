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
import NewSaleRoutes from './Newsale'
import SettingClients from './Settingclients'
// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
// const DefaultRoute = '/dashboard/ecommerce'

// ** Default Route P2 update
const DefaultRoute = '/overview'


// ** Merge Routes
const Routes = [
  ...SanReport,
  ...SanPromote,
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
  ...NewSaleRoutes,
  ...SettingClients
]

export { DefaultRoute, TemplateTitle, Routes }
