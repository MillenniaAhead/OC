// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { User, Check, X, ChevronDown, Search, PlusCircle } from 'react-feather'
import DataTable from 'react-data-table-component'
import Breadcrumbs from '@components/breadcrumbs'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader, Label, Button, Input, Row, Col, Card, Form, InputGroup, InputGroupText, UncontrolledTooltip } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
// ** Store & Actions
import { getData } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { selectThemeColors } from '@utils'
// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/group/group-list.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const defaultValues = {
  firstName: 'Bob',
  lastName: 'Barton',
  username: 'bob.dev'
}
const CustomHeader = ({ handleFilter, value}) => {
  const [show, setShow] = useState(false)
  const {
    control,
    setError,
    handleSubmit,
    formState: {errors }
  } = useForm({ defaultValues })
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }


  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1 col-lg-12'>
          <Col lg='0' className="btn_og_users"  id='positionTop'>
            <Link to={'./user'} >
              <img className="btn_og_img"
                src={require('@src/assets/images/pages/organization/og_users.png').default} 
                width="33" height="33"
              />  
            </Link>
            <UncontrolledTooltip placement='top' target='positionTop'>
              Manage Users
            </UncontrolledTooltip>
          </Col>
          

          <Form className='faq-search-input flex-grow-1 px-2 mar_l-10' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <Input
                id='orgnization-search'
                className=''
                type='text'
                value={value}
                onChange={e => handleFilter(e.target.value)}
                placeholder='Search Organization'
              />
              <InputGroupText>
                <Search size={14}/>
              </InputGroupText>
            </InputGroup>
          </Form>
          <Button onClick={() => setShow(true)} color='success'>
          <PlusCircle size={20} className="me-1"/>
            Add Organization
          </Button>
          <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
            <ModalBody className='px-sm-5 mx-50 pb-5'>
              <div className='text-left mb-2'>
                <h3 className='mb-1'>ADD NEW ORGANIZATION</h3>
              </div>
              <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='email'>
                    ORGANIZATION NAME *
                  </Label>
                  <Controller
                    control={control}
                    name='organName'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          id='organName'
                          placeholder='Name'
                          value={field.value}
                          invalid={errors.organName && true}
                        />
                      )
                    }}
                  />
                  {errors.organName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='status'>
                  ORGANIZATION TYPE
                  </Label>
                  <Select
                    id='organ_type'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={statusOptions}
                    theme={selectThemeColors}
                    defaultValue={statusOptions[0]}
                  />
                </Col>
                <Col xs={12}>
                  <Label className='form-label' for='desc'>
                    DESCRIPTION
                  </Label>
                  <Controller
                    control={control}
                    name='organDesc'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          type = "textarea"
                          id='organDesc'
                          rows="5"
                          placeholder='Description'
                          value={field.value}
                          invalid={errors.organDesc && true}
                        />
                      )
                    }}
                  />
                  {errors.organDesc && <FormFeedback>Please enter a valid Description</FormFeedback>}
                  </Col>
                <Col xs={12}>
                  <Label className='form-label' for='desc'>
                    WELCOME MESSAGE
                  </Label>
                  <Controller
                    control={control}
                    name='organWelcome'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          type = "textarea"
                          id='organWelcome'
                          rows="2"
                          placeholder='Enter message here...'
                          value={field.value}
                          invalid={errors.organWelcome && true}
                        />
                      )
                    }}
                  />
                  {errors.organWelcome && <FormFeedback>Please enter a valid Description</FormFeedback>}
                </Col>
                <hr className='invoice-spacing mt-2' />
                <Col xs={12}>
                  <div className='d-flex align-items-center'>
                    <div className='form-check form-check-inline'>
                        <Controller
                        control={control}
                        name='organAgree'
                        render={({ field }) => {
                          return (
                            <Input
                              {...field}
                              type = "checkbox"
                              id='organAgree'
                              value={field.value}
                              invalid={errors.organAgree && true}
                            />
                          )
                        }}
                      />
                    
                      <Label for='basic-cb-checked' className='form-check-label'>
                      Security delegates in this organization can approve others for access to test results and other detailed participant history.
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className='d-flex justify-content-end mt-2 pt-50'>
                  <Button type='reset' className='me-1 round' color='secondary' outline onClick={() => setShow(false)}>
                    Cancel
                  </Button>
                  <Button type='submit' className = "round" color='info'>
                    Add
                  </Button>
                  
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </div>
  )
}

const OrganizationList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.organizationList)
console.log(store)
  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage  = 10

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage
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
        perPage: rowsPerPage
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
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
      q: value
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
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }

  return (
    <div className='invoice-list-wrapper'>
      <Breadcrumbs breadCrumbTitle='Organizations' breadCrumbParent='Orgnizations'  breadCrumbActive='Organizations' />
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
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
              />
            }
            pointerOnHover
            rowHeight={300}

          />
        </div>
      </Card>
    </div>
  )
}

export default OrganizationList
