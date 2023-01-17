import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'

const ModalConfig = [
  
  {
    id: 4,
    btnTitle: 'Add payment type',
    modalTitle: 'New payment type',
    modalClass: 'Default Modal'
  }
]
const Addpaytype = () => {
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
        <Button color='dark' className='p-1' onClick={() => toggleModal(item.id)} key={item.title} >
            {item.btnTitle}
          </Button>
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
            
            <div>
            <Label className='form-label text-dark fw-bolder' for='basicInput'>
            Name
            </Label>
            <Input type='text' id='basicInput'  placeholder='e.g. Mastercard'/>
            </div>
            
          </ModalBody>
          <ModalFooter>
          
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

export default Addpaytype