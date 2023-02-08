
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from 'reactstrap'

const Close = () => {

  const [formModal, setFormModal] = useState(false)

  return (
    <>
      <div className=' container w-75 d-flex justify-content-between aling-items-center mt-5 ' style={{}}>
<div>
<div style={{marginBottom:'3px'}}>Settings .  Closed dates</div>
<h5 style={{color:'black'}}>Closed dates</h5>
<p>Set the dates when your business is closed</p>
</div>
<div>

<button outline onClick={() => setFormModal(!formModal)}  style={{width:'131px', margin:'10px 5px', padding:'5px', borderRadius:'3px', backgroundColor:'rgba(78,78,78,1)', color:'white'}}>Add closed date</button>

<Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>
            Add closed date
          </ModalHeader>
          <ModalBody>
            <div className='mb-2' >
            <Input  style={{backgroundColor:'rgba(27, 183, 11, 0.4)'}} type='password' id='password' placeholder='Online bookings can not be placed during closed dates.'  />
            </div>
           
            <div className='d-flex justify-content-between mt-1'>
              <div>
              <label for="inputState" class="form-label">Start date</label>
             <select id="inputState" class="form-select" style={{width:'155%'}}>
           <option selected>Select start date</option>
            <option>...</option>
             </select>
              </div>
              <div style={{width:'211px'}}>
              <label for="inputState" class="form-label">End date</label>
           <select id="inputState" class="form-select">
            <option selected>Select end date</option>
             <option>...</option>
             </select>
              </div>
            </div>
            <div className='mb-1 mt-1'>
              <Label className='form-label' for='password'>Description</Label>
              <Input type='password' id='password' placeholder="e.g Public holiday" />
            </div>
            <div className='border-top'>
            <div className="form-check  mt-1 mb-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Select all locations
  </label>
</div>
</div>
<div className='border-top'>
            <div className="form-check mt-1 mb-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  UIUX Designer
  </label>
</div>
</div>

          </ModalBody>
          <ModalFooter>
            
            <Button bg-color='Secondary' onClick={() => setFormModal(!formModal)}>
              Save
            </Button>{' '}
          </ModalFooter>
        </Modal>
</div>
</div>
<div className="container w-50 vh-50 mt-4">
<div className='text-center'>
<h5 style={{color:'black'}}>Closed dates</h5>
<p>List the dates your business is closed for public holidays,</p>
<p>maintenance or any other reason. Clients will not be able to</p>
<p>place online bookings  during these day</p>
<button style={{border:'none', backgroundColor:'rgba(78,78,78,1)', color:'white', borderRadius:'3px', height:'33px'}}>add close date</button>
</div>

</div>
    </>
  )
}

export default Close
