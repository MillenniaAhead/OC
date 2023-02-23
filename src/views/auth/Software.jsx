import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Software = () => {
  const [software, setSoftware] = useState('')

  //For dispatch action
  const dispatch = useDispatch()
  const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

  const selectSoftware = (e) => {
    setSoftware(e.target.value)
    console.log(e.target.value)
  }

 //On next step click
  const userData = () => {
   CollectUserData([software])
   console.log(software)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/location"
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

        <NavLink onClick={userData} style={{background: '#4E4E4E', color: 'white'}} to="/hear" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </NavLink>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "67%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>

      <p
        style={{color: 'black', cursor: "default" }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-4"
      >
        Which software are you currently using ?
      </p>
      <p
        style={{
          color: 'black',
          cursor: "default",
          marginTop: "-5px",
          fontSize: "17px"
        }}
        className="text-center"
      >
        If you’re looking to switch, we can help speed up your business setup
        and import your data in to your new account.
      </p>

      <div
        style={{ width: "700px", height: "1000px" }}
        className="card container mt-2 mb-4 border"
      >
        <div
          style={{ marginLeft: "10px", marginTop: "25px" }}
          className="form-check form-check-success"
        >
          <input
            value='Acuity'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Acuity
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Booksy'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-2"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Booksy
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Janeapp'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-3"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Janeapp
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Kitomba'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-4"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Kitomba
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Square'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-5"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Square
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Mind body'
            onChange={selectSoftware}
           style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-6"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Mind body
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Ovatu'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-7"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Ovatu
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Phorest'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-8"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Phorest
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Salon Iris'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-9"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Salon Iris
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Shortcuts'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-10"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Shortcuts
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Treatwell'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-11"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Treatwell
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Squire'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-12"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Squire
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Styleseat'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-13"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Styleseat
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Timely'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-14"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Timely
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Vagaro'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-15"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Vagaro
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Zenoti'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-16"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Zenoti
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='I’m not using any software'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-17"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            I’m not using any software
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check form-check-success"
        >
          <input
            value='Other'
            onChange={selectSoftware}
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="software"
            id="software-18"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
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

export default Software
