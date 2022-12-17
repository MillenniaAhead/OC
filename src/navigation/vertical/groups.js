// ** Icons Import
import { Users, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [

    // Org.Exports Page
    {
        id: 'groups',
        title: 'Groups',
        icon: <Users size={20} />,
        children: [
          {
            id: 'users',
            title: 'Users',
            icon: <Circle size={12} />,
            navLink: '/groups/users'
          },
          {
            id: 'locations',
            title: 'Locations',
            icon: <Circle size={12} />,
            navLink: '/apps/invoice/preview'
          },
          {
            id: 'participants',
            title: 'Participants',
            icon: <Circle size={12} />,
            navLink: '#'
          },
          {
            id: 'appointments',
            title: 'Appointments',
            icon: <Circle size={12} />,
            navLink: '#'
          },
          {
            id: 'case-Reports',
            title: 'Case Reports',
            icon: <Circle size={12} />,
            navLink: '/#'
          },
          {
            id: 'edit',
            title: 'Edit',
            icon: <Circle size={12} />,
            navLink: '#'
          }
        ]
    }
    
]
