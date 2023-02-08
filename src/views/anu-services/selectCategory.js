import {React, useState} from "react"
import { Button, Modal, ModalHeader, ModalBody, Label, Input, InputGroup, InputGroupText } from "reactstrap"
import { Search } from 'react-feather'

const SelectCategory = () => {
    const [formModal, setFormModal] = useState(false)
    
    return (
        <div>
             <Button color='white' outline onClick={() => setFormModal(!formModal)}>
          Select Category
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}><b>Select Category</b></ModalHeader>
          <ModalBody>
          <div class="mb-3">
          <div><InputGroup>
        <InputGroupText>
            <Search />
        </InputGroupText>
        <Input Style={{ backgroundColor: 'white', color:'Black'}} placeholder="Search category...">
        </Input>
        </InputGroup>
          </div>
       </div>
       <div class="mb-2 border-bottom ">
       <Label for="floatingSelect"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A5DFF8" class="bi bi-circle-fill" viewBox="0 0 16 16">
       <circle cx="8" cy="8" r="8"/>
       </svg> Hair</Label>
       </div>
       <div class="mb-4 mt-2  ">
       <Label for="floatingSelect"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A5DFF8" class="bi bi-circle-fill" viewBox="0 0 16 16">
       <circle cx="8" cy="8" r="8"/>
       </svg> Face</Label>
       </div>

          </ModalBody>
          </Modal>
        </div>
    )
}
export default SelectCategory