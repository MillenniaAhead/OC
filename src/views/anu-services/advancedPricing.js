import { React, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const AdvancedPricing = () => {
    const [formModal, setFormModal] = useState(false)
    
    return (
        <div class="container ">
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
          <div class="container" >
       <div class="d-flex justify-content-start ">
       <div class="container">
     <div class="col-md-8 m-2">
    <label for="validationDefault01" class="form-label">Pricing name(optional)</label>
    <input type="text" class="form-control " id="validationDefault01" value="Long hair" required />
       </div>
       </div>
        <div class="col-md-2 m-2 ">
   <label for="validationCustom04" class="form-label">Duration</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">45min</option>
      </select>
      </div>
       <div class="col-md-2 m-2 ">
      <label for="validationCustom04" class="form-label">Price type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fixed</option>
      </select>
      </div>
    <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Price </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 40.00" />
    </div>
     <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Special </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 0.00" />
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
     
      <div class="container" >
       <div class="d-flex justify-content-start ">
       <div class="container">
     <div class="col-md-8 m-2">
     <i class="bi bi-c-circle-fill bg-success outline-success m-2" >KA</i>
     Kondeti Anusha
       </div>
       </div>
        <div class="col-md-2 m-2 ">
   <label for="validationCustom04" class="form-label">Duration</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">45min</option>
      </select>
      </div>
       <div class="col-md-2 m-2 ">
      <label for="validationCustom04" class="form-label">Price type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fixed</option>
      </select>
      </div>
    <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Price </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 40.00" />
    </div>
     <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Special </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 0.00" />
    </div>
  </div>
  </div>

  <div class="container" >
       <div class="d-flex justify-content-start ">
       <div class="container">
     <div class="col-md-8 m-2">
     <i class="bi bi-c-circle-fill bg-success outline-success m-2" >WS</i>
     Wendy Smith
       </div>
       </div>
        <div class="col-md-2 m-2 ">
   <label for="validationCustom04" class="form-label">Duration</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">45min</option>
      </select>
      </div>
       <div class="col-md-2 m-2 ">
      <label for="validationCustom04" class="form-label">Price type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fixed</option>
      </select>
      </div>
    <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Price </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 40.00" />
    </div>
     <div class="col-md-2 m-2">
    <label for="validationCustom02" class="form-label">Special </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 0.00" />
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
              Save
            </Button>{' '}
          </ModalFooter>
          </Modal>
        </div>
    )
}
export default AdvancedPricing