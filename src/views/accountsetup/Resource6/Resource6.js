import React from "react"
import { useHistory } from 'react-router-dom'

function Resource6() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/choice")
  }

  return (
    <>
      <div className="d-flex justify-content-between border-bottom mb-2">
        <button
          style={{ fontSize: "20px" }}
          type="button"
          className="btn-close"
        ></button>
        <button  onClick={navigateHandler}
          style={{
            backgroundColor: "rgba(78,78,78,1)",
            borderRadius: "3px",
            width: "141px",
            height: "40px",
            color: "white"
          }}
        >
          New Step
        </button>
      </div>

      <div className="d-flex justify-content-center flex-column align-items-center ">
        <h1>About your business</h1>
      </div>

      <div className="container w-50 " style={{border:'1px solid rgba(0,0,0,0.2)'}}>
        <div className="d-flex justify-content-start align-items-center m-1 ">
          <h2>Basic</h2>
        </div>

        <div className="" style={{borderTop:'1px solid rgba(0,0,0,0.2)'}}></div>

        <div className=" mt-1 w-75">
          <div className="d-flex justify-content-between aling-items-center">
            <h5>Location name</h5>
            <p>0/60</p>
          </div>
          <div className="">
            <input
              placeholder="UIUX Designer"
              name="firstNameBasic"
              type="text"
              class="form-control"
              value=""
            />
            <div class="invalid-feedback">
              firstName must be at least 3 characters
            </div>

            <h5 className="mt-2">Location contact number</h5>

            <div className="input-group mt-1 bd-darkgrey">
              <button
                className="btn btn-outline-secondary dropdown-toggle bg-darkgrey"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                +91
              </button>

              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
            <h5 className="mt-2">Location email address</h5>

            <div className="">
              <input
                placeholder="anushak1905@gmail.com"
                type="text"
                className="form-control mb-2"
                aria-label="Text input with dropdown button"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resource6
