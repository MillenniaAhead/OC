import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
const ModalConfig = [
  
  
  {
    id: 4,
    btnTitle: 'Apply defaults',
    modalTitle: 'Apply default taxes to all',
    modalClass: 'Default Modal'
  }
]

const ApplyDefultmodal = () => {
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
        <div className="mx-auto">
        <Button.Ripple color='dark' outline onClick={() => toggleModal(item.id)} key={item.title} >              
                {item.btnTitle}
          </Button.Ripple>
        </div>
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
            <p>Are you sure? You have 5 Services without default <br />
taxes, this action will update their settings to apply <br />
default taxes instead</p>
          
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


export default ApplyDefultmodal