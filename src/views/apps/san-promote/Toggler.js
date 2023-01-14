import React from "react"
import "../mycss1/StepThree.css"

const Toggler = () => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        style={{ width: "48px", height: "24px" }}
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      ></label>
    </div>
  )
}

export default Toggler
