import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Team = () => {
  const [Teamsize, setTeamSize] = useState('')

  //For dispatch action
  const dispatch = useDispatch()
  const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

  const selectTeam = (e) => {
    setTeamSize(e.target.value)
    console.log(e.target.value)
  }

 //On next step click
  const userData = () => {
   CollectUserData([Teamsize])
   console.log(Teamsize)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/other"
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

        <NavLink onClick={userData} style={{background: '#4E4E4E', color: 'white'}} to="/location" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </NavLink>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "37%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>
      <p
        style={{ cursor: "default", color: 'black' }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-3"
      >
        What’s your team size?
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
        This will help us set up your calender correctly. Don’t worry, this
        doesn’t change the price- you can have unlimited team <br /> members for
        free on Salon!
      </p>
      <div
        style={{ width: "600px", height: "230px" }}
        className="card container align-items-center justify-content-center border mt-2"
      >
        <div
          style={{ marginTop: "5px", marginLeft: "-425px" }}
          className="form-check form-check-success"
        >
          <input
            value="It’s just me"
            onChange={selectTeam}
            className="form-check-input"
            type="radio"
            name="team-size"
            id="team-size-1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          >
            It’s just me
          </label>
        </div>
        <div
          style={{ marginTop: "20px", marginLeft: "-425px" }}
          className="form-check form-check-success"
        >
          <input
            className="form-check-input"
            type="radio"
            name="team-size"
            id="team-size-2"
            value="2-5 people"
            onChange={selectTeam}
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          >
            2-5 people
          </label>
        </div>

        <div
          style={{ marginTop: "25px", marginLeft: "-415px" }}
          className="form-check form-check-success"
        >
          <input
            className="form-check-input"
            type="radio"
            name="team-size"
            id="team-size-3"
            onChange={selectTeam}
            value="6-10 people"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          >
            6-10 people
          </label>
        </div>

        <div
          style={{ marginTop: "25px", marginLeft: "-430px" }}
          className="form-check form-check-success"
        >
          <input
            className="form-check-input"
            type="radio"
            name="team-size"
            id="team-size-4"
            onChange={selectTeam}
            value="11+ people"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "8px", color: 'black' }}
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          >
            11+ people
          </label>
        </div>
      </div>
    </div>
  )
}

export default Team
