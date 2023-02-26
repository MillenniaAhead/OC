import SelectMemberShipModal from './SelectMemModal'
import './App.css'
import axios from 'axios'
import { Alert } from 'reactstrap'
import { useState } from 'react'

function SelectMemberShip() {
  const [formData, setFormData] = useState({})
  const [visible, setVisible] = useState(true)
  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:4000/api/SelectMember", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="row justify-content-center">
      <form className="container">
        <div className="d-flex justify-content-end">
          <button onClick={postData} >Save</button>
          <Alert color='primary' isOpen={visible} toggle={() => setVisible(false)}>
            <div className='alert-body'>
              Data Added Successfully
            </div>
          </Alert>
        </div>
      </form>
      <div className="container">
        <h2>Create a membership</h2>
        < div className="row justify-content-center">
          <div className="form-control w-50 h-50 ">
            <div className="form-group">
              <span className="form-group d-flex flex-row">
                <label htmlFor="formGroupExampleInput"><h5><b>Basic Info</b></h5></label></span>
              <div className="mb-3 border-top">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Membership Name</b></h5></label></span>
                <input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="name" required /></div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControl Textarea1" className="form-label d-flex justify-content-start"><h5><b>Membership description</b></h5></label>
              <textarea onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="Add Membership Description" required /></div>
          </div>
        </div>
        <span>
          < div className="row justify-content-center ">
            <div className="form-control w-50 h-50 ">
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Services and sessions</b></h5></label></span>
                <h6 className="row justify-content-start m-1">Add the services and sessions included in the membership</h6>
                <div className="mb-3 border-top">
                  <span className="form-group d-flex flex-row">
                    <label htmlFor="formGroupExampleInput"><h5><b>Included services</b></h5></label></span>
                </div>
                <span><div className="input-group-prepend">
                  <span className="input-group-text row justify-content-start w-75 h-50 ">0 Services</span>
                </div></span>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group form-group d-flex flex-row">
                    <label htmlFor="formGroupExampleInput2"><b>Sessions</b></label></div>
                  <button className="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    Limited
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group form-group d-flex flex-row">
                    <label htmlFor="formGroupExampleInput2"><b>Number of sessions</b></label></div>
                  <div className="input-group">
                    <div className="col-12">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        </div >
                        <input onChange={formDataFun} name='name' type="number" className="form-control" id="validationDefault01" placeholder="5" required /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span>
          <div className="row justify-content-center ">
            <div className="form-control w-50 h-50 ">
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Pricing and payment</b></h5></label></span>
                <h6 className="row justify-content-start m-1">Choose how you'd like your clients to pay.</h6>
                <div className="mb-3 border-top">
                  <span className="form-group d-flex flex-row">
                    <label htmlFor="formGroupExampleInput"><h5><b>Included services</b></h5></label></span>
                </div>
                <span><div className="input-group-prepend">
                  <span className="input-group-text row justify-content-start w-75 h-50 ">0 Services<a href="#" className="link-success row justify-content-end ">Edit</a></span>
                </div></span>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group form-group d-flex flex-row">
                    </div>
                    <button className="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      1 month
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group form-group d-flex flex-row">
                    </div>
                    <div className="input-group">
                      <div className="col-12">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                          </div >
                          <div className="input-group">
                            <div className="col-auto">
                              <div className="mb-3 border-top  w-50">
                                <div className="input-group mb-1">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text"><div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg></div></div>
                                  </div >
                                  <input onChange={formDataFun} name='name' type="number" className="form-control" id="validationDefault01" placeholder="5" required /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border-top">
                  <span className="form-group d-flex flex-row">
                    <label htmlFor="formGroupExampleInput"><h5><b>Tax rate</b></h5></label></span>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group form-group d-flex flex-row">
                      <label htmlFor="formGroupExampleInput2"><b>Tax rate</b></label></div>
                    <button className="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      No tax
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
        </span>
        <span>
          < div className="row justify-content-center ">
            <div className="form-control w-50 h-50 ">
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Colour custimisation</b></h5></label></span>
                <h6 className="row justify-content-start m-1">Select a colour that matches your business.</h6>
                <div className="mb-3 border-top">
                  <span className="form-group d-flex flex-row">
                    <img src="https://img.icons8.com/fluency/512/ellipse.png" width="50" height="50" />
                    <img src="https://cdn.iconscout.com/icon/free/png-128/create-circle-ellipse-arcs-arc-round-tool-4-19122.png" width="50" height="50" />
                    <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/circle-271-1156961.png" width="50" height="50" />
                    <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/oval-3922707-3251474.png" width="50" height="50" />
                    <img src="https://img.icons8.com/external-filled-line-kendis-lasman/2x/external-ellipse-graphic-design-filled-line-filled-line-kendis-lasman.png" width="50" height="50" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span>
          < div className="row justify-content-center ">
            <div className="form-control w-50 h-50 ">
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Online sales</b></h5></label></span>
                <h6 className="row justify-content-start m-1">Choose if you would like to sell your membership online.</h6>
                <div className="mb-3 border-top">
                  <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label d-flex justify-content-start m-4" htmlFor="flexSwitchCheckDefault"><b>Enable online sales</b></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span>
          <div className="row justify-content-center ">
            <div className="form-control w-50 h-50 ">
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><h5><b>Terms & Conditions</b></h5></label></span>
                <span className="row justify-content-start">if there are any rules attached to your membership it's a good place to mention them.</span>
                <div className="mb-3 border-top">
                  <div>
                    <span className="form-group d-flex flex-row">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start"><b>Terms & Conditions</b></label><label htmlFor="aria-describedby="> (Optional)</label></span>
                    <textarea onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="Add Terms & Conditions" required /></div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
export default SelectMemberShip