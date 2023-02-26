import { React, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from "reactstrap"
import axios from 'axios'
import Avatar from '@components/avatar'

const AdvancedPricing = () => {
  const [formModal, setFormModal] = useState(false)
  const [formData, setFormData] = useState({})
  
  const formDataFun = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:7000/api/advancePricing", formData)
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container ">
      <Button color='white' outline onClick={() => setFormModal(!formModal)}>
        Advanced Pricing Option
      </Button>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered' fullscreen>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Advanced pricing options</ModalHeader>
        <ModalBody>
          <div className='container'>
            <div>
              <h6 className="m-2">Default pricing options</h6>
            </div>
            <div className="container" >
              <div className="d-flex justify-content-start ">
                <div className="container">
                  <div className="col-md-8 m-2">
                    <label htmlFor="validationDefault01" className="form-label">Pricing name(optional)</label>
                    <input onChange={formDataFun} name='pricing_name' type="text" className="form-control " id="validationDefault01" placeholder="Long hair" required />
                  </div>
                </div>
                <div className="col-md-2 m-2 ">
                  <label htmlFor="validationCustom04" className="form-label">Duration</label>
                  <input onChange={formDataFun} name='duration' type="text" className="form-control " id="validationDefault01" placeholder="45min" required />
                </div>
                <div className="col-md-2 m-2 ">
                  <label htmlFor="validationCustom04" className="form-label">Price type</label>
                  <input onChange={formDataFun} name='price_type' type="text" className="form-control " id="validationDefault01" placeholder="Fixed" required />
                </div>
                <div className="col-md-2 m-2">
                  <label htmlFor="validationCustom02" className="form-label">Price </label>
                  <input onChange={formDataFun} name='price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 40.00" required />
                </div>
                <div className="col-md-2 m-2">
                  <label htmlFor="validationCustom02" className="form-label">Special </label>
                  <input onChange={formDataFun} name='special_price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 0.00" required />
                </div>
              </div>
            </div>
            <div className='contanier'>
              <div className='border-top m-4'>
                <h5 className="m-2">Set price by team member</h5>
              </div>
              <div className='grey'>
                <h6>Price by team member</h6>
                <p>Add the pricing options for each team members.</p>

                <div className="container" >
                  <div className="d-flex justify-content-start ">
                    <div className="container">
                      <div className="col-md-8 m-2">
                      <Avatar color='success' content='KA' className="me-2" />
                        Kondeti Anusha
                      </div>
                    </div>
                    <div className="col-md-2 m-2 ">
                      <label htmlFor="validationCustom04" className="form-label">Duration</label>
                      <input onChange={formDataFun} name='duration' type="text" className="form-control " id="validationDefault01" placeholder="45min" required />
                    </div>
                    <div className="col-md-2 m-2 ">
                      <label htmlFor="validationCustom04" className="form-label">Price type</label>
                      <input onChange={formDataFun} name='price_type' type="text" className="form-control " id="validationDefault01" placeholder="Fixed" required />
                    </div>
                    <div className="col-md-2 m-2">
                      <label htmlFor="validationCustom02" className="form-label">Price </label>
                      <input onChange={formDataFun} name='price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 40.00" required />
                    </div>
                    <div className="col-md-2 m-2">
                      <label htmlFor="validationCustom02" className="form-label">Special </label>
                      <input onChange={formDataFun} name='special_price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 0.00" required />
                    </div>
                  </div>
                </div>

                <div className="container" >
                  <div className="d-flex justify-content-start ">
                    <div className="container">
                      <div className="col-md-8 m-2">
                      <Avatar color='success' content='WS' className="me-2" />
                        Wendy Smith
                      </div>
                    </div>
                    <div className="col-md-2 m-2 ">
                      <label htmlFor="validationCustom04" className="form-label">Duration</label>
                      <input onChange={formDataFun} name='duration' type="text" className="form-control " id="validationDefault01" placeholder="45min" required />
                    </div>
                    <div className="col-md-2 m-2 ">
                      <label htmlFor="validationCustom04" className="form-label">Price type</label>
                      <input onChange={formDataFun} name='price_type' type="text" className="form-control " id="validationDefault01" placeholder="Fixed" required />
                    </div>
                    <div className="col-md-2 m-2">
                      <label htmlFor="validationCustom02" className="form-label">Price </label>
                      <input onChange={formDataFun} name='price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 40.00" required />
                    </div>
                    <div className="col-md-2 m-2">
                      <label htmlFor="validationCustom02" className="form-label">Special </label>
                      <input onChange={formDataFun} name='special_price' type="text" className="form-control " id="validationDefault01" placeholder="₹ | 0.00" required />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex felx-row"> <p id="green">Reset overrides to defaults</p>
          </div>
          <Button color='outline-dark' onClick={() => setFormModal(!formModal)}>
            Cancel
          </Button>
          <Button color='primary' onClick={() => setFormModal(!formModal)}>
            <Badge color='primary' onClick={postData}>
        Save
      </Badge>
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default AdvancedPricing