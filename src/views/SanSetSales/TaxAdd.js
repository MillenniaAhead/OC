import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const TaxAdd = () => {
    const [centeredModal, setCenteredModal] = useState(false)
    return (
      <div className='vertically-centered-modal'>
      <Button color='dark'  onClick={() => setCenteredModal(!centeredModal)}>
       Add Tax
      </Button>
      <Modal style={{width:'800px'}} isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered p-2'>
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Change tax calculation</ModalHeader>
        <hr />
        <ModalBody>
          <div className='mx-3 bg-light-secondary'>
          <div>
            <p>This change will have a big impact on your sales. Make sure you <br />
understand all implications</p>
          </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
            Accept
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
    
    )
}

export default TaxAdd