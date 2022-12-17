// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Home, Check, X, Briefcase } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const defaultValues = {
  lastName: '',
  firstName: ''
}

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const AddNewAddress = () => {
  // ** States
  const [show, setShow] = useState(false)

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      reset()
    } else {
      setError('firstName', {
        type: 'manual'
      })
      setError('lastName', {
        type: 'manual'
      })
    }
  }

  const onDiscard = () => {
    clearErrors()
    setShow(false)
    reset()
  }

  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>
          <Home className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Add New Address</CardTitle>
          <CardText>Ready to use form to collect user address data with validation and custom input support.</CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>
      <Modal
        isOpen={show}
        onClosed={onDiscard}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-5 px-sm-4 mx-50'>
          <h1 className='address-title text-center mb-1'>Add New Address</h1>
          <p className='address-subtitle text-center mb-2 pb-75'>Add address for billing address</p>
          <Row tag='form' className='gy-1 gx-2' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Row className='custom-options-checkable'>
                <Col md={6} className='mb-md-0 mb-2'>
                  <Input
                    type='radio'
                    defaultChecked
                    id='homeAddress'
                    name='addressRadio'
                    value='homeAddress'
                    className='custom-option-item-check'
                  />
                  <label className='custom-option-item px-2 py-1' htmlFor='homeAddress'>
                    <span className='d-flex align-items-center mb-50'>
                      <Home className='font-medium-4 me-50' />
                      <span className='custom-option-item-title h4 fw-bolder mb-0'>Home</span>
                    </span>
                    <span className='d-block'>Delivery time (7am – 9pm)</span>
                  </label>
                </Col>
                <Col md={6} className='mb-md-0 mb-2'>
                  <Input
                    type='radio'
                    id='officeAddress'
                    name='addressRadio'
                    value='officeAddress'
                    className='custom-option-item-check'
                  />
                  <label className='custom-option-item px-2 py-1' htmlFor='officeAddress'>
                    <span className='d-flex align-items-center mb-50'>
                      <Briefcase className='font-medium-4 me-50' />
                      <span className='custom-option-item-title h4 fw-bolder mb-0'>Office</span>
                    </span>
                    <span className='d-block'>Delivery time (10am – 6pm)</span>
                  </label>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Label className='form-label' for='firstName'>
                First Name
              </Label>
              <Controller
                control={control}
                render={({ field }) => (
                  <Input
                    id='firstName'
                    name='firstName'
                    placeholder='John'
                    invalid={errors.firstName && true}
                    {...field}
                  />
                )}
              />
              {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </Col>
            <Col xs={12} md={6}>
              <Label className='form-label' for='lastName'>
                Last Name
              </Label>
              <Controller
                control={control}
                render={({ field }) => (
                  <Input id='lastName' name='lastName' placeholder='Doe' invalid={errors.lastName && true} {...field} />
                )}
              />
              {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='country'>
                Country
              </Label>
              <Select
                id='country'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                defaultValue={countryOptions[0]}
              />
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='addressLine1'>
                Address Line 1
              </Label>
              <Input id='addressLine1' placeholder='12, Business Park' />
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='addressLine2'>
                Address Line 2
              </Label>
              <Input id='addressLine2' placeholder='Mall Road' />
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='town'>
                Town
              </Label>
              <Input id='town' placeholder='Los Angeles' />
            </Col>
            <Col xs={12} md={6}>
              <Label className='form-label' for='state-province'>
                State / Province
              </Label>
              <Input id='state-province' placeholder='California' />
            </Col>
            <Col xs={12} md={6}>
              <Label className='form-label' for='zip-code'>
                Zip Code
              </Label>
              <Input id='zip-code' placeholder='99950' />
            </Col>
            <Col xs={12}>
              <div className='d-flex align-items-center'>
                <div className='form-check form-switch form-check-primary me-25'>
                  <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                  <Label className='form-check-label' htmlFor='billing-switch'>
                    <span className='switch-icon-left'>
                      <Check size={14} />
                    </span>
                    <span className='switch-icon-right'>
                      <X size={14} />
                    </span>
                  </Label>
                </div>
                <label className='form-check-label fw-bolder' htmlFor='billing-switch'>
                  Use as a billing address?
                </label>
              </div>
            </Col>
            <Col className='text-center' xs={12}>
              <Button type='submit' className='me-1 mt-2' color='primary'>
                Submit
              </Button>
              <Button type='reset' className='mt-2' color='secondary' outline onClick={onDiscard}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default AddNewAddress
