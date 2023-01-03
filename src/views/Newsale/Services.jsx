import React, { useState } from "react"
import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import Report from "../../assets/images/Newsale/images/carbon_report.png"
import { Link } from "react-router-dom"

import axios from "axios"

const Services = () => {

  const [name, setName] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleApi = () => {
    console.log({ name })
    axios
      .get("https://reqres.in/api/services", {
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
    <div className="d-flex">
      <div
        className="border"
        style={{
          width: "890px",
          height: "800px",
          background: "#F8F8FB",
          marginLeft: "115px"
        }}
      >
        <div style={{color: 'black'}} className="fs-3 py-4 px-5 fw-bolder">New sale</div>
        <div style={{ cursor: "default", marginTop: '-35px' }} className="px-5">
          <a
            href="/newsale"
            className="text-secondary"
          >
            Quick Sale
          </a>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-40px", cursor: "pointer" }}
        >
          <Link to="/checkout">
          <p
            className="text-secondary py-2"
          >
            To check out
          </p>
          </Link>
        </div>

        <div
          style={{ marginLeft: "290px", marginTop: "-55px", cursor: "pointer" }}
        >
          <a
            href="/products"
            className="text-secondary"
          >
            Products
          </a>
        </div>

        <div
          style={{ marginLeft: "390px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/services"
            className="text-secondary"
          >
            Services
          </a>
        </div>

        <div
          style={{ marginLeft: "480px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/memberships"
            className="text-secondary"
          >
            Memberships
          </a>
        </div>

        <div
          style={{ marginLeft: "610px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/vouchers"
            className="text-secondary"
          >
            Vouchers
          </a>
        </div>

        <div
          style={{ marginLeft: "50px", background: "#F2F2F7", width: "700px" }}
          className="row mt-2 py-1 rounded-2"
        >
          <div style={{ width: "480px" }} className="col-md-5">
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
                style={{ marginRight: "25px" }}
                className="form-control border"
                type="text"
                placeholder="Search by service name"
              />
            </div>
          </div>
        </div>

        <div
          className="rounded-3 d-flex flex-column shadow"
          style={{
            width: "705px",
            height: "400px",
            marginLeft: "48px",
            marginTop: "20px",
            background: "white"
          }}
        >
          <div style={{color: 'black'}} className="d-flex justify-content-between px-3 mt-2 fw-semibold border-bottom">
            <p>Service name </p>
            <p>Category </p>
            <p>Price</p>
          </div>

          <div className="d-flex justify-content-between px-2 mt-2 border-bottom">
            <div className="d-flex flex-column">
              <img
                style={{ width: "30px", height: "30px" }}
                src={Report}
                alt="report"
              />
              <div style={{ marginTop: "-38px", marginLeft: "30px" }}>
                <p style={{color: 'black'}} className="fw-bold px-2">Haircut</p>
                <p
                  style={{
                    marginTop: "-15px",
                    marginLeft: "20px",
                    color: "gray"
                  }}
                >
                  45min
                </p>
              </div>
            </div>
            <p style={{color: 'black', marginRight: "40px", marginTop: "5px" }}>Hair</p>
            <p style={{color: 'black', marginRight: '25px', marginTop: "5px" }}>₹40</p>
          </div>

          <div className="d-flex justify-content-between px-2 mt-2 border-bottom">
            <div className="d-flex flex-column">
              <img
                style={{ width: "30px", height: "30px" }}
                src={Report}
                alt="report"
              />
              <div style={{ marginTop: "-38px", marginLeft: "30px" }}>
                <p style={{color: 'black'}} className="fw-bold px-2">Hair Color</p>
                <p
                  style={{
                    marginTop: "-15px",
                    marginLeft: "20px",
                    color: "gray"
                  }}
                >
                  1h 15min
                </p>
              </div>
            </div>
            <p style={{color: 'black', marginRight: "65px", marginTop: "5px" }}>Hair</p>
            <p style={{color: 'black', marginRight: '22px',  marginTop: "5px" }}>₹60</p>
          </div>

          <div className="d-flex justify-content-between px-2 mt-2 border-bottom">
            <div className="d-flex flex-column">
              <img
                style={{ width: "30px", height: "30px" }}
                src={Report}
                alt="report"
              />
              <div style={{ marginTop: "-38px", marginLeft: "30px" }}>
                <p style={{color: 'black'}} className="fw-semibold px-2">Beard Trim</p>
                <p
                  style={{
                    marginTop: "-15px",
                    marginLeft: "20px",
                    color: "gray"
                  }}
                >
                  15min
                </p>
              </div>
            </div>
            <p style={{ color: 'black', marginRight: "70px", marginTop: "5px" }}>Hair</p>
            <p style={{ color: 'black', marginRight: '22px',  marginTop: "5px" }}>₹20</p>
          </div>

          <div className="d-flex justify-content-between px-2 mt-2 border-bottom">
            <div className="d-flex flex-column">
              <img
                style={{ width: "30px", height: "30px" }}
                src={Report}
                alt="report"
              />
              <div style={{ marginTop: "-38px", marginLeft: "30px" }}>
                <p style={{color: 'black'}} className="fw-semibold px-2">Facial</p>
                <p
                  style={{
                    marginTop: "-15px",
                    marginLeft: "20px",
                    color: "gray"
                  }}
                >
                  15min
                </p>
              </div>
            </div>
            <p style={{ color: 'black', marginRight: "30px", marginTop: "5px" }}>Face</p>
            <p style={{ color: 'black', marginRight: '22px',  marginTop: "5px" }}>₹115</p>
          </div>

          <div
            style={{ color: "gray" }}
            className="d-flex justify-content-center mt-2"
          >
            1 of 1
          </div>
        </div>
      </div>

      <div
        className="border-top"
        style={{ width: "360px", height: "565px" }}
      >
        <div
          style={{ cursor: "pointer" }}
          className="border-bottom py-2 text-center"
        >
          <img width={100} src={Client} alt="client" />
        </div>

        <div style={{ marginTop: "195px" }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p style={{ color: 'black', marginTop: "15px" }} className="fw-bolder">
            Your cart is empty
          </p>
          <p style={{ color: 'black', marginTop: "-15px" }}>
            Select an appointment, service or
          </p>
          <p style={{ color: 'black', marginTop: "-18px" }}>item to check out.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
