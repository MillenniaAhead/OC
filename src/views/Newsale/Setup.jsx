import React, { useState } from "react"
import X from "../../assets/images/Newsale/images/x.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import { Link } from "react-router-dom"

import axios from "axios"

const Setup = () => {
  const [name, setName] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleApi = () => {
    console.log({ name })
    axios
      .post("http://localhost:4000/api/setup", {
        name
      })
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="d-flex justify-content-between px-3">
        <Link to="/newsale">
          <img style={{ width: "40px", height: "40px" }} src={X} alt="x" />
        </Link>
        <button
          style={{ width: "170px", height: "45px", background: "#4E4E4E" }}
          className="btn btn-dark fs-5 fw-semibold"
        >
          Save
        </button>
      </div>
      <div className="d-flex justify-content-center fw-bolder">
        <p style={{ fontSize: "30px", color: "black" }}>
          Your quick sale items
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          Search for sellable items to add to your quick sale layout. Drag and
          drop to rearrange.
        </p>
      </div>
      <div
        style={{ marginLeft: "200px", background: "#F2F2F7", width: "818px" }}
        className="row mt-1 py-1 rounded-2"
      >
        <div style={{ width: "788px" }} className="col-md-5 mx-auto">
          <div className="input-group">
            <button
              onClick={handleApi}
              className="btn bg-white border-end-0 border"
              type="button"
            >
              <img width={17} src={Glass} alt="glass" />
            </button>
            <input
              value={name}
              onChange={handleName}
              className="form-control border"
              type="text"
              placeholder="Search by client, team member or service name"
            />
          </div>
        </div>
      </div>

      <div
        style={{ paddingInline: "170px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "40px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "40px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "40px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div
        style={{ paddingInline: "170px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div
        style={{ paddingInline: "170px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div
        style={{ paddingInline: "170px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "-10px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div className="pb-2" style={{ marginLeft: "200px" }}>
        <p style={{ fontSize: "14px", color: "gray", marginTop: "-15px" }}>
          Max 12 items
        </p>
      </div>
    </div>
  )
}

export default Setup
