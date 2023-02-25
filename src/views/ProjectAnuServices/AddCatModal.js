import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import axios from 'axios'

function AddCatMod() {
  const [formModal, setFormModal] = useState(false)
  const [visible, setVisible] = useState(true)
  const [formData, setFormData] = useState({})
  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:4000/api/addCatMods", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Button color='dark' outline onClick={() => setFormModal(!formModal)}>
        Add a Category
      </Button>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Add a Category</ModalHeader>
        <ModalBody>
          <div className='mb-2'>
            <label className='form-label' htmlFor='email'>Category Name</label>
            <input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="e.g.Fresha" required />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="btn btn-light" onClick={() => setFormModal(!formModal)}>
            Cancel
          </Button>{' '}
          <Button onClick={postData} >Save</Button>
          <Alert color='primary' isOpen={visible} toggle={() => setVisible(false)}>
            <div className='alert-body'>
              Data Added Successfully
            </div>
          </Alert>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default AddCatMod