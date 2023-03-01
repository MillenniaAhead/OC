import { lazy } from 'react'

const AnuTeam = [
  {
    path: '/businessSettings',
    component: lazy(() => import('../../views/apps/anu-team/BusinessSettings')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/teamMembers',
    component: lazy(() => import('../../views/apps/anu-team/team/TeamMembers')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/addTeamMember',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMember')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/addTeamMemberForm',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMemberForm')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/addTeamMemberEditForm/:id',
    component: lazy(() => import('../../views/apps/anu-team/team/AddTeamMemberEditForm')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/addViaEmail',
    component: lazy(() => import('../../views/apps/anu-team/team/AddViaEmail')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/workingHours',
    component: lazy(() => import('../../views/apps/anu-team/team/WorkingHours')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/openingHours',
    component: lazy(() => import('../../views/apps/anu-team/team/OpeningHours')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/permissions',
    component: lazy(() => import('../../views/apps/anu-team/team/Permissions')),
    layout:"BlankLayout"
  },
  {
    path: '/anuTeam/commission',
    component: lazy(() => import('../../views/apps/anu-team/team/Commission')),
    layout:"BlankLayout"
  }
]

export default AnuTeam