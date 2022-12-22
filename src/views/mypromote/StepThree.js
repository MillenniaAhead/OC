import React from "react"
import StepHead from "./StepHead"
import "../mycss1/StepThree.css"

const StepThree = () => {
  return (
    <div className="step-three-container">
      <div className="head-container-wrapper">
        <StepHead width="75%" next="/promote/stepfour" previous="/promote/steptwo" />
      </div>
      <div className="step-two-body-container">
        <div className="step-two-body-wrapper">
          <div className="step-two-heading-box">
            <p
              style={{
                color: "rgba(0 ,0 ,0 ,0.6)",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "21px"
              }}
            >
              Create a deal
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "36px"
              }}
            >
              Choose how to apply this promotion
            </h3>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "21px"
              }}
            >
              Choose how clients can get and apply this promotion.{" "}
              <a href="" style={{color:"#1BB70B"}}>Learn more</a>{" "}
            </p>
          </div>
          <div className="how-to-apply-promotion-container">
            <div className="how-to-apply-promotion-wrapper">
              <div className="step-three-option option-one">
                <div className="toggle-btn">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      style={{width:"48px", height:"24px"}}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                  <div className="option-text-wrapper">
                    <p style={{fontSize: "15px",
    fontWeight: "600",
    lineHeight: "24px"}}> Enable promotionat point of sale</p>
                    <p style={{fontSize: "13px",
    fontWeight: "400",
    lineHeight: "19px",
    margin: "4px 0 0 0",
     color: "rgba(0, 0, 0, 0.7)"}}>
                      This allows you to apply this promotion manually during
                      checkout at Point of Sale.
                    </p>
                  </div>
              </div>
              <div className="step-three-option option-two">
                <div className="toggle-btn">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      style={{width:"48px", height:"24px"}}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                  <div className="option-text-wrapper">
                    <p style={{fontSize: "15px",
    fontWeight: "600",
    lineHeight: "24px"}}> Enable discount code</p>
                    <p style={{fontSize: "13px",
    fontWeight: "400",
    lineHeight: "19px",
    margin: "4px 0 0 0",
    color: "rgba(0, 0, 0, 0.7)"}}>
                      This promotion can be redeemed by clients entering the
                      code when booking services online.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
