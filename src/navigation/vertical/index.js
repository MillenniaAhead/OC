// ** Navigation imports
 import apps from './apps'
 import pages from './pages'
 import forms from './forms'
 import tables from './tables'
 import others from './others'
 import charts from './charts'
 import dashboards from './dashboards'
 import uiElements from './ui-elements'

/*
Customization Navigation
*/

import overview from './overview'
import groups from './groups'
import organization from './organization'
import exports from './exports'
import labsManager from './labs_manager'
//import blank from './blank'
// ** Merge & Export
 export default [...overview,  ...organization, ...groups, ...exports, ...labsManager, ...dashboards, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...charts, ...others]
//export default [...overview,  ...organization, ...groups, ...exports, ...labsManager, ...blank]
