import React from "react"
import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Checklist from "../../assets/images/Newsale/images/checklist.png"

const NewsalePage = () => {
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
        <div style={{ cursor: "default" }} className="px-5 fw-semibold">
          <p
            className="py-2"
            style={{ marginTop: "-55px" }}
          >
            Quick Sale
          </p>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-55px", cursor: "pointer" }}
        >
          <a
            href="/checkout"
            className="text-secondary"
          >
            To check out
          </a>
        </div>

        <div
          style={{ marginLeft: "290px", marginTop: "-20px", cursor: "pointer" }}
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
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "800px",
            height: "360px",
            marginLeft: "48px",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={Checklist}
            alt="chk"
          />
          <p style={{ marginTop: "20px" }} className="fw-semibold fs-5">
            No quick sale items set up
          </p>
          <p style={{ marginTop: "-15px" }}>
            {" "}
            <a
              href="/setup"
              style={{
                color: "#037aff",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Set up
            </a>{" "}
            quick sale items{" "}
          </p>
        </div>
      </div>

      <div
        className="border-top"
        style={{ width: "360px", height: "565px" }}
      >
        <div
          style={{ cursor: "pointer" }}
          className="border-bottom py-2 text-center"
        >
          <img width={100} src={Client} alt="client" />
        </div>

        <div style={{ marginTop: "195px" }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p style={{ marginTop: "15px" }} className="fw-semibold">
            Your cart is empty
          </p>
          <p style={{ marginTop: "-15px", marginLeft: '9px'  }}>
            Select an appointment, service
          </p>
          <p style={{ marginTop: "-18px", marginLeft: '9px' }}>or item to check out.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsalePage
