import React from "react"
import List from "../../assets/images/Newsale/images/list.png"
import Vector from "../../assets/images/Newsale/images/Vector.png"

const ProductList = () => {
  return (
    <div>
      <div
        style={{
          width: "890px",
          height: "680px",
          marginTop: "30px",
          marginLeft: "115px"
        }}
      >
        <div className="d-flex justify-content-between">
          <div  style={{color: 'black'}} className="fs-2 px-5 fw-bolder">Product list</div>
          <div className="d-flex">
            <button
              style={{ marginRight: "18px" }}
              className="btn border px-1 py-1 fw-semibold"
            >
              Options
              <img className="px-1" src={Vector} alt="arrow" />
            </button>
            <a
              href="/new"
              style={{
                marginRight: "-180px",
                background: "#4E4E4E",
                color: "white"
              }}
              className="btn px-1 py-1 fw-semibold"
            >
              Add new product
            </a>
          </div>
        </div>

        <div style={{marginTop: '-15px', color: 'black'}} className="px-5">
          Add and manage your products in stock.{" "}
          <span style={{ color: "#1BB70B"}}>Learn more</span>{" "}
        </div>

        <div
          className="border rounded-3 d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "1025px",
            height: "450px",
            marginLeft: "48px",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "90px", height: "80px", marginBottom: "-15px" }}
            src={List}
            alt="list"
          />
          <p style={{ marginTop: "35px", color: 'black' }} className="fw-bolder fs-4">
            No products yet.
          </p>
          <div
            style={{
              color: "black",
              marginTop: "-5px"
            }}
          >
            Your products will appear here. Import <br /> products in minutes
            and start selling them <br />{" "}
            <span className="px-5">online and at your location.</span>
          </div>

          <div className="mt-2">
            <a
              href="/import"
              style={{ background: "#4E4E4E", color: "white" }}
              className="btn py-1 rounded-1"
            >
              Import products
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
