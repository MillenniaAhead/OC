import React from "react"
import Client from "../../assets/images/Newsale/images/Add client.png"
import Basket from "../../assets/images/Newsale/images/basket.png"
import Checklist from "../../assets/images/Newsale/images/checklist.png"
// import { ChevronLeft } from 'react-feather'

const NewsalePage = () => {
  return (
    <div style={{marginTop: '-28px'}} className="d-flex">
      <div style={{marginLeft: '-28px', width: '375px'}} className="py-2 px-2 border d-flex flex-column gap-2">
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
        className="border d-none d-md-block"
        style={{
          width: "890px",
          height: "565px",
          background: "#F8F8FB",
          marginLeft: "-5px"    
        }}
      >
        <div style={{color: 'black', fontWeight: 800}} className="fs-2 py-4 px-5">New sale</div>
        <div style={{ cursor: "default" }} className="px-5">
          <p
            className="border-bottom-dark py-1 fw-bolder"
            style={{width: '11%', marginTop: "-45px", color: 'black'}}
          >
            Quick Sale
          </p>
        </div>

        <div
          style={{ marginLeft: "160px", marginTop: "-50px", cursor: "pointer" }}
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
            marginLeft: "20px",
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
          style={{ cursor: "pointer", width: '120%' }}
          className="border-bottom py-1"
        >
          <div style={{marginBottom: '-10px'}} className="d-sm-block d-md-none  d-flex justify-content-between">
          <p style={{color: '#1BB70B'}}>Add client</p>
          <img width={23} height={23} src={Client} alt="client" />
          </div>
          <div style={{marginBottom: '-15px'}} className="d-none d-md-block d-flex">
          <img style={{marginLeft: '45px'}} width={23} height={23} src={Client} alt="client" />
          <p style={{ marginTop: '-20px', marginLeft: '80px', color: '#1BB70B', fontSize: '17px'}}>Add client</p>
          </div>
        </div>

        <div style={{ marginTop: "180px", color: 'black' }} className="text-center">
          <img width={30} src={Basket} alt="basket" />
          <p style={{ marginTop: "15px" }} className="fw-bolder">
            Your cart is empty
          </p>
          <p style={{ marginTop: "-10px", marginLeft: '9px'  }}>
            Select an appointment, service
          </p>
          <p style={{ marginTop: "-10px", marginLeft: '9px' }}>or item to check out.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsalePage