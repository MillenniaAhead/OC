import React, { useState } from "react"
import X from "../../assets/images/Newsale/images/x.png"
import Camera from "../../assets/images/Newsale/images/camera.png"
import Plus from "../../assets/images/Newsale/images/plus-circle.png"
import { Link } from "react-router-dom"

import axios from "axios"

const NewProduct = () => {
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [ammount, setAmmount] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [supplyPrice, setSupplyPrice] = useState("")
  const [retailPrice, setRetailPrice] = useState("")
  const [specialPrice, setSpecialPrice] = useState("")
  const [markup, setMarkup] = useState("")
  const [sku, setSku] = useState("")
  const [stockQuantity, setStockQuantity] = useState("")
  const [lowstocklevel, setLowStockLevel] = useState("")
  const [reorderQuantity, setReorderQuantity] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleCode = (e) => {
    setCode(e.target.value)
  }

  const handleAmmount = (e) => {
    setAmmount(e.target.value)
  }

  const handleshortDescription = (e) => {
    setShortDescription(e.target.value)
  }

  const handleproductDescription = (e) => {
    setProductDescription(e.target.value)
  }

  const handleSupplyPrice = (e) => {
    setSupplyPrice(e.target.value)
  }

  const handleretailPrice = (e) => {
    setRetailPrice(e.target.value)
  }

  const handlespecialPrice = (e) => {
    setSpecialPrice(e.target.value)
  }

  const handlemarkup = (e) => {
    setMarkup(e.target.value)
  }

  const handleSku = (e) => {
    setSku(e.target.value)
  }

  const handleStockQuantity = (e) => {
    setStockQuantity(e.target.value)
  }

  const handleLowStockLevel = (e) => {
    setLowStockLevel(e.target.value)
  }

  const handleReorderQuantity = (e) => {
    setReorderQuantity(e.target.value)
  }

  const handleApi = () => {
    console.log({
      name,
      code,
      ammount,
      shortDescription,
      productDescription,
      supplyPrice,
      retailPrice,
      specialPrice,
      markup,
      sku,
      stockQuantity,
      lowstocklevel,
      reorderQuantity
    })
    axios
      .get("https://reqres.in/api/newproduct", {
        name,
        code,
        ammount,
        shortDescription,
        productDescription,
        supplyPrice,
        retailPrice,
        specialPrice,
        markup,
        sku,
        stockQuantity,
        lowstocklevel,
        reorderQuantity
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
      <div className="d-flex justify-content-between px-5 d-none d-lg-block">
        <Link to="/productlist">
          <img width={30} height={30} className="mt-2" src={X} alt="x" />
        </Link>

        <button
          onClick={handleApi}
          style={{marginLeft: '850px', background: "#4E4E4E", color: "white" }}
          className="px-5 fs-5 btn rounded-1 fw-semibold"
        >
          Save
        </button>
      </div>
      <div
        style={{ color: "black" }}
        className="d-flex justify-content-center fs-2 fw-bolder"
      >
        Add new product
      </div>

      <div className="d-flex justify-content-center py-3">
        <div
          style={{ width: "630px", height: "760px", marginLeft: "-10px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 py-2 fs-4 fw-bolder border-bottom"
          >
            Basic Info
          </div>

          <div className="px-2 mt-2">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Product name
            </label>
            <input
              value={name}
              onChange={handleName}
              style={{ width: "575px", height: "45px" }}
              type="text"
              className="form-control rounded-1"
            />
          </div>

          <div className="px-2 mt-2">
            <label
              style={{ color: "black", fontSize: "13px" }}
              className="form-label fw-semibold"
            >
              Product barcode{" "}
              <span style={{ color: "gray", fontWeight: "normal" }}>
                (Optional)
              </span>{" "}
            </label>
            <input
              value={code}
              onChange={handleCode}
              style={{ width: "575px", height: "45px" }}
              type="text"
              className="form-control rounded-1"
              placeholder="UPC, EAN, GTIN"
            />
          </div>
          <div className="px-2 mt-2 fw-semibold">Product brand</div>
          <div
            style={{ color: "#1BB70B", fontSize: "17px" }}
            className="px-2 mt-1"
          >
            Select a brand
          </div>

          <div className="d-flex">
            <div className="d-flex flex-column px-2 mt-2">
              <label
                style={{ color: "black" }}
                className="form-label fw-semibold"
              >
                Measure
              </label>
              <div className="btn-group dropdown border">
                <button
                  style={{
                    background: "white",
                    color: "black",
                    width: "230px",
                    textAlign: "start"
                  }}
                  type="button"
                  className="btn"
                >
                  Milliliters (ml)
                </button>
                <button
                  style={{ background: "white" }}
                  type="button"
                  className="btn dropdown-toggle dropdown-toggle-split border-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
              </div>
            </div>
            <div className="mt-2">
              <label
                style={{ color: "black" }}
                className="form-label fw-semibold"
              >
                Amount
              </label>
              <div className="input-group">
                <span
                  style={{ background: "white", width: "20%", color: "gray" }}
                  className="input-group-text col-3 px-2"
                >
                  ml
                </span>
                <input
                  value={ammount}
                  onChange={handleAmmount}
                  type="number"
                  className="form-control px-2"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          <div className="px-2 mt-2">
            <p style={{ color: "black" }} className="fw-semibold">
              Short description
            </p>
            <input
              value={shortDescription}
              onChange={handleshortDescription}
              style={{ width: "578px", marginTop: "-10px" }}
              type="text"
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="px-2 mt-2">
            <p style={{ color: "black" }} className="fw-semibold">
              Product description
            </p>
            <input
              value={productDescription}
              onChange={handleproductDescription}
              style={{ width: "578px", height: "90px", marginTop: "-10px" }}
              type="text"
              className="border px-3 rounded"
            />
          </div>

          <div style={{ color: "black" }} className="px-2 mt-2 fw-semibold">
            Product category
          </div>
          <div
            style={{ color: "#1BB70B", fontSize: "16px" }}
            className="px-2 mt-1"
          >
            Select a category
          </div>
        </div>

        <div
          style={{ width: "323px", height: "415px", marginLeft: "25px" }}
          className="border rounded-3"
        >
          <div
            style={{ color: "black" }}
            className="px-2 py-1 fs-4 fw-bolder border-bottom"
          >
            Product photos
            <p
              style={{ fontSize: "15px", marginBottom: "-2px" }}
              className="fw-normal"
            >
              Drag and drop a photo to change the order.
            </p>
          </div>
          <div
            className="mt-2 rounded"
            style={{
              width: "272px",
              height: "272px",
              background: "rgba(27, 183, 11, 0.24)",
              marginLeft: "25px"
            }}
          >
            <div className="d-flex justify-content-center">
              <img style={{ marginTop: "120px" }} src={Camera} alt="camera" />
            </div>
            <div className="d-flex justify-content-center">
              <p style={{ color: "#1BB70B" }}>Add a photo</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "-15px" }}
        className="d-flex justify-content-center"
      >
        <div
          className="border rounded-3"
          style={{ width: "630px", height: "640px", marginLeft: "-355px" }}
        >
          <div
            style={{ color: "black" }}
            className="px-2 py-2 fs-4 fw-bolder border-bottom"
          >
            Pricing
          </div>
          <div style={{ width: "630px" }} className="mt-1">
            <label
              style={{ color: "black", fontSize: "14px" }}
              className="form-label fw-semibold px-2"
            >
              Supply price
            </label>
            <div
              style={{ marginTop: "-10px" }}
              className="input-group px-2 border-bottom py-2"
            >
              <span
                style={{ background: "white", width: "9%", color: "gray" }}
                className="input-group-text col-3 px-1 py-1 rounded-1"
              >
                INR
              </span>
              <input
                value={supplyPrice}
                onChange={handleSupplyPrice}
                type="text"
                className="form-control rounded-1"
                placeholder="0.00"
              />
            </div>
          </div>

          <div style={{ width: "630px" }} className="mt-2">
            <label
              style={{ color: "black", fontSize: "15px" }}
              className="form-label fw-semibold px-2"
            >
              Retail sales
            </label>
            <p style={{ marginTop: "5px", color: "black" }} className="px-2">
              Allow sales of this product at checkout.
            </p>
            <div
              style={{ marginLeft: "25px", marginTop: "-40px" }}
              className="form-check form-switch py-3"
            >
              <input
                style={{
                  width: "40px",
                  height: "20px",
                  backgroundColor: "#1BB70B"
                }}
                className="form-check-input"
                type="checkbox"
                defaultChecked={true}
              />
              <label style={{ color: "black" }} className="form-check-label">
                Enable retail sales
              </label>
            </div>

            <div className="d-flex">
              <div className="d-flex flex-column px-2">
                <label
                  style={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "-15px"
                  }}
                  className="form-label fw-semibold"
                >
                  Retail price
                </label>
                <div style={{ width: "182px" }} className="input-group">
                  <span
                    style={{
                      background: "white",
                      width: "24%",
                      height: "48px",
                      color: "gray"
                    }}
                    className="input-group-text col-3"
                  >
                    INR
                  </span>
                  <input
                    value={retailPrice}
                    onChange={handleretailPrice}
                    type="number"
                    className="form-control px-1"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div style={{ marginTop: "-15px" }}>
                <label
                  style={{
                    marginLeft: "-10px",
                    fontSize: "14px",
                    color: "black"
                  }}
                  className="form-label fw-semibold"
                >
                  Special price
                </label>
                <div
                  style={{ width: "182px", marginLeft: "-10px" }}
                  className="input-group"
                >
                  <span
                    style={{
                      background: "white",
                      width: "24%",
                      height: "48px",
                      color: "gray"
                    }}
                    className="input-group-text col-3"
                  >
                    INR
                  </span>
                  <input
                    value={specialPrice}
                    onChange={handlespecialPrice}
                    type="number"
                    className="form-control px-1"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div style={{ marginTop: "-15px" }}>
                <label
                  style={{ color: "black", fontSize: "14px" }}
                  className="form-label fw-semibold px-1"
                >
                  Markup
                </label>
                <div
                  style={{ width: "182px", marginLeft: "15px" }}
                  className="input-group"
                >
                  <span
                    style={{
                      background: "white",
                      width: "24%",
                      height: "48px",
                      color: "gray"
                    }}
                    className="input-group-text col-3"
                  >
                    %
                  </span>
                  <input
                    value={markup}
                    onChange={handlemarkup}
                    type="number"
                    className="form-control px-1"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column px-2 py-2 border-bottom">
              <label
                style={{ color: "black", fontSize: "14px" }}
                className="form-label fw-semibold"
              >
                Tax
              </label>
              <div
                style={{ marginTop: "-2px" }}
                className="btn-group dropdown border"
              >
                <button
                  style={{
                    background: "white",
                    width: "520px",
                    textAlign: "start"
                  }}
                  type="button"
                  className="btn"
                >
                  Default: No tax
                </button>
                <button
                  style={{ background: "white" }}
                  type="button"
                  className="btn dropdown-toggle dropdown-toggle-split border-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
              </div>
            </div>

            <div style={{ width: "630px" }} className="mt-2">
              <label
                style={{ color: "black", fontSize: "14px" }}
                className="form-label fw-bolder px-2"
              >
                Team member commission
              </label>
              <p style={{ marginTop: "-2px", color: "black" }} className="px-2">
                Calculate team member commission when the product is sold.
              </p>
              <div
                style={{ marginLeft: "25px", marginTop: "-40px" }}
                className="form-check form-switch py-4"
              >
                <input
                  style={{
                    width: "40px",
                    height: "20px",
                    backgroundColor: "#1BB70B"
                  }}
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={true}
                />
                <label style={{ color: "black" }} className="form-check-label">
                  Enable team member commission
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "20px" }}
        className="d-flex justify-content-center"
      >
        <div
          className="border rounded-3 mb-5"
          style={{ width: "630px", height: "880px", marginLeft: "-355px" }}
        >
          <div
            style={{ color: "black", fontSize: "14px" }}
            className="px-2 mt-2 fs-4 fw-bolder border-bottom"
          >
            Inventory
            <p style={{ fontSize: "15px" }} className="fw-normal">
              Manage stock levels of this product through Outlet Control.
            </p>
          </div>
          <div className="px-2 mt-1">
            <p style={{ color: "black" }} className="fw-semibold">
              SKU{" "}
              <span style={{ color: "gray", fontWeight: "normal" }}>
                (Stock Keeping Unit)
              </span>{" "}
            </p>
            <input
              value={sku}
              onChange={handleSku}
              style={{ width: "578px", marginTop: "-10px" }}
              type="text"
              className="border px-3 py-1 rounded-1"
            />
          </div>

          <div className="px-2 py-2">
            <p style={{ fontSize: "18px", color: "#1BB70B" }}>
              Generate SKU automatically
            </p>
          </div>
          <div
            style={{ marginTop: "-8px" }}
            className="d-flex px-2 border-bottom"
          >
            <img
              style={{ width: "23px", height: "23px" }}
              src={Plus}
              alt="plus"
            />
            <p
              style={{ color: "#1BB70B", fontSize: "16px" }}
              className="px-2 mb-2"
            >
              Add another SKU code
            </p>
          </div>

          <div
            style={{ color: "black", fontSize: "14px" }}
            className="px-2 mt-2 fw-bold border-bottom"
          >
            Supplier
            <p
              style={{ color: "#1BB70B", fontSize: "18px" }}
              className="mt-1 fw-normal mb-2"
            >
              Select a supplier
            </p>
          </div>

          <div style={{ width: "630px" }} className="mt-2">
            <label
              style={{ color: "black", fontSize: "14px" }}
              className="form-label fw-bold px-2"
            >
              Stock quantity
            </label>
            <div
              style={{ marginLeft: "25px", marginTop: "-30px" }}
              className="form-check form-switch py-3"
            >
              <input
                style={{
                  width: "40px",
                  height: "20px",
                  backgroundColor: "#1BB70B"
                }}
                className="form-check-input"
                type="checkbox"
                defaultChecked={true}
              />
              <label style={{ color: "black" }} className="form-check-label">
                Track stock quantity
              </label>
              <div
                style={{ marginLeft: "-65px" }}
                className="px-1 py-2 border-bottom"
              >
                <label
                  style={{ color: "black", fontSize: "14px" }}
                  className="form-label fw-bold"
                >
                  Current stock quantity
                </label>
                <input
                  value={stockQuantity}
                  onChange={handleStockQuantity}
                  style={{ width: "585px", height: "45px", marginTop: "5px" }}
                  type="text"
                  className="form-control rounded-1"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "-10px" }} className="px-2">
            <p
              style={{ color: "black", fontSize: "14px" }}
              className="fw-bolder"
            >
              {" "}
              Low stock and reordering
            </p>
            <p style={{ color: "black", marginTop: "-15px", fontSize: "15px" }}>
              Outlet Control will automatically notify you and pre-fill the
              recorder quantity set for future stock orders.{" "}
              <span style={{ color: "#1BB70B" }}>Learn more</span>
            </p>
          </div>

          <div style={{ marginTop: "-20px" }} className="d-flex">
            <div
              style={{ width: "320px" }}
              className="d-flex flex-column px-2 mt-2"
            >
              <label
                style={{ color: "black", fontSize: "14px" }}
                className="form-label fw-semibold"
              >
                Low stock level
              </label>
              <input
                value={lowstocklevel}
                onChange={handleLowStockLevel}
                type="text"
                className="form-control px-1 py-1 rounded-1"
                placeholder="0"
              />
              <p
                className="py-1"
                style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}
              >
                The level to get notified to reorder
              </p>
            </div>
            <div
              style={{ width: "300px", marginLeft: "-10px" }}
              className="mt-2"
            >
              <label
                style={{ color: "black", fontSize: "14px" }}
                className="form-label fw-semibold"
              >
                Reorder quantity
              </label>
              <input
                value={reorderQuantity}
                onChange={handleReorderQuantity}
                type="text"
                className="form-control px-1 py-1 rounded-1"
                placeholder="0"
              />
              <p
                className="py-1"
                style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}
              >
                The default amount to order
              </p>
            </div>
          </div>
          <div
            style={{ marginLeft: "25px", marginTop: "-20px" }}
            className="form-check form-switch py-2"
          >
            <input
              style={{
                width: "40px",
                height: "20px",
                backgroundColor: "#1BB70B"
              }}
              className="form-check-input"
              type="checkbox"
            />
            <label style={{ color: "black" }} className="form-check-label">
              Receive low stock notifications.
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
