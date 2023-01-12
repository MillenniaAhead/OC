import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
import lock from '../../images/SSS/lock.png'
import menup from '../../images/SSS/menu.png'

const ModalConfig = [
  
  {
    id: 4,
    modalTitle: 'Edit payment type',
    modalClass: 'Default Modal'
  }
]


const OthersModal = () => {
   
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
              <div onClick={() => toggleModal(item.id)} className="border rounded mx-5 mt-2 p-2">
                <div className="d-flex justify-content-between">
                    <div className='text-dark'>
                        <img src={menup} alt="" /> <span className='fs-4 ms-1 fw-bold'>Other</span>
                    </div>
                    <div>
                        <img src={lock} alt="" />
                    </div>
                </div>
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
                  <Input type='text' id='basicInput'  placeholder='Other'/>
                  </div>
                  
                </ModalBody>
                <ModalFooter>
                
                <Button color='danger' onClick={() => toggleModal(item.id)}>
                    Delete
                  </Button>
                <Button color='dark' onClick={() => toggleModal(item.id)}>
                    Save
                  </Button>
                </ModalFooter>
              </Modal>
            </Fragment>
          )
        })
      
        return <div >{renderModal}</div>
      }
      
export default OthersModal