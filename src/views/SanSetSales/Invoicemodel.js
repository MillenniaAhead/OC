import React, { Fragment, useState } from 'react'
// ** Reactstrap Imports
import {Table, Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'
import axios from 'axios'
const ModalConfig = [
  
  
  {
    id: 4,
    modalTitle: 'Change sequencing',
    modalClass: 'Default Modal'
  }
]

const Invoicemodel = () => {
    const [modal, setModal] = useState(null)
    const [invoice, setInvoice] = useState({
      no:"",
      number:""
    })
    const setData = (e) => {
      console.log(e?.target?.value)
      const {name, value} = e?.target
      setInvoice((preval) => {
          return {
              ...preval,
              [name]: value
          }
       })
     }
     
     const handleSave = async (e) => {
      e?.preventDefault()
  
      console.log(invoice)
      axios.post('http://localhost:8000/api/sansetsales/saleInvoice', invoice)
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
        <Table className="mx-auto" responsive>
      <thead >
        <tr className='bg-white'>
          <th scope='col' className='text-nowrap'>
          Location Name
          </th>
          <th scope='col' className='text-nowrap'>
          Invoice No. Prefix
          </th>
          <th scope='col' className='text-nowrap'>
          Next Invoice Number
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          
        </tr>
      </thead>
      
      <tbody onClick={() => toggleModal(item.id)}>
        <tr>
         
         <td className='text-nowrap'>UIUX Designer</td>
         <td className='text-nowrap'>-</td>
         <td className='text-nowrap'>4</td>
         <td className='text-nowrap'></td>
         <td className='text-nowrap'></td>
         
       </tr>
       </tbody>
      
    </Table>
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader className='pt-2 ' toggle={() => toggleModal(item.id)}>
            <p className='fs-3 fw-bolder text-dark'>{item.modalTitle}</p>
            
          </ModalHeader>
         
          <ModalBody >
            <p>You are about to introduce this change for UIUX <br />
Designer</p>
          <div className='d-flex justify-content-between'>
            <div>
            <Label className='form-label' for='basicInput'>
            Invoice No. Prefix
            </Label>
            <Input type='text' onChange={setData} value={invoice.no} name='no' id='basicInput'  />
            </div>
            <div>
            <Label className='form-label' for='basicInput'>
            Next Invoice Number
            </Label>
            <Input type='text' onChange={setData} value={invoice.number} name='number' id='basicInput' placeholder='4' />
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
          <Button color='dark' outline onClick={() => toggleModal(item.id)}>
          Cancel
            </Button>
          <Button color='dark' onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div >{renderModal}</div>
}

export default Invoicemodel