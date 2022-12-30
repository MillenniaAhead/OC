import React from "react"
import Card from "../../assets/images/Newsale/images/credit-card.png"
import Slider from "../../assets/images/Newsale/images/slider-line.png"

const PaymentPage = () => {
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
            style={{ width: "130px", height: "50px", fontSize: "18px", color:'black' }}
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
            style={{ color:'black', background: "white", width: "130px", height: "40px", fontSize: '15px' }}
            className="btn border rounded-pill fw-semibold py-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Filters
            <img
              style={{ width: "22px", height: "22px", marginLeft: "8px", marginBottom: '-10px', marginTop: '-15px' }}
              src={Slider}
              alt="slider"
            />
          </button>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal">
            <div
              style={{ marginTop: "80px", marginLeft: "355px" }}
              className="modal-dialog"
            >
              <div
                style={{ width: "640px", height: "460px" }}
                className="modal-content"
              >
                <div className="modal-header">
                  <h1
                    style={{ cursor: "default" }}
                    className="modal-title fs-5 fw-bold"
                    id="exampleModalLabel"
                  >
                    Filters
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  style={{ cursor: "default", marginLeft: "10px" }}
                  className="modal-body fw-semibold"
                >
                  Team member
                </div>

                <div
                  style={{ marginTop: "-120px" }}
                  className="input-group mb-2 px-4"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="All team members"
                  />
                  <button
                    style={{ borderColor: "lightgrey" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                  ></button>
                </div>

                <div
                  style={{
                    cursor: "default",
                    marginTop: "10px",
                    marginLeft: "10px"
                  }}
                  className="modal-body fw-semibold"
                >
                  Vouchers
                </div>

                <div
                  style={{ marginTop: "-120px" }}
                  className="input-group px-4"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Exclude voucher redemptions"
                  />
                  <button
                    style={{ borderColor: "lightgrey" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                  ></button>
                </div>

                <div
                  style={{
                    cursor: "default",
                    marginLeft: "10px",
                    marginTop: "10px"
                  }}
                  className="modal-body fw-semibold"
                >
                  Deposits
                </div>

                <div
                  style={{ marginTop: "-120px" }}
                  className="input-group mb-4 px-4"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Exclude deposit redemptions"
                  />
                  <button
                    style={{ borderColor: "lightgrey" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                  ></button>
                </div>

                <div style={{ marginBottom: "-5px" }} className="modal-footer">
                  <div style={{ marginRight: "300px", marginTop: "10px" }}>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#1BB70B",
                        cursor: "default"
                      }}
                    >
                      Clear all filters
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn border rounded-1 fw-semibold px-4"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    style={{ background: "#4E4E4E", color: "white" }}
                    type="button"
                    className="btn rounded-1 px-4"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
