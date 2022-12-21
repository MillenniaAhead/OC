import React from "react"
import Image from "../../assets/images/pages/image-1.png"
import Logo from "../../assets/images/pages/logo.png"
import Arrow from "../../assets/images/pages/arrow-left.png"

const OTP = () => {
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
          <a
            href="/verify"
            style={{
              marginRight: "476px"
            }}
          >
            <img style={{ width: "40px", height: "40px" }} src={Arrow} alt="arrow" />
          </a>

          <img
            style={{ marginLeft: "100px" }}
            width={70}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{ marginTop:'-25px', color: ["#4E4E4E"], cursor: "default" }}
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
              fontSize: "22px",
              color: 'black',
              marginTop: "-30px",
              cursor: "default",
              marginLeft: "120px"
            }}
          >
            Enter the 4-digit code
          </p>
          <h6
            style={{
              fontSize: "17px",
              color: 'black',
              cursor: "default",
              marginLeft: "100px",
              marginTop: "-5px"
            }}
          >
            The 4-digit code has been sent to +91 8019403208.
          </h6>

          <div className="d-flex justify-content-center align-items-center container">
            <div
              style={{ marginTop: '-5px', padding: "20px", marginLeft: "100px", fontSize: "24px" }}
              className="d-flex flex-row"
            >
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center"
                }}
                type="text"
                className="border border-primary rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center"
                }}
                type="text"
                className="border rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center"
                }}
                type="text"
                className="border rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center"
                }}
                type="text"
                className="border rounded"
              />
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              marginLeft: "90px",
              color: "gray",
              cursor: "default"
            }}
          >
            You can resend code in 10 seconds
          </p>
        </div>
      </div>
    </section>
  )
}

export default OTP
