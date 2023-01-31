import Left from "../../assets/images/Calender/chevron-left.png"
import Right from "../../assets/images/Calender/chevron-right.png"
import Settings from "../../assets/images/Calender/settings.png"
import axios from "axios"
// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

const Calender = () => {
  const [show, setShow] = useState(false)

  const [desc, setDesc] = useState("")

  const handleDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleApi = () => {
    console.log({ desc })
    axios
      .get("https://reqres.in/api/login", {
       desc
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
      <div
        className="border border-bottom-0 d-flex justify-content-around align-items-center "
        style={{
          background: "rgba(237, 254, 235, 0.8)",
          height: "70px",
          width: "1220px"
        }}
      >
        <div className="d-flex flex-column">
          <div
            style={{ marginTop: "-2px" }}
            className="btn-group dropdown border"
          >
            <button
              style={{
                background: "white",
                width: "215px",
                height: "40px",
                textAlign: "start"
              }}
              onClick={() => setShow(true)}
              type="button"
              className="btn"
            >
              Working
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
                    New blocked time
                  </p>
                  <hr style={{ width: "500px", marginLeft: "-20px" }} />
                  <div className="d-flex flex-column px-1">
                    <label
                      style={{ color: "black" }}
                      className="form-label fs-5 fw-bolder"
                    >
                      Date
                    </label>
                    <div
                      style={{ marginTop: "2px" }}
                      className="btn-group dropdown border"
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
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Thursday, 13 October 2022
                      </button>
                      <button
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split border-right"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                    </div>
                  </div>
                  <div className="d-flex flex-column px-1 mt-1">
                    <label
                      style={{ color: "black" }}
                      className="form-label fs-5 fw-bolder"
                    >
                      Team member
                    </label>
                    <div
                      style={{ marginTop: "2px" }}
                      className="btn-group dropdown border"
                    >
                      <button
                        style={{
                          background: "white",
                          width: "580px",
                          height: "40px",
                          textAlign: "left"
                        }}
                        className="btn"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Kondeti Anusha
                      </button>
                      <button
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split border-right"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column px-1 py-1">
                      <label
                        style={{ color: "black" }}
                        className="form-label fs-5 fw-bolder"
                      >
                        Start time
                      </label>
                      <div
                        className="border rounded px-1"
                        style={{ width: "200px", height: "40px" }}
                      >
                        11:15am
                        <button
                          style={{ marginLeft: "78px" }}
                          type="button"
                          className="btn dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                      </div>
                    </div>

                    <div className="d-flex flex-column py-1">
                      <label
                        style={{ color: "black" }}
                        className="form-label fs-5 fw-bolder"
                      >
                        End time
                      </label>
                      <div
                        className="border rounded px-1"
                        style={{ width: "205px", height: "40px" }}
                      >
                        11:30am
                        <button
                          style={{ marginLeft: "78px" }}
                          type="button"
                          className="btn dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div className="form-check px-3 mb-1">
                    <input
                      style={{ width: "20px", height: "20px" }}
                      className="form-check-input shadow-sm"
                      type="checkbox"
                    />
                    <label
                      style={{ marginLeft: "8px", marginTop: "2px" }}
                      className="form-check-label fs-5"
                    >
                      Allow online bookings during blocked time
                    </label>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="d-flex flex-column px-1"
                  >
                    <label
                      style={{ color: "black" }}
                      className="form-label fs-5 fw-bolder"
                    >
                      Description
                    </label>
                    <input
                      value={desc}
                      onChange={handleDesc}
                      style={{
                        width: "430px",
                        height: "90px",
                        marginTop: "5px"
                      }}
                      type="text"
                      placeholder="e.g. lunch meeting"
                      className="card px-1 border rounded-1"
                    />
                  </div>

                  <hr
                    style={{
                      width: "500px",
                      marginLeft: "-20px",
                      marginTop: "-10px"
                    }}
                  />

                  <div style={{ marginBottom: "-10px" }}>
                    <div className="d-flex justify-content-end">
                      <div>
                        <button
                          onClick={handleApi}
                          style={{
                            background: "#4E4E4E",
                            color: "white"
                          }}
                          type="button"
                          className="btn rounded-1 px-3"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
            </Fragment>
            <button
              type="button"
              className="btn btn-dark dropdown-toggle dropdown-toggle-split border-right"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
          </div>
        </div>

        <div
          style={{ marginLeft: "80px", height: "15px", marginTop: "-25px" }}
          className="d-flex"
        >
          <div
            className="px-1 py-2 border border-end"
            style={{ background: "white" }}
          >
            <img style={{ marginTop: "-20px" }} src={Left} alt="left" />
          </div>
          <div className="px-2 py-2 border">
            <p style={{ marginTop: "-10px" }}>Today</p>
          </div>
          <div className="px-2 py-2 border" style={{ background: "white" }}>
            <p style={{ marginTop: "-10px" }}>Thursday 13 Oct, 2022</p>
          </div>
          <div
            className="px-1 py-2 border"
            style={{ marginRight: "-20px", background: "white" }}
          >
            <img style={{ marginTop: "-20px" }} src={Right} alt="right" />
          </div>
        </div>
        <div
          className="px-1 border"
          style={{
            background: "white",
            marginLeft: "60px",
            height: "38px",
            paddingTop: "6px"
          }}
        >
          <img src={Settings} alt="setting"></img>
        </div>

        <div style={{ marginLeft: "-40px" }}>
          <div className="btn-group">
            <button
              style={{ background: "white", width: "70px", textAlign: "left" }}
              type="button"
              className="btn btn-dark border"
            >
              Day
            </button>
            <button
              type="button"
              className="btn btn-dark border border-start-0 dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#/">
                  Day
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  3 days
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Week
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginLeft: "-40px" }}>
          <div className="btn-group">
            <button
              style={{ width: "70px" }}
              type="button"
              className="btn btn-dark border"
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-dark border border-start-0 dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal">
              <div style={{ marginTop: "10px" }} className="modal-dialog">
                <div
                  style={{
                    width: "480px",
                    height: "610px",
                    marginLeft: "15px"
                  }}
                  className="modal-content"
                >
                  <div className="modal-header">
                    <h1
                      style={{ cursor: "default" }}
                      className="modal-title fs-5 fw-bold"
                      id="exampleModalLabel"
                    >
                      New blocked time
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="d-flex flex-column px-4 py-3">
                    <label className="form-label fw-semibold">Date</label>
                    <div
                      style={{ marginTop: "-2px" }}
                      className="btn-group dropdown border"
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
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Thursday, 13 October 2022
                      </button>
                      <button
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split border-right"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                    </div>
                  </div>

                  <div className="d-flex flex-column px-4">
                    <label className="form-label fw-semibold">
                      Team member
                    </label>
                    <div
                      style={{ marginTop: "-2px" }}
                      className="btn-group dropdown border"
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
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Kondeti Anusha
                      </button>
                      <button
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split border-right"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="d-flex flex-column px-4 py-3">
                      <label className="form-label fw-semibold">
                        Start time
                      </label>
                      <div
                        className="border rounded px-3 py-1"
                        style={{ width: "200px", height: "43px" }}
                      >
                        11:15am
                        <button
                          style={{ marginLeft: "78px" }}
                          type="button"
                          className="btn dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                      </div>
                    </div>

                    <div className="d-flex flex-column py-3">
                      <label className="form-label fw-semibold">End time</label>
                      <div
                        className="border rounded px-3 py-1"
                        style={{ width: "205px", height: "43px" }}
                      >
                        11:30am
                        <button
                          style={{ marginLeft: "78px" }}
                          type="button"
                          className="btn dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div className="form-check px-5 mb-4">
                    <input
                      style={{ width: "23px", height: "23px" }}
                      className="form-check-input shadow-sm"
                      type="checkbox"
                    />
                    <label className="form-check-label px-2 mt-1">
                      Allow online bookings during blocked time
                    </label>
                  </div>

                  <div
                    style={{ marginTop: "-10px" }}
                    className="d-flex flex-column px-4 mb-4"
                  >
                    <label className="form-label fw-semibold">
                      Description
                    </label>
                    <input
                      style={{ width: "430px", height: "90px" }}
                      type="text"
                      placeholder="e.g. lunch meeting"
                      className="card px-3 rounded-1"
                    />
                  </div>

                  <div
                    style={{ marginBottom: "-5px" }}
                    className="modal-footer"
                  >
                    <div>
                      <button
                        style={{
                          background: "#4E4E4E",
                          width: "120px",
                          height: "40px",
                          color: "white"
                        }}
                        type="button"
                        className="btn rounded-1 fw-semibold"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item fw-semibold" href="/newappointment">
                  New appointment
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="dropdown-item fw-semibold"
                  href="#/"
                >
                  New blocked time
                </a>
              </li>
              <li>
                <a className="dropdown-item fw-semibold" href="#/">
                  New sale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-3">
        <div
          style={{
            marginLeft: "50px",
            height: "65px",
            width: "65px",
            background: "#1BB70B66"
          }}
          className="rounded-circle"
        >
          <div
            style={{ marginLeft: "25px", marginTop: "15px", color: "#1BB70B" }}
            className="fs-2 position-absolute"
          >
            K
          </div>
          <p style={{ marginTop: "70px", marginLeft: "5px" }}>Kondeti</p>
        </div>

        <div
          style={{
            marginLeft: "250px",
            height: "65px",
            width: "65px",
            background: "#1BB70B66"
          }}
          className="rounded-circle"
        >
          <div
            style={{ marginLeft: "22px", marginTop: "20px", color: "#1BB70B" }}
            className="fs-3 position-absolute"
          >
            W
          </div>
          <p style={{ marginTop: "70px", marginLeft: "7px" }}>Wendy</p>
        </div>
      </div>

      <div className="d-flex">
        <div style={{ marginTop: "70px" }}>
          <div style={{ marginLeft: "-5px" }} className="fw-semibold">
            11:00{" "}
          </div>
          <p
            style={{ marginTop: "-5px", marginLeft: "-40px" }}
            className="px-3 fw-semibold"
          >
            am
          </p>
          <div style={{ marginLeft: "-5px" }} className="fw-semibold mt-4">
            12:00{" "}
          </div>
          <p
            style={{ marginTop: "-5px", marginLeft: "-40px" }}
            className="px-3 fw-semibold"
          >
            pm
          </p>
          <div style={{ marginLeft: "-5px" }} className="fw-semibold mt-4">
            1:00{" "}
          </div>
          <p
            style={{ marginTop: "-5px", marginLeft: "-40px" }}
            className="px-3 fw-semibold"
          >
            pm
          </p>
          <div style={{ marginLeft: "-5px" }} className="fw-semibold mt-4">
            2:00{" "}
          </div>
          <p
            style={{ marginTop: "-5px", marginLeft: "-40px" }}
            className="px-3 fw-semibold"
          >
            pm
          </p>
          <div style={{ marginLeft: "-5px" }} className="fw-semibold mt-4">
            3:00{" "}
          </div>
          <p
            style={{ marginTop: "-5px", marginLeft: "-40px" }}
            className="px-3 fw-semibold"
          >
            pm
          </p>
        </div>
        <div
          className="border"
          style={{
            marginTop: "40px",
            width: "1240px",
            height: "460px",
            marginLeft: "-35px"
          }}
        >
          <hr style={{ marginTop: "32px", color: "lightgray" }} />
          <hr style={{ marginTop: "85px", color: "lightgray" }} />
          <hr style={{ marginTop: "85px", color: "lightgray" }} />
          <hr style={{ marginTop: "85px", color: "lightgray" }} />
          <hr style={{ marginTop: "85px", color: "lightgray" }} />
        </div>
      </div>
    </div>
  )
}

export default Calender
