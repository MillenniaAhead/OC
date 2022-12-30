import React from "react"
import X from "../../assets/images/Newsale/images/x.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import { Link } from "react-router-dom"

const Setup = () => {
  return (
    <div>
      <div className="d-flex justify-content-between py-3 px-4">
        <Link to="/">
          <img style={{ width: "40px", height: "40px" }} src={X} alt="x" />
        </Link>
        <button
          style={{ width: "170px", height: "45px", background: "#4E4E4E" }}
          className="btn btn-dark fs-5 fw-semibold"
        >
          Save
        </button>
      </div>
      <div className="d-flex justify-content-center fw-bold">
        <p style={{ fontSize: "30px" }}>Your quick sale items</p>
      </div>
      <div className="d-flex justify-content-center">
        <p style={{ marginTop: "-12px" }}>
          Search for sellable items to add to your quick sale layout. Drag and
          drop to rearrange.
        </p>
      </div>
      <div
        style={{ marginLeft: "270px", background: "#F2F2F7", width: "818px" }}
        className="row mt-3 py-3 rounded-2"
      >
        <div style={{ width: "788px" }} className="col-md-5 mx-auto">
          <div className="input-group">
            <button
              className="btn btn-outline-secondary bg-white border-end-0 border"
              type="button"
            >
              <img width={17} src={Glass} alt="glass" />
            </button>
            <input
              className="form-control border py-2"
              type="text"
              placeholder="Search by client, team member or service name"
            />
          </div>
        </div>
      </div>

      <div
        style={{ paddingInline: "260px" }}
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
        style={{ paddingInline: "260px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div
        style={{ paddingInline: "260px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div
        style={{ paddingInline: "260px" }}
        className="d-flex justify-content-evenly"
      >
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
        <div
          className="card"
          style={{
            marginTop: "20px",
            width: "260px",
            height: "135px",
            border: "2px dashed rgba(0, 0, 0, 0.15)"
          }}
        ></div>
      </div>

      <div className="pb-2" style={{ marginLeft: "275px" }}>
        <p style={{ fontSize: "14px", color: "gray", marginTop: "2px" }}>
          Max 12 items
        </p>
      </div>
    </div>
  )
}

export default Setup
