import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  lists: [
    {
      qc_id: {
        id:  'PHY0001',
        avatar: require('@src/assets/images/avatars/9-small.png').default
      },
      name: 'Dr. Aliene Mercedes',
      email: 'alma.lawson@example.com',
      phone_number: '(629) 555-0129',
      // 1:admin, 0:staff
      role: 1,
      // 1:ture, 0: false
      result_success: 1,
      status: 1
    },
    {
        qc_id: {
            id:  'PHY0002',
            avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 0,
        // 1:ture, 0: false
        result_success: 0,
        status: 0
    },
    {
      qc_id: {
        id:  'PHY0001',
        avatar: require('@src/assets/images/avatars/9-small.png').default
      },
      name: 'Dr. Aliene Mercedes',
      email: 'alma.lawson@example.com',
      phone_number: '(629) 555-0129',
      // 1:admin, 0:staff
      role: 1,
      // 1:ture, 0: false
      result_success: 1,
      status: 1
    },
    {
        qc_id: {
            id:  'PHY0002',
            avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 0,
        // 1:ture, 0: false
        result_success: 0,
        status: 0
    },
    {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      },
      {
        qc_id: {
          id:  'PHY0001',
          avatar: require('@src/assets/images/avatars/9-small.png').default
        },
        name: 'Dr. Aliene Mercedes',
        email: 'alma.lawson@example.com',
        phone_number: '(629) 555-0129',
        // 1:admin, 0:staff
        role: 1,
        // 1:ture, 0: false
        result_success: 1,
        status: 1
      },
      {
          qc_id: {
              id:  'PHY0002',
              avatar: require('@src/assets/images/avatars/9-small.png').default
          },
          name: 'Dr. Aliene Mercedes',
          email: 'alma.lawson@example.com',
          phone_number: '(629) 555-0129',
          // 1:admin, 0:staff
          role: 0,
          // 1:ture, 0: false
          result_success: 0,
          status: 0
      }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/organization/users').reply(config => {
  // eslint-disable-next-line object-curly-newline
  
  const { q = '', perPage = 10, page = 1, sort, sortColumn = 'name'} = config
  /* eslint-enable */
  
  const dataAsc = data.lists.sort((a, b) => {
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
  
  const filteredData = dataToFilter.filter(list => {
    /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
    return (
      (
        String(list.name.og_name).toLowerCase().includes(queryLowered) 
      ) 
    )
  })
  /* eslint-enable  */
  return [
    200,
    {
      allData: data.lists,
      total: filteredData.length,
      lists: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }
  ]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------