import React from "react"
import Glass from "../../assets/images/Newsale/images/search.png"
import Slider from "../../assets/images/Newsale/images/slider-line.png"
import Search from "../../assets/images/Newsale/images/search-new.png"

const Voucher = () => {
  return (
    <div>
      <div
        style={{ marginTop: "50px", marginLeft: "200px" }}
        className="d-flex justify-content-between px-2"
      >
        <div>
          <p className="fw-bolder" style={{ color: 'black', fontSize: "30px" }}>
            Vouchers sold
          </p>
          <p style={{color: 'black', marginTop: "-5px" }}>
            View, filter and export vouchers purchased by your clients.
            <span style={{ color: "#1BB70B" }}> Learn more</span>
          </p>
        </div>
        <div style={{ marginRight: "100px"}}>
          <button
            style={{ color: 'black', width: "130px", height: "48px", fontSize: "18px" }}
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
                placeholder="Search by Code or Client"
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "470px", marginTop: "-45px" }}>
        <button
            style={{ background: "white", width: "120px", height: "45px", color: 'black' }}
            className="btn border rounded-pill fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Filters
            <img
              style={{ width: "24px", height: "24px", marginLeft: "8px" }}
              src={Slider}
              alt="slider"
            />
          </button>
        </div>
        
          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal">
            <div style={{ marginTop: "180px" }} className="modal-dialog">
              <div className="modal-content">
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
                  Status
                </div>

                <div
                  style={{ marginTop: "-10px" }}
                  className="input-group mb-4 px-4"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="All statuses"
                  />
                  <button
                    style={{ borderColor: "lightgrey" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                  ></button>
                </div>

                <div style={{ marginBottom: "-5px" }} className="modal-footer">
                  <div style={{ marginRight: "160px", marginTop: "10px" }}>
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

      <div>
        <div
          style={{ marginTop: "78px", marginLeft: "200px" }}
          className="d-flex justify-content-center"
        >
          <img
            style={{ height: "45px", width: "45px" }}
            src={Search}
            alt="search"
          />
        </div>
        <div
          style={{ fontSize: "25px", marginTop: "20px", marginLeft: "210px", color: 'black' }}
          className="d-flex justify-content-center fw-bolder"
        >
          No results found
        </div>
        <div
          style={{ fontSize: "18px", marginTop: "5px", marginLeft: "230px", color: 'black' }}
          className="d-flex justify-content-center"
        >
          Try using different filter options to find
        </div>
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "18px", marginLeft: "220px", color: 'black' }}
        >
          what you're looking for
        </p>
      </div>
    </div>
  )
}

export default Voucher
