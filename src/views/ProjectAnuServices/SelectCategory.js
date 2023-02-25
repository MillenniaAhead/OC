import './App.css'
import CategoryMod from './CategoryModal'
import AddNewModal from './AddNewModal'
import axios from 'axios'
import { Alert } from 'reactstrap'
import { useState } from 'react'

function SelectCategoryProduct() {
  const [formData, setFormData] = useState({})
  const [visible, setVisible] = useState(true)
  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:4000/api/SelectCategory", formData)
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
        <h2 className="justify-content-center">Add a New Product </h2>
      </form>
      <div className="form-control w-50 h-50 ">
        <form>
          <span className="form-group d-flex flex-row">
            <label htmlFor="formGroupExampleInput"><h5><b>Basic Info</b></h5></label></span>
          <div className="mb-3 border-top">
            <div className="form-group">
              <span className="form-group d-flex flex-row">
                <label htmlFor="formGroupExampleInput"><b>Product Name</b></label></span>
              <input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="name" required />
            </div>
          </div>
          <div>
            <span className="form-group d-flex flex-row">
              <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start"><b>Product Barcode</b></label><label htmlFor="aria-describedby="> (Optional)</label></span>
            <textarea onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="UPC,EAN.GTIN" required />
          </div>
          <div className="form-group d-flex flex-row">
            <label htmlFor="formGroupExampleInput"><h5><b>Product Brand</b></h5></label> </div>
          <div className="d-flex justify-content-start"><AddNewModal /></div>
          <div className="row">
            <div className="col-6">
              <div className="form-group form-group d-flex flex-row">
                <label htmlFor="formGroupExampleInput2"><b>Measure</b></label></div>
              <button className="btn btn-secondary dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Milliliters (ml)
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              </div>
            </div>
            <div className="col-6">
              <div className="form-group form-group d-flex flex-row">
                <label htmlFor="formGroupExampleInput2"><b>Amount</b></label></div>
              <div className="input-group">
                <div className="col-12">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><div className="input-group-text">ml</div></div>
                    </div >
                    <input onChange={formDataFun} name='amount' type="number" className="form-control" id="validationDefault01" placeholder="" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="form-group d-flex flex-row">
                <label htmlFor="formGroupExampleInput"><b>Short description </b> </label><span>0/100</span></span>
              <textarea onChange={formDataFun} name='description' type="text" className="form-control" id="validationDefault01" placeholder="description" required />
              <div className="mb-3">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput"><b>Product description </b> </label></span>
                <textarea onChange={formDataFun} name='Pdescription' type="text" className="form-control" id="validationDefault01" placeholder="Pdescription" required />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="form-control w-50 h-300 ">
        <div className="align-self-center mb-20 form-group d-flex flex-row"><h4><b>Product Photos</b></h4></div>
        <h6 className="align-self-center mb-20 form-group d-flex flex-row">Click and drop a photo</h6>
        <div className='App-image'>
          <img src="https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?size=338&ext=jpg&ga=GA1.2.46004435.1672642268" width="50" height="50" className="m-5" />
          <div className="m-2"><b>Add a photo</b></div></div>
      </div>
    </div>

  )

}

export default SelectCategoryProduct