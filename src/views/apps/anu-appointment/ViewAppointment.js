import React, { useEffect, useState } from "react"
import "./mycss/ViewAppointment.css"
import "./mycss/NewAppointment.css"
import './mycss/AddTip.css'
import { User, Star, FileText, X} from "react-feather"
import { NavLink, useHistory, useParams } from "react-router-dom"
import axios from 'axios'
import { ButtonDropdown, DropdownMenu, DropdownItem, Button, DropdownToggle, Alert } from 'reactstrap'

const ViewAppointment = () => {

    // For dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false)
    //For alert compo
    const [visible, setVisible] = useState(false)
    //For store appointment data
    const [appointment, setAppointment] = useState({})

    //demo price to complete functionality
    const [myPrice, setMyPrice] = useState("")
    //demo services for complete functionality\
    const myServices = [{ name:'Haircut', price:40}, {name:'Hair Color', price:57}, {name:'Blow Dry', price:35}, {name:'Balayage', price:150}, {name:'Facial', price:115}]

    //for dropdown
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen)
    }


    //Get data by id and store it
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4000/api/newAppointments/${id}`)
    .then(res => {
        setAppointment(res.data)
        setMyPrice(myServices.filter((data) => data.name === res.data.services[0])[0].price)
      })
      .catch(err => console.log(err))
    }, [])

    //Change date format
    const date = new Date(appointment.date)
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }
    const new_date =  date.toLocaleDateString('en-US', options)

    const date1 = new Date(appointment.createdAt)
    const options1 = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }
    const new_date1 =  date1.toLocaleDateString('en-US', options1)

    const options2 = { hour: 'numeric', minute: 'numeric', hour12: true }
    const time = date1.toLocaleTimeString('en-US', options2)
    
    //Fot redirect
    const history = useHistory()

    //For delete a appointment by id
    const deleteAppointment = () => {
      axios.delete(`http://localhost:4000/api/newAppointments/${id}`)
      .then(res => {
        console.log(res.data)
        setVisible(true)
        setTimeout(() => {
        history.push('/timegraph')
          setVisible(false)
        }, 3000)
      })
      .catch(err => console.log(err))
    }
    
  return (
    <div className="view-appointment-container">
      {/* for alert */}
      <div className="my-alert-comp my-alert-comp-2">
      <Alert isOpen={visible}>
        <div className='alert-body text-center fs-4'>
        Appointment deleted successfully
        </div>
      </Alert>
      </div>
      <div className="top-container-aa2">
        <div> View Appointment</div>
        <NavLink to='/timegraph'>
        <X size={30} className='top-cross-aa2'/>
        </NavLink>
      </div>
      <div className="left-container-aa2">
        <div className="detail-wrapper-aa2">
          <div className="date-box-aa2">{new_date}</div>
          <div className="appointment-detail-box-aa2 d-flex justify-content-between">
            <p className="time-aa2 text-aa2">{appointment.start_time}</p>
            <div className="detail-text-aa2">
              <p className="service-name-aa2 text-aa2">{appointment.services}</p>
              <p className="team-member-aa2 text-bb2 ">{appointment.duration} {appointment.team_member}</p>
            </div>
            <div className="price-aa2 text-aa2 ">₹{myPrice}</div>
          </div>
          <div className="total-detail-box-aa2 d-flex justify-content-between">
            <div className="khaali-aa2"></div>
            <div className="total-time-aa2 text-dd2">{appointment.duration}</div>
            <div className="total-ammount-aa2 text-cc2">₹{myPrice}</div>
          </div>
        </div>
        <div className="appointment-history">
          <p className="text-ee2">Appointment history</p>
          <p className="text-ff2">
            Booked, reference 3768688 at {new_date1} at {time}
          </p>
        </div>
      </div>
      <div className="right-container-aa2">
        <div className="new-client-box-aa2 d-flex align-items-center">
          <div className="circle-logo-aa2 d-flex justify-content-center align-items-center text-hh2">
            <User style={{color:"#1bb70b"}} size={35} />
          </div>
          <div>
            <p className="client-name-aa2 text-aa2" style={{ margin: "0" }}>
              John doe
            </p>
            </div>
            </div>
        <div className="bottom-box-aa2">
          <div className="appointment-status-aa2 d-flex justify-content-center">
            <button className="d-flex align-items-center justify-content-center">
              <span
                className="me-3"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "100%",
                  background: "rgba(27, 183, 11, 0.9)"
                }}
              >
                <Star style={{color:"white"}} size={15} />
              </span>
              New Appointment
            </button>
          </div>
          <div className="sale-receipt-box-aa2">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div><FileText size={70} strokeWidth={0.8}/></div>
              <div className="text-kk2 text-center">No invoice issued yet</div>
            </div>
          </div>
          <div className="btn-box-aa2">
            <p className="text-jj2">Total: ₹{myPrice} {`(${appointment.duration})`}</p>
            <div className="btn-wrapper-aa2 d-flex justify-content-between">
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle className="checkout-bb2" outline>
        More option
      </DropdownToggle>      
      <DropdownMenu>
        <DropdownItem className="fs-4" href='/' tag={NavLink} to={`/editAppointment/${id}`} >
          Edit appointment
        </DropdownItem>
        <DropdownItem className="fs-4" href='/' tag='a' onClick={e => e.preventDefault()}>
          Reschedule
        </DropdownItem>
        <DropdownItem className="fs-4" style={{color:'red'}} href='/' tag='a' onClick={e => {
          e.preventDefault()
          deleteAppointment(id)
          }}>
          Cancel
        </DropdownItem>
        <DropdownItem className="fs-4" style={{color:'red'}} href='/' tag='a' onClick={e => e.preventDefault()}>
          No-show
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
              <Button.Ripple className="checkout-bb2" color='dark' to={`/checkout/${id}`} tag={NavLink} >
          Checkout
        </Button.Ripple>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAppointment
