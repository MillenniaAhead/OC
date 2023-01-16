import React from "react"
import "./mycss/ViewAppointment.css"
import "./mycss/NewAppointment.css"
import './mycss/AddTip.css'
import { User, Star, FileText, X,  CheckCircle} from "react-feather"
import { Button  } from 'reactstrap'
import { NavLink } from "react-router-dom"

const ViewAppointment = () => {
  
  return (
    <div className="view-appointment-container">
      <div className="top-container-aa2">
        <div> View Appointment</div>
        <NavLink to='/timegraph'>
        <X size={30} className='top-cross-aa2'/>
        </NavLink>
      </div>
      <div className="left-container-aa2">
        <div className="detail-wrapper-aa2">
          <div className="date-box-aa2">Friday, 16 Dec 2022</div>
          <div className="appointment-detail-box-aa2 d-flex justify-content-between">
            <p className="time-aa2 text-aa2">10:00 am</p>
            <div className="detail-text-aa2">
              <p className="service-name-aa2 text-aa2">Haircut</p>
              <p className="team-member-aa2 text-bb2 ">30 min with Wendy</p>
            </div>
            <div className="price-aa2 text-aa2 ">₹30</div>
          </div>
          <div className="total-detail-box-aa2 d-flex justify-content-between">
            <div className="khaali-aa2"></div>
            <div className="total-time-aa2 text-dd2">30min</div>
            <div className="total-ammount-aa2 text-cc2">₹30</div>
          </div>
        </div>
        <div className="appointment-history">
          <p className="text-ee2">Appointment history</p>
          <p className="text-ff2">
            Booked, reference 3768688 at Tue, 16 Dec 2022 at 11:00 am
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
            <p className="text-jj2">Total: ₹30 (30min)</p>
            <div className="btn-wrapper-aa2 d-flex justify-content-between">
              <button className="checkout-bb2">More option</button>
              <Button.Ripple className="checkout-bb2" color='dark' to='/checkout'  tag={NavLink} >
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
