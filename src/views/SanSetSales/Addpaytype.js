import axios from 'axios'
import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'

const ModalConfig = [
  
  {
    id: 4,
    btnTitle: 'Add payment type',
    modalTitle: 'New payment type',
    modalClass: 'Default Modal'
  }
]
const Addpaytype = () => {
    const [modal, setModal] = useState(null)
    const [pay, setPay] = useState({
      payment:""
    })
    const setData = (e) => {
      console.log(e?.target?.value)
      const {name, value} = e?.target
      setPay((preval) => {
          return {
              ...preval,
              [name]: value
          }
       })
     }
     
     const handleSave = async (e) => {
      e?.preventDefault()
  
      console.log(pay)
      axios.post('http://localhost:8000/api/sansetsales/pay', pay)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  const renderModal = ModalConfig.map(item => {
    return (
      <Fragment key={item.id} >
        <div className="mx-auto">
        <Button color='dark' className='p-1' onClick={() => toggleModal(item.id)} key={item.title} >
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
          <p className='fs-3 fw-bolder text-dark'>{item.modalTitle}</p>
            
          </ModalHeader>
         
          <ModalBody >
            
            <div>
            <Label className='form-label text-dark fw-bolder' for='basicInput'>
            Name
            </Label>
            <Input type='text' onChange={setData} value={pay.payment} name='payment' id='basicInput'  placeholder='e.g. Mastercard'/>
            </div>
            
          </ModalBody>
          <ModalFooter>
          
          <Button color='dark' onClick={handleSave}> 
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}

export default Addpaytype