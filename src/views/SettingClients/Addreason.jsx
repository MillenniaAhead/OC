import axios from "axios"
import { Fragment, useState } from "react"
import { Menu, Lock } from "react-feather"

import { Modal, ModalBody, ModalHeader } from "reactstrap"

const Addreason = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
  const [name3, setName3] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleName2 = (e) => {
    setName2(e.target.value)
  }

  const handleName3 = (e) => {
    setName3(e.target.value)
  }

const handleApi = () => {
  console.log({name, name2, name3})
  axios.post("http://localhost:4000/api/reason", {
    name, name2, name3 
  })
  .then((result) => {
    console.log(result.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

  return (
    <div style={{ marginTop: "30px" }} className="container">
      <p
        style={{ cursor: "default", color: "black", marginLeft: "150px" }}
        className="fs-5"
      >
        Settings . Cancellation Reasons
      </p>
      <div className="row">
        <h3
          style={{ cursor: "default", color: "black", marginLeft: "150px" }}
          className="col fw-bolder fs-2"
        >
          Cancellation Reasons
        </h3>
        <div style={{ marginRight: "85px" }} className="col">
          <button
            onClick={() => setShow(true)}
            style={{ fontSize: "14px" }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-dark float-end py-1 px-2"
          >
            Add new reason
          </button>

          {/* Modal */}
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
                  New cancellation reason
                </p>
                <hr style={{ width: "500px", marginLeft: "-20px" }} />
                <div
                  style={{ marginBottom: "30px" }}
                  className="d-flex flex-column"
                >
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Local promotion"
                    />
                  </div>
                </div>
                <hr
                  style={{
                    width: "500px",
                    marginLeft: "-20px",
                    marginTop: "15px"
                  }}
                />
                <div style={{ marginBottom: "-10px" }}>
                  <div className="d-flex justify-content-end">
                    <div>
                      <button
                        style={{
                          background: "#4E4E4E",
                          color: "white"
                        }}
                        type="button"
                        className="btn rounded-1 px-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </Fragment>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "150px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-2"
              className="px-2"
            >
              Duplicate appointment
            </p>

            {/* Modal */}
            <Fragment>
              <Modal
                style={{ marginTop: "5px" }}
                isOpen={name}
                toggle={() => setName(!name)}
                className="modal-dialog-centered"
              >
                <ModalHeader
                  className="bg-transparent"
                  toggle={() => setName(!name)}
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
                    Edit cancellation reason
                  </p>
                  <hr style={{ width: "500px", marginLeft: "-20px" }} />
                  <div className="d-flex flex-column">
                    <label style={{ color: "black" }}> Name</label>
                    <div style={{ marginTop: "5px" }} className="input-group">
                      <input
                        value={name}
                        onChange={handleName}
                        type="text"
                        className="form-control"
                        placeholder="Duplicate appointment"
                      />
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "500px",
                      marginLeft: "-20px",
                      marginTop: "25px"
                    }}
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ marginRight: "10px" }}
                      type="button"
                      className="btn btn-danger px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleApi}
                      type="button"
                      className="btn btn-secondary px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </ModalBody>
              </Modal>
            </Fragment>
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "150px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName2(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-3"
              className="px-2"
            >
              Appointment made by mistake
            </p>

            {/* Modal*/}
            <Fragment>
              <Modal
                style={{ marginTop: "5px" }}
                isOpen={name2}
                toggle={() => setName2(!name2)}
                className="modal-dialog-centered"
              >
                <ModalHeader
                  className="bg-transparent"
                  toggle={() => setName2(!name2)}
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
                    Edit cancellation reason
                  </p>
                  <hr style={{ width: "500px", marginLeft: "-20px" }} />
                  <div className="d-flex flex-column">
                    <label style={{ color: "black" }}> Name</label>
                    <div style={{ marginTop: "5px" }} className="input-group">
                      <input
                        value={name2}
                        onChange={handleName2}
                        type="text"
                        className="form-control"
                        placeholder="Appointment made by mistake"
                      />
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "500px",
                      marginLeft: "-20px",
                      marginTop: "25px"
                    }}
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ marginRight: "10px" }}
                      type="button"
                      className="btn btn-danger px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleApi}
                      type="button"
                      className="btn btn-secondary px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </ModalBody>
              </Modal>
            </Fragment>
          </div>
          <div style={{ marginLeft: "580px" }}>
            <Lock style={{ marginTop: "-2px" }} size={22} />
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "150px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName3(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-4"
              className="px-2"
            >
              Client not available
            </p>

            {/* Modal */}
            <Fragment>
              <Modal
                style={{ marginTop: "5px" }}
                isOpen={name3}
                toggle={() => setName3(!name3)}
                className="modal-dialog-centered"
              >
                <ModalHeader
                  className="bg-transparent"
                  toggle={() => setName3(!name3)}
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
                    Edit cancellation reason
                  </p>
                  <hr style={{ width: "500px", marginLeft: "-20px" }} />
                  <div className="d-flex flex-column">
                    <label style={{ color: "black" }}> Name</label>
                    <div style={{ marginTop: "5px" }} className="input-group">
                      <input
                        value={name3}
                        onChange={handleName3}
                        type="text"
                        className="form-control"
                        placeholder="Client not available"
                      />
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "500px",
                      marginLeft: "-20px",
                      marginTop: "25px"
                    }}
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ marginRight: "10px" }}
                      type="button"
                      className="btn btn-danger px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleApi}
                      type="button"
                      className="btn btn-secondary px-2 py-1"
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </ModalBody>
              </Modal>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addreason
