// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Search } from 'react-feather'
import DataTable from 'react-data-table-component'
import Breadcrumbs from '@components/breadcrumbs'
// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, Form, InputGroup, InputGroupText } from 'reactstrap'

// ** Store & Actions
import { getData } from './store'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleTypeValue, typeValue }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col
          lg='12'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'
          >
          <Form className='faq-search-input flex-grow-1 px-2' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <Input
                id='search-invoice'
                className=''
                type='text'
                value={value}
                onChange={e => handleFilter(e.target.value)}
                placeholder='Search by Filename or Params'
              />
              <InputGroupText>
                <Search size={14}/>
              </InputGroupText>
            </InputGroup>
          </Form>
            
          <Input className='w-auto ' type='select' value={typeValue} onChange={handleTypeValue}>
            <option value=''>Select Type</option>
            <option value='participant'>Participant</option>
            <option value='user'>User</option>
            <option value='case report'>Case Report</option>
          </Input>
        </Col>
      </Row>
    </div>
  )
}

const UserList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.groupUser)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('filename')
  const [currentPage, setCurrentPage] = useState(1)
  const [typeValue, setTypeValue] = useState('')
  const rowsPerPage = 10
  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        type: typeValue
      })
    )
  }, [dispatch, store.data.length])

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        type: typeValue
      })
    )
  }

  const handleTypeValue = e => {
    setTypeValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        type: e.target.value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        type: typeValue,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))
    return (
      <ReactPaginate
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        pageCount={count || 1}
        activeClassName='active'
        breakClassName='page-item'
        pageClassName={'page-item'}
        breakLinkClassName='page-link'
        nextLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousLinkClassName={'page-link'}
        previousClassName={'page-item prev'}
        onPageChange={page => handlePagination(page)}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }

  const dataToRender = () => {
    const filters = {
      q: value,
      tyep: typeValue
    }
    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        q: value,
        page: currentPage,
        sort: sortDirection,
        status: statusValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }

  return (
    <div className='invoice-list-wrapper'>
      <Breadcrumbs breadCrumbTitle='Organization users Exports for Quickcare (24)' breadCrumbParent='Orgnization' breadCrumbParent2='Group' breadCrumbParent3='Users' breadCrumbActive='Expert' />
      <Card>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            onSort={handleSort}
            data={dataToRender()}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                value={value}
                typeValue={typeValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handleTypeValue={handleTypeValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default UserList
