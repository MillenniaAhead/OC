// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Supplierdetails from '../Supplierdetails'
import ContactInfo from '../ContactInfo'
import PhysicalAddress from '../PhysicalAddress'

const ModalConfig = [

  {
    id: 4,
    btnTitle: 'Add Supplier',
    modalTitle: 'save',
    modalClass: 'modal-lg'
  }
 

]

const SuppliersModal = () => {
  // ** State
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
      <Fragment key={item.id}>
        <div>
          <Button color='secondary' onClick={() => toggleModal(item.id)} key={item.title} >
            {item.btnTitle}
          </Button>
        </div>
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>
            {item.modalTitle}
            {item.title}
          </ModalHeader>
          <ModalBody>
              <Supplierdetails />
              <ContactInfo />
              <PhysicalAddress />
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default SuppliersModal
