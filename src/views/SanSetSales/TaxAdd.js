import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

const TaxAdd = () => {
    const [basicModal, setBasicModal] = useState(false)
    return (
        <div className='basic-modal'>
        <Button color='dark' onClick={() => setBasicModal(!basicModal)}>
        Add Tax
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Basic Modal</ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default TaxAdd