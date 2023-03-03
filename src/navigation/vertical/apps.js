// ** Icons Import
import { Calendar, Tag, Smile, BookOpen, User } from 'react-feather'

export default [
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar style={{width: '30px', height: '30px'}} color='black' />,
    navLink: '/timegraph'
  },
  {
    id: 'sales',
    title: 'Sales',
    icon: <Tag style={{width: '30px', height: '30px'}} color='black' />,
    action: 'read',
    resource: 'ACL',
    navLink: '/newsale'
  },
  {
    id: 'clients',
    title: 'Clients',
    icon: <Smile style={{width: '30px', height: '30px'}} color='black' />,
    action: 'read',
    resource: 'ACL',
    navLink: '/sanclient/client'
  },
  {
    id: 'catalogue',
    title: 'Catalogue',
    icon: <BookOpen style={{width: '30px', height: '30px'}} color='black' />,
    action: 'read',
    resource: 'ACL',
    navLink: '/'
  },
  {
    id: 'onlineprofile',
    title: 'Online Profile',
    icon: <User style={{width: '30px', height: '30px'}} color='black' />,
    action: 'read',
    resource: 'ACL',
    navLink: '/'
  }
]
