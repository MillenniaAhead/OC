import { React, useState } from "react"
import SelectBrand from "./selectBrand"
import axios from "axios"

function NewProduct() {
  const [formData, setFormData] = useState({})

  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:7000/api/newProduct", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="container">
          <div className="d-flex justify-content-end"><button type="button" className="btn btn-outline-dark me-2" onClick={postData}>Save</button></div>
          <h2 className="justify-content-center">Add New Product </h2>
          <div className="mb-2 ">

            <div className="form-control w-50 h-50 " >
              <h4 className="d-flex justify-content-start mb-2">Basic Info</h4>
              <div className="mb-1 border-top">
                <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start mt-1">Product Name</label>
                <input onChange={formDataFun} type="text" name="product_name" className="form-control" id="formGroupExampleInput" />
              </div>
              <div className="mb-2">
                <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start">Product barcode (Optional)</label>
                <input onChange={formDataFun} type="text" name="product_barcode" className="form-control mb-2" id="formGroupExampleInput2" placeholder="UPC,EAN,GTIN" />
                <label htmlFor="exampleFormControlInput1" className="form-label d-flex justify-content-start">Product Brand</label>
                <div ><SelectBrand /></div>

                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label d-flex justify-content-start ">Measure</label>
                  <select id="inputState" className="form-select mb-1">
                    <option select="true">Milliliters(ml)</option>
                  </select>

                  <div className="col-auto mb-1">
                    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Amount</label>
                    <div className="input-group">
                      <div className="input-group-text">ml</div>
                      <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="0.00" />
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Short discription</label>
                  <textarea className="form-control" name="short_description" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Product discription</label>
                  <textarea onChange={formDataFun} className="form-control" name="product_description" id="exampleFormControlTextarea1" rows="4"></textarea>

                  <label htmlFor="exampleFormControlInput1" className="form-label d-flex justify-content-start">Product Category</label>
                  <div className="nav-item"><a className="navbar-brand active d-flex justify-content-start" href="www.goggle.com">Select a category</a></div>
                </div>
              </div>
            </div>

          </div>
        </form>
        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <h4 className="d-flex justify-content-start">Pricing</h4>

              <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingInputGroup">Supply price</label>
                <div className="input-group mb-2">
                  <label className="btn btn-outline-secondary" type="button" id="button-addon1">INR</label>
                  <input type="text" className="form-control" placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <p className="d-flex justify-content-start">Retail sales</p>
                <p className="d-flex justify-content-start">Allow sales of this product at checkout.</p>

                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start" htmlFor="flexSwitchCheckDefault">Enable retail sales</label>
                </div>

                <div className="input-group mb-2 ">
                  <div>
                    <p>Retail price</p>
                    <input type="text" className="form-control " placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                  <div>
                    <p>Special price </p>
                    <input type="text" className="form-control m-1" placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                
                  <div>
                    <p>Markup </p>
                    <input type="text" className="form-control " placeholder="0.00" aria-label="Example" aria-describedby="button-addon1" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Tax</label>
                  <textarea name="tax" className="form-control" placeholder="Default: No tax" id="exampleFormControlTextarea1" rows="2" ></textarea>
                </div>

                <div className="border-top d-flex justify-content-start">
                  <p>Team Member Commission</p>
                </div>
                <div className="d-flex justify-content-start">
                  <label>Calculate team member commission when the product is sold.</label>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start" htmlFor="flexSwitchCheckDefault">Enable team member commission</label>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>

      <form className="container">
        <div className="mb-2">
          <div className="form-control w-50 h-50 ">
            <h4 className="d-flex justify-content-start mt-2">Inventory</h4>
            <p className="d-flex justify-content-start border-bottom m-1">Manage stock levels of this product through Outlet Control.</p>

            <div className="mb-2">
              <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start mt-2">SKU(Stock keeping Unit)</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <div className="nav-item"><a className="navbar-brand active d-flex justify-content-start " href="www.goggle.com">Generate SKU automatically</a></div>
            <div className="nav-item"><a className="navbar-brand active d-flex justify-content-start mt-1 border-bottom" href="www.goggle.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-1 " viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>Add another SKU code</a></div>
            <p className="d-flex justify-content-start mt-1">Supplier</p>
            <div className="nav-item"><a className="navbar-brand active d-flex justify-content-start border-bottom  mb-1" href="www.goggle.com">Select a Supplier</a></div>

            <div className="d-flex justify-content-start mb-1">
              <label>Stock quantity</label>
            </div>
            <div className="form-check form-switch mb-2">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label d-flex justify-content-start" htmlFor="flexSwitchCheckDefault">Track stock quantity</label>
            </div>

            <div className="mb-2">
              <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start border-bottom">Current stock quantity</label>
              <textarea name="current_stock" className="form-control border-bottom " onChange={formDataFun} id="exampleFormControlTextarea1" rows="2" placeholder="0"></textarea>
            </div>

            <div className="mb-2 border-top">
              <p className="d-flex justify-content-start mt-2">Low stock and reordering</p>
              <p className="d-flex justify-content-start">Outlet Control will automatically notify you and pre-fill the recorder quantity set for
                future stock orders.<span className="nav-item"><a className="navbar-brand m-3 active" href="www.goggle.com">Learn more</a></span></p>
            </div>

            <div className="input-group mb-1">
              <span>
                <p className="d-flex justify-content-start ms-1"><b>Lock Stock level</b></p>
                <input type="text" className="form-control mt-1 me-1" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <p className="mt-1">The level to get notified to Reorder</p>
              </span>
              <span>
                <p className="d-flex justify-content-start ms-1"><b>Reorder quantity</b></p>
                <input type="text" className="form-control mt-1 ms-1" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <p className="mt-1 ms-1">The default amount to order</p>
              </span>
            </div>

            <div className="form-check form-switch mb-2">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label d-flex justify-content-start" htmlFor="flexSwitchCheckDefault">Receive low stock notifications.</label>
            </div>

          </div>
        </div>
      </form>

    </div>
  )
}

export default NewProduct
