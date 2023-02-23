import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Details = () => {
 const [name, setName] = useState('')
 const [website, setWebsite] = useState('')

  //For dispatch action
  const dispatch = useDispatch()
  const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

 //On next step click
  const userData = () => {
   CollectUserData([name, website])
   console.log(name, website)
  }

  return (
    <div>
      <div className="d-flex justify-content-between px-5 py-2 border-bottom border-2">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
        <NavLink onClick={userData} style={{background: '#4E4E4E', color: 'white'}} to="/type" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </NavLink>
      </div>
      <p
        style={{ fontWeight: 400, cursor: "default", color: 'black' }}
        className="text-center mt-2"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", color: 'black' }}
        className="text-center mt-2 fs-3"
      >
        What’s your business name?
      </p>
      <p
        style={{marginLeft: '60px', cursor: "default", fontSize: "14px", color: 'black' }}
        className="text-center mt-1"
      >
        This is the brand name your clients will see. Your billing and legal
        name can be added later.
      </p>
      <div
        style={{ width: "710px", height: '215px', marginLeft: "350px" }}
        className="card border px-2 py-3 mt-2"
      >
        <p style={{ marginTop: '-20px', cursor: "default", color: 'black' }}>Business name</p>
        <input
          style={{
            marginTop: "-10px",
            borderWidth: "1px",
            height: "40px",
            width: "80%",
            borderRadius: "6px",
            borderColor: ["#1E49E2"]
          }}
          type="text"
          className="card px-2 py-2 rounded-1"
          placeholder="Salon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ marginTop: "-2px", cursor: "default", color: 'black' }}>
          Website
        </p>
        <input
          style={{
            marginTop: "-10px",
            borderWidth: "1px",
            height: "40px",
            width: "80%",
            borderRadius: "6px"
          }}
          type="text"
          className="card px-2 py-2 rounded-1"
          placeholder="www.yoursite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Details
