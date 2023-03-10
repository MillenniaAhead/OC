// import axios from 'axios'
import React, { Fragment, useState } from 'react'
import filter from '../../../images/ClientList/filers.jpg'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'

const ModalConfig = [
  
  {
    id: 4,
    
    modalTitle: 'Filters',
    modalClass: 'Default Modal'
  }
]
const ClientFilter = () => {
    const [modal, setModal] = useState(null)
    // const [pay, setPay] = useState({
    //   payment:""
    // })
    // const setData = (e) => {
    //   console.log(e?.target?.value)
    //   const {name, value} = e?.target
    //   setPay((preval) => {
    //       return {
    //           ...preval,
    //           [name]: value
    //       }
    //    })
    //  }
     
    //  const handleSave = async (e) => {
    //   e?.preventDefault()
  
    //   console.log(pay)
    //   axios.post('http://localhost:8000/api/sansetsales/pay', pay)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
    // }

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
        
        <div style={{width: '150px', height:'48px', marginBottom:'25px'}} onClick={() => toggleModal(item.id)} key={item.title} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
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
            
          <div className='mb-1'>
          <Label className='form-label'  for='select-basic'>
          Client group
          </Label>
          <Input type='select' name='select' id='select-basic'>
            <option>All Types</option>
            <option>Fresha accounts</option>
            <option>Manually addded clients</option>
          </Input>
        </div>
          <div className='mb-1'>
          <Label className='form-label'  for='select-basic'>
          Gender
          </Label>
          <Input type='select' name='select' id='select-basic'>
            <option>All</option>
            <option>Prefer not to say</option>
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
          </Input>
        </div>
            
          </ModalBody>
          <ModalFooter>
          
          <Button color='dark' > 
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}

export default ClientFilter