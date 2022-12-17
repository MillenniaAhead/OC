// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import invoice from '@src/views/apps/invoice/store'
import groupUser from '@src/views/groups/users/store'
import groupList from '@src/views/groups/list/store'
import organizationList from '@src/views/organization/list/store'
import organizationUsers from '@src/views/organization/user/store'
import overview from '@src/views/overview/store'
import groupdetails from '@src/views/groups/detail/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  groupUser,
  groupList,
  organizationList,
  organizationUsers,
  overview,
  groupdetails
}

export default rootReducer
