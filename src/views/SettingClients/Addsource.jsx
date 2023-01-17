import { Fragment, useState } from "react"
import { Menu, Lock } from "react-feather"

import { Modal, ModalBody, ModalHeader } from "reactstrap"

const Addsource = () => {

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
  const [name3, setName3] = useState("")
  const [name4, setName4] = useState("")
  const [name5, setName5] = useState("")
  const [name6, setName6] = useState("")
 
  return (
    <div className="container pt-2">
      <p style={{ fontSize: "14px", color: "black", marginLeft: "165px" }}>
        Settings . Referral Sources
      </p>
      <div className="row">
        <h3
          style={{ color: "black", marginLeft: "165px" }}
          className="col fw-bolder fs-2"
        >
          Referral Sources
        </h3>
        <div className="col">
          <button
            onClick={() => setShow(true)}
            style={{ fontSize: "15px", marginRight: "70px" }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-dark float-end py-1 px-2"
          >
            Add new source
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
                  New referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-20px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Local promotion"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
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
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
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
              Walk-in
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Walk-In"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <Lock style={{ marginTop: "-2px" }} size={22} />
          </div>
        </div>
      </div>

      {/* Modal-3 */}
      <div
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
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
              Instagram
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Instagram"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <div>
              <Lock style={{ marginTop: "-2px" }} size={22} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
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
              Imported
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Imported"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <div>
              <Lock style={{ marginTop: "-2px" }} size={22} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName4(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-5"
              className="px-2"
            >
              Outlet
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
              isOpen={name4}
              toggle={() => setName4(!name4)}
              className="modal-dialog-centered"
            >
              <ModalHeader
                className="bg-transparent"
                toggle={() => setName4(!name4)}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Outlet"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <div>
              <Lock style={{ marginTop: "-2px" }} size={22} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName5(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-6"
              className="px-2"
            >
              Facebook
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
              isOpen={name5}
              toggle={() => setName5(!name5)}
              className="modal-dialog-centered"
            >
              <ModalHeader
                className="bg-transparent"
                toggle={() => setName5(!name5)}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Facebook"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <div>
              <Lock style={{ marginTop: "-2px" }} size={22} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: "60px", width: "80%", marginLeft: "165px" }}
        className="card border mt-2"
      >
        <div className="card-body d-flex">
          <div className="d-flex">
            <Menu color="black" size={22} />
            <p
              onClick={() => setName6(true)}
              style={{ cursor: "default", color: "black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-7"
              className="px-2"
            >
              Book Now Link
            </p>

            {/* <!-- Modal --> */}
            <Fragment>
            <Modal
              style={{marginTop: '5px'}}
              isOpen={name6}
              toggle={() => setName6(!name6)}
              className="modal-dialog-centered"
            >
              <ModalHeader
                className="bg-transparent"
                toggle={() => setName6(!name6)}
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
                  Edit referral source
                </p>
                <hr style={{ width: "500px", marginLeft: "-19px" }} />
                <div className="d-flex flex-column">
                  <label style={{ color: "black" }}> Name</label>
                  <div style={{ marginTop: "5px" }} className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Book Now Link"
                    />
                  </div>
                </div>
                <div className="form-check form-switch mt-1">
                    <input style={{backgroundColor: 'green', width: '30px', height: '15px', marginTop: '2px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label style={{color: 'black', marginTop: '-5px', marginLeft: '-6px'}} className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                </div>    
              </ModalBody>
            </Modal>
          </Fragment>
          </div>
          <div style={{ marginRight: "10px" }} className="d-flex ms-auto">
            <p
              style={{ backgroundColor: "lightgreen", color: "green" }}
              className="px-2"
            >
              ACTIVE
            </p>
          </div>
          <div>
            <div>
              <Lock style={{ marginTop: "-2px" }} size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addsource
