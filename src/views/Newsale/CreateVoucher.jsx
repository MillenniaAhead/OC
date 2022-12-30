import React from "react"
import X from "../../assets/images/Newsale/images/x.png"
import Home from "../../assets/images/Newsale/images/home.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import { Link } from "react-router-dom"

const CreateVoucher = () => {
  return (
    <div>
      <div className="d-flex justify-content-between border-bottom py-1">
        <Link to="/vouchers">
          <img  width={35} height={35} className="mt-2" src={X} alt="x" />
        </Link>

        <div>
          <p
            style={{
              color: "darkslategray",
              marginLeft: "40px",
              fontSize: "15px"
            }}
          >
            Step 1 of 2: Add your voucher type info{" "}
          </p>
          <p
            style={{
              color: 'black',
              fontSize: "26px",
              fontWeight: "bold",
              marginLeft: "65px",
              marginTop: "12px"
            }}
          >
            Create a voucher{" "}
          </p>
        </div>

        <button
          style={{
            width: "160px",
            height: "45px",
            background: "#878C93",
            color: "white"
          }}
          className="btn rounded-1 fw-semibold"
        >
          Next step
        </button>
      </div>

      <div className="d-flex justify-content-start py-5">
        {/* 1 */}
        <div
          style={{ width: "545px", height: "920px", marginTop: "-56px" }}
          className="border border-top-0"
        >
          <div
            style={{ color: 'black', fontSize: "25px", marginLeft: "25px" }}
            className="mt-1 fw-bolder"
          >
            Voucher info
          </div>
          <p style={{ color: 'black', marginLeft: "25px" }}>
            Add the voucher name,value and duration of the voucher. If the{" "}
            <br />
            voucher value is higher than the retail price it will encourage more{" "}
            <br />
            sales.
          </p>
          <div className="px-2 mt-1">
            <label style={{color: 'black', fontSize: '13px'}} className="form-label fw-semibold">Voucher name</label>
            <input
              style={{ width: "475px", height: "40px" }}
              type="text"
              className="form-control rounded-1"
            />
          </div>

          <div
            style={{ marginTop: "15px" }}
            className="d-flex justify-content-start"
          >
            <p
              style={{ color: 'black', marginLeft: "25px", fontSize: "17px"}}
            >
              value
            </p>
            <p
              style={{color: 'black', marginLeft: "190px", fontSize: "16px", fontWeight: 500 }}
            >
              Retail price
            </p>
          </div>
          <div
            style={{ marginTop: "-50px" }}
            className="d-flex justify-content-around"
          >
            <div
              style={{ width: "235px", marginLeft: "-10px" }}
              className="input-group mt-3 px-2"
            >
              <span
                style={{ background: "white" }}
                className="input-group-text"
              >
                ₹
              </span>
              <input type="text" className="form-control border" />
            </div>

            <div
              style={{ width: "235px", marginRight: "35px" }}
              className="input-group mt-3"
            >
              <span
                style={{ background: "white" }}
                className="input-group-text"
              >
                ₹
              </span>
              <input type="text" className="form-control border" />
            </div>
          </div>

          <div
            style={{ marginTop: "20px" }}
            className="d-flex flex-column px-2"
          >
            <label style={{color: 'black', fontSize: '13px'}} className="form-label fw-semibold">Valid for</label>
            <div
              style={{ width: "480px", marginTop: "2px" }}
              className="btn-group dropdown border"
            >
              <button
                style={{
                  background: "white",
                  width: "520px",
                  height: "40px",
                  textAlign: "start"
                }}
                type="button"
                className="btn"
              >
                6 months
              </button>
              <button
                style={{  background: "white"}}
                type="button"
                className="btn dropdown-toggle dropdown-toggle-split border-right"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
            </div>
          </div>

          <div style={{ marginLeft: "25px" }} className="form-check mt-2">
            <input
              style={{ width: "22px", height: "22px" }}
              className="form-check-input"
              type="checkbox"
            />
            <label style={{color: 'black'}} className="form-check-label px-1">Save voucher</label>
          </div>
          <div
            style={{
              color: "gray",
              fontSize: "13px",
              marginLeft: "65px",
              marginBottom: "20px"
            }}
          >
            If you save your voucher you will be able to resell it later
          </div>
          <hr />
          <div style={{ fontSize: "25px", color: 'black' }} className="px-2 fw-bolder">
            Services included
          </div>
          <div className="d-flex flex-column px-2 py-2">
            <label style={{color: 'black'}} className="form-label">Services included</label>
            <div style={{ marginTop: "2px" }} className="btn-group">
              <button
                style={{
                  background: "#F2F2F7",
                  width: "580px",
                  height: "40px",
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
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal">
                <div style={{ marginTop: "30px" }} className="modal-dialog">
                  <div
                    style={{
                      width: "720px",
                      height: "560px",
                      marginLeft: "-100px"
                    }}
                    className="modal-content"
                  >
                    <div className="modal-header">
                      <h1
                        style={{ cursor: "default" }}
                        className="modal-title fs-5 fw-bold"
                        id="exampleModalLabel"
                      >
                        Select services
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div style={{ width: "740px", marginTop: "-2px" }}>
                      <div className="input-group px-4 py-3 border-bottom">
                        <button
                          className="btn btn-outline-secondary bg-white border-end-0 border"
                          type="button"
                        >
                          <img width={17} src={Glass} alt="glass" />
                        </button>
                        <input
                          style={{ marginRight: "25px" }}
                          className="form-control border py-2"
                          type="text"
                          placeholder="Search services"
                        />
                      </div>
                    </div>

                    <div className="form-check border-bottom py-3">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          marginLeft: "2px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input shadow-sm"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "20px" }}
                        className="form-check-label fw-semibold"
                      >
                        All services{" "}
                        <span
                          className="rounded-circle px-2"
                          style={{
                            background: "#F2F2F7",
                            marginLeft: "5px"
                          }}
                        >
                          3
                        </span>
                      </label>
                    </div>

                    <div className="form-check border-bottom py-3">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          marginLeft: "10px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input shadow-sm"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "20px", fontSize: "20px" }}
                        className="form-check-label fw-bold"
                      >
                        Hair
                        <span
                          className="rounded-circle px-2"
                          style={{
                            background: "#F2F2F7",
                            marginLeft: "8px",
                            fontSize: "13px",
                            fontWeight: "normal"
                          }}
                        >
                          3
                        </span>
                      </label>
                    </div>

                    <div className="form-check border-bottom mt-3">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          marginLeft: "10px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input shadow-sm"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "20px" }}
                        className="form-check-label fw-semibold"
                      >
                        Haircut
                      </label>
                      <div className="d-flex justify-content-between">
                        <p style={{ marginLeft: "18px", color: "gray" }}>
                          30min
                        </p>
                        <p
                          className="fw-semibold"
                          style={{ marginRight: "20px" }}
                        >
                          ₹40
                        </p>
                      </div>
                    </div>

                    <div className="form-check border-bottom mt-3">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          marginLeft: "10px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input shadow-sm"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "20px" }}
                        className="form-check-label fw-semibold"
                      >
                        Hair Color
                      </label>
                      <div className="d-flex justify-content-between">
                        <p style={{ marginLeft: "18px", color: "gray" }}>
                          1h 15 min
                        </p>
                        <p
                          className="fw-semibold"
                          style={{ marginRight: "20px" }}
                        >
                          ₹57
                        </p>
                      </div>
                    </div>

                    <div className="form-check mt-3">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          marginLeft: "10px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input shadow-sm"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "20px" }}
                        className="form-check-label fw-semibold"
                      >
                        Beard Trim
                      </label>
                      <div className="d-flex justify-content-between">
                        <p style={{ marginLeft: "18px", color: "gray" }}>
                          45min
                        </p>
                        <p
                          className="fw-semibold"
                          style={{ marginRight: "20px" }}
                        >
                          ₹20
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ marginBottom: "-5px" }}
                      className="modal-footer"
                    >
                      <div>
                        <button
                          style={{
                            width: "120px",
                            height: "45px",
                            marginRight: "15px"
                          }}
                          type="button"
                          className="btn border rounded-1 fw-semibold"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          style={{
                            background: "#4E4E4E",
                            width: "150px",
                            height: "45px",
                            color: "white"
                          }}
                          type="button"
                          className="btn rounded-1 fw-semibold"
                        >
                          Select 5 services
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          style={{
            background: 'white',
            width: "600px",
            height: "780px",
            marginLeft: "70px",
            marginTop: "-20px"
          }}
          className="border rounded-3"
        >
          <div
            className="d-flex justify-content-center fw-semibold"
            style={{ background: "#F2F2F7" }}
          >
            <p style={{ color: 'black', fontSize: "16px", marginTop: "10px" }}>
              Voucher preview
            </p>
          </div>
          <div
            className="d-flex justify-content-start border-top rounded-top rounded-3"
            style={{ background: "#E8E8EE" }}
          >
            <p
              style={{
                color: 'black',
                fontSize: "17px",
                marginTop: "12px",
                marginLeft: "50px"
              }}
            >
              <span style={{ color: "gray" }}>Voucher email subject:</span> Gift
              Voucher from UIUX Designer
            </p>
          </div>
          <div
            className="d-flex justify-content-start border-top rounded-top rounded-3"
            style={{ background: "white" }}
          >
            <div
              style={{
                background: "white",
                width: "55px",
                height: "55px",
                marginTop: "290px",
                marginLeft: "45px"
              }}
              className="rounded-circle position-absolute"
            ></div>
            <div
              style={{
                background: "white",
                width: "55px",
                height: "55px",
                marginTop: "290px",
                marginLeft: "490px"
              }}
              className="rounded-circle position-absolute"
            ></div>
          </div>
          <div style={{ marginLeft: "73px", marginTop: "40px" }}>
            <div
              style={{
                width: "445px",
                height: "590px",
                background: "#1776DE"
              }}
              className="rounded-3"
            >
              <div
                style={{ paddingTop: "30px" }}
                className="d-flex justify-content-center"
              >
                <div
                  className="border border-2 rounded-2"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    style={{
                      height: "32px",
                      marginTop: "20px",
                      marginLeft: "20px"
                    }}
                    src={Home}
                    alt="home"
                  />
                </div>
              </div>
              <div
                style={{ fontSize: "20px", color: "white" }}
                className="d-flex justify-content-center fw-semibold mt-2"
              >
                UIUX Designer
              </div>
              <div
                style={{ fontSize: "15px", color: "white" }}
                className="d-flex justify-content-center mt-1"
              >
                Your location address will appear here
              </div>
              <hr
                style={{
                  color: "lightgray",
                  width: "385px",
                  marginLeft: "28px",
                  marginTop: "30px"
                }}
              />
              <div style={{ marginLeft: "170px", marginTop: "25px" }}>
                <p style={{ fontSize: "16px", color: "white" }}>
                  Voucher value
                </p>

                <p
                  style={{
                    fontSize: "28px",
                    color: "white",
                    marginLeft: "16px",
                    fontWeight: "bold"
                  }}
                >
                  ₹0.00
                </p>
              </div>
              <hr
                style={{
                  color: "lightgray",
                  width: "385px",
                  marginLeft: "28px",
                  marginTop: "30px"
                }}
              />
              <div
                style={{ color: "white" }}
                className="d-flex justify-content-center py-2 fw-semibold"
              >
                Voucher code: xxxxxx
              </div>
              <button
                style={{
                  color: 'black',
                  background: "white",
                  fontSize: "17px",
                  width: "240px",
                  height: "50px",
                  marginLeft: "100px"
                }}
                className="btn rounded-1 fw-bolder mt-1"
              >
                Book now
              </button>
              <div
                style={{ color: "white", marginLeft: "140px" }}
                className="d-flex flex-column mt-2"
              >
                Redeem on all services <br />{" "}
                <span style={{ marginLeft: "15px" }}>Valid for 6 months</span>
              </div>
              <div style={{ color: "white", marginLeft: "110px" }}>
                For multiple-use until redeemed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateVoucher
