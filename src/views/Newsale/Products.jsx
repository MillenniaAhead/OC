import React, { useState } from "react"
import { Link } from "react-router-dom"
import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Box from "../../assets/images/Newsale/images/box.png"
import Glass from "../../assets/images/Newsale/images/search.png"

import axios from "axios"

const Products = () => {
  const [name, setName] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleApi = () => {
    console.log({ name })
    axios
      .get("https://reqres.in/api/name", {
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
        className="border d-none d-md-block"
        style={{
          width: "890px",
          height: "680px",
          background: "#F8F8FB",
          marginLeft: "115px"
        }}
      >
        <div style={{ color: "black" }} className="fs-3 py-4 px-5 fw-bolder">
          New sale
        </div>
        <div style={{ cursor: "default" }} className="px-5 fw-semibold">
          <Link to="/newsale">
            <p className="text-secondary py-2" style={{ marginTop: "-55px" }}>
              Quick Sale
            </p>
          </Link>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-55px", cursor: "pointer" }}
        >
          <a href="/checkout" className="text-secondary">
            To check out
          </a>
        </div>

        <div
          style={{ marginLeft: "290px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a className="border-bottom-dark py-1 fw-bolder"
            style={{width: '14%', color: 'black'}} href="/products">
            Products
          </a>
        </div>

        <div
          style={{ marginLeft: "390px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a href="/services" className="text-secondary">
            Services
          </a>
        </div>

        <div
          style={{ marginLeft: "480px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a href="/memberships" className="text-secondary">
            Memberships
          </a>
        </div>

        <div
          style={{ marginLeft: "610px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a href="/vouchers" className="text-secondary">
            Vouchers
          </a>
        </div>

        <div
          style={{ marginLeft: "50px", background: "#F2F2F7", width: "700px" }}
          className="row mt-3 py-1 rounded-2"
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
                placeholder="Search by product name"
              />
            </div>
          </div>
        </div>

        <div
          className="border rounded-3 d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "700px",
            height: "400px",
            marginLeft: "48px",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "60px", height: "60px", marginBottom: "-15px" }}
            src={Box}
            alt="box"
          />
          <p style={{ marginTop: "25px" }} className="fw-semibold fs-5">
            No products added yet.
          </p>
          <p style={{ marginTop: "-15px" }}>
            Click
            <a
              href="/productlist"
              style={{
                color: "#1BB70B",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              {" "}
              here
            </a>{" "}
            to add and manage your products.
          </p>
        </div>
      </div>

      <div className="border-top" style={{ width: "360px", height: "565px" }}>
      <div style={{ cursor: "pointer" }} className="border-bottom py-1">
          <div
            style={{ marginBottom: "-10px" }}
            className="d-sm-block d-md-none d-flex justify-content-between"
          >
            <p style={{ color: "#1BB70B" }}>Add client</p>
            <img width={23} height={23} src={Client} alt="client" />
          </div>
          <div
            style={{ marginBottom: "-15px" }}
            className="d-none d-md-block d-flex"
          >
            <img
              style={{ marginLeft: "65px" }}
              width={23}
              height={23}
              src={Client}
              alt="client"
            />
            <p
              style={{
                marginTop: "-20px",
                marginLeft: "100px",
                color: "#1BB70B",
                fontSize: "17px"
              }}
            >
              Add client
            </p>
          </div>
        </div>

        <div style={{ marginTop: "195px", color: 'black' }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p style={{ marginTop: "15px" }} className="fw-bolder">
            Your cart is empty
          </p>
          <p style={{ marginTop: "-10px", marginLeft: "9px" }}>
            Select an appointment, service
          </p>
          <p style={{ marginTop: "-15px", marginLeft: "9px" }}>
            or item to check out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products