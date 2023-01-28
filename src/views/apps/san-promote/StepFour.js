import React from 'react'
import './mycss1/StepFour.css'
import { NavLink } from 'react-router-dom'
import ticketG from "../images/ticket-g.svg"
import { CheckCircle, X, Calendar, Tag } from 'react-feather'

const StepFour = () => {
  return (
    <div className="step-four-container">
    <div className="cross-btn-wrapper">
      <NavLink to="/promote/dealstwo">
      <X size={45} strokeWidth={1} style={{color:'black'}} />
      </NavLink>
    </div>
    <div className="step-four-body">
        <div className="sucess-image-box">
          <div className="sucess-image">
            <CheckCircle style={{color:"#1bb70b"}} size={130} strokeWidth={1.3}/>
          </div>
        </div>
          <div className="sucess-message">
            <h3>Your promotion is set ! </h3>
          </div>
          <div className="promotion-detail-box">
            <div className="text-k"><p>Promotion detail</p></div>
            <div>
              <div className='detail-dabba'>
                <div>
                <Tag size={35} className='icon-a1' />
                </div>
                <div>
                <p>10% discount on this product and this service</p>
                </div>
              </div>
              <div  className='detail-dabba'>
              <div>
                <img src={ticketG} alt="" />
                </div>
                <div>
                <p>Promotion can be redeemed at Point of Sale</p>
                </div>
              </div>
              <div  className='detail-dabba'>
                <div style={{paddingRight:'4px'}}>
                    <Calendar size={35} className='icon-a1'/>
                </div>
                <div>
                <p>Promotion starts on 21 Dec 2022 and end on never</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sucess-btn">
            <NavLink to="/promote/dealstwo" className="done-btn">Done</NavLink>
          </div>
    </div>
</div>
  )
}

export default StepFour
