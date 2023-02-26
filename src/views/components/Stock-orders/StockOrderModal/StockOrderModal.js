// ** React Imports
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [

  {
    id: 4,
    btnTitle: 'Create new order',
    modalTitle: 'save',
    modalClass: 'modal-lg'
  }
 

]

const StockOrderModal = () => {
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
            <div className='text-center'>
                <span className='text-secondary'>Create stock order</span>
                <h5>Select a supplier</h5>
                <span className='text-secondary'>Choose which supplier to order products from. To manage suppliers, click <Link>here</Link></span>
            </div>
                <div class ="text-center mt-5 mb-5 card">
                    <div className="mt-5 mb-5">
                    <h5>Didn’t find anything</h5>
                    <span className="">Try searching for another product</span>
                    </div>
                </div>
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default StockOrderModal
