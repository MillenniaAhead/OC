// ** React Imports
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/authentication'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, Label, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

import Logo from '../../../assets/images/pages/logo.png'

const defaultValues = {
  email: '',
  terms: false,
  username: '',
  password: ''
}

const Register = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const { skin } = useSkin()
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const illustration = skin === 'dark' ? 'image-1.png' : 'image-1.png',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    const tempData = { ...data }
    delete tempData.terms
    if (Object.values(tempData).every(field => field.length > 0) && data.terms === true) {
      const { username, email, password } = data
      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) {
                setError(property, {
                  type: 'manual',
                  message: res.data.error[property]
                })
              }
            }
          } else {
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            history.push('/')
          }
        })
        .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
        if (key === 'terms' && data.terms === false) {
          setError('terms', {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div style={{background: 'white'}}>
      <Row style={{marginTop: '-3px'}} className='auth-inner'>
        <Col style={{marginRight: '-100px'}} className='d-none d-lg-flex' lg='8' sm='12'>
            <img style={{height: '670px', width: '720px', marginLeft: '-10px', objectFit: 'cover', objectPosition:'left'}} className='img-fluid' src={source} alt='Login Cover' />
        </Col>
        <Col style={{marginTop: '-40px'}} className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
          <div className='text-center'
        >
          <img
            width={50}
            src={Logo}
            alt="logo"
          />
          <h4
          className='fs-3 mt-1 fw-bolder'
          >
            <span
              style={{ color: ["#1BB70B"]}}
            >
              OUTLET
            </span>
            CONTROL
          </h4>
          <p style={{color: 'black'}} className='fs-4 fw-bolder'>
          Create a business account
          </p>
          </div>
            <Form action='/' className='auth-register-form mt-1' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Controller
                  id='username'
                  name='username'
                  control={control}
                  render={({ field }) => (
                    <Input autoFocus placeholder='johndoe' invalid={errors.username && true} {...field} />
                  )}
                />
                {errors.username ? <FormFeedback>{errors.username.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Controller
                  id='email'
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input type='email' placeholder='john@example.com' invalid={errors.email && true} {...field} />
                  )}
                />
                {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-mobilenumber'>
                  Mobile Number
                </Label>
                <Controller
                  id='mobilenumber'
                  name='mobilenumber'
                  control={control}
                  render={({ field }) => (
                    <Input autoFocus type='number' placeholder='Enter your mobile number' invalid={errors.mobilenumber && true} {...field} />
                  )}
                />
                {errors.mobilenumber ? <FormFeedback>{errors.mobilenumber.message}</FormFeedback> : null}
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-country'>
                  Country
                </Label>
                <Controller
                  id='country'
                  name='country'
                  control={control}
                  render={({ field }) => (
                    <Input autoFocus placeholder='India' invalid={errors.country && true} {...field} />
                  )}
                />
                {errors.country ? <FormFeedback>{errors.country.message}</FormFeedback> : null}
              </div>

              <div style={{marginTop: '-5px'}} className='form-check mb-1'>
                <Controller
                  name='terms'
                  control={control}
                  render={({ field }) => (
                    <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
                  )}
                />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a style={{color: '#1A85E7'}} className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Link to='/verify'>
               <button  className='btn' style={{background: '#4E4E4E', color: 'white', width: '300px', marginTop: '-5px'}} type='submit' block>
                Sign up
              </button>
              </Link>
             
            </Form>
            <p style={{marginBottom: '-45px'}} className='text-center mt-1'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span style={{color: '#1A85E7'}}>Sign in instead</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
