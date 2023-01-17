import Card from "../../assets/images/Newsale/images/credit-card.png"

// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap"

// ** Third Party Components
import { Sliders } from "react-feather"

const PaymentPage = () => {

  // // ** States
  const [show, setShow] = useState(false)

  return (
    <div>
      <div
        style={{ marginTop: "50px", marginLeft: "200px" }}
        className="d-flex justify-content-between"
      >
        <div>
          <p className="fw-bolder" style={{ fontSize: "28px", color:'black' }}>
            Payment transactions
          </p>
          <p style={{ marginTop: "5px", color:'black' }}>
            View, filter and export the history of your payments.
          </p>
        </div>
        <div style={{ marginRight: "100px" }}>
          <button
            style={{ width: "120px", height: "50px", fontSize: "18px", color:'black' }}
            className="btn border fw-semibold"
          >
            Export
          </button>
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
        <div style={{ width: "470px", marginLeft: "5px" }}>
          <button
            style={{ background: "white", width: "240px", height: "40px", color:'black' }}
            className="btn border rounded-pill fw-semibold"
          >
            25 Sep, 2022 - 25 Oct, 2022
          </button>
        </div>
        <div style={{ marginLeft: "260px", marginTop: "-40px" }}>
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
              <div style={{ marginLeft: "-18px",  color: 'black', fontWeight: 600 }} className="modal-body">
                Team member
              </div>

              <div style={{ marginTop: "-5px" }} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="All team members"
                />
              </div>

              <div style={{ marginLeft: "-18px",  color: 'black', fontWeight: 600 }} className="modal-body">
              Vouchers
              </div>

              <div style={{ marginTop: "-5px" }} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Exclude voucher redemptions"
                />
              </div>

              <div style={{ marginLeft: "-18px",  color: 'black', fontWeight: 600 }} className="modal-body">
              Deposits
              </div>

              <div style={{ marginTop: "-5px" }} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Exclude deposit redemptions"
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

      <div
        className="border mt-2"
        style={{ width: "915px", height: "280px", marginLeft: "200px" }}
      >
        <div
          style={{ marginTop: "100px" }}
          className="d-flex justify-content-center"
        >
          <img style={{ width: "50px" }} src={Card} alt="img" />
          <p></p>
        </div>
        <div
          className="fw-bolder"
          style={{ fontSize: "24px", marginLeft: "290px", color: 'black' }}
        >
          No payment transactions yet
        </div>
        <div style={{ marginLeft: "360px", color: 'black' }}>
          Click here to make a new sale.
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
