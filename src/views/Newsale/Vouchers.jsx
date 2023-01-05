import { Link } from "react-router-dom"

import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Voucher from "../../assets/images/Newsale/images/voucher.png"
import Glass from "../../assets/images/Newsale/images/search.png"

import axios from "axios"

// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

const Vouchers = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [retailPrice, setRetailPrice] = useState("")
  const [voucher, setVoucher] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleRetailPrice = (e) => {
    setRetailPrice(e.target.value)
  }

  const handleVoucher = (e) => {
    setVoucher(e.target.value)
  }

  const handleCreateVoucher = () => {
    console.log({ price, retailPrice, voucher })
    axios
      .get("https://reqres.in/api/create", {
        price,
        retailPrice,
        voucher
      })
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
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
        className="border"
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

        <div style={{ cursor: "default", marginTop: "-35px" }} className="px-5">
          <a href="/newsale" className="text-secondary">
            Quick Sale
          </a>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-40px", cursor: "pointer" }}
        >
          <Link to="/checkout">
            <p className="text-secondary py-2">To check out</p>
          </Link>
        </div>

        <div
          style={{ marginLeft: "290px", marginTop: "-55px", cursor: "pointer" }}
        >
          <a href="/products" className="text-secondary">
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
          <a className="border-bottom-dark py-1 fw-bolder"
            style={{width: '14%', color: 'black'}} href="/vouchers">
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
                placeholder="Search by voucher name"
              />
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "800px",
            height: "400px",
            marginLeft: "48px",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "60px", height: "54px", marginBottom: "-15px" }}
            src={Voucher}
            alt="box"
          />
          <p
            style={{ color: "black", marginTop: "25px" }}
            className="fw-bolder fs-5"
          >
            No vouchers added yet.
          </p>
          <p style={{ color: "black", marginTop: "-15px", fontSize: "15px" }}>
            Your voucher will appear here.
          </p>
          <p style={{ color: "black", marginTop: "-15px" }}>
            Click
            <a
              href="/createvoucher"
              style={{
                color: "#1BB70B",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              {" "}
              here
            </a>{" "}
            to manage your voucher types.
          </p>
          <button
            type="button"
            style={{ background: "#4E4E4E", color: "white" }}
            className="btn rounded-1 py-1"
            onClick={() => setShow(true)}
          >
            Create one-off voucher
          </button>

          {/* <!-- Modal --> */}
          <Fragment>
            <Modal
              isOpen={show}
              toggle={() => setShow(!show)}
              className="modal-dialog-centered"
            >
              <ModalHeader
                className="bg-transparent"
                toggle={() => setShow(!show)}
              ></ModalHeader>
              <ModalBody className="pb-2">
                <p
                  style={{
                    marginTop: "-40px",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}
                >
                  Select services
                </p>
                <hr style={{ width: "500px", marginLeft: "-20px" }} />

                <div className="d-flex flex-column mt-2">
                  <label style={{ fontSize: "15px", color: "black" }}>
                    Included services
                  </label>
                  <div className="btn-group">
                    <button
                      style={{
                        marginTop: "2px",
                        background: "#F2F2F7",
                        width: "580px",
                        height: "45px",
                        textAlign: "start"
                      }}
                      className="btn"
                      type="button"
                    >
                      All services
                    </button>
                    <button
                      style={{ color: "#1BB70B", background: "#F2F2F7" }}
                      className="btn"
                    >
                      Edit
                    </button>
                  </div>

                  <div>
                    <label style={{ marginTop: "15px", color: "black" }}>
                      Price
                    </label>
                    <label style={{ marginLeft: "205px", color: "black" }}>
                      Retail price
                    </label>
                    <div className="d-flex">
                      <div
                        style={{ marginTop: "5px" }}
                        className="input-group mb-5"
                      >
                        <span
                          style={{ background: "white" }}
                          className="input-group-text"
                        >
                          ₹
                        </span>
                        <input
                          value={price}
                          onChange={handlePrice}
                          style={{ height: "50px" }}
                          type="text"
                          className="form-control"
                          placeholder="Enter value"
                        />
                      </div>
                      <div
                        style={{ marginLeft: "20px", marginTop: "5px" }}
                        className="input-group mb-5"
                      >
                        <span
                          style={{ background: "white" }}
                          className="input-group-text"
                        >
                          ₹
                        </span>
                        <input
                          value={retailPrice}
                          onChange={handleRetailPrice}
                          type="text"
                          className="form-control"
                          placeholder="Enter retail price"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginTop: "-40px" }}
                    className="d-flex flex-column"
                  >
                    <label style={{ color: "black" }}>Valid for</label>
                    <div
                      style={{ marginTop: "5px" }}
                      className="btn-group dropdown border"
                    >
                      <button
                        style={{
                          background: "white",
                          width: "520px",
                          height: "45px",
                          textAlign: "start"
                        }}
                        type="button"
                        className="btn"
                      >
                        6 months
                      </button>
                      <button
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split border-right"
                      ></button>
                    </div>
                  </div>

                  <div>
                    <div className="mt-2">
                      <label style={{ color: "black" }}>Voucher name</label>
                      <input
                        style={{
                          marginTop: "5px",
                          width: "460px",
                          height: "45px"
                        }}
                        value={voucher}
                        onChange={handleVoucher}
                        type="text"
                        className="form-control rounded-1"
                        placeholder="Gift Voucher"
                      />
                    </div>
                  </div>

                  <hr
                    style={{
                      width: "500px",
                      marginLeft: "-20px",
                      marginTop: "20px"
                    }}
                  />
                </div>

                <div className="d-flex justify-content-between">
                    <div style={{ color: "#1BB70B", marginTop: '10px' }}>
                      Use advanced builder
                    </div>
                    <div>
                      <button
                        style={{ marginRight: "15px" }}
                        type="button"
                        className="btn py-1 border rounded-1"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleCreateVoucher}
                        style={{ background: "#4E4E4E", color: "white" }}
                        type="button"
                        className="btn py-1 rounded-1"
                      >
                        Sell voucher
                      </button>
                    </div>
                  </div>
              </ModalBody>
            </Modal>
          </Fragment>
        </div>
      </div>

      <div className="border-top" style={{ width: "360px", height: "565px" }}>
        <div
          style={{ cursor: "pointer" }}
          className="border-bottom py-1 text-center"
        >
          <img width={100} src={Client} alt="client" />
        </div>

        <div style={{ marginTop: "195px" }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p
            style={{ color: "black", marginTop: "15px", marginLeft: "10px" }}
            className="fw-semibold"
          >
            Your cart is empty
          </p>
          <p style={{ color: "black", marginTop: "-15px", marginLeft: "9px" }}>
            Select an appointment, service
          </p>
          <p style={{ color: "black", marginTop: "-18px", marginLeft: "10px" }}>
            {" "}
            or item to check out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vouchers
