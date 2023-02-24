// import React from 'react'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody} from "reactstrap"
import AddCatMod from './AddCatModal'

function CategoryMod ()  {
const [formModal, setFormModal] = useState(false)
    return (
  <div>
  <Button color='dark' outline onClick={() => setFormModal(!formModal)}>
Select a Category
</Button>
<Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
 <ModalHeader toggle={() => setFormModal(!formModal)}>Select a Category</ModalHeader>
<ModalBody>
<center> <img src=" https://cdn0.iconfinder.com/data/icons/green-magnifier-icons-set-version-01/487/41_search_magnifier_zoom_glass_delete_trash_remove-512.png " alt=" "  width="50" height="50"/>
<div class="align-self-center mb-20"><b>No Categories here yet.</b></div>
<div class="align-self-center mb-15">Your Categories will appear here</div>
<div>
<AddCatMod />
</div></center>
</ModalBody>
</Modal>
</div>
 )
}
export default CategoryMod