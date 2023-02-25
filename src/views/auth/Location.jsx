import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"
import Map from "../../assets/images/pages/type/map-pin.png"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Location = () => {
  const [name, setName] = useState('')

  //For dispatch action
  const dispatch = useDispatch()
  const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

 //On next step click
  const userData = () => {
   CollectUserData([name])
   console.log(name)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/team"
            style={{
              marginTop: "18px",
              marginBottom: "10px",
              marginLeft: "30px",
              textDecoration: "none",
              color: ["#1E49E2"],
              fontSize: "20px"
            }}
          >
            Previous
          </NavLink>
        </div>

        <NavLink
          onClick={userData}
          style={{background: '#4E4E4E', color: 'white'}}
          to="/software"
          type="button"
          className="px-4 py-1 btn rounded-1"
        >
          Next step
        </NavLink>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "54%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>

      <p
        style={{ cursor: "default", color: 'black' }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, color: 'black', cursor: "default", marginTop: "-5px" }}
        className="text-center fs-3"
      >
        Set your location
      </p>
      <p
        style={{
          color: 'black',
          cursor: "default",
          marginTop: "5px",
          fontSize: "17px"
        }}
        className="text-center"
      >
        Add your business location so your clients can easily find you.
      </p>
      <div
        style={{ width: "780px", height: "230px" }}
        className="card container align-items-center justify-content-center mt-3 border"
      >
        <p
          style={{
            marginRight: "560px",
            marginTop: "-10px",
            marginBottom: "25px",
            fontSize: "20px",
            color: 'black',
            cursor: "default"
          }}
        >
          Business location
        </p>
        <hr style={{ width: "103.5%", marginTop: "-15px" }} />
        <p
          style={{
            marginTop: "20px",
            marginRight: "460px",
            color: 'black',
            fontSize: "16px",
            cursor: "default"
          }}
        >
          Where’s your business located?
        </p>
        <div
          style={{ width: "550px", marginRight: "160px" }}
          className="input-group mb-3"
        >
          <span style={{ background: "#F5F5F5" }} className="input-group-text">
         <img src={Map} alt="map" />
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: "#F5F5F5" }}
            type="text"
            className="form-control"
          />
        </div>
        <div
          style={{ fontWeight: 500, marginRight: "180px", marginTop: "-20px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label style={{color: 'black'}} className="form-check-label px-1" htmlFor="flexCheckDefault">
            I don’t have a business address ( mobile and online services only)
          </label>
        </div>
      </div>
    </div>
  )
}

export default Location
