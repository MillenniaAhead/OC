import React, { useState } from "react"
import Glass from "../../assets/images/Newsale/images/search.png"
import Sales from "../../assets/images/Newsale/images/history.png"

import axios from "axios"

const SalesHistory = () => {

  const [search, setSearch] = useState("")

  const handlesearch = (e) => {
    setSearch(e.target.value)
  }

  const handleHistory = () => {
    console.log({ search })
    axios
      .post("http://localhost:4000/api/saleshistory", {
        search
      })
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div
        style={{ marginTop: "50px", marginLeft: "200px" }}
        className="d-flex justify-content-between"
      >
        <div>
          <p className="fw-bolder" style={{ color: 'black', fontSize: "30px" }}>
            Sales history
          </p>
          <p style={{ color: 'black', marginTop: "-5px" }}>
            View, filter and export the history of your sales.{" "}
            <span style={{ color: "#1BB70B" }}>Learn more</span>
          </p>
        </div>
        <div style={{ marginRight: "100px" }}>
          <button
            style={{ width: "120px", height: "48px", fontSize: "18px" }}
            className="btn border fw-semibold"
          >
            Export
          </button>
        </div>
      </div>

      <div
        style={{
          marginLeft: "200px",
          background: "rgba(242, 242, 247, 0.8)",
          width: "915px"
        }}
        className="row mt-1 py-1 rounded-2"
      >
        <div style={{ width: "470px", marginLeft: "10px" }}>
          <div className="row">
            <div className="input-group col-md-4">
              <span className="input-group-append">
                <button
                  onClick={handleHistory}
                  style={{ background: "white" }}
                  className="btn border border-end-0"
                  type="button"
                >
                  <img width={21} height={21} src={Glass} alt="glass" />
                </button>
              </span>
              <input
                value={search}
                onChange={handlesearch}
                className="form-control border-right-0 border"
                type="search"
                placeholder="Search by Invoice or Client"
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "470px", marginTop: "-45px" }}>
          <button
            style={{ background: "white", width: "120px", height: "45px", color: 'black' }}
            className="btn border rounded-pill fw-bolder"
          >
            Today
          </button>
        </div>
      </div>

      <div
        className="mt-2"
        style={{ width: "915px", height: "300px", marginLeft: "200px" }}
      >
        <div
          style={{ marginTop: "100px" }}
          className="d-flex justify-content-center"
        >
          <img style={{ width: "50px" }} src={Sales} alt="img" />
          <p></p>
        </div>
        <div
          className="fw-bolder"
          style={{ fontSize: "24px", marginLeft: "360px", color: 'black' }}
        >
          No results found
        </div>
        <div style={{marginLeft: '330px', color: 'black'}}>Try using different filter options to find</div>
        <p style={{marginLeft: '380px', color: 'black'}}>what you’re looking for</p>
      </div>
    </div>
  )
}

export default SalesHistory
