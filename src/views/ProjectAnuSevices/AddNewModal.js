// import React from 'react';
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
const AddNewModal = () => {
   const [formModal, setFormModal] = useState(false)
    return (
 <div>
<Button color='btn-outline-success' outline onClick={() => setFormModal(!formModal)}>
  Select a Brand
</Button>
  <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
<ModalHeader toggle={() => setFormModal(!formModal)}>Add a Brand</ModalHeader>
<ModalBody>
 <div className='mb-2'>
    <label className='form-label' for='email'>Brand Name</label>
<p><input type='email' id='email' placeholder='e.g.Fresha' /></p>
</div>
 </ModalBody>
<ModalFooter>
  <Button color="btn btn-light" onClick={() => setFormModal(!formModal)}>
  Cancel
 </Button>{' '}
  <Button color="btn btn-dark" onClick={() => setFormModal(!formModal)}>
  Save
</Button>{' '}
 </ModalFooter>
</Modal>
</div>
 )
}
export default AddNewModal