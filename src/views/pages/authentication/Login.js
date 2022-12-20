// ** React Imports
import { useContext, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

import Logo from '../../../assets/images/pages/logo.png'
import Fb from "../../../assets/images/pages/fb.png"
import Google from "../../../assets/images/pages/google.png"
import Apple from "../../../assets/images/pages/apple.png"
import Dot from "../../../assets/images/pages/Ellipse.png"
import Web from "../../../assets/images/pages/Web Help.png"


const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title fw-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@demo.com'
}

const Login = () => {
  // ** Hooks
  const { skin } = useSkin()
  const dispatch = useDispatch()
  const history = useHistory()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const illustration = skin === 'dark' ? 'image-1.png' : 'image-1.png',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      useJwt
        .login({ email: data.loginEmail, password: data.password })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          history.push(getHomeRouteForLoggedInUser(data.role))
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch(err => console.log(err))
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
    <div style={{background: 'white' }}>
      <Row style={{marginTop: '-3px'}} className='auth-inner'>
        <Col style={{marginRight: '-100px'}} className='d-none d-lg-flex' lg='8' sm='12'>
            <img style={{height: '665px', width: '740px', marginLeft: '-10px', objectFit: 'cover', objectPosition:'left'}} className='img-fluid' src={source} alt='Login Cover' />
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
          <p>
            Create an account or log in to manage your Salon business.
          </p>
          </div>
           
            <Alert color='primary'>
              
              <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '2px', right: '10px' }}
              />
              <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert>
            <Form className='auth-login-form' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Controller
                  id='loginEmail'
                  name='loginEmail'
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type='email'
                      placeholder='john@example.com'
                      invalid={errors.loginEmail && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small style={{color: '#1E49E2'}}>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              <div style={{marginTop: '-2px'}} className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <button className='btn' style={{ marginTop: '-6px', background: '#4E4E4E', color: 'white', width: '300px'}} type='submit' block>
                Sign in
              </button>
              <div style={{marginTop: '4px'}} className='divider'>
              <div className='divider-text'>OR</div>
              </div>
              <button
              style={{ width: "300px", height: "45px", marginTop: '-9px' }}
              className="card border"
            >
              <div className="card-body d-flex">
                <img
                  style={{ width: "28px", height: "22px", marginTop: "-8px" }}
                  src={Fb}
                  alt="fb"
                />
                <p className='px-2' style={{marginTop: "-8px"}}>
                  Continue with Facebook
                </p>
              </div>
            </button>
            <button
              style={{ width: "300px", height: "45px", marginTop: '-10px' }}
              className="card border"
            >
              <div className="card-body d-flex">
                <img
                  style={{
                    marginTop: "-10px",
                    marginLeft: "-8px",
                    width: "42px",
                    height: "28px"
                  }}
                  src={Google}
                  alt="google"
                />
                <p
                  className="px-2"
                  style={{
                    marginTop: "-8px"
                  }}
                >
                  Continue with Google
                </p>
              </div>
            </button>
            <button
              style={{ width: "300px", height: "45px", marginTop: '-10px' }}
              className="card border"
            >
              <div className="card-body d-flex">
                <img
                  style={{
                    width: "16px",
                    height: "16px",
                    marginTop: "-8px",
                    marginLeft: "3px"
                  }}
                  src={Apple}
                  alt="apple"
                />
                <p
                  className="px-3"
                  style={{
                    marginTop: "-8px"
                  }}
                >
                  Continue with Apple
                </p>
              </div>
            </button>

            </Form>
            <p style={{marginTop: '-8px'}} className='text-center'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span style={{color: '#1E49E2'}}>Create an account</span>
              </Link>
            </p>
            <div style={{marginLeft: '45px', marginTop: '-10px', marginBottom: '-58px' }} className="d-flex">
              <div>
                <p style={{fontSize: '12px'}}>
                  GB
                  <span
                    style={{
                      marginLeft: "5px",
                      color: ["#1E49E2"],
                      fontSize: "14px"
                    }}
                  >
                    English
                  </span>
                </p>
              </div>
              <div>
                <img style={{ marginLeft: "30px" }} src={Dot} alt="dot" />
              </div>
              <div style={{ marginLeft: "25px" }} className="d-flex">
                <img
                  style={{ width: "20px", height: "20px", marginRight: "8px", marginTop: '1px' }}
                  src={Web}
                  alt="web"
                />
                <p
                  style={{
                    color: ["#1E49E2"]
                  }}
                >
                  Support
                </p>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
