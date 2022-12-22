import React from 'react'
import Progress from "./Progress"
import { NavLink } from "react-router-dom"
import { X } from 'react-feather'

const StepHead = (props) => {
  return (
    <div>
      <div className="head-container">
        <div className="btns-wrapper">
          <div className="left-side">
            <div className="cross-symbol">
              <NavLink to="/promote">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
              </NavLink>
            </div>
            <div className="previous-page">
              <NavLink to={props.previous} style={{color:"#1BB70B"}}>Previous</NavLink>
            </div>
          </div>
          <div className="right-side">
            <div className="next-step-btn">
              <NavLink to={props.next}> Next step </NavLink>
            </div>
          </div>
        </div>
        <div className="progress-wrapper">
          <Progress width={props.width} />
        </div>
      </div>
    </div>
  )
}

export default StepHead
