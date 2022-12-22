import React from "react"
import "../mycss1/StepOne.css"
import StepHead from "./StepHead"
import Ticket from "../images/Ticket.svg"
import Modulo from "../images/modulo.svg"
import Database from "../images/database.svg"
import Time from "../images/Time.svg"

const StepOne = () => {
  return (
    <div className="step-one-container">
      <div className="head-component-wrapper">
        <StepHead
          width="25%"
          next="/promote/steptwo"
          previous="/promote"
        />
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
              <div
                  className="deal-type promotion-box"
                >
                <div className="promotion-text">
                  <p
                  className="text-d3"
                  >
                    promotion
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
              <div
                className="deal-type splash-sale-box"
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
                  <img src={Modulo} alt="Modulo" />
                </div>
              </div>
              <div
                className="deal-type off-peak-pricing-box"
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
              {/* </Badge> */}
              {/* <Badge  badgeContent={badgeFour} color="success"> */}
              <div
                // onClick={() => SelectDealType("four")}
                // style={typeFour}
                className="deal-type last-minute-offer-box"
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
                  <img src={Time} alt="Time" />
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
