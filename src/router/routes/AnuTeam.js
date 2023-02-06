import { lazy } from 'react'

const AnuTeam = [
  {
    path: '/businessSettings',
    component: lazy(() => import('../../views/apps/anu-team/BusinessSettings')),
    layout:"BlankLayout"
  },
  {
    path: '/team/teamMembers',
    component: lazy(() => import('../../views/apps/anu-team/team/TeamMembers')),
    layout:"BlankLayout"
  },
  {
    path: '/team/addTeamMember',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMember')),
    layout:"BlankLayout"
  },
  {
    path: '/team/addTeamMemberForm',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMemberForm')),
    layout:"BlankLayout"
  },
  {
    path: '/team/addTeamMemberEditForm/:id',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMemberEditForm')),
    layout:"BlankLayout"
  },
  {
    path: '/team/addViaEmail',
    component: lazy(() => import('../../views/apps/anu-team/team/AddViaEmail')),
    layout:"BlankLayout"
  },
  {
    path: '/team/workingHours',
    component: lazy(() => import('../../views/apps/anu-team/team/WorkingHours')),
    layout:"BlankLayout"
  },
  {
    path: '/team/openingHours',
    component: lazy(() => import('../../views/apps/anu-team/team/OpeningHours')),
    layout:"BlankLayout"
  },
  {
    path: '/team/permissions',
    component: lazy(() => import('../../views/apps/anu-team/team/Permissions')),
    layout:"BlankLayout"
  },
  {
    path: '/team/commission',
    component: lazy(() => import('../../views/apps/anu-team/team/Commission')),
    layout:"BlankLayout"
  }
]

export default AnuTeam