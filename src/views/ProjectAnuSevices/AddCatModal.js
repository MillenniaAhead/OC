// import React from 'react';
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
const AddCatMod = () => {
    const [formModal, setFormModal] = useState(false)
    return (
        <div>
<Button color='dark' outline onClick={() => setFormModal(!formModal)}>
Add a Category
</Button>
 <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
<ModalHeader toggle={() => setFormModal(!formModal)}>Add a Category</ModalHeader>
<ModalBody>
<div className='mb-2'>
<label className='form-label' for='email'>Category Name</label>
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
export default AddCatMod