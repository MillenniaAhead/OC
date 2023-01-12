import { useState } from 'react'

import {GrFormLocation} from 'react-icons/gr'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from 'reactstrap'
import { useHistory } from 'react-router-dom'

const  Edit = () => {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/hours")
  }
  
  const [formModal, setFormModal] = useState(false)

  return (
    <>
      <div className='d-flex justify-content-between aling-items-center ' style={{borderBottom:'1px solid green'}}>

<div style={{fontSize:'30px', marginLeft:'10px'}}>&#215;</div>
<div>

<button onClick={navigateHandler} style={{width:'70px', margin:'10px 5px', padding:'5px', borderRadius:'3px'}}>Save</button>
</div>
</div>
<h1 className='d-flex justify-content-center aling-items-center mt-2'>Edit your location</h1>
<div className="container w-50 h-75 p-0">

<div className="" style={{border:'1px solid rgba(0,0,0,0.2)'}}>
<div className='border-bottom'>
  <div className='d-flex justify-content-start aling-items-center m-1'>
    
    <h2 className=''>Business location</h2>
    </div>
    </div>
    
  <div className='mt-1 ms-1'>
    <p>Where’s your business located?</p>
    <div className="input-group flex-nowrap ">
  <span class="input-group-text" id="addon-wrapping"><GrFormLocation style={{fontSize:'15px'}}/></span>
  <div style={{width:'44%'}}>
  <input type="text" className="form-control" aria-label="Username" />
  </div>
</div>
<div className="form-check mt-1 mb-3">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I don’t have a business address (mobile and online services only)
  </label>
</div>

  </div>
  </div>
  <div className=' mt-2 ' style={{border:'1px solid rgba(0,0,0,0.2)'}}>
  <div className='ms-3 mt-2'>
    <h2>Billing details for clients invoice</h2>
    <p style={{width:'90%', margin:' 0'}}>These details will appear on the client’s invoice for this location as well as the information you’ve
configured in your {`Invoice template`} settings.</p>
<p style={{color:'red'}}>Please enter an address below to continue.</p>
  </div>

  <div className='m-3 ' style={{border:'1px solid rgba(0,0,0,0.2)'}}>
  <div className='m-2'>
  <div className='d-flex justify-content-between aling-items-center mb-2'>
    <h3>Company name</h3>
    <div>
    
  <button  outline onClick={() => setFormModal(!formModal)} style={{color:' rgba(27, 183, 11, 1)', background:'none', border:'none'}}>Edit</button>
  <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Edit billing details</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
             <label className="form-check-label ms-2">
             Use location name and address for client invoices
               </label>
            </div>
            <div className='mb-1 mt-1'>
              <Label className='form-label' for='password'>Company name</Label>
              <Input type='password' id='password' placeholder='UIUX Designer' />
            </div>
            <div className='d-flex justify-content-between mt-1'>
              <div>
              <Label className='form-label' for='password'>Address</Label>
              <Input type='password' id='password' placeholder=''  style={{width:'113%'}}/>
              </div>
              <div>
                  <div className=' d-flex justify-content-between' >
              <Label className='form-label' for='password'>Asp./ suite etc</Label>
              <Label className='form-label' for='password'>0/100</Label>
              </div>
              <Input type='password' id='password' placeholder='' />
              </div>
            </div>
            <div className='mb-1 mt-1'>
              <Label className='form-label' for='password'>City</Label>
              <Input type='password' id='password'  />
            </div>
            <div className='d-flex'>
              <div className='w-50 me-2'>
              <Label className='form-label' for='password'>State</Label>
              <Input type='password' id='password' placeholder=''  style={{width:''}}/>
              </div>
              <div className='w-50 ms-2 '>
                  <div className=' d-flex justify-content-between' >
              <Label className='form-label' for='password'>Postcode</Label>
              
              </div>
              <Input type='password' id='password' placeholder='' />
              </div>
            </div>
            <div className='mb- mt-1'>
            <div className='d-flex justify-content-between'>
              <Label className='form-label' for='password'>Invoice note</Label>
              <Label className='form-label' for='password'>0/200</Label>
              </div>
              <Input type='password' id='password' placeholder='UIUX Designer' />
            </div>


          </ModalBody>
          <ModalFooter>
            <Button  color='Light' onClick={() => setFormModal(!formModal)} className='border'>
              cancel
            </Button>{' '}
            <Button bg-color='Secondary' onClick={() => setFormModal(!formModal)}>
              Continue
            </Button>{' '}
          </ModalFooter>
        </Modal>
  </div>
    </div>

    <h4 className='mb-2'>UIUX Designer</h4>
    <h4 className='mb2'>Address</h4>
    <p className='mb-2' style={{color:' rgba(27, 183, 11, 1)'}}>+Add</p>
    <h4 className='mb-2'>notes</h4>
    <p className='mb-2' style={{color:' rgba(27, 183, 11, 1)'}}>+Add</p>
  </div>
  </div>
  </div>
       </div>
  

    </>
  )
}

export default Edit
