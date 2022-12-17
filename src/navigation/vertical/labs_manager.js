// ** Icons Import
import { Globe, Circle } from 'react-feather'

export default [
    {
        header: ' '
    },
    {
        id: 'labs_manger',
        title: 'Labs Manager',
        icon: <Globe size={20} />,
        navLink: '/labs_manager',
        children: [
            {
              id: 'lab1',
              title: 'lab1',
              icon: <Circle size={12} />,
              navLink: '/lab_manager/lab1'
            },
            {
              id: 'lab2',
              title: 'lab2',
              icon: <Circle size={12} />,
              navLink: '/lab_manager/lab2'
            }
        ]
    }
]
