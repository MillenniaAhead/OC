import React from "react"
import AdvancedPricing from "./advancedPricing"

function SingleService () {
    return (
            <div class="container">
        <div  class="row justify-content-center">
        <form class="container">
        <div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary">Save</button></div>
        <h2 className="justify-content-center mb-1">Add a new single service</h2>
        <div class="mb-2 ">
    
        <div class="form-control w-50 h-50 " >
        <h4 className="d-flex justify-content-start mt-2 ">Basic Info</h4>
        <p className="d-flex justify-content-start  ">Add a service name and choose the treatment type.</p>
        <div class="mb-1 border-top">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start mt-1 fw-bold">Service name </label>
        <input type="text" class="form-control" id="formGroupExampleInput" />
       </div>
     
       <div class="fw-normal">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start fw-bold">Treatment type </label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Select Treatment Type " />
       </div>
<div class="mb-2">
  <p class="d-flex justify-content-start">Choose the most relevant treatment type. This won’t be visible to your clients. </p>
  </div>
       
       <div class="mb-2">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start fw-bold">Service category</label>
     <p id="pricing2" class="d-flex justify-content-start ">No service category selected
     <span id="green" class="d-flex justify-content-end ms-5" >Edit</span></p>
       </div>

       <div class="mb-1">
   <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start fw-bold">Service description </label>
   <label className="d-flex justify-content-end me-2">0/1000 </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
  </div>

  <div class="mb-1">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start">Aftercare description </label>
  <label className="d-flex justify-content-end me-2">0/1000 </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
  </div>

  <div class="mb-1">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start">Service available for </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Everyone" rows="1"></textarea>
  </div>
      </div>
        </div>
        </form>
        <form class="container">
      <div class="mb-2">
        <div class="form-control w-50 h-50 "> 
        <div class="col-auto">
        <h4 className="d-flex justify-content-start mt-2 ">Online booking</h4>
        <p className="d-flex justify-content-start">Enable online bookings, choose who the service is available for and add a short description.</p>
        <div class="mb-2 border-top">
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start m-2" for="flexSwitchCheckDefault">Enable online bookings</label>
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
        <p className="d-flex justify-content-start mt-2 border-bottom ">Assign team members to the service and manage commmission</p>
        
         <div class="d-flex justify-content-start m-1"> 
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label class="form-check-label" for="inlineCheckbox1">Select All</label>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-1">
<circle cx="15" cy="15" r="15" fill="#E5E5E5" fill-opacity="0.8" />
</svg> </div>
       </div>

       <div class="d-flex justify-content-start m-1 ">
       <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
      <label class="form-check-label" for="inlineCheckbox1"><div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-success">KA</button>
    <p class="m-1">Kondeti Anusha</p>
  </div></label>
      </div>

      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
      <label class="form-check-label" for="inlineCheckbox1"><div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-success ">WS</button>
    <p class="m-1">Wendy Smith</p>
  </div></label>
      </div>
      </div>
         
         <div class="mt-2 border-top">
      <h4 className="d-flex justify-content-start mt-2">Team member commission</h4>
      <p className="d-flex justify-content-start  border-bottom fw-light">Calculate team member commission when the service is sold.</p>
        <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start mt-2 mb-2 fw-light" for="flexSwitchCheckDefault">Enable team member commission</label>
        </div>
        </div>
          </div>
          </div>
          </form>

          
        <form class="container">
      <div class="mb-2">
      <div className="form-control w-50 h-50 "> 
        <h4 className="d-flex justify-content-start mt-2">Pricing and Duration</h4>
        <p className="d-flex justify-content-start mt-2 border-bottom">Add the pricing options and duration of the service.</p>
        <div class="container" id="grey">
        <h5 className="d-flex justify-content-start mt-2" >Pricing option 1</h5>
       <div class="d-flex justify-content-start ">
        <div class="col-md-2 ms-1 ">
   <label for="validationCustom04" class="form-label">Duration</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">45min</option>
      </select>
      </div>
       <div class="col-md-2 ms-1 ">
      <label for="validationCustom04" class="form-label">Price type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fixed</option>
      </select>
      </div>
    <div class="col-md-3 ms-1">
    <label for="validationCustom02" class="form-label">Price </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 40.00" />
    </div>
     <div class="col-md-3 ms-1">
    <label for="validationCustom02" class="form-label">Special </label>
    <input type="text" class="form-control" id="validationCustom02" value="₹ | 0.00" />
    </div>
  </div>
  </div>
  <div class="container">
     <div class="col-md-6 mt-2">
    <label for="validationDefault01" class="form-label">Pricing name <span className="fw-light">(optional)</span></label>
    <input type="text" class="form-control col-md-4 mt-1 " id="validationDefault01" value="e.g. Long hair" required />
       </div>
       
       </div>
       <div> <p id="green" className="d-flex justify-content-start mt-1"><AdvancedPricing /></p>
       </div>
  

  <div className="d-flex justify-content-start mt-1" id="green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle ms-1 me-1" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Add pricing option</div>

      <div class="mt-2 border-top">
          <h4 className="d-flex justify-content-start mt-2">Extra Time</h4>
          <p className="d-flex justify-content-start mt-2 border-bottom fw-light">Enable extra time after the service</p>
          <div class="form-check form-switch mt-2">
           <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
         <label class="form-check-label d-flex justify-content-start mt-1 mb-2" for="flexSwitchCheckDefault">Enable extra time</label>
        </div>
        </div>
        </div>
        </div>
        </form>

         <form class="container">
      <div class="mb-2">
        <div className="form-control w-50 h-50 " > 
        <h4 className="d-flex justify-content-start mt-2 border-bottom">Sales settings</h4>
        <div className="d-flex justify-content-start mt-2"><h6>Set the tax rate </h6></div>
        <div class="mt-2">
        <label for="validationDefault01" class="form-label">Tax<span className="fw-light">(Included in price)</span></label>
    <input type="text" class="form-control col-md-4 mt-1 " id="validationDefault01" value="Default: No tax" required />
       </div>
                           
      <div class="mt-2 border-top">
      <h5 className="d-flex justify-content-start mt-2">Voucher sales</h5>
      
        <div class="form-check form-switch ">
     <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault">Enable extra time</label>
        </div>

        <div class="mt-1">
  <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start mt-1">Voucher expiry period</label>
  <input type="text" class="form-control col-md-4 mt-1  mb-2" id="validationDefault01" value="Default (6 Months)" required />
  </div>
        </div>
         </div>
        </div>
        </form>
        </div>
        </div>
    )
}

export default SingleService