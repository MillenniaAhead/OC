import X from "../../assets/images/Newsale/images/x.png"
import Home from "../../assets/images/Newsale/images/home.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import { Link } from "react-router-dom"

import axios from "axios"

// // ** React Imports
import { Fragment, useState } from "react"

// // ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

const CreateVoucher = () => {
  // // ** States
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [value, setValue] = useState("")
  const [retailPrice, setRetailPrice] = useState("")
  const [search, setSearch] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlevalue = (e) => {
    setValue(e.target.value)
  }

  const handleRetailPrice = (e) => {
    setRetailPrice(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchModal = () => {
    console.log({ search })
    axios
      .get("https://reqres.in/api/search", {
        search
      })
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleCreateVoucher = () => {
    console.log({ name, value, retailPrice })
    axios
      .get("https://reqres.in/api/create", {
        name,
        value,
        retailPrice
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
      <div className="d-flex justify-content-between border-bottom py-1">
        <Link to="/vouchers">
          <img width={35} height={35} className="mt-2" src={X} alt="x" />
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
              color: "black",
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
          onClick={handleCreateVoucher}
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
            style={{ color: "black", fontSize: "25px", marginLeft: "25px" }}
            className="mt-1 fw-bolder"
          >
            Voucher info
          </div>
          <p style={{ color: "black", marginLeft: "25px" }}>
            Add the voucher name,value and duration of the voucher. If the{" "}
            <br />
            voucher value is higher than the retail price it will encourage more{" "}
            <br />
            sales.
          </p>
          <div className="px-2 mt-1">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Voucher name
            </label>
            <input
              value={name}
              onChange={handleName}
              style={{ width: "475px", height: "40px" }}
              type="text"
              className="form-control rounded-1"
            />
          </div>

          <div
            style={{ marginTop: "15px" }}
            className="d-flex justify-content-start"
          >
            <p style={{ color: "black", marginLeft: "25px", fontSize: "17px" }}>
              value
            </p>
            <p
              style={{
                color: "black",
                marginLeft: "190px",
                fontSize: "16px",
                fontWeight: 500
              }}
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
              <input
                value={value}
                onChange={handlevalue}
                type="text"
                className="form-control border"
              />
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
              <input
                value={retailPrice}
                onChange={handleRetailPrice}
                type="text"
                className="form-control border"
              />
            </div>
          </div>

          <div
            style={{ marginTop: "20px" }}
            className="d-flex flex-column px-2"
          >
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Valid for
            </label>
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
                style={{ background: "white" }}
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
            <label style={{ color: "black" }} className="form-check-label px-1">
              Save voucher
            </label>
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
          <div
            style={{ fontSize: "25px", color: "black" }}
            className="px-2 fw-bolder"
          >
            Services included
          </div>
          <div className="d-flex flex-column px-2 py-2">
            <label style={{ color: "black" }} className="form-label">
              Services included
            </label>
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
                type="button"
                className="btn"
                style={{
                  color: "#1BB70B",
                  background: "#F2F2F7"
                }}
                onClick={() => setShow(true)}
              >
                Edit
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
                    <div style={{ width: "460px", marginTop: "-2px" }}>
                      <div className="input-group">
                        <button
                          onClick={handleSearchModal}
                          className="btn border-end-0 border"
                          type="button"
                        >
                          <img width={15} src={Glass} alt="glass" />
                        </button>
                        <input
                          value={search}
                          onChange={handleSearch}
                          className="form-control border"
                          type="text"
                          placeholder="Search services"
                        />
                      </div>
                    </div>
                    <hr style={{ width: "500px", marginLeft: "-19px" }} />
                    <div className="form-check">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        style={{ marginLeft: "10px", color: "black" }}
                        className="form-check-label"
                      >
                        All services{" "}
                        <span
                          className="rounded-circle"
                          style={{
                            padding: "6px",
                            background: "#F2F2F7",
                            marginLeft: "5px"
                          }}
                        >
                          3
                        </span>
                      </label>
                    </div>

                    <hr style={{ width: "500px", marginLeft: "-19px" }} />

                    <div className="form-check mt-1">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        style={{
                          marginLeft: "20px",
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "bolder"
                        }}
                        className="form-check-label"
                      >
                        Hair
                        <span
                          className="rounded-circle"
                          style={{
                            padding: "5px",
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

                    <hr style={{ width: "500px", marginLeft: "-19px" }} />

                    <div className="form-check">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        style={{
                          marginLeft: "20px",
                          color: "black",
                          fontWeight: "bold"
                        }}
                        className="form-check-label"
                      >
                        Haircut
                      </label>
                      <div className="d-flex justify-content-between">
                        <p style={{ marginLeft: "18px", color: "gray" }}>
                          30min
                        </p>
                        <p
                          className="fw-semibold"
                          style={{ marginRight: "20px", color: "black" }}
                        >
                          ₹40
                        </p>
                      </div>
                    </div>

                    <hr
                      style={{
                        marginTop: "-5px",
                        width: "500px",
                        marginLeft: "-19px"
                      }}
                    />

                    <div className="form-check mt-1">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        style={{
                          marginLeft: "20px",
                          color: "black",
                          fontWeight: "bold"
                        }}
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
                          style={{ marginRight: "20px", color: "black" }}
                        >
                          ₹57
                        </p>
                      </div>
                    </div>

                    <hr
                      style={{
                        marginTop: "-5px",
                        width: "500px",
                        marginLeft: "-19px"
                      }}
                    />

                    <div className="form-check mt-1">
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#1BB70B"
                        }}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        style={{
                          marginLeft: "20px",
                          color: "black",
                          fontWeight: "bold"
                        }}
                        className="form-check-label"
                      >
                        Beard Trim
                      </label>
                      <div className="d-flex justify-content-between">
                        <p style={{ marginLeft: "18px", color: "gray" }}>
                          45min
                        </p>
                        <p
                          className="fw-semibold"
                          style={{ marginRight: "20px", color: "black" }}
                        >
                          ₹20
                        </p>
                      </div>
                    </div>

                    <hr
                      style={{
                        marginTop: "-5px",
                        width: "500px",
                        marginLeft: "-20px"
                      }}
                    />

                    <div style={{ marginBottom: "-10px" }}>
                      <div className="d-flex justify-content-between">
                        <div style={{ marginLeft: "200px" }}>
                          <button
                            type="button"
                            className="btn border rounded-1 fw-semibold px-2"
                          >
                            Close
                          </button>
                        </div>
                        <div>
                          <button
                            style={{ background: "#4E4E4E", color: "white" }}
                            type="button"
                            className="btn rounded-1 px-2"
                          >
                            Select 5 services
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
        {/* 2 */}
        <div
          style={{
            background: "white",
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
            <p style={{ color: "black", fontSize: "16px", marginTop: "10px" }}>
              Voucher preview
            </p>
          </div>
          <div
            className="d-flex justify-content-start border-top rounded-top rounded-3"
            style={{ background: "#E8E8EE" }}
          >
            <p
              style={{
                color: "black",
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
                  color: "black",
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
