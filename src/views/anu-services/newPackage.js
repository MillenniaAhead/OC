import React from "react"

function NewPackage () {
    return (
        <div class="container">
        <div  class="row justify-content-center">
        <form class="container">
        <div class="d-flex justify-content-end mt-2"><button type="button" class="btn btn-secondary">Save</button></div>
        <h2 className="justify-content-center mt-2">Add  new package </h2>
        <div class="mb-2 ">
        <div class="col-md-6">  
        <div class="form-control " >
        <h4 className="d-flex justify-content-start mt-2">Basic Info</h4>
        <p className="d-flex justify-content-start  ">Add a package name, description and choose who it’s available for.</p>

        <div class="mb-2 border-top">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start mt-1">Package name </label>
        <input type="text" class="form-control" id="formGroupExampleInput" />
       </div>
        
       <div class="border-top">
          <label for="formGroupExampleInput" class="form-label d-flex justify-content-start mt-1">Package category</label>
    <p id="pricing2" class="d-flex justify-content-start mt-1">No service category selected
     <p id="green" class="d-flex justify-content-reverse ms-5" >Edit</p></p>

       </div>
       <div class="mb-2">
      <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start ">Package description</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add a short description" rows="4"></textarea>
      </div>
          
      <div class="mb-2">
     <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start">Package available for </label>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="EveryOne" />
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
        <p className="d-flex justify-content-start mt-1 ">Enable online bookings, choose who the service is available for and add a short description.</p>
        <div class="mb-1 border-top">
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
        <div class="col-md-6">  
        <div class="form-control " >
        <h4 className="d-flex justify-content-start mt-2 ">Service</h4>
        <p className="d-flex justify-content-start  ">Assign services to your package.</p>
        <div className="border-top">
        <div className="d-flex justify-content-start mt-1" id="green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle me-1" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
       </svg>Select service</div>
       </div>
        
        <div className="d-flex justify-content-start border-top mt-2">
       <h5 className="d-flex justify-content-start mt-1 ">Extra options</h5>
       </div>
       <div class="mb-1">
     <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start">Schedule type</label>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Booked in a sequence" />
      </div>
     <div> <p className="d-flex justify-content-start">Services can be booked in sequential order, or in parallel with 2 staff members </p>
     <p>at the same start time.<span id="green" className="ms-1 me-1"> Learn more </span> about packages.</p></div>
        </div>
        </div>
        </form>
        
        <form class="container">
        <div class="col-md-6 mt-2">  
        <div class="form-control" >
        <h4 className="d-flex justify-content-start mt-2 ">Price</h4>
        <p className="d-flex justify-content-start  ">Add the price of the packages</p>
        <div className="border-top">
        <div class="mb-2 mt-1">
     <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start">Pricing type</label>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Servicing Pricing" />
      </div>
        </div>

        <div>
        <h6 className="d-flex justify-content-start mt-2 ">Retail Price</h6>
        <div class="form-floating mb-2">
     <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled />
      <label for="floatingInputDisabled">₹  | 0.00</label>
     </div>
     </div>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}

export default NewPackage