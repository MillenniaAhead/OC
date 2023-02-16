import {React, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap'

const ServiceType = () => {
const [centeredModal, setCenteredModal] = useState(false)
 return (
<div className='vertically-centered-modal'>
        <Button color='white'  onClick={() => setCenteredModal(!centeredModal)}>
          New Service
        </Button>
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}><b>Choose a service type</b></ModalHeader>
          <ModalBody>
         
          <div className='border mb-2'>
            <b class="d-flex justify-content-start m-2 ">Single Service</b>
             <p class="d-flex justify-content-start  m-2 fw-light">Services which can be booked individually
             <span class="d-flex ms-5"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
            </svg> </span></p>
             </div>
             <div className='border'>
             <b class="d-flex justify-content-start m-2 mt-2">Package</b>
            <p class="d-flex justify-content-start m-2 fw-light">Multiple services booked together in one appointment
             <span class="d-flex m-1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
          <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
           </svg> </span></p>
             </div>
          </ModalBody>
        </Modal>
      </div>

 )
}
export default ServiceType