import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  lists: [
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 1,
      date: 'since 21 Jan 2021'
    },
    {
      name: {
        og_name:  'QC Port of Corpus Christi',
        og_avatar: require('@src/assets/images/pages/group/og_mark.png').default
      },
      services: 'QuickVue SARS Antigen Test, Sofia 2 SARS Antigen FIA (Swab), CareStart Rapid Antigen Covid-19 Test',
      owing_organiztion: {
        owg_name :  'QuickCare2',
        owg_avatar: require('@src/assets/images/pages/group/owg_mark.png').default
      },
      users: 'Participants',
      type: 'Registration',
      // 1:active, 0:no active
      status: 0,
      date: 'since 21 Jan 2021'
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/groups/list/lists').reply(config => {
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