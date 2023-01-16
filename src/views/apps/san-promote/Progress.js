import React from "react"

const Progress = (props) => {
  return (
    <div className="progress" style={{height:"2px", border:"none"}}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Basic example"
        style={{width:`${props.width}`, height:"2px", background:"#1BB70B"}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  )
}

export default Progress
