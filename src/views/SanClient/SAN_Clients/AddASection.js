import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Badge, ModalFooter} from 'reactstrap'
import card from '../../../images/section/22.png'
import tv from '../../../images/section/tv.png'
import plusSqure from '../../../images/section/plus-square.png'
import mike from '../../../images/section/image 9.png'
import star from '../../../images/section/star.png'
import AddACustom from './AddACustom'

const ModalConfig = [
  
    {
      id: 4,
      
      modalTitle: 'Add a section',
      modalClass: ''
    }
  ]
const AddASection = () => {
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
          <Fragment key={item.id} >
            <div className="mx-auto">
            
            <div onClick={() => toggleModal(item.id)} key={item.title} className='text-center'
      style={{
        width: 850,
        height: 415,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'rgba(27, 183, 11, 0.24)',
        margin:'30px auto',
        borderRadius:'10px'
        
      }}
    >
           <img className='d-block mx-auto mt-5 pt-4' src={card} alt="" />          <h1 className='mt-2'>Add your first section</h1>
           <p>Drag and drop or <a className='text-success text-decoration'>click</a> here to add a section</p>
                    </div>
             
            </div>
            <Modal
              key={item.id}
              isOpen={modal === item.id}
              toggle={() => toggleModal(item.id)}
              className={`modal-dialog-centered ${item.modalClass}`}
            >
              <ModalHeader className='pb-2 ' toggle={() => toggleModal(item.id)}>
              <p className='fs-3 bg-white fw-bolder text-dark'>{item.modalTitle}</p>
               
              </ModalHeader>
             
              <ModalBody className='m-0'>
              <p className='text-nowrap me-2'>Add a standard section or start from scratch with a custom section.</p>
                <div className="container-fluid">
                <div className="row">
               <h4>STANDARD SECTION</h4>
                        <div className='border py-2 m-2 text-center col-lg-3'>
                       
                        <img className='d-block mx-auto' src={tv} alt="" />
                       
                        <h6 className='mt-1'>Client details</h6>
                        </div>
                        <div className='border m-1 text-center col-lg-3 position-relative'>
                        <Badge className='position-absolute top-0 end-0' color='success'>
                        SOON
                        </Badge>
                        <div className='py-2'>
                            
                        <img className='d-block mx-auto' src={plusSqure} alt="" />
                       
                       <h6 className='mt-1'>Medical history</h6>
                        </div>
                        </div>
                        <div className='border m-1 text-center col-lg-3 position-relative'>
                        <Badge className='position-absolute top-0 end-0' color='success'>
                        SOON
                        </Badge>
                        <div className='py-2'>
                            
                        <img className='d-block mx-auto' src={mike} alt="" />
                       
                       <h6 className='mt-1'>Marketing 
                        preferences</h6>
                        </div>
                        </div>
                        </div>
                        </div>
                       <hr />
                       <div className="container-fluid">
                        <div className="row">
                          <h4>CUSTOM SECTION</h4>
                        <div className='border py-2 m-2 text-center col-lg-3'>
                       
                       <img className='d-block mx-auto' src={star} alt="" />
                      
                       <h6 className='mt-1'>Custom section</h6>
                       </div>
                        </div>
                    
                    
                    </div>
                
              </ModalBody>
              <ModalFooter className='d-flex align-items-center'>
              
              <Button.Ripple color='dark' outline>
        Cancel
      </Button.Ripple>
              <AddACustom />
              </ModalFooter>
            </Modal>
          </Fragment>
        )
      })
    
      return <div >{renderModal}</div>
    }

export default AddASection