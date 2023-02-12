// ** Icons Import
import { Volume1, ExternalLink, Settings, HelpCircle } from 'react-feather'

export default [
  {
    id: 'Promote',
    title: 'Promote',
    icon: <Volume1 style={{width: '30px', height: '30px'}} color='black'/>,
    action: 'read',
    resource: 'ACL',
    navLink: '/promote'
  },
  {
    id: 'Reports',
    title: 'Reports',
    icon: <ExternalLink style={{width: '30px', height: '30px'}} color='black'/>,
    action: 'read',
    resource: 'ACL',
    navLink: '/'
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: <Settings style={{width: '30px', height: '30px'}} color='black'/>,
    action: 'read',
    resource: 'ACL',
    navLink: '/sources'
  },
  {
    id: 'Support',
    title: 'Support',
    icon: <HelpCircle style={{width: '30px', height: '30px'}} color='black' />,
    action: 'read',
    resource: 'ACL',
    navLink: '/'
  }
]
