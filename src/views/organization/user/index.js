// ** React Imports
import { Link } from 'react-router-dom'
import {Fragment, useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Search, PlusCircle, LogIn, LogOut } from 'react-feather'
import DataTable from 'react-data-table-component'
import Breadcrumbs from '@components/breadcrumbs'
import Avatar from '@components/avatar'

import { useForm, Controller } from 'react-hook-form'
// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader, Label, Button, Input, Row, Col, Card, Form, InputGroup, InputGroupText, UncontrolledTooltip } from 'reactstrap'
import Select from 'react-select'
import Flatpickr from 'react-flatpickr'
import Import from './Import'
// ** Store & Actions
import { getData } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { selectThemeColors } from '@utils'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/group/group-list.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const roleOption = [
  { value: 'General', label: 'General' },
  { value: 'Administrator', label: 'Administrator' },
  { value: 'System Manager', label: 'System Manager' }
]
const statusOption = [
  { value: 'Active', label: 'Active' },
  { value: 'Pending', label: 'Pending' }
]
const trainingOption = [
  { value: 'web', label: 'Web Develop' },
  { value: 'android', label: 'Android Develop' }
]
const CustomHeader = ({ handleFilter, value}) => {
  const [show1, setShow1] = useState(false)
  const [picker, setPicker] = useState(new Date())
  const [show2, setShow2] = useState(false)
  const {
    control,
    setError,
    handleSubmit,
    formState: {errors }
  } = useForm({  })
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
  const [avatar, setAvatar] = useState(require('@src/assets/images/icons/modal_upload.png').default)

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1 col-lg-12'>
          <Col lg='0' className="btn_og_users me-1"  id='export'>
            <Link to={'../groups/users'} >
              <img className="btn_og_img"
                src={require('@src/assets/images/pages/organization/export_og_user.png').default} 
                width="33" height="33"
              />  
            </Link>
            <UncontrolledTooltip placement='top' target='export'>
              Export Users
            </UncontrolledTooltip>
          </Col>
          <Col lg='0' className="btn_og_users"  id='import'>
            <a onClick={() => setShow2(true)} >
              <img className="btn_og_img"
                src={require('@src/assets/images/pages/organization/import_og_user.png').default} 
                width="33" height="33"
              />  
            </a>
            <UncontrolledTooltip placement='top' target='import'>
              Import Users
            </UncontrolledTooltip>
          </Col>
          
          <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
            <ModalBody className='px-sm-5 mx-50 pb-5'>
              <div className='text-left mb-1'>
                <h3 className=' myTextColor mb-1'>IMPORT USERS</h3>
              </div>
              <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>

                <Col md={12} xs={12}>
                  <Label className='form-label' for='status'>
                  IMPORT TYPE*
                  </Label>
                  <Select
                    id='import_user_role'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={roleOption}
                    theme={selectThemeColors}
                    defaultValue={roleOption[0]}
                  />
                </Col>
            
                <hr className='invoice-spacing mt-2' />
                <Col xs={12}>
                  <Import />
                </Col>
                <Col xs={12}>
                  <div className='d-flex align-items-start flex-column'>
                    <div className='form-check form-check-inline mb-1'>
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
                    
                      <Label for='basic-cb-checked' className='form-check-label'>Dry Run
                      </Label>
                      
                    </div>
                    Checking this will run the import without creating or updating any records.
                  </div>
                </Col>
                <hr className='invoice-spacing mt-2' />
                <Col xs={12}>
                  <div className='d-flex align-items-start flex-column'>
                    <div className='mb-1'>
                      Note that only XLS and CSV formats can be uploaded. <span style = {{color:"#23CFFD"}}>Need Help?</span>
                    </div>
                    <div className='mb-1'>
                      Download sample file 
                      <span className = "pad_l-10">
                      <img className="btn_og_img mar_r-5"
                        src={require('@src/assets/images/icons/download_csv.png').default} 
                        width="40" height="40"
                      />
                      <img className="btn_og_img"
                      src={require('@src/assets/images/icons/download_xls.png').default} 
                      width="40" height="40"
                    />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className='d-flex justify-content-end mt-1 pt-50'>
                  <Button type='reset' className='me-1 round' color='secondary' outline onClick={() => setShow2(false)}>
                    Cancel
                  </Button>
                  <Button type='submit' className = "round" color='info'>
                    Submit
                  </Button>
                </Col>
                
              </Row>
            </ModalBody>
          </Modal>
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
          <Button onClick={() => setShow1(true)} color='success'>
          <PlusCircle size={20} className="me-1"/>
            Add User
          </Button>
          <Modal isOpen={show1} toggle={() => setShow1(!show1)} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={() => setShow1(!show1)}></ModalHeader>
            <ModalBody className='px-sm-5 mx-50 pb-5'>
              <div className='text-left mb-1'>
                <h3 className=' myTextColor mb-1'>ADD NEW USER</h3>
              </div>
              <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                <Col xs = {12} className = "mb-2">
                  <div className='d-flex'>
                    <div className='me-25'>
                      <img className='rounded me-50' width = "100" height = "100" src={avatar} alt='Generic placeholder image' />
                    </div>
                    <div className='d-flex align-items-end mt-75 ms-1'>
                      <div>
                        <p className='mb-1'>Png, Jpg & Bitmap, Max Size 5 Mb</p>
                        <Button tag={Label} className='mb-75 me-75' color='info' outline>
                          UPLOAD PROFILE PICTURE
                          <Input type='file' onChange={onChange} hidden accept='image/*' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <span style = {{fontSize:"18px", color:"#D4D4D4"}}>USER DETAILS</span>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='firstName'>
                    First Name
                  </Label>
                  <Controller
                    control={control}
                    name='firstName'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          id='firstName'
                          placeholder='First Name'
                          value={field.value}
                          invalid={errors.firstName && true}
                        />
                      )
                    }}
                  />
                  {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='lastName'>
                    Last Name
                  </Label>
                  <Controller
                    control={control}
                    name='lastName'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          id='lastName'
                          placeholder='Last Name'
                          value={field.value}
                          invalid={errors.lastName && true}
                        />
                      )
                    }}
                  />
                  {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='email'>
                    Email
                  </Label>
                  <Controller
                    control={control}
                    name='email'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          id='email'
                          placeholder='Email'
                          value={field.value}
                          invalid={errors.email && true}
                        />
                      )
                    }}
                  />
                  {errors.email && <FormFeedback>Please enter a valid Email</FormFeedback>}
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='mobile'>
                    Mobile
                  </Label>
                  <Controller
                    control={control}
                    name='mobile'
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          id='mobile'
                          placeholder='Mobile'
                          value={field.value}
                          invalid={errors.mobile && true}
                        />
                      )
                    }}
                  />
                  {errors.mobile && <FormFeedback>Please enter a valid Mobile</FormFeedback>}
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='status'>
                  ROLE
                  </Label>
                  <Select
                    id='add_user_role'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={roleOption}
                    theme={selectThemeColors}
                    defaultValue={roleOption[0]}
                  />
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='status'>
                  STATUS
                  </Label>
                  <Select
                    id='add_user_status'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={statusOption}
                    theme={selectThemeColors}
                    defaultValue={statusOption[0]}
                  />
                </Col>
                <hr className='invoice-spacing mt-2' />
                <span style = {{fontSize:"18px", color:"#D4D4D4"}}>TRAINNING DETAILS</span>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='status'>
                  TRAINNING COMPLETED
                  </Label>
                  <Select
                    id='add_user_trainning'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={trainingOption}
                    theme={selectThemeColors}
                    defaultValue={trainingOption[0]}
                  />
                </Col>
                <Col md={6} xs={12}>
                  <Fragment>
                    <Label className='form-label' for='status'>
                    COMPLETATION DATE
                    </Label>
                    <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                  </Fragment>
                </Col>
                <hr className='invoice-spacing mt-2' />
                <Col xs={12} className='d-flex justify-content-end mt-1 pt-50'>
                  <Button type='reset' className='me-1 round' color='secondary' outline onClick={() => setShow1(false)}>
                    Cancel
                  </Button>
                  <Button type='submit' className = "round" color='info'>
                    Add User
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

const OrganizationUserList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.organizationUsers)

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
      <Breadcrumbs breadCrumbTitle='Organization users for Quickcare (24)' breadCrumbParent='Orgnizations'  breadCrumbActive='Users' />
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
            selectableRows
            pointerOnHover
          />
        </div>
      </Card>
    </div>
  )
}

export default OrganizationUserList
