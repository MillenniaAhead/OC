import React from "react"
import X from "../../assets/images/Newsale/images/x.png"
import File from "../../assets/images/Newsale/images/file-text.png"
import Cloud from "../../assets/images/Newsale/images/cloud-rain.png"
import { Link } from "react-router-dom"

const ImportProduct = () => {
  return (
    <div>
      <div style={{marginTop: '-30px'}} className="d-flex justify-content-between px-5 py-2 border-bottom border-1">
        <Link to="/productlist">
          <img width={30} height={30} className="mt-2" src={X} alt="x" />
        </Link>

        <button
          style={{ background: "#4E4E4E", color: "white" }}
          className="px-3 btn"
        >
          Next step
        </button>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div
          style={{ width: "260px", backgroundColor: "#1BB70B" }}
          className="progress-bar"
        ></div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center py-2">
        <div>
          <p style={{color: 'black'}}>Import products</p>
        </div>
        <div style={{ marginTop: "-5px" }}>
          <p style={{ fontSize: "28px", marginTop: '5px', color: 'black', fontWeight: 'bold'}}>Upload file</p>
        </div>
        <div style={{ marginTop: "5px", color: 'black' }}>
          <p>
            Upload a CSV file with your product data, or download and fill the
            template below. <span style={{ color: "#1BB70B" }}>Learn more</span>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="border d-flex justify-content-center rounded-3"
          style={{ width: "600px", height: "480px", marginTop: "-15px" }}
        >
          <div
            style={{ width: "550px", height: "215px", background: "#F8F8FB"  }}
            className="rounded-3"
          >
            <div className="d-flex justify-content-center py-4">
              <img
                style={{ background: "white", marginTop: '-25px' }}
                className="rounded-circle px-1 py-1"
                src={File}
                alt="file"
              />
            </div>
            <div
              style={{ fontSize: "15px", marginTop: '-25px', color: 'black' }}
              className="d-flex justify-content-center"
            >
              For the best quality upload, input your data into the template
              below,
            </div>
            <div
              style={{ color: 'black' }}
              className="d-flex justify-content-center"
            >
              then upload the file to import.
            </div>
            <div className="d-flex justify-content-center">
              <button
                style={{ background: "white", color: 'black' }}
                className="btn mt-1 py-1 px-2 border fw-bolder"
              >
                Download template
              </button>
            </div>

            <div
              className="rounded-3"
              style={{
                marginTop: "30px",
                width: "550px",
                height: "215px",
                background: "rgba(27, 183, 11, 0.24)"
              }}
            >
              <div className="d-flex justify-content-center">
                <img style={{ marginTop: "80px" }} src={Cloud} alt="cloud" />
              </div>
              <div
                style={{ color: "#1BB70B" }}
                className="d-flex justify-content-center"
              >
                Upload CSV file
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportProduct
