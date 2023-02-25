import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"
import axios from "axios"
import { useSelector } from "react-redux"
// import { bindActionCreators } from "redux"
// import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Hear = () => {
  const [hear, setHear] = useState('')

  //For dispatch action
  // const dispatch = useDispatch()
  // const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

  const selectHear = (e) => {
    setHear(e.target.value)
    console.log(e.target.value)
  }

  const reducerData = useSelector(state => state.UserReducer.UserData)
  console.log(reducerData)

 //On next step click
  const userData = () => {
    const data = {main_business:reducerData[0], related_business:reducerData[1], team_size:reducerData[2], location:reducerData[3], software_name:reducerData[4], hear_about:hear}
   axios.post("http://localhost:4000/api/userdetail", data)
   .then(res => console.log(res))
   .catch(err => console.log(err))
  }


  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/software"
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
          to="/complete"
          type="button"
          className="px-5 py-1 btn rounded-1"
        >
          Done
        </NavLink>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "82%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>
      <p
        style={{color: 'black', cursor: "default" }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-3"
      >
        How did you hear about OUTLETCONTROL ?
      </p>
      <div
        style={{ width: "768px", height: "360px" }}
        className="card container border mt-2"
      >
        <div
          style={{ marginLeft: "30px", marginTop: "30px" }}
          className="form-check form-check-success"
        >
          <input
            value='Recommended by a friend'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-1"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Recommended by a friend
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Search engine (e.g. Google, Yahoo)'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-2"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Search engine (e.g. Google, Yahoo)
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Social media'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-3"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Social media
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Magazine ad'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-4"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Magazine ad
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Ratings website (e.g. Capterra, Trustpilot)'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-5"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Ratings website (e.g. Capterra, Trustpilot)
          </label>
        </div>
        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Other'
            onChange={selectHear}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="hear"
            id="hear-6"
          />
          <label
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Other
          </label>
        </div>
      </div>
    </div>
  )
}

export default Hear
