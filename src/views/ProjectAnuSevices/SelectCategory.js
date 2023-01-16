// import { form  } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './App.css' 
import CategoryMod from './CategoryModal'
import AddNewModal from './AddNewModal'
export default function SelectCategoryProduct () {
  return (
  <div class="row justify-content-center">
<form class="container">
<div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary">Save</button></div>
 <h2 className="justify-content-center">Add a New Product </h2>
</form>
<div class="form-control w-50 h-50 "> 
<form>
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><h5><b>Basic Info</b></h5></label></span>
<div class="mb-3 border-top">
<div class="form-group">
  <span class="form-group d-flex flex-row">
 <label for="formGroupExampleInput"><b>Product Name</b></label></span>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= " " />
</div>
</div>
 <div>
<span class="form-group d-flex flex-row">
<label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start"><b>Product Barcode</b></label><label for="aria-describedby="> (Optional)</label></span>
 <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="UPC,EAN.GTIN"></textarea></div> 
  <div class="form-group d-flex flex-row">
  <label for="formGroupExampleInput"><h5><b>Product Brand</b></h5></label> </div>
  <div class="d-flex justify-content-start"><AddNewModal /></div>
<div class="row">
<div class="col-6">
<div class="form-group form-group d-flex flex-row">
<label for="formGroupExampleInput2"><b>Measure</b></label></div>
 <button class="btn btn-secondary dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
Milliliters (ml)
  </button>
  <div class="dropdown-menu aria-labelledby=dropdownMenuButton">
</div>
</div>
<div class="col-6">
<div class="form-group form-group d-flex flex-row">
<label for="formGroupExampleInput2"><b>Amount</b></label></div>
<div class="input-group">
<div class="col-12">
<div class="input-group mb-2">
<div class="input-group-prepend">
 <div class="input-group-text"><div class="input-group-text">ml</div></div>
</div >
<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="0.00" rows="2" />
</div>
</div>
</div>
</div>
<div class="mb-3">
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><b>Short description </b> </label></span>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder=" "></textarea></div>
  <div class="mb-3">
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><b>Product description </b> </label></span>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder=" "></textarea></div>
<div>
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><b>Product Category </b> </label></span></div>
<div class="d-flex justify-content-start">
<CategoryMod />
</div>
</div>
</form>
</div>
<div class="form-control w-50 h-300 "> 
<div  class="align-self-center mb-20 form-group d-flex flex-row"><h4><b>Product Photos</b></h4></div>
<h6 class="align-self-center mb-20 form-group d-flex flex-row">Click and drop a photo</h6>
<div className='App-image'>
<img src="https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?size=338&ext=jpg&ga=GA1.2.46004435.1672642268" width="50" height="50" class="m-5"/>
<div class="m-2"><b>Add a photo</b></div></div>
</div>
</div>
)
}

