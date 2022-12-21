import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
          <AiOutlineClose className="mt-3" size={28} />
          <a
            href="/size"
            style={{
              marginTop: "23px",
              marginBottom: "10px",
              marginLeft: "30px",
              textDecoration: "none",
              color: ["#1E49E2"],
              fontWeight: 400,
              fontSize: "22px",
            }}
          >
            Previous
          </a>
        </div>

        <a
          href="/software"
          type="button"
          className="px-5 py-2 btn btn-secondary"
        >
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "54%" }} className="progress-bar"></div>
      </div>

      <p
        style={{ fontWeight: 500, cursor: "default" }}
        className="text-center mt-3"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-12px" }}
        className="text-center fs-3"
      >
        Set your location
      </p>
      <p
        style={{
          fontWeight: 500,
          cursor: "default",
          marginTop: "-12px",
          fontSize: "17px",
        }}
        className="text-center"
      >
        Add your business location so your clients can easily find you.
      </p>
      <div
        style={{ width: "780px", height: "230px" }}
        className="card container align-items-center justify-content-center mt-5"
      >
        <p
          style={{
            marginRight: "560px",
            marginTop: "-10px",
            marginBottom: "25px",
            fontWeight: 500,
            fontSize: "22px",
            cursor: "default",
          }}
        >
          Business location
        </p>
        <hr style={{ width: "103.5%", marginTop: "-15px" }} />
        <p
          style={{
            marginTop: "20px",
            marginRight: "490px",
            fontWeight: 500,
            fontSize: "16px",
            cursor: "default",
          }}
        >
          Where’s your business located?
        </p>
        {/* <form
          style={{ maxWidth: "400px", marginRight: "520px", marginTop: "-8px" }}
        >
          <div style={{ width: "100%", marginBottom: "10px" }}>
            <FontAwesomeIcon
              style={{
                marginLeft: "4px",
                position: "absolute",
                padding: "10px",
              }}
              icon={faLocationDot}
            />
            <div
              style={{
                marginLeft: "38px",
                position: "absolute",
                height: "34px",
                width: "2px",
              }}
              className="vr"
            ></div>
            <input
              className="rounded-1 border-0"
              style={{
                width: "255%",
                padding: "5px",
                textAlign: "start",
                backgroundColor: ["#F5F5F5"],
              }}
              type="text"
            />
          </div>
        </form> */}
        <div
          style={{ width: "550px", marginRight: "160px" }}
          class="input-group mb-3"
        >
          <span style={{ background: "white" }} class="input-group-text">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <input
            style={{ backgroundColor: "#F5F5F5" }}
            type="text"
            class="form-control"
          />
        </div>
        <div
          style={{ fontWeight: 500, marginRight: "190px", marginTop: "-5px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label px-2" htmlFor="flexCheckDefault">
            I don’t have a business address ( mobile and online services only)
          </label>
        </div>
      </div>
    </div>
  );
};

export default Location;
