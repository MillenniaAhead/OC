// ** React Imports
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import StockinfoCard from '../StokTakeslayout/StockinfoCard'

const ModalConfig = [

  {
    id: 4,
    btnTitle: 'Add New ',
    modalTitle: 'save',
    modalClass: 'modal-lg'
  }
 

]

const StockTakesModal = () => {
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
                <span className='text-secondary'>  Create a new stocktake </span>
                <h3 className='mt-1'>Add the stocktake info</h3>
                <p className='mt-1'>Start a full inventory count to keep accurate stock levels. <Link>Learn more </Link> </p>
               </div>
               <StockinfoCard />
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default StockTakesModal
