import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
const ModalConfig = [
  
  
  {
    id: 4,
    btnTitle: 'Add Section',
    modalTitle: 'Add a custom section',
    modalClass: 'Default Modal'
  }
]

const AddACustom = () => {
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
      <Fragment key={item.id} >
        
        <Button color='dark'className='mb-2' onClick={() => toggleModal(item.id)} key={item.title} >              
                {item.btnTitle}
          </Button>
        
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader className='pb-2 ' toggle={() => toggleModal(item.id)}>
          <p className='fs-3 fw-bolder text-dark'>{item.modalTitle}</p>
          </ModalHeader>
         
          <ModalBody >
             <div>
              <Label className='form-label text-dark fs-4 fw-bolder' for='basicInput'>
              Section title
              </Label>
              <Input type='text' name='cashPay' id='basicInput'  placeholder='Add title'/>
              </div>
             <div>
              <Label className='form-label text-dark fs-4 mt-2 fw-bolder' for='basicInput'>
              Section description <span className='text-secondary'>(Optional)</span>
              </Label>
              <Input type='text' name='cashPay' id='basicInput'  placeholder='Add description'/>
              </div>
          
          </ModalBody>
          <ModalFooter>
          
          <Button color='dark' onClick={() => toggleModal(item.id)}>
              Apply
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}


export default AddACustom