import React from "react"

const Dailysales = () => {
  return (
    <div style={{marginTop: '-28px'}}>
      <div style={{marginLeft: '-28px', width: '220px'}} className="py-2 px-2 border d-flex flex-column gap-2">
        <p style={{marginTop: '5px', fontWeight: 600}} className="fs-4">Sales</p>
        <a style={{color: 'black'}} className="fs-5" href="/newsale">New sale</a>
        <a style={{color: 'black'}} className="fs-5" href="/dailysales">Daily sales</a>
        <a style={{color: 'black'}} className="fs-5" href="/appointments">Appointments</a>
        <a style={{color: 'black'}} className="fs-5" href="/saleshistory">Sales history</a>
        <a style={{color: 'black'}} className="fs-5" href="/payment">Payment transactions</a>
        <a style={{color: 'black'}} className="fs-5" href="/voucher">Voucher sold</a>
        <a style={{color: 'black'}} className="fs-5" href="/membership">Memberships sold</a>
      </div>
      <div
        style={{ marginTop: "-350px", marginLeft: "220px" }}
        className="d-flex justify-content-between"
      >
        <div>
          <p className="fw-bolder" style={{ color: 'black', fontSize: "30px" }}>
            Daily sales
          </p>
          <p style={{color: 'black', marginTop: "5px" }}>
            View, filter and export the transactions and cash movement for the
            day. <span style={{ color: "#1BB70B" }}>Learn more</span>
          </p>
        </div>
        <div style={{ marginRight: "100px" }}>
          <button
            style={{ width: "130px", height: '50px', fontSize: '18px', color: 'black' }}
            className="btn border fw-semibold"
          >
            Export
          </button>
        </div>
      </div>

      <div
        style={{
          marginLeft: "220px",
          background: "rgba(242, 242, 247, 0.8)",
          width: "952px"
        }}
        className="row mt-1 py-1 rounded-2"
      >
        <div style={{ width: "410px", marginLeft: "10px" }}>
          <div className="input-group">
            <input
              className="form-control border rounded-pill px-1"
              type="date"
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-2">
        {/* 1 */}
        <div
          className="border rounded-3"
          style={{
            width: "480px",
            height: "620px",
            marginLeft: "220px",
            marginBottom: "60px"
          }}
        >
          <div>
            <p className="fw-bolder px-2 py-2" style={{ fontSize: "20px", color: 'black' }}>
              Transaction summary
            </p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black' }}
            className="d-flex justify-content-around mt-1 fw-semibold border-bottom"
          >
            <p>Item type</p>
            <p>Sales qty</p>
            <p>Refund qty</p>
            <p>Gross total</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black' }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Services</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Products</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Shipping</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Vouchers</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "10px" }}>Memberships</p>
            <p style={{ marginRight: "110px" }}>0</p>
            <p style={{ marginLeft: "-100px" }}>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "15px" }}>
              Late <br /> cancellation <br /> fees
            </p>
            <p style={{marginTop: '20px'}}>0</p>
            <p style={{marginTop: '20px'}}>0</p>
            <p style={{ marginRight: "25px", marginTop: '20px' }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "10px" }}>No-show fees</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "15px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 fw-semibold"
          >
            <p style={{ marginLeft: "25px" }}>Total Sales</p>
            <p>0</p>
            <p>0</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
        </div>

        {/* 2 */}
        <div
          className="border rounded-3"
          style={{ width: "450px", height: "450px", marginRight: "40px" }}
        >
          <div>
            <p className="fw-bolder px-2 py-2" style={{color: 'black',  fontSize: "20px" }}>
              {" "}
              Cash movement summary
            </p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-around mt-1 fw-semibold border-bottom"
          >
            <p>Payment type</p>
            <p>Payments collected</p>
            <p>Refunds paid</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Cash</p>
            <p>₹0.00</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>Other</p>
            <p>₹0.00</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "14px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom"
          >
            <p style={{ marginLeft: "25px" }}>
              Voucher <br /> Redemptions
            </p>
            <p style={{ marginRight: "40px" }}>₹0.00</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "15px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 border-bottom fw-semibold"
          >
            <p style={{ marginLeft: "25px" }}>
              Payments <br /> collected
            </p>
            <p style={{ marginRight: "20px" }}>₹0.00</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
          <div
            style={{ fontSize: "15px", color: 'black'  }}
            className="d-flex justify-content-between mt-2 fw-semibold"
          >
            <p style={{ marginLeft: "25px" }}>Of which tips</p>
            <p style={{ marginRight: "30px" }}>₹0.00</p>
            <p style={{ marginRight: "25px" }}>₹0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dailysales
