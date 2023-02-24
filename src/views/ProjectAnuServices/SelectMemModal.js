// import React from 'react'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalFooter, InputGroup } from "reactstrap"
//  import { InputGroup, Input, InputGroupText } from "reactstrap"
//  import {BsSearch } from "react-icons/bs";
import './App.css'
import axios from 'axios'

function SelectMemberShipModal  ()  {
  const [formModal, setFormModal] = useState(false)
  const [formData, setFormData] = useState({})
  const [AllServices5, Hair4, Haircut, HairColor, BlowDry] = useState(true)
  
  const handleChange = (data) => {
    console.log(data)
  }
  const formDataFun = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
console.log(e.target.value)
}
const postData = (e) => {
  e.preventDefault()
  console.log(formData)
  axios.post("http://localhost:4000/api/SelectMemberShips", formData)
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => console.log(err))
}

  return (
    <div>
      <span className="btn-success row justify-content-end">
        <Button color='dark' outline onClick={() => setFormModal(!formModal)}>
          Edit
        </Button>
      </span>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}><h2>Select Services</h2></ModalHeader>
        <div>
          <h5>Search Services</h5>
          <div><InputGroup>
            <input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="Enter Name" required />
            </InputGroup>
          </div>
        </div>
        <div className="form-check p-4">
          {/* <input  onChange={formDataFun} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> */}
          <input  onChange={() => handleChange("AllServices5 ")} className="form-check-input" type="checkbox" value={AllServices5 } id="flexCheckDefault" />
          <label className="form-check-label" htmlfor="flexCheckDefault">
            All Services 5
          </label>
        </div>
        <div className="mb-3 border-top"></div>
        <div className="form-check p-4">
          <input onChange={() => handleChange("Hair4")} className="form-check-input" type="checkbox" value={Hair4 } id="flexCheckDefault" />
          <label className="form-check-label" htmlfor="flexCheckDefault">
            Hair 4
          </label>
        </div>
        <div className="mb-3 border-top"></div>
        <div className="form-check">
          <table className="table">
            <thead>
              <tr>
                <td className="form-check">
                  <input onChange={() => handleChange("Haircut")} className="form-check-input" type="checkbox" value={Haircut} id="flexCheckDefault" />
                  <label className="form-check-label" htmlfor="flexCheckDefault">
                    Haircut
                  </label>
                </td>
                <td scope="col p-4">45 min</td>
                <td scope="col ">₹40</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="form-check">
          <table className="table">
            <thead>
              <tr>
                <td className="form-check">
                  <input onChange={() => handleChange("HairColor")} className="form-check-input" type="checkbox" value={HairColor} id="flexCheckDefault" />
                  <label className="form-check-label" htmlfor="flexCheckDefault">
                    Hair Color
                  </label>
                </td>
                <td scope="col p-4">1h 15 min</td>
                <td scope="col">₹57</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="form-check">
          <table className="table">
            <thead>
              <tr>
                <td className="form-check">
                  <input onChange={() => handleChange("BlowDry")} className="form-check-input" type="checkbox" value={BlowDry} id="flexCheckDefault" />
                  <label className="form-check-label" htmlfor="flexCheckDefault">
                    Blow Dry
                  </label>
                </td>
                <td scope="col p-4">35 min</td>
                <td scope="col">₹35</td>
              </tr>
            </thead>
          </table>
        </div>
        <ModalFooter>
          <Button color="btn btn-light" onClick={() => setFormModal(!formModal)}>
            Close
          </Button>{' '}
          {/* <Button color="btn btn-dark" onClick={() => setFormModal(!formModal)}>
 Select 0 Services
</Button>{' '} */}
          {/* <button color='primary' onClick={() => setFormModal(!formModal)} > */}
          <Button onClick={postData} >Select 0 Services</Button>
          {/* </button> */}
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default SelectMemberShipModal