import { React, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody} from "reactstrap"

const SelectBrand = () => {
    const [formModal, setFormModal] = useState(false)
    return (
        <div>
             <Button color='white' outline onClick={() => setFormModal(!formModal)}>
          SelectBrand
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Select a Brand</ModalHeader>
          <ModalBody>
          <div className="d-flex justify-content-center mt-4" >
          
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </div>
          <h3 className="d-flex justify-content-center ">No brands here yet.</h3>
          <div className="fw-light d-flex justify-content-center">Your brands will appear.</div>

          <div  className="d-flex justify-content-center mt-4">
          <Button  color='dark' outline onClick={() => setFormModal(!formModal)}>
          Add a Brand
        </Button>
        </div>
        

          </ModalBody>
          </Modal>
        </div>
    )
}
export default SelectBrand