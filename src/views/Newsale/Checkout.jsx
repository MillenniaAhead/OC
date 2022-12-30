import React from "react"
import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Calander from "../../assets/images/Newsale/images/calendar.png"
import Glass from "../../assets/images/Newsale/images/search.png"
import Slider from "../../assets/images/Newsale/images/slider-line.png"
import Menu from "../../assets/images/Newsale/images/menu.png"

const Checkout = () => {
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
          <div style={{color: 'black'}} className="fs-3 py-4 px-5 fw-bolder">New sale</div>

        <div style={{ cursor: "default", marginTop: '-35px' }} className="px-5">
          <a
            href="/newsale"
            className="text-secondary"
          >
            Quick Sale
          </a>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-40px", cursor: "pointer" }}
        >
          <p
            className="py-2"
          >
            To check out
          </p>
        </div>

        <div
          style={{ marginLeft: "290px", marginTop: "-55px", cursor: "pointer" }}
        >
          <a
            href="/products"
            className="text-secondary"
          >
            Products
          </a>
        </div>

        <div
          style={{ marginLeft: "390px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/services"
            className="text-secondary"
          >
            Services
          </a>
        </div>

        <div
          style={{ marginLeft: "480px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/memberships"
            className="text-secondary"
          >
            Memberships
          </a>
        </div>

        <div
          style={{ marginLeft: "610px", marginTop: "-20px", cursor: "pointer" }}
        >
          <a
            href="/vouchers"
            className="text-secondary"
          >
            Vouchers
          </a>
        </div>

        <div
          style={{ marginLeft: "50px", background: "#F2F2F7", width: "750px" }}
          className="row mt-2 py-1 rounded-2"
        >
          <div style={{ width: "300px" }} className="col-md-5">
            <div className="input-group">
              <button
                className="btn px-1 bg-white border-end-0 border"
                type="button"
              >
                <img width={17} src={Glass} alt="glass" />
              </button>
              <input
                style={{ marginRight: "25px" }}
                className="form-control border py-1"
                type="text"
                placeholder="Search by client, team member or service name"
              />
              <div style={{ marginRight: "-270px" }} className="d-flex">
                <div
                  style={{ width: '120px', height: '50px', marginRight: '15px',  background: "white" }}
                  className="d-flex border rounded-pill"
                >
                  <button
                    type="button"
                    className="btn fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Filters
                  </button>
                  <div style={{marginLeft: '-35px'}}>
                  <img className="px-2 mt-1" src={Slider} alt="sliderr" />
                  </div>
                 
                  {/* <!-- Modal --> */}
                  {/* <div className="modal fade" id="exampleModal">
                    <div
                      style={{ marginTop: "180px" }}
                      className="modal-dialog"
                    >
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
                          style={{ cursor: "default" }}
                          className="modal-body fw-semibold"
                        >
                          Team member
                        </div>

                        <div
                          style={{ marginTop: "-10px" }}
                          className="input-group mb-4 px-4"
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
                          style={{ marginBottom: "-5px" }}
                          className="modal-footer"
                        >
                          <div
                            style={{ marginRight: "160px", marginTop: "10px" }}
                          >
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
                            style={{ background: "white" }}
                            type="button"
                            className="btn border px-4"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            style={{ background: "#4E4E4E", color: "white" }}
                            type="button"
                            className="btn px-4"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div
                  style={{ width: '120px', height: '50px', background: "white", marginRight: "-170px" }}
                  className="d-flex border rounded-pill"
                >
                  <button type="button" className="btn">
                    Sort by
                  </button>
                  <div style={{marginLeft: '-35px'}}>
                  <img style={{width: '60px', height: '25px'}} className="px-2 mt-1" src={Menu} alt="menu" />
                  </div>
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
            src={Calander}
            alt="chk"
          />
          <p style={{ marginTop: "25px" }} className="fw-semibold fs-5">
            No more appointments!
          </p>
          <p style={{ marginTop: "-10px" }}>
            Try selecting a different date period to see more results
          </p>
          <button
            style={{ background: "#4E4E4E", color: "white" }}
            type="button"
            className="btn px-2 py-1"
          >
            Show last 7 days
          </button>
        </div>
      </div>

      <div
        className="border-top"
        style={{ width: "360px", height: "565px"}}
      >
        <div
          style={{ cursor: "pointer" }}
          className="border-bottom py-2 text-center"
        >
          <img width={100} src={Client} alt="client" />
        </div>

        <div style={{ marginTop: "195px" }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p style={{ marginTop: "15px", marginLeft: '10px' }} className="fw-semibold">
            Your cart is empty
          </p>
          <p style={{ marginTop: "-15px", marginLeft: '9px' }}>
            Select an appointment, service
          </p>
          <p style={{ marginTop: "-18px", marginLeft: '10px' }}> or item to check out.</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
