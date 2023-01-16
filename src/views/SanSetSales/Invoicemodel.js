import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import {Table, Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
const ModalConfig = [
  
  
  {
    id: 4,
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
        <Table responsive>
      <thead >
        <tr className='bg-white'>
          <th scope='col' className='text-nowrap'>
          Location Name
          </th>
          <th scope='col' className='text-nowrap'>
          Invoice No. Prefix
          </th>
          <th scope='col' className='text-nowrap'>
          Next Invoice Number
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          
        </tr>
      </thead>
      
      <tbody onClick={() => toggleModal(item.id)}>
        <tr>
         
         <td className='text-nowrap'>UIUX Designer</td>
         <td className='text-nowrap'>-</td>
         <td className='text-nowrap'>4</td>
         <td className='text-nowrap'></td>
         <td className='text-nowrap'></td>
         
       </tr>
       </tbody>
      
    </Table>
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

  return <div >{renderModal}</div>
}

export default Invoicemodel