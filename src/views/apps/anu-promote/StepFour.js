import React from 'react'
import './mycss1/StepFour.css'
import { NavLink } from 'react-router-dom'
import ticketG from "../images/ticket-g.svg"
import { CheckCircle, X, Calendar, Tag } from 'react-feather'
import { actionCreators } from "./promoteRedux"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"

const StepFour = () => {

  //for redux
  const dispatch = useDispatch()
  const { ClearDealData } = bindActionCreators(actionCreators, dispatch) 

  //Get data from reducer
  const reducerData = useSelector(state => state.PromoteReducer.newDeal)
  console.log(reducerData)

  //Change date formate
  const start_date = new Date(reducerData[5]).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
  const end_date = reducerData[6] ? new Date(reducerData[6]).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }) : "Outgoing"

  //clear data in redux store
  const clearData = () => {
    ClearDealData()
  }

  return (
    <div className="step-four-container">
    <div className="cross-btn-wrapper" onClick={clearData}>
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
                <p>{reducerData[7] + reducerData[8]} discount on all product and all service</p>
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
                <p>Promotion starts on {start_date} and {end_date === "Outgoing" ? "Outgoing" : `end on ${end_date}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sucess-btn" onClick={clearData}>
            <NavLink to="/promote/dealstwo" className="done-btn">Done</NavLink>
          </div>
    </div>
</div>
  )
}

export default StepFour
