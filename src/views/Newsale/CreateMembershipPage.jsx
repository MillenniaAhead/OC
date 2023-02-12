import React, { useState } from "react"
import X from "../../assets/images/Newsale/images/x.png"
import Member from "../../assets/images/Newsale/images/member.png"
import { Link } from "react-router-dom"

import axios from "axios"

const CreateMembershipPage = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [services, setServices] = useState("")
  const [sessions, setSessions] = useState("")
  const [price, setPrice] = useState("")
  const [termsConditions, setTermsConditions] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handledescription = (e) => {
    setDescription(e.target.value)
  }

  const handleservices = (e) => {
    setServices(e.target.value)
  }

  const handlesessions = (e) => {
    setSessions(e.target.value)
  }

  const handleprice = (e) => {
    setPrice(e.target.value)
  }

  const handletermsConditions = (e) => {
    setTermsConditions(e.target.value)
  }

  const handleApi = () => {
    console.log({
      name,
      description,
      services,
      sessions,
      price,
      termsConditions
    })
    axios
      .post("http://localhost:4000/api/createmembership", {
        name,
        description,
        services,
        sessions,
        price,
        termsConditions
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
        <Link to="/create">
          <img width={30} height={30} className="mt-2" src={X} alt="x" />
        </Link>

        <button
          onClick={handleApi}
          style={{ height: "48px", background: "#4E4E4E", color: "white" }}
          className="px-2 py-1 btn rounded-1"
        >
          Create membership
        </button>
      </div>
      <div
        style={{ color: "black" }}
        className="d-flex justify-content-center mt-2 fs-2 fw-bolder"
      >
        Create a membership
      </div>

      <div className="d-flex justify-content-center py-2">
        <div
          style={{ width: "820px", height: "320px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 py-1 fs-4 fw-bolder border-bottom"
          >
            Basic Info
          </div>

          <div className="px-2 mt-1">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label"
            >
              Membership name
            </label>
            <input
              value={name}
              onChange={handleName}
              style={{ width: "495px", height: "45px" }}
              type="text"
              placeholder="Add membership name"
              className="form-control rounded-1"
            />
          </div>
          <div className="px-2 mt-1">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Membership description
            </label>
            <textarea
              value={description}
              onChange={handledescription}
              style={{ width: "495px", height: "120px" }}
              className="form-control"
              placeholder="Add membership description"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div
          style={{ width: "820px", height: "280px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 mt-1 fs-4 fw-bolder border-bottom"
          >
            Services and sessions
            <p style={{ fontSize: "15px" }} className="fw-normal">
              Add the services and sessions included in the membership.
            </p>
          </div>

          <div className="px-2 mt-1">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Included services
            </label>
            <input
              value={services}
              onChange={handleservices}
              style={{ width: "495px", height: "45px", background: "#F2F2F7" }}
              type="text"
              placeholder="0 services"
              className="form-control rounded-1 border-0"
            />
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column px-2 mt-2">
              <label
                style={{ color: "black", fontSize: "13px" }}
                className="form-label fw-semibold"
              >
                Sessions
              </label>
              <div className="btn-group dropdown border">
                <button
                  style={{
                    background: "white",
                    width: "200px",
                    textAlign: "start"
                  }}
                  type="button"
                  className="btn"
                >
                  Limited
                </button>
                <button
                  style={{ background: "white" }}
                  type="button"
                  className="btn dropdown-toggle dropdown-toggle-split border-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
              </div>
            </div>
            <div className="mt-2">
              <label
                style={{ color: "black", fontSize: "13px" }}
                className="form-label fw-semibold"
              >
                Number of sessions
              </label>
              <div className="input-group">
                <input
                  value={sessions}
                  onChange={handlesessions}
                  style={{ width: "240px" }}
                  type="number"
                  className="form-control px-1"
                  placeholder="5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div
          style={{ width: "820px", height: "330px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 mt-1 fs-4 fw-bolder border-bottom"
          >
            Pricing and payment
            <p style={{ fontSize: "15px" }} className="fw-normal">
              Choose how you’d like your clients to pay.
            </p>
          </div>

          <div className="d-flex border-bottom py-2">
            <div
              style={{ marginTop: "-5px" }}
              className="d-flex flex-column px-2"
            >
              <label
                style={{ color: "black", fontSize: "13px" }}
                className="form-label fw-bold"
              >
                Valid for
              </label>
              <div
                style={{ marginTop: "2px" }}
                className="btn-group dropdown border"
              >
                <button
                  style={{
                    background: "white",
                    width: "200px",
                    textAlign: "start"
                  }}
                  type="button"
                  className="btn"
                >
                  1 month
                </button>
                <button
                  style={{ background: "white" }}
                  type="button"
                  className="btn dropdown-toggle dropdown-toggle-split border-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
              </div>
            </div>
            <div style={{ marginTop: "-5px" }}>
              <label
                style={{ color: "black", fontSize: "13px" }}
                className="form-label fw-semibold"
              >
                Price
              </label>
              <div style={{ marginTop: "3px" }} className="input-group">
                <span
                  style={{ background: "white", width: "20%", color: "gray" }}
                  className="input-group-text col-3"
                >
                  ₹
                </span>
                <input
                  value={price}
                  onChange={handleprice}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div
            style={{ color: "black", fontSize: "22px" }}
            className="px-2 mt-1 fw-bolder"
          >
            Tax rate
          </div>
          <div className="d-flex py-1">
            <div
              style={{ marginTop: "-5px" }}
              className="d-flex flex-column px-2"
            >
              <label
                style={{ color: "black", fontSize: "13px" }}
                className="form-label fw-semibold"
              >
                Tax rate
              </label>
              <div
                style={{ marginTop: "5px" }}
                className="btn-group dropdown border"
              >
                <button
                  style={{
                    background: "white",
                    width: "200px",
                    textAlign: "start"
                  }}
                  type="button"
                  className="btn"
                >
                  No tax
                </button>
                <button
                  style={{ background: "white" }}
                  type="button"
                  className="btn dropdown-toggle dropdown-toggle-split border-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div
          style={{ width: "820px", height: "160px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 mt-1 fs-4 fw-bolder border-bottom"
          >
            Color customisation
            <p style={{ fontSize: "15px" }} className="fw-normal">
              Select a color that matches your business.
            </p>
          </div>
          <div className="d-flex mt-2">
            <div style={{ marginLeft: "25px" }} className="form-check">
              <input
                style={{ background: "#2B85E8", width: "30px", height: "30px" }}
                className="form-check-input border-0 shadow"
                type="radio"
              />
            </div>
            <div style={{ marginLeft: "15px" }} className="form-check">
              <input
                style={{ background: "#192639", width: "30px", height: "30px" }}
                className="form-check-input border-0 shadow"
                type="radio"
              />
            </div>
            <div style={{ marginLeft: "15px" }} className="form-check">
              <input
                style={{ background: "#00A284", width: "30px", height: "30px" }}
                className="form-check-input border-0 shadow"
                type="radio"
              />
            </div>
            <div style={{ marginLeft: "15px" }} className="form-check">
              <input
                style={{ background: "#E68F20", width: "30px", height: "30px" }}
                className="form-check-input border-0 shadow"
                type="radio"
              />
            </div>
            <div style={{ marginLeft: "15px" }} className="form-check">
              <input
                style={{ background: "#863FF5", width: "30px", height: "30px" }}
                className="form-check-input border-0 shadow"
                type="radio"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div
          style={{ width: "820px", height: "290px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 mt-1 fs-4 fw-bolder border-bottom"
          >
            Online sales
            <p style={{ fontSize: "15px" }} className="fw-normal">
              Choose if you would like to sell your membership online.
            </p>
          </div>
          <div
            style={{ marginLeft: "20px" }}
            className="form-check form-switch py-2"
          >
            <input
              style={{ width: "40px", height: "20px" }}
              className="form-check-input"
              type="checkbox"
              disabled
            />
            <label style={{ color: "black" }} className="form-check-label">
              Enable online sales
            </label>
          </div>
          <div
            className="rounded-3 mt-1"
            style={{
              width: "500px",
              height: "105px",
              marginLeft: "25px",
              background: "rgba(27, 183, 11, 0.48)"
            }}
          >
            <div className="d-flex justify-content-between">
              <div
                style={{ color: "black", fontSize: "15px" }}
                className="px-2 py-2 mt-1"
              >
                Online membership sales are coming soon <br /> to India with
                payments in Fresha
              </div>
              <img
                style={{ height: "110px", width: "110px", marginTop: "11px" }}
                src={Member}
                alt="member"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div
          style={{
            width: "820px",
            height: "270px",
            marginLeft: "-10px",
            marginBottom: "115px"
          }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 mt-1 fs-4 fw-bolder border-bottom"
          >
            Terms & Conditions
            <p style={{ fontSize: "15px" }} className="fw-normal">
              If there are any rules attached to your membership it’s a good
              place to mention them.
            </p>
          </div>
          <div className="px-2 mt-2">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label"
            >
              Terms & Conditions{" "}
              <span style={{ color: "gray", fontWeight: "lighter" }}>
                (Optional)
              </span>
            </label>
            <textarea
              value={termsConditions}
              onChange={handletermsConditions}
              style={{ marginTop: "5px", width: "500px", height: "115px" }}
              className="form-control"
              placeholder="Add Terms & Conditions"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateMembershipPage
