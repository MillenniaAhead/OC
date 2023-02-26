import { React, useState } from "react"
import AdvancedPricing from "./advancedPricing"
import axios from "axios"
import Avatar from '@components/avatar'

function SingleService() {
  const [formData, setFormData] = useState({})

  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:7000/api/singleService", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="container">
          <div className="d-flex justify-content-end"><button type="button" className="btn btn-secondary" onClick={postData}>Save</button></div>
          <h2 className="justify-content-center mb-1">Add a new single service</h2>
          <div className="mb-2 ">

            <div className="form-control w-50 h-50 " >
              <h4 className="d-flex justify-content-start mt-2 ">Basic Info</h4>
              <p className="d-flex justify-content-start  ">Add a service name and choose the treatment type.</p>
              <div className="mb-1 border-top">
                <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start mt-1 fw-bold">Service name </label>
                <input onChange={formDataFun} type="text" name="service_name" className="form-control" id="formGroupExampleInput" />
              </div>

              <div className="fw-normal">
                <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-bold">Treatment type </label>
                <input onChange={formDataFun} type="text" name="treatment_type" className="form-control" id="formGroupExampleInput" placeholder="Select Treatment Type " />
              </div>
              <div className="mb-2">
                <div className="d-flex justify-content-start">Choose the most relevant treatment type. This won’t be visible to your clients. </div>
              </div>

              <div className="mb-2">
                <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-bold">Service category</label>
                <div id="pricing2" className="d-flex justify-content-start ">No service category selected
                  <span id="green" className="d-flex justify-content-end ms-5" >Edit</span></div>
              </div>

              <div className="mb-1">
                <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start fw-bold">Service description </label>
                <label className="d-flex justify-content-end me-2">0/1000 </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
              </div>

              <div className="mb-1">
                <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Aftercare description </label>
                <label className="d-flex justify-content-end me-2">0/1000 </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
              </div>

              <div className="mb-1">
                <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Service available for </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Everyone" rows="1"></textarea>
              </div>
            </div>
          </div>
        </form>
        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <div className="col-auto">
                <h4 className="d-flex justify-content-start mt-2 ">Online booking</h4>
                <p className="d-flex justify-content-start">Enable online bookings, choose who the service is available for and add a short description.</p>
                <div className="mb-2 border-top">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label d-flex justify-content-start m-2" htmlFor="flexSwitchCheckDefault">Enable online bookings</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <h4 className="d-flex justify-content-start mt-2">Team</h4>
              <p className="d-flex justify-content-start mt-2 border-bottom ">Assign team members to the service and manage commmission</p>

              <div className="d-flex justify-content-start mb-1">
              <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label me-1" htmlFor="inlineCheckbox1">Select All</label>
                  <Avatar color='light-secondary' content='2' /></div>
              </div>

              <div className="d-flex justify-content-start ">
              <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1"><div className="btn-group" role="group" aria-label="Third group">
                    <Avatar color='success' content='Kondeti Anusha' initials />
                    <p className="ms-1">Kondeti Anusha</p>
                  </div></label>
                </div>

                <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1"><div className="btn-group" role="group" aria-label="Third group">
                    <Avatar color='success' content='Wendy Smith' initials />
                    <p className="ms-1">Wendy Smith</p>
                  </div></label>
                </div>
              </div>

              <div className="mt-2 border-top">
                <h4 className="d-flex justify-content-start mt-2">Team member commission</h4>
                <p className="d-flex justify-content-start  border-bottom fw-light">Calculate team member commission when the service is sold.</p>
                <div className="form-check form-switch mt-2">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start mt-2 mb-2 fw-light" htmlFor="flexSwitchCheckDefault">Enable team member commission</label>
                </div>
              </div>
            </div>
          </div>
        </form>

        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <h4 className="d-flex justify-content-start mt-2">Pricing and Duration</h4>
              <p className="d-flex justify-content-start mt-2 border-bottom">Add the pricing options and duration of the service.</p>
              <div className="container" >
                <h5 className="d-flex justify-content-start mt-2" >Pricing Team1</h5>

                <div className="d-flex justify-content-start">
                  <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Duration</label>
                    <input onChange={formDataFun} name='duration' type="text" className="form-control " id="validationDefault01" placeholder="45Min" required />
                  </div>
                  <div className="col-md-2 ms-1">
                    <label htmlFor="validationCustom04" className="form-label">Price type</label>
                    <input onChange={formDataFun} name='price_type' type="text" className="form-control " id="validationDefault01" placeholder="Fixed" required />
                  </div>
                  <div className="col-md-3  ms-1">
                    <label htmlFor="validationCustom02" className="form-label">Price </label>
                    <input onChange={formDataFun} type="text" name="price" className="form-control" id="validationCustom02" placeholder="₹ | 40.00" />
                  </div>
                  <div className="col-md-3 ms-1">
                    <label htmlFor="validationCustom02" className="form-label">Special </label>
                    <input onChange={formDataFun} type="text" name="special" className="form-control" id="validationCustom02" placeholder="₹ | 0.00" />
                  </div>
                </div>
                <div >
                  <div className=" col-6 mt-2 ">
                    <label htmlFor="validationDefault01" className="form-label">Pricing name<span className="fw-light">(optional)</span></label>
                    <input onChange={formDataFun} type="text" name="pricing_name" className="form-control col-md-6 " id="validationDefault01" placeholder="e.g. Long hair" required />
                  </div>
                </div>
              </div>
              <div> <p id="green" className="d-flex justify-content-start mt-1"><AdvancedPricing /></p>
              </div>
              <div className="d-flex justify-content-start mt-1" id="green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-1 me-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>Add pricing option</div>

              <div className="mt-2 border-top">
                <h4 className="d-flex justify-content-start mt-2">Extra Time</h4>
                <p className="d-flex justify-content-start mt-2 border-bottom fw-light">Enable extra time after the service</p>
                <div className="form-check form-switch mt-2">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start mt-1 mb-2" htmlFor="flexSwitchCheckDefault">Enable extra time</label>
                </div>
              </div>
            </div>
          </div>
        </form>

        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 " >
              <h4 className="d-flex justify-content-start mt-2 border-bottom">Sales settings</h4>
              <div className="d-flex justify-content-start mt-2"><h6>Set the tax rate </h6></div>
              <div className="mt-2">
                <label htmlFor="validationDefault01" className="form-label">Tax<span className="fw-light">(Included in price)</span></label>
                <input onChange={formDataFun} type="text" name="tax" className="form-control col-md-4 mt-1 " id="validationDefault01" placeholder="Default: No tax" required />
              </div>

              <div className="mt-2 border-top">
                <h5 className="d-flex justify-content-start mt-2">Voucher sales</h5>
                <div className="form-check form-switch ">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start" htmlFor="flexSwitchCheckDefault">Enable extra time</label>
                </div>

                <div className="mt-1">
                  <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start mt-1">Voucher expiry period</label>
                  <input type="text" className="form-control col-md-4 mt-1  mb-2" id="validationDefault01" placeholder="Default (6 Months)" required />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingleService