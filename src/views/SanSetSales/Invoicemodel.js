import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
const ModalConfig = [
  
  
  {
    id: 4,
    btnTitle: 'change',
    modalTitle: 'Change sequencing',
    modalClass: 'Default Modal'
  }
]

const Invoicemodel = () => {
    const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  const renderModal = ModalConfig.map(item => {
    return (
      <Fragment key={item.id} className="mx-auto">
        <div>
          <button className='border-0' onClick={() => toggleModal(item.id)} key={item.title} >              
                {item.btnTitle}
          </button>
        </div>
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader className='pb-2 ' toggle={() => toggleModal(item.id)}>
            <h3 className='fw-bolder text-dark'>{item.modalTitle}</h3>
            {item.title}
          </ModalHeader>
         
          <ModalBody >
            <p>You are about to introduce this change for UIUX <br />
Designer</p>
          <div className='d-flex justify-content-between'>
            <div>
            <Label className='form-label' for='basicInput'>
            Invoice No. Prefix
            </Label>
            <Input type='text' id='basicInput'  />
            </div>
            <div>
            <Label className='form-label' for='basicInput'>
            Next Invoice Number
            </Label>
            <Input type='text' id='basicInput' placeholder='4' />
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
          <Button color='dark' outline onClick={() => toggleModal(item.id)}>
          Cancel
            </Button>
          <Button color='dark' onClick={() => toggleModal(item.id)}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}

export default Invoicemodel