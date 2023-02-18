// ** React Imports
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [

  {
    id: 4,
    btnTitle: 'Import products',
    modalTitle: 'save',
    modalClass: 'modal-lg'
  }
 

]

const ImportProductsModal = () => {
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
          <ModalHeader toggle={() => toggleModal(item.id)}>
            {item.modalTitle}
            {item.title}
          </ModalHeader>
          <hr className='black'></hr>
          <ModalBody className='text-center'>
          <span>Import products</span>
          <h3 className="text-black bold mt-2">Upload file</h3>
          <p>Upload a CSV file with your product data, or download and fill the template below. <Link> Learn more </Link></p>
                <div className="card mx-auto text-center mt-3 mb-3 ">
                    <div className=" mt-3 mb-3">
                    <p>For the best quality upload, input your data into the template below, <br></br>
then upload the file to import.</p>
                     <span>Download template</span>
                    </div>
                </div>
          </ModalBody>
        
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default ImportProductsModal
