import React from "react"
import { Link } from "react-router-dom"
import Image from "../../assets/images/pages/image-1.png"
import Logo from "../../assets/images/pages/logo.png"

const Verify = () => {
  return (
    <section className="vh-100 py-4">
      <div className="container d-flex">
        <img
          src={Image}
          style={{
            marginTop: "-55px",
            marginLeft: "-120px",
            width: "660px",
            height: "635px",
            objectFit: "cover",
            objectPosition: "left"
          }}
          alt="img"
        />

        <div
          style={{ marginTop: "20px", paddingTop: "-30px" }}
          className="col-sm-6 text-center"
        >
          <img
            style={{ marginLeft: "100px" }}
            width={70}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{marginTop:'-25px',  color: ["#4E4E4E"], cursor: "default" }}
            className="py-3 fw-bold fs-3"
          >
            <span
              className="fs-3"
              style={{ color: ["#1BB70B"], marginLeft: "120px" }}
            >
              OUTLET
            </span>
            CONTROL
          </h4>
          <p
            style={{
              fontWeight: "bold",
              color: 'black',
              fontSize: "22px",
              marginTop: "-10px",
              cursor: "default",
              marginLeft: "120px"
            }}
           
          >
            Verify your mobile number
          </p>
          <h6
            style={{
              fontSize: "15px",
              color: 'black',
              cursor: "default",
              marginLeft: "100px",
              marginTop: "5px"
            }}
          >
            To protect your account, we’ll send a text message with a <br />{" "}
            4-digit code to the mobile number below.
          </h6>
          <div className="form-group">
            <p
              style={{
                cursor: "default",
                fontSize: "16px",
                color: 'black',
                marginTop: "20px",
                marginLeft: "-230px",
                fontWeight: 600
              }}
            >
              Mobile number
            </p>
            <div style={{marginLeft: '120px', height: '40px', width: '460px', marginTop: '-10px' }} className="input-group mb-3">
           <span className="input-group-text" id="basic-addon1">+91 </span>
            <input type="text" className="form-control" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <Link to='/otp'>
           <button
                style={{
                  marginBottom: "20px",
                  width: "460px",
                  marginTop: "-15px",
                  marginLeft: "112px",
                  backgroundColor: ["#4E4E4E"],
                  color: "white"
                }}
                className="btn"
                type="button"
              >
                Send code
              </button>
           </Link>
            </div>
          </div>
        </div>
   
    </section>
  )
}

export default Verify
