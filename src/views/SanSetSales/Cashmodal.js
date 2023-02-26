import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
import lock from '../../images/SSS/lock.png'
import menup from '../../images/SSS/menu.png'
import axios from 'axios'
const ModalConfig = [
  
  {
    id: 4,
    modalTitle: 'Edit payment type',
    modalClass: 'Default Modal'
  }
]

const Cashmodal = () => {
    const [modal, setModal] = useState(null)
    const [cash, setcash] = useState({
      cashPay:""
    })
    const setData = (e) => {
      console.log(e?.target?.value)
      const {name, value} = e?.target
      setcash((preval) => {
          return {
              ...preval,
              [name]: value
          }
       })
     }
     
     const handleCash = async (e) => {
      e?.preventDefault()
  
      console.log(cash)
      axios.post('http://localhost:8000/api/sansetsales/cash', cash)
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
          <div onClick={() => toggleModal(item.id)} className="d-flex justify-content-between">
        <div className='text-dark'>
            <img src={menup} alt="" /> <span className='fs-4 ms-1 fw-bold'>Cash</span>
        </div>
        <div >
            <img src={lock} alt="" />
        </div>
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
              <Input type='text' onChange={setData} value={cash.cashPay} name='cashPay' id='basicInput'  placeholder='Cash'/>
              </div>
              
            </ModalBody>
            <ModalFooter>
            
            <Button color='dark' onClick={handleCash}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
          </div>
        </Fragment>
      )
    })
  
    return <div >{renderModal}</div>
  }
  

export default Cashmodal