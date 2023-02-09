import React, {useState} from "react"
import Ticket from "../images/Ticket.svg"
import Modulo from "../images/modulo.svg"
import Database from "../images/database.svg"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./promoteRedux"
import { NavLink } from 'react-router-dom'
import { X, Clock } from 'react-feather'
import  Progress from './Progress'

const StepOne = () => {

  //For deal name
  const [dealType, setDealType] = useState('Promotion')

  //On click of deal boxes
  const selectDeal1 = () => {
    setDealType('Promotion')
  }
  const selectDeal2 = () => {
    setDealType('Splash sale')
  }
  const selectDeal3 = () => {
    setDealType('Off-peak pricing')
  }
  const selectDeal4 = () => {
    setDealType('Last-minute offer')
  }
  //For dispatch action
   const dispatch = useDispatch()
   const { CollectDealData } = bindActionCreators(actionCreators, dispatch) 

  //On next step click
   const dealSelected = () => {
    CollectDealData([dealType])
   }

  return (
    <div className="step-one-container">
      <div className="head-component-wrapper">
        <div className="head-container">
        <div className="btns-wrapper">
          <div className="left-side">
            <div className="cross-symbol">
              <NavLink to="/promote/deals">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
              </NavLink>
            </div>
          </div>
          <div className="right-side">
            <div className="next-step-btn">
              <NavLink to='/promote/steptwo'onClick={dealSelected}> Next step </NavLink>
            </div>
          </div>
        </div>
        <div className="progress-wrapper">
          <Progress width='25%' />
        </div>
      </div>
      </div>
      <div className="step-one-body-container">
        <div className="step-one-body-wrapper">
          <div className="step-one-heading-box">
            <p className="text-a3"
            >
              Create a deal
            </p>
            <h3 
            className="text-b3"
            >
              Select deal type
            </h3>
            <p
            className="text-c3"
            >
              Choose the type of deal you want to create.
            </p>
          </div>
          <div className="deal-types-container">
            <div className="deal-types-container-a">
              {/* Promotion */}
              <div
                  className="deal-type promotion-box"
                  onClick={selectDeal1}
                  style={dealType === "Promotion" ? {border:'1px solid #1bb70b'} : {}}
                >
                <div className="promotion-text">
                  <p
                  className="text-d3"
                  >
                    Promotion
                  </p>
                  <p className="text-e3"
                  >
                    Create a discount redeemed by clients entering the code when
                    booking online or during checkout at Point of Sale
                  </p>
                </div>
                <div className="promotion-img deal-type-img">
                  <img src={Ticket} alt="Ticket" />
                </div>
              </div>
              {/* Splash sale */}
              <div
                className="deal-type splash-sale-box"
                onClick={selectDeal2}
                style={dealType === "Splash sale" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="splash-sale-text">
                  <p className="text-d3"
                  >
                    Splash sale&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p  className="text-e3"
                  >
                    Run an automatic promotion for online bookings and sales
                  </p>
                </div>
                <div className="splash-sale-img deal-type-img">
                  <img style={{width:'22px'}} src={Modulo} alt="Modulo" />
                </div>
              </div>
              {/* Off-peak pricing */}
              <div
                className="deal-type off-peak-pricing-box"
                onClick={selectDeal3}
                style={dealType === "Off-peak pricing" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="off-peak-pricing-text">
                  <p className="text-d3"
                  >
                    Off-peak pricing&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p className="text-e3"
                  >
                    Dynamically change your online service prices to boost your
                    sales when you are less busy
                  </p>
                </div>
                <div className="off-peak-pricing-img deal-type-img">
                  <img src={Database} alt="Database" />
                </div>
              </div>
              {/* Last-minute offer */}
              <div
                className="deal-type last-minute-offer-box"
                onClick={selectDeal4}
                style={dealType === "Last-minute offer" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="last-minute-offer-text">
                  <p className="text-d3"
                  >
                    Last-minute offer&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p className="text-e3"
                  >
                    Apply a discount for bookings made just before an
                    appointment startsd
                  </p>
                </div>
                <div className="last-minute-offer-img deal-type-img">
                  <Clock/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
