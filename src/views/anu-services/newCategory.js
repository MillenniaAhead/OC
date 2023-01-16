import { React, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from "reactstrap"

function  NewCategory () {
    const [formModal, setFormModal] = useState(false)
    return (
        <div>
             <Button color='white' onClick={() => setFormModal(!formModal)}>
         NewCategory
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>New Category</ModalHeader>
          <ModalBody>
          <div className='mb-2'>
          <Label for="formGroupExampleInput" class="form-label d-flex justify-content-start fw-semibold">Category name </Label>
        <Input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g.  Hair Services  " />
            </div>
            <div className='mb-2'>
            <div class="mb-2">
     <Label for="formGroupExampleInput2" class="form-label d-flex justify-content-start fw-semibold">Appointment color</Label>
     <div class="form-floating">
     <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
     </select>
     <Label for="floatingSelect"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="#A5DFF8" class="bi bi-circle-fill mt-3 ms-1" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8"/>
     </svg></Label>
<p class="fw-light">See your Calendar Settings page under Setup to set how colors are
displayed on the calendar</p>
      </div>

      <div class="mb-3">
      <Label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start fw-semibold">Category description</Label>
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
      </div>
      </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='dark' onClick={() => setFormModal(!formModal)}>
             Save
            </Button>{' '}
          </ModalFooter>
          </Modal>
        </div>
    )
  }

  export default NewCategory