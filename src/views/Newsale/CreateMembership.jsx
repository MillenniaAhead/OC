import React from "react"
import Group from "../../assets/images/Newsale/images/Group 298.png"

const CreateMembership = () => {
  return (
    <div>
      <div
        style={{
          width: "890px",
          height: "560px",
          marginTop: "20px",
          marginLeft: "115px"
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ fontSize: "16px" }} className="px-5 d-flex flex-column">
            <div style={{color: 'black'}}>
              <span style={{ color: "gray" }}>Settings </span>
              <span style={{ color: "gray" }} className="fw-bolder">
                .
              </span>{" "}
              Memberships
            </div>
            <div
              style={{ color: 'black', marginLeft: "-50px" }}
              className="px-4 fs-3 mt-1 fw-bolder"
            >
              Memberships
            </div>
          </div>

          <div className="mt-2" style={{ marginRight: "-215px" }}>
            <a
              href="/createmembership"
              style={{
                width: "210px",
                height: "50px",
                fontSize: "16px",
                paddingTop: "14px",
                background: "#4E4E4E",
                color: "white"
              }}
              className="btn mb-1 rounded-1"
            >
              Create membership
            </a>
          </div>
        </div>

        <div
          className="border rounded-3 d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "1060px",
            height: "380px",
            marginTop: "10px"
          }}
        >
          <img
            style={{ width: "60px", height: "60px", marginTop: "40px" }}
            src={Group}
            alt="group"
          />
          <p style={{ color: 'black', marginTop: "20px" }} className="fw-bolder fs-4">
            Create a membership
          </p>
          <div
            style={{
              color: "black",
              marginTop: "-5px"
            }}
          >
            You have no active memberships.
          </div>

          <div className="mt-2">
            <a
              href="/createmembership"
              style={{ background: "#4E4E4E", color: "white" }}
              className="btn px-2 py-1 fw-semibold rounded-1"
            >
              Create membership
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateMembership
