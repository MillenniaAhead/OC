import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      filename: 'Univ-Texas-OD-Case_Report.csv1',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },  
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'Participant',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'Case Report',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    },
    {
      filename: 'Univ-Texas-OD-Case_Report.csv',
      type: 'User',
      params: 'Organization id: 2001',
      done: 'True',
      created: '42 minutes ago',
      createdby: {
        name: 'Dr. Kristin Watson'
      },
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      download: "Download"
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/groups/user/users').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, type = null, sort, sortColumn } = config
  /* eslint-enable */
  
  const dataAsc = data.users.sort((a, b) => {
    if (a[sortColumn]) {
      return a[sortColumn] < b[sortColumn] ? -1 : 1
    } else {
      const splitColumn = sortColumn.split('.')
      const columnA = a[splitColumn[0]][splitColumn[1]]
      const columnB = b[splitColumn[0]][splitColumn[1]]
      return columnA < columnB ? -1 : 1
    }
  })

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()
  const queryLowered = q.toLowerCase()
  const filteredData = dataToFilter.filter(user => {
    /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
    return (
      (
        String(user.filename).toLowerCase().includes(queryLowered) ||
        String(user.type).toLowerCase().includes(queryLowered) ||
        String(user.params).toLowerCase().includes(queryLowered) ||
        String(user.done).toLowerCase().includes(queryLowered) ||
        String(user.created).toLowerCase().includes(queryLowered) ||
        String(user.createdby.name).toLowerCase().includes(queryLowered)
      ) && user.type.toLowerCase() === (type.toLowerCase() || user.type.toLowerCase())
    )
  })
  /* eslint-enable  */
  console.log(paginateArray(filteredData, perPage, page).length)
  return [
    200,
    {
      allData: data.users,
      total: filteredData.length,
      users: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }
  ]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------