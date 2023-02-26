// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardText } from 'reactstrap'
import BasicinfoCard from '../ProductsComponents/CardsComponents/BasicinfoCard'
import PricingCard from '../ProductsComponents/CardsComponents/PricingCard'
import InventoryCard from '../ProductsComponents/CardsComponents/InventoryCard'

const ModalConfig = [

  {
    id: 4,
    btnTitle: 'Add New Product',
    modalTitle: 'save',
    modalClass: 'modal-lg'
  }
 

]

const AddNewModal = () => {
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
              <h3 className='text-black bold'>Add a new product</h3>
            </div>
              <div className="container">
                    <div className="row">
                      <div className="col-8">
                          <BasicinfoCard />
                          <PricingCard />
                          <InventoryCard />
                      </div>
                      <div className="col-4">
                          <Card>
                              <CardBody>
                                 <CardText>Product photos</CardText>
                                 <p>Drag and drop a photo to change the order.</p>
                              
                                  </CardBody>
                          </Card>
                      </div>
                    
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
export default AddNewModal
