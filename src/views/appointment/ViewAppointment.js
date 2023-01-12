import React, { useState} from "react"
import "../mycss/ViewAppointment.css"
import "../mycss/NewAppointment.css"
import '../mycss/AddTip.css'
import { User, Star, FileText, X,  CheckCircle} from "react-feather"
import { Button, Offcanvas, OffcanvasBody } from 'reactstrap'
import { NavLink } from "react-router-dom"

const ViewAppointment = () => {
  const [canvasPlacement, setCanvasPlacement] = useState('end')
  const [canvasOpen, setCanvasOpen] = useState(false)
  
  const toggleCanvasEnd = () => {
    setCanvasPlacement('end')
    setCanvasOpen(!canvasOpen)
  }

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
              <div className="text-kk2">No invoice issued yet</div>
            </div>
          </div>
          <div className="btn-box-aa2">
            <p className="text-jj2">Total: ₹30 (30min)</p>
            <div className="btn-wrapper-aa2 d-flex justify-content-between">
              <button onClick={toggleCanvasEnd} className="checkout-bb2">More option</button>
              <Button.Ripple className="checkout-bb2" color='dark' to='/checkout'  tag={NavLink} >
          Checkout
        </Button.Ripple>
            </div>
          </div>
        </div>
      </div>
      
      <Offcanvas className="off-canvas-container-aa2" direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasEnd}>
        <OffcanvasBody  className='off-canvas-aa2 p-0'
        >
          <div className="offcanvas-left-box-aa2 d-flex align-items-center flex-column">
            <div className="w-100"><X  strokeWidth={1} size={30} onClick={toggleCanvasEnd} style={{cursor:"pointer"}}/></div>
            <div className="success-check-aa2"><CheckCircle size={130} strokeWidth={1.3} style={{color:"#00a36d"}} /></div>
            <div className="text-cc2 complete-text-aa2">Completed</div>
            <div className="text-bb2 text-center">Full payment received on Saturday, 15 Full payment received on Saturday, 15</div>
            <button className="btn-cc2">Rebook appointment</button>
            <button className="btn-bb2">Back to calender</button>
            <button className="btn-bb2">Actions</button>
            <button className="btn-dd2">Invoice details</button>
          </div>
          <div className="offcanvas-right-box-aa2">
            <div className="text-xx2">Invoice detail</div>
            <div className="detail-box-bb2">
              <div className="d-flex align-items-center flex-column">
                <div className="text-zz2">Invoice#3</div>
                <div className="text-yy2">Saturday, 15 Oct 2022</div>
                <div className="text-yy2">Billed to Walk-In</div>
                <div className="text-ww2">Completed</div>
              </div>
              <div className="item-list-box-aa3">
              <div className="list-top-aa3 d-flex justify-content-between">
                    <div className='text-ee3'>Items</div>
                    <div className='text-ee3'>Amount</div>
                </div>
                <div className='mt-1'>
                <div className="list-item-aa3 d-flex  justify-content-between">
                    <div className='text-gg3'>Facial</div>
                    <div className='text-vv2'>1*₹115</div>
                </div>
                <div className='text-ee3' style={{marginTop:"5px", width:"60%"}}> 12:00pm, 13 Oct 2022 with Kondeti Anusha </div>
                </div>
                </div>
                <div className='right-child-bb2'>
            <div className="total-box-aa3">
                <div className="subtotal-aa2 d-flex justify-content-between">
                    <div className='text-ee3'>Subtotal</div>
                    <div className='text-ee3'>₹115</div>
                </div>
                <div className="total-aa2 d-flex justify-content-between">
                    <div className='text-vv2'>Total</div>
                    <div className='text-vv2'>₹115</div>
                </div>
                <div className="taxes d-flex justify-content-between">
                    <div className='text-uu2'>Tips</div>
                    <div className='text-ee3'>₹11.50</div>
                </div>
                <div className="tip d-flex justify-content-between">
                    <div className='text-uu2 d-flex'><span style={{padding:"1px 3px 0 0", width:"70%"}} className='d-flex'>Cash payment on Saturday, 15 Oct
2022 at 11:19am</span></div>
                    <div className='text-ee3'>₹126.50</div>
                </div>
                <div className="balance-aa2 d-flex justify-content-between">
                    <div className='text-gg3'>Balance</div>
                    <div className='text-gg3'>₹0</div>
                </div>
            </div>
          </div>
            </div>
            </div>
            
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default ViewAppointment
