import { lazy } from 'react'

const SettingClients = [
    {
        path: '/sources',
        component: lazy(() => import('../../views/SettingClients/Addsource'))
      },
      {
        path: '/reasons',
        component: lazy(() => import('../../views/SettingClients/Addreason'))
      }
]

export default SettingClients