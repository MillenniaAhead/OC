// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Search, PlusCircle  } from 'react-feather'
import DataTable from 'react-data-table-component'
import Breadcrumbs from '@components/breadcrumbs'
// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, Form, InputGroup, InputGroupText } from 'reactstrap'

// ** Store & Actions
import { getData } from './store'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/group/group-list.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col className='d-flex align-items-center px-0 px-lg-1 col-lg-12'>
          <Input className='w-auto ' type='select' value={statusValue} onChange={handleStatusValue}>
            <option value=''>Orgnization</option>
            <option value='downloaded'>Downloaded</option>
            <option value='draft'>Draft</option>
            <option value='paid'>Paid</option>
            <option value='partial payment'>Partial Payment</option>
            <option value='past due'>Past Due</option>
            <option value='sent'>Sent</option>
          </Input>
          <Form className='faq-search-input flex-grow-1 px-2' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <Input
                id='orgnization-search'
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
          <Button tag={Link} to='/groups/list/add' color='success'>
            <PlusCircle size={20} className="me-1"/>
            Add Record
          </Button>
          
        </Col>
      </Row>
    </div>
  )
}

const GroupList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.groupList)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const rowsPerPage  = 10

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        status: statusValue
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
        status: statusValue
      })
    )
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        status: statusValue,
        perPage: rowsPerPage,
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
      status: statusValue
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
      <Breadcrumbs breadCrumbTitle='Groups' breadCrumbParent='Orgnizations' breadCrumbActive='Groups' />
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
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handleStatusValue={handleStatusValue}
              />
            }
            selectableRows
            pointerOnHover
            rowHeight={300}

          />
        </div>
      </Card>
    </div>
  )
}

export default GroupList
