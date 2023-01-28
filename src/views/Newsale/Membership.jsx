import Glass from "../../assets/images/Newsale/images/search.png"
import Group from "../../assets/images/Newsale/images/Group 298.png"

// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

// ** Third Party Components
import { Sliders } from "react-feather"

const Membership = () => {
  // ** States
  const [show, setShow] = useState(false)

  return (
    <div>
      <div
        style={{ marginTop: "50px", marginLeft: "200px" }}
        clsasName="d-flex justify-content-between"
      >
        <div>
          <p className="fw-bolder" style={{ fontSize: "30px", color: "black" }}>
            Memberships sold
          </p>
          <p style={{ marginTop: "-5px", color: "black" }}>
            View and filter memberships purchased by your clients.
            <span style={{ color: "#1BB70B" }}> Learn more</span>
          </p>
        </div>
      </div>

      <div
        style={{
          marginLeft: "200px",
          background: "rgba(242, 242, 247, 0.8)",
          width: "915px"
        }}
        className="row mt-1 py-1 rounded-2"
      >
        <div style={{ width: "470px", marginLeft: "10px" }}>
          <div className="row">
            <div className="input-group col-md-4">
              <span className="input-group-append">
                <button
                  style={{ background: "white" }}
                  className="btn border border-end-0"
                  type="button"
                >
                  <img width={21} height={21} src={Glass} alt="glass" />
                </button>
              </span>
              <input
                className="form-control border-right-0 border"
                type="search"
                placeholder="Search by client or membership name"
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "760px", marginTop: "-45px" }}>
          <button
            className="btn border rounded-pill"
            style={{
              background: "white",
              color: "black",
              border: "none",
              width: "120px",
              height: "42px"
            }}
            onClick={() => setShow(true)}
          >
            Filters
            <Sliders style={{ marginLeft: "8px" }} width={20} height={20} />
          </button>
        </div>

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
                Filters
              </p>
              <hr style={{ width: "500px", marginLeft: "-20px" }} />
              <div style={{ marginLeft: "-18px",  color: 'black' }} className="modal-body">
                Membership status
              </div>

              <div style={{ marginTop: "-5px" }} className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="All statuses"
                />
              </div>

              <div
                style={{
                  color: 'black',
                  marginLeft: "-18px",
                  marginTop: "-15px"
                }}
                className="modal-body"
              >
                Payment type
              </div>

              <div style={{ marginTop: "-5px" }} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="All types"
                />
              </div>
              <hr style={{ width: "500px", marginLeft: "-20px" }} />

              <div style={{ marginBottom: "-10px" }}>
                <div className="d-flex justify-content-between">
                <div>
                  <p
                    style={{
                      marginTop: '10px',
                      fontSize: "16px",
                      color: "#1BB70B"
                    }}
                  >
                    Clear all filters
                  </p>
                </div>
                <div style={{marginLeft: '150px'}}>
                  <button
                    type="button"
                    className="btn border rounded-1 fw-semibold px-2"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    style={{ background: "#4E4E4E", color: "white" }}
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

      <div>
        <div
          style={{ marginTop: "78px", marginLeft: "280px" }}
          className="d-flex justify-content-center"
        >
          <img
            style={{ height: "45px", width: "45px" }}
            src={Group}
            alt="group"
          />
        </div>
        <div
          style={{
            fontSize: "25px",
            marginTop: "20px",
            marginLeft: "280px",
            color: "black"
          }}
          className="d-flex justify-content-center fw-bolder"
        >
          No results found
        </div>
        <div
          style={{ fontSize: "16px", marginLeft: "280px", color: "black" }}
          className="d-flex justify-content-center"
        >
          Try using different filter options to find
        </div>
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "16px", marginLeft: "280px", color: "black" }}
        >
          what you're looking for
        </p>
      </div>
    </div>
  )
}

export default Membership