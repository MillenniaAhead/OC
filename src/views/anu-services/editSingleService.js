import { React, useState } from "react"
import SelectCategory from "./selectCategory"
import axios from "axios"
import Avatar from '@components/avatar'
import { Alert } from 'reactstrap'

function EditSingleService() {
  const [formData, setFormData] = useState({})
  const [visible, setVisible] = useState(false)


  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:7000/api/editSingle", formData)
      .then((response) => {
        console.log(response.data)
        setVisible(true)
      })
      .catch(err => console.log(err))
  }

  const deleteData = () => {
    console.log("delete")
    axios.delete("http://localhost:7000/api/editSingle", formData)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="row justify-content-center ">
      <Alert color='primary' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body'>
        data added
        </div>
      </Alert>
        <form className="container">
          <div className="d-flex justify-content-end mt-2">
            <button type="button" className="btn btn-outline-danger me-2" onClick={deleteData} >Delete</button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={postData} >Save</button></div>
          <h2 className="justify-content-center mt-2">Edit single service</h2>
          <div className="mb-2 ">
            <div className="col-md-6">
              <div className="form-control " >
                <h4 className="d-flex justify-content-start mt-2 ">Basic Info</h4>
                <p className="d-flex justify-content-start  ">Add a service name and choose the treatment type.</p>

                <div className="mb-2 ">
                  <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-semibold mt-2">Package name </label>
                  <input onChange={formDataFun} type="text" name="package_name" className="form-control" id="formGroupExampleInput" placeholder="Haircut" />
                </div>
                <div className="mb-1">
                  <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start fw-semibold">Treatment type</label>
                  <input onChange={formDataFun} type="text" name="treatment_type" className="form-control" id="formGroupExampleInput" placeholder="Women's Haircut" />
                  <div className="form-floating">

                    <p className="d-flex justify-content-start fw-light">Choose the most relevant treatment type. This won't be visible your to clients. </p>
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start fw-bold"><SelectCategory /></label>
                  <textarea onChange={formDataFun} name="select_category" className="form-control" id="exampleFormControlTextarea1" placeholder="Hair" rows="1"></textarea>
                </div>

                <div className="mb-1">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start fw-bold">Service description</label>
                  <label className="d-flex justify-content-end">0/1000</label>
                  <textarea onChange={formDataFun} className="form-control" name="service_discription" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
                </div>

                <div className="mb-1">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start fw-bold">Aftercare description</label>
                  <label className="d-flex justify-content-end">0/1000</label>
                  <textarea onChange={formDataFun} className="form-control" name="aftercare_discription" id="exampleFormControlTextarea1" placeholder="Add Aftercare description" rows="4"></textarea>
                </div>

                <div className="mb-2">
                  <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start fw-bold">Service available for</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Everyone" />
                </div>
              </div>
            </div>
          </div>
        </form>


        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <div className="col-auto">
                <h4 className="d-flex justify-content-start mt-2">Online booking</h4>
                <p className="d-flex justify-content-start ">Enable online bookings,choose who the service is available for and add a short description.</p>
                <div className="mb-2 border-top">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label d-flex justify-content-start mt-2" htmlFor="flexSwitchCheckDefault">Enable online bookings</label>
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
              <p className="d-flex justify-content-start mt-1 border-bottom ">Assign team members to the service and manage commmission</p>

              <div className="d-flex justify-content-start mt-1">
                <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label me-1" htmlFor="inlineCheckbox1">Select All</label>
                  <Avatar color='light-secondary' content='2' /></div>
              </div>

              <div className="d-flex justify-content-start mt-2 ">
                <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1"><div className="btn-group" role="group" aria-label="Third group">
                    <Avatar color='light-success' content='Kondeti Anusha' initials />
                    <p className="ms-1">Kondeti Anusha</p>
                  </div></label>
                </div>

                <div className="form-check form-check-inline">
                  <input onChange={formDataFun} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1"><div className="btn-group" role="group" aria-label="Third group">
                    <Avatar color='light-success' content='Wendy Smith' initials />
                    <p className="ms-1">Wendy Smith</p>
                  </div></label>
                </div>
              </div>

              <div className="mt-2 border-top">
                <h4 className="d-flex justify-content-start mt-2">Team member commission</h4>
                <p className="d-flex justify-content-start mt-1 border-bottom fw-light">Calculate team member commission when the service is sold.</p>
                <div className="form-check form-switch mt-2">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start mt-2 mb-1 fw-light" htmlFor="flexSwitchCheckDefault">Enable team member commission</label>
                </div>
              </div>
            </div>
          </div>
        </form>


        <form className="container">
          <div className="mb-2">
            <div className="form-control w-50 h-50 ">
              <h4 className="d-flex justify-content-start mt-2">Pricing and Duration</h4>
              <p className="d-flex justify-content-start mt-2 border-bottom ">Add the pricing options and duration of the service.</p>
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
                  <div className="col-6 mt-2 ">
                    <label htmlFor="validationDefault01" className="form-label">Pricing name<span className="fw-light">(optional)</span></label>
                    <input onChange={formDataFun} type="text" name="pricing_name" className="form-control col-md-6 " id="validationDefault01" placeholder="e.g. Long hair" required />
                  </div>
                </div>
                <div> <p id="green" className="d-flex justify-content-start mt-1">Advanced Pricing Option</p>
                </div>
              </div>

              <div className="d-flex justify-content-start " id="green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-2 me-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>Add pricing option</div>

              <div className="mt-2 border-top">
                <h4 className="d-flex justify-content-start mt-2">Extra Time</h4>
                <p className="d-flex justify-content-start mt-1 border-bottom fw-light">Enable extra time after the service</p>
                <div className="form-check form-switch mt-2">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start mt-2 mb-1" htmlFor="flexSwitchCheckDefault">Enable extra time</label>
                </div>
              </div>
            </div>
          </div>
        </form>

        <form className="container ">
          <div className="mb-2 ">
            <div className="form-control w-50 h-50 " >
              <h4 className="d-flex justify-content-start mt-2 border-bottom">Sales settings</h4>
              <div className="d-flex justify-content-start mt-2"><h6>Set the tax rate </h6></div>
              <div className="mt-1">
                <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start">Tax <p className="fw-light">(Included in price)</p></label>
                <input type="text" onChange={formDataFun} className="form-control" name="tax" id="formGroupExampleInput" placeholder="No Tax" />
              </div>

              <div className="mt-2 border-top">
                <h5 className="d-flex justify-content-start mt-2">Voucher sales</h5>

                <div className="form-check form-switch mt-1">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label d-flex justify-content-start mt-2" htmlFor="flexSwitchCheckDefault">Enable extra time</label>
                </div>

                <div className="mt-2 mb-2">
                  <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start fw-bold">Voucher expiry period</label>
                  <input onChange={formDataFun} type="text" name="voucher_expiry" className="form-control" id="formGroupExampleInput" placeholder="Default (6 months)" />
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>

  )
}

export default EditSingleService