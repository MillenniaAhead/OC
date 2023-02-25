import { React, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Badge } from "reactstrap"
import axios from 'axios'

function NewCategory() {
  const [formModal, setFormModal] = useState(false)
  const [formData, setFormData] = useState({})

  const formDataFun = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:7000/api/newCategory", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Button color='white' onClick={() => setFormModal(!formModal)}>
        NewCategory
      </Button>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>New Category</ModalHeader>
        <ModalBody>
          <div className='mb-2'>
            <Label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-semibold">Category name </Label>
            <Input onChange={formDataFun} type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g.  Hair Services  " />
          </div>
          <div className='mb-2'>
            <div className="mb-2">
              <Label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start fw-semibold">Appointment color</Label>
              <div className="form-floating">
                <Input onChange={formDataFun} type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
                <p className="fw-light">See your Calendar Settings page under Setup to set how colors are
                  displayed on the calendar</p>
              </div>

              <div className="mb-3">
                <Label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start fw-semibold">Category description</Label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='dark' onClick={() => setFormModal(!formModal)}>
            <Badge color='dark' onClick={postData}>
              Save
            </Badge>
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default NewCategory