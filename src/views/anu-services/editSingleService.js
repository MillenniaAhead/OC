import React from "react"
import SelectCategory from "./selectCategory"

function EditSingleService () {
    return (
        <div class="container">
        <div  class="row justify-content-center">
        <form class="container">
        <div class="d-flex justify-content-end mt-2">
        <button type="button" class="btn btn-outline-danger me-2">Delete</button>
        <button type="button" class="btn btn-outline-dark me-2">Save</button></div>
        <h2 className="justify-content-center mt-2">Edit single service</h2>
        <div class="mb-2 ">
        <div class="col-md-6">  
        <div class="form-control " >
        <h4 className="d-flex justify-content-start mt-2 ">Basic Info</h4>
        <p className="d-flex justify-content-start  ">Add a service name and choose the treatment type.</p>

        <div class="mb-2 ">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start fw-semibold mt-2">Package name </label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Haircut" />
       </div>
       <div class="mb-1">
     <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start fw-semibold">Treatment type</label>
     <div class="form-floating">
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Haircut" />
     <label for="floatingSelect" class="fw-light">Women's Haircut</label>
     <p className="d-flex justify-content-start fw-light">Choose the most relevant treatment type. This won't be visible your to clients. </p>
      </div>
      </div>
             
      <div class="mb-2">
          <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start fw-bold"><SelectCategory /></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Hair" rows="1"></textarea>
       </div>

       <div class="mb-1">
      <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start fw-bold">Service description</label>
      <label class="d-flex justify-content-end">0/1000</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
      </div>

      <div class="mb-1">
      <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start fw-bold">Aftercare description</label>
      <label class="d-flex justify-content-end">0/1000</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add Aftercare description" rows="4"></textarea>
      </div>

      <div class="mb-2">
     <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start fw-bold">Service available for</label>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Everyone" />
      </div>
        </div>
        </div>
        </div>
        </form>

        
        <form class="container">
      <div class="mb-2">
        <div class="form-control w-50 h-50 "> 
        <div class="col-auto">
        <h4 className="d-flex justify-content-start mt-2">Online booking</h4>
        <p className="d-flex justify-content-start ">Enable online bookings,choose who the service is available for and add a short description.</p>
        <div class="mb-2 border-top">
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start mt-2" for="flexSwitchCheckDefault">Enable online bookings</label>
        </div>
       </div>
        </div>
        </div>
        </div>
        </form>

        <form class="container">
      <div class="mb-2">
        <div className="form-control w-50 h-50 "> 
        <h4 className="d-flex justify-content-start mt-2">Team</h4>
        <p className="d-flex justify-content-start mt-1 border-bottom ">Assign team members to the service and manage commmission</p>
        
         <div class="d-flex justify-content-start mt-1"> 
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label class="form-check-label" for="inlineCheckbox1">Select All</label>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
<circle cx="15" cy="15" r="15" fill="#E5E5E5" fill-opacity="0.8" />
</svg> </div>
       </div>

       <div class="d-flex justify-content-start mt-2 ">
       <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
      <label class="form-check-label" for="inlineCheckbox1"><div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-success ms-1">KA</button>
    <p class="m-1">Kondeti Anusha</p>
  </div></label>
      </div>

      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
      <label class="form-check-label" for="inlineCheckbox1"><div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-success ms-1">WS</button>
    <p class="m-1">Wendy Smith</p>
  </div></label>
      </div>
      </div>
         
         <div class="mt-2 border-top">
      <h4 className="d-flex justify-content-start mt-2">Team member commission</h4>
      <p className="d-flex justify-content-start mt-1 border-bottom fw-light">Calculate team member commission when the service is sold.</p>
        <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start mt-2 mb-1 fw-light" for="flexSwitchCheckDefault">Enable team member commission</label>
        </div>
        </div>
          </div>
          </div>
          </form>

          
          <form class="container">
      <div class="mb-2">
      <div className="form-control w-50 h-50 "> 
        <h4 className="d-flex justify-content-start mt-2">Pricing and Duration</h4>
        <p className="d-flex justify-content-start mt-2 border-bottom ">Add the pricing options and duration of the service.</p>
        <div class="container" id="grey">
        <h5 className="d-flex justify-content-start mt-2" >Pricing Team1</h5>
         
       <div class="d-flex justify-content-start ">
        <div class="col-md-2 ms-1">
   <label for="validationCustom04" class="form-label">Duration</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">45min</option>
      </select>
      </div>
       <div class="col-md-2 ms-1">
      <label for="validationCustom04" class="form-label">Price type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fixed</option>
      </select>
      </div>
    <div class="col-md-3  ms-1">
    <label for="validationCustom02" class="form-label">Price </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 40.00" />
    </div>
     <div class="col-md-3 ms-1">
    <label for="validationCustom02" class="form-label">Special </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 0.00" />
    </div>
  </div>
  <div class="container">
     <div class="col-4 mt-2 ">
    <label for="validationDefault01" class="form-label">Pricing name<span className="fw-light">(optional)</span></label>
    <input type="text" class="form-control col-md-6 " id="validationDefault01" value="e.g. Long hair" required />
       </div>
       </div>
       <div> <p id="green" className="d-flex justify-content-start mt-1">Advanced Pricing Option</p>
       </div>
  </div>

  <div className="d-flex justify-content-start " id="green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle ms-2 me-1" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Add pricing option</div>

      <div class="mt-2 border-top">
          <h4 className="d-flex justify-content-start mt-2">Extra Time</h4>
          <p className="d-flex justify-content-start mt-1 border-bottom fw-light">Enable extra time after the service</p>
          <div class="form-check form-switch mt-2">
           <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
         <label class="form-check-label d-flex justify-content-start mt-2 mb-1" for="flexSwitchCheckDefault">Enable extra time</label>
        </div>
        </div>
        </div>
        </div>
        </form>

        <form class="container ">
      <div class="mb-2 ">
        <div className="form-control w-50 h-50 " > 
        <h4 className="d-flex justify-content-start mt-2 border-bottom">Sales settings</h4>
        <div className="d-flex justify-content-start mt-2"><h6>Set the tax rate </h6></div>
        <div class="mt-1">
  <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start">Tax <p className="fw-light">(Included in price)</p></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="No Tax" />
  </div>
                           
<div class="mt-2 border-top">
      <h5 className="d-flex justify-content-start mt-2">Voucher sales</h5>
      
        <div class="form-check form-switch mt-1">
     <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label d-flex justify-content-start mt-2" for="flexSwitchCheckDefault">Enable extra time</label>
        </div>

        <div class="mt-2 mb-2">
  <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start fw-bold">Voucher expiry period</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Default (6 months)" />
  </div>
        </div>
         </div>
        </div>
        </form>

        </div>
        </div>
    
    )
}

export default EditSingleService