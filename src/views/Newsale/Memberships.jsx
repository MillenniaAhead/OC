import { Link } from "react-router-dom"

import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import Group from "../../assets/images/Newsale/images/Group 298.png"

// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

// ** Third Party Components
import { Sliders } from "react-feather"

const Memberships = () => {
  // // // ** States
  const [show, setShow] = useState(false)

  return (
    <div className="d-flex">
      <div
        className="border"
        style={{
          width: "890px",
          height: "565px",
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
          <a href="/vouchers" className="text-secondary">
            Vouchers
          </a>
        </div>

        <div
          style={{ marginLeft: "50px", background: "#F2F2F7", width: "750px" }}
          className="row mt-2 py-1 rounded-2"
        >
          <div style={{ width: "350px" }} className="col-md-5">
            <div className="input-group">
              <button
                className="btn px-1 bg-white border-end-0 border"
                type="button"
              >
                <img width={17} src={Glass} alt="glass" />
              </button>
              <input
                style={{ marginRight: "25px" }}
                className="form-control border"
                type="text"
                placeholder="Search by membership name"
              />
              <div style={{ marginRight: "-270px" }} className="d-flex">
                <div
                  style={{
                    width: "130px",
                    height: "35px",
                    marginRight: "15px"
                  }}
                  className="d-flex"
                >
                  <button
                    className="btn border rounded-pill"
                    style={{
                      background: "white",
                      color: "black",
                      border: "none",
                      width: "130px",
                      height: "42px"
                    }}
                    onClick={() => setShow(true)}
                  >
                    Filters
                    <Sliders
                      style={{ marginLeft: "8px" }}
                      width={20}
                      height={20}
                    />
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
                          Filters
                        </p>
                        <hr style={{ width: "500px", marginLeft: "-20px" }} />
                        <div className="d-flex flex-column">
                          <label style={{ color: "black" }}>Sessions</label>
                          <div
                            style={{ marginTop: "5px" }}
                            className="btn-group border"
                          >
                            <button
                              style={{
                                background: "white",
                                width: "580px",
                                height: "40px",
                                textAlign: "start"
                              }}
                              className="btn"
                              type="button"
                            >
                              Any number of sessions
                            </button>
                          </div>
                        </div>
                        <div className="d-flex flex-column mt-2">
                          <label style={{ color: "black" }}>Payment</label>
                          <div
                            style={{ marginTop: "5px" }}
                            className="btn-group border"
                          >
                            <button
                              style={{
                                background: "white",
                                width: "580px",
                                height: "45px",
                                textAlign: "start"
                              }}
                              className="btn"
                              type="button"
                            >
                              One-time and recurring
                            </button>
                          </div>
                        </div>
                        <div className="d-flex flex-column mt-2">
                          <label style={{ color: "black" }}>Valid for</label>
                          <div
                            style={{ marginTop: "5px" }}
                            className="btn-group border"
                          >
                            <button
                              style={{
                                background: "white",
                                width: "580px",
                                height: "45px",
                                textAlign: "start"
                              }}
                              className="btn"
                              type="button"
                            >
                              Any period
                            </button>
                          </div>
                        </div>

                        <div
                          style={{ marginTop: "15px" }}
                          className="form-check"
                        >
                          <input
                            style={{ width: "23px", height: "23px" }}
                            className="form-check-input shadow-sm"
                            type="checkbox"
                          />
                          <label
                            style={{
                              color: "black",
                              marginTop: "4px",
                              fontSize: "14px"
                            }}
                            className="form-check-label px-2"
                          >
                            Display only membership which cover all services
                          </label>
                        </div>

                        <hr
                          style={{
                            width: "500px",
                            marginLeft: "-20px",
                            marginTop: "15px"
                          }}
                        />

                        <div style={{ marginBottom: "-10px" }}>
                          <div className="d-flex justify-content-between">
                            <div>
                              <p
                                style={{
                                  marginTop: "10px",
                                  fontSize: "16px",
                                  color: "#1BB70B"
                                }}
                              >
                                Clear all filters
                              </p>
                            </div>
                            <div style={{ marginLeft: "150px" }}>
                              <button
                                type="button"
                                className="btn border rounded-1 fw-semibold px-2"
                              >
                                Cancel
                              </button>
                            </div>
                            <div>
                              <button
                                style={{
                                  background: "#4E4E4E",
                                  color: "white"
                                }}
                                type="button"
                                className="btn rounded-1 px-2"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                    </Modal>
                  </Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "800px",
            height: "300px",
            marginLeft: "48px",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "50px", height: "50px", marginBottom: "-15px" }}
            src={Group}
            alt="chk"
          />
          <p
            style={{ color: "black", marginTop: "25px" }}
            className="fw-bolder fs-5"
          >
            No memberships added yet
          </p>
          <p style={{ color: "black", marginTop: "-15px" }}>
            Click
            <a
              href="/create"
              style={{
                color: "#1BB70B",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              {" "}
              here
            </a>{" "}
            to add and manage your memberships.
          </p>
        </div>
      </div>

      <div className="border-top" style={{ width: "360px", height: "565px" }}>
        <div
          style={{ cursor: "pointer" }}
          className="border-bottom py-2 text-center"
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

export default Memberships
