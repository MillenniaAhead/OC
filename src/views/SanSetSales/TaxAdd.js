import { Fragment, useState } from 'react'
import light from '../../images/SSS/light.png'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, ModalFooter} from 'reactstrap'
const ModalConfig = [
  
  
  {
    id: 4,
    btnTitle: 'Add Tax',
    modalTitle: 'Change tax calculation',
    modalClass: 'modal-lg'
  }
]

const TaxAdd = () => {
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
          <ModalHeader className='pb-2 ' toggle={() => toggleModal(item.id)}>
            <h3 className='fw-bolder text-dark'>{item.modalTitle}</h3>
            {item.title}
          </ModalHeader>
         
          <ModalBody >
          <div className="mx-3 bg-light-secondary p-2 mt-1 ">
            <div className='d-flex justify-content-between align-items-center'>
            <div>
              <p>This change will have a big impact on your sales. Make sure you <br />
understand all implications</p>
            </div>
            <div>
              <img src={light} alt="" />
            </div>
            </div>
          </div>
          <div className='form-check form-check-success mt-1 ms-3'>
            <Input type='radio' name='rate' id='radio-success' defaultChecked />
            <h4 className='text-dark'>Retail Prices Exclude Tax</h4>
          </div>
          <div className='ms-4 p-1'>
          <p>If selected, all taxes will be calculated using this formula:</p>
          <h5>Tax = Retail * Tax</h5>
          <p>For example: 20% tax on a $10.00 item comes to $2.00 </p>
          </div>


          <div className='form-check form-check-success mt-1 ms-3'>
           <Input type='radio' name='rate' id='radio-success' defaultChecked />
           <h4 className='text-dark'>Retail Prices Include Tax</h4>
          </div>
          <div className='ms-4 p-1'>
          <p>If selected, all taxes will be calculated using this formula:</p>
          <h5>Tax = (Tax Rate* Retail Price)/ (1 + Tax Rate)</h5>
          <p>For example: 20%tax on a $10.00 item comes to $1.67 </p>
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

export default TaxAdd