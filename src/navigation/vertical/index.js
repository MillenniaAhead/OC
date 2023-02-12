// ** Navigation imports
 import apps from './apps'
 import others from './others'

/*
Customization Navigation
*/

import overview from './overview'
//import blank from './blank'
// ** Merge & Export
 export default [...overview, ...apps, ...others]
//export default [...overview,  ...organization, ...groups, ...exports, ...labsManager, ...blank]