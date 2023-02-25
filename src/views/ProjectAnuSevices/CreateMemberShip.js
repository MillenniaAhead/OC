// import { form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import SelectMemberShipModal from './SelectMemModal'
import './App.css'
export default function CreateMemberShipProduct () {
    return (
<div class="container">
        <h2>Create a membership</h2>
< div class="row justify-content-center">
                <div class="form-control w-50 h-50 "> 
               <div class="form-group">
  <span class="form-group d-flex flex-row">
    <label for="formGroupExampleInput"><h5><b>Basic Info</b></h5></label></span>
    <div class="mb-3 border-top">
    <span class="form-group d-flex flex-row">
    <label for="formGroupExampleInput"><h5><b>Membership Name</b></h5></label></span>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Add Membership Name" />
   </div>
    <div class="mb-3">
  <label for="exampleFormControl Textarea1" class="form-label d-flex justify-content-start"><h5><b>Membership description</b></h5></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Add Membership Description"></textarea></div>   
        </div>
</div>
  </div>
<p>
  < div class="row justify-content-center ">
                <div class="form-control w-50 h-50 "> 
               <div class="form-group">
  <span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><h5><b>Services and sessions</b></h5></label></span>
    <h6 class="row justify-content-start m-1">Add the services and sessions included in the membership</h6>
    <div class="mb-3 border-top">
<span class="form-group d-flex flex-row">
    <label for="formGroupExampleInput"><h5><b>Included services</b></h5></label></span>
    </div>
   <p><div class="input-group-prepend">
  <span class="input-group-text row justify-content-start w-75 h-50 m-2">0 Services
  < SelectMemberShipModal />
  </span>   
  </div></p>
  </div>
<div class="row">
    <div class="col-6">
    <div class="form-group form-group d-flex flex-row">
    <label for="formGroupExampleInput2"><b>Sessions</b></label></div>
     <button class="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
  Limited
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    </div>
    </div>
    <div class="col-6">
    <div class="form-group form-group d-flex flex-row">
    <label for="formGroupExampleInput2"><b>Number of sessions</b></label></div>
    <div class="input-group">
      <div class="col-12">
<div class="input-group mb-2">
<div class="input-group-prepend">
 </div >
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= " 5" />
</div>
</div>
</div>
</div>
</div> 
</div>
 </div> 
</p>
<p>
  < div class="row justify-content-center ">
                <div class="form-control w-50 h-20 "> 
               <div class="form-group">
  <span class="form-group d-flex flex-row">
  <label for="formGroupExampleInput"><h5><b>Pricing and payment</b></h5></label></span>
    <h6 class="row justify-content-start m-1">Choose how you'd like your clients to pay.</h6>
    <div class="mb-3 border-top">
    <span class="form-group d-flex flex-row">
    <label for="formGroupExampleInput"><h5><b>Included services</b></h5></label></span>
    </div>
   <p><div class="input-group-prepend">
          <span class="input-group-text row justify-content-start w-75 h-50 ">0 Services<a href="#" class="link-success row justify-content-end ">Edit</a></span>   
              </div></p>
<div class="row">
    <div class="col-6">
    <div class="form-group form-group d-flex flex-row">
    </div>
    <button class="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
1 month
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
</div>
</div>
    <div class="col-6">
    <div class="form-group form-group d-flex flex-row">
    </div>
    <div class="input-group">
<div class="col-12">
<div class="input-group ">
<div class="input-group-prepend">
 </div >
<div class="input-group">
  <div class="col-auto">
   <div class="mb-3 border-top  w-50">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text"><div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></div></div>
</div >
<input type="text" class="form-control w-20" id="inlineFormInputGroup" placeholder=" " rows="2" />
</div>
</div>
</div>
</div>
</div>
</div>
</div> 
  </div>
 </div>
<div class="mb-3 border-top">
<span class="form-group d-flex flex-row p-2 ">
    <label for="formGroupExampleInput"><h3><b>Tax rate</b></h3></label></span>
 <div class="form-group d-flex flex-row ">
    <label for="formGroupExampleInput2"><b>Tax rate</b></label></div>
    <button class="dropdown-toggle w-50 h-50"type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  No tax
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   </div>
</div>
</div>
</div></div>
</p>
<p>
  < div class="row justify-content-center ">
  <div class="form-control w-50 h-50 "> 
  <div class="form-group">
  <span class="form-group d-flex flex-row">
  <label for="formGroupExampleInput"><h5><b>Colour custimisation</b></h5></label></span>
    <h6 class="row justify-content-start m-1">Select a colour that matches your business.</h6>
    <div class="mb-3 border-top">
    <span class="form-group d-flex flex-row">
   <img src="https://img.icons8.com/fluency/512/ellipse.png" width="50" height="50"/>
   <img src="https://cdn.iconscout.com/icon/free/png-128/create-circle-ellipse-arcs-arc-round-tool-4-19122.png" width="50" height="50"/>
   <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/circle-271-1156961.png" width="50" height="50"/>
   <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/oval-3922707-3251474.png" width="50" height="50"/>
   <div className="App-cir"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#863FF5"/>
</svg>
</div>
  </span>
    </div>
    </div>
    </div>
    </div>
</p>
 < div class="row justify-content-center ">
<div class="form-control w-50 h-50 "> 
<div class="form-group">
  <span class="form-group d-flex flex-row">
  <label for="formGroupExampleInput"><h5><b>Online sales</b></h5></label></span>
    <h6 class="row justify-content-start">Choose if you would like to sell your membership online.</h6>
    <div class="form-check form-switch">
     <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault"><b>Enable online sales</b></label>
        <div class="mb-3 border-top"></div>
        <div className='App-members'><div class="p-2"><center><b>Online Membership sales are coming soon to </b>
    <p><b>India with payments in fresha</b></p></center></div></div>
    {/* <div>
     <img src="C:\Users\sadaf sheikh\Desktop\image 10.png" /> 
     </div> */}
</div>
</div> 
</div>
</div>
<p>
< div class="row justify-content-center ">
   <div class="form-control w-50 h-50 "> 
<div class="form-group">
  <span class="form-group d-flex flex-row">
  <label for="formGroupExampleInput"><h5><b>Terms & Conditions</b></h5></label></span>
    <span class="row justify-content-start">if there are any rules attached to your membership it's a good place to mention them.</span>
    <div>
<span class="form-group d-flex flex-row">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start"><b>Terms & Conditions</b></label><label for="aria-describedby="> (Optional)</label></span>
  <textarea class="form-control w-50 h-50" id="exampleFormControlTextarea1" rows="2" placeholder="Add Terms & Conditions"></textarea></div> 
</div>
</div>
</div>
</p>
</div>
  )
}