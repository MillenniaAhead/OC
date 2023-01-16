// import React from 'react'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalFooter, InputGroup, Input, InputGroupText } from "reactstrap"
//  import { InputGroup, Input, InputGroupText } from "reactstrap"
//  import {BsSearch } from "react-icons/bs";
import './App.css'

const SelectMemberShipModal = () => {
 const [formModal, setFormModal] = useState(false)
 return (
<div>
<span class="btn-success row justify-content-end">
<Button color='dark' outline onClick={() => setFormModal(!formModal)}>
Edit
</Button>
</span>
<Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
<ModalHeader toggle={() => setFormModal(!formModal)}><h2>Select Services</h2></ModalHeader>
<div>
<h5>Search Services</h5>
<div><InputGroup>

{/* <InputGroupText>
<BsSearch />
</InputGroupText> */}
<Input Style={{ backgroundColor: 'white', color:'Black'}} placeholder="Enter Name">
</Input>
</InputGroup>
</div>
</div>
<div class="form-check p-4">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label class="form-check-label" for="flexCheckDefault">
All Services 5
</label>
</div>
<div class="mb-3 border-top"></div>
<div class="form-check p-4">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label class="form-check-label" for="flexCheckDefault">
Hair 4
</label>
</div>
<div class="mb-3 border-top"></div>
<div class="form-check">
<table class="table">
  <thead>
<tr>
<td class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label class="form-check-label" for="flexCheckDefault">
Haircut 
</label>
</td>
<td scope="col p-4">45 min</td>
<td scope="col ">₹40</td>
</tr>
</thead>
</table>
</div>
<div class="form-check">
<table class="table">
<thead>
<tr>
<td class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label class="form-check-label" for="flexCheckDefault">
Hair Color
</label>
</td>
<td scope="col p-4">1h 15 min</td>
<td scope="col">₹57</td>
</tr>
 </thead>
</table>
</div>
<div class="form-check">
<table class="table">
<thead>
<tr>
<td class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label class="form-check-label" for="flexCheckDefault">
 Blow Dry
</label>
</td>
<td scope="col p-4">35 min</td>
<td scope="col">₹35</td>
</tr>
</thead>
</table>
</div>
<ModalFooter>
<Button color="btn btn-light" onClick={() => setFormModal(!formModal)}>
Close
 </Button>{' '}
  <Button color="btn btn-dark" onClick={() => setFormModal(!formModal)}>
 Select 0 Services
</Button>{' '}
</ModalFooter>
</Modal>
</div>
)
}
export default SelectMemberShipModal