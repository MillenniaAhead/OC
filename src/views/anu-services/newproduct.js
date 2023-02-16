import React from "react"
import SelectBrand from "./selectBrand"

function NewProduct () {
    return (
      <div class="container">
        <div  class="row justify-content-center">
        <form class="container">
        <div class="d-flex justify-content-end"><button type="button" class="btn btn-outline-dark me-2">Save</button></div>
        <h2 className="justify-content-center">Add New Product </h2>
        <div class="mb-2 ">
        
        <div class="form-control w-50 h-50 " >
        <h4 className="d-flex justify-content-start mb-2">Basic Info</h4>
        <div class="mb-1 border-top">
  <label for="formGroupExampleInput" class="form-label d-flex justify-content-start mt-1">Product Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" />
</div>
<div class="mb-2">
  <label for="formGroupExampleInput2" class="form-label d-flex justify-content-start">Product barcode (Optional)</label>
  <input type="text" class="form-control mb-2" id="formGroupExampleInput2" placeholder="UPC,EAN,GTIN" />
  <label for="exampleFormControlInput1" class="form-label d-flex justify-content-start">Product Brand</label>
  <div ><SelectBrand /></div>

  <div class="col-md-4">
    <label for="inputState" class="form-label d-flex justify-content-start ">Measure</label>
   <select id="inputState" class="form-select mb-1">
      <option selected>Milliliters(ml)</option>
    </select>
    
    <div class="col-auto mb-1">
    <label class="visually-hidden" for="autoSizingInputGroup">Amount</label>
    <div class="input-group">
      <div class="input-group-text">ml</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="0.00" />
    </div>
  </div>
  </div>

  <div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start">Short discription</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
  </div>
<div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start">Product discription</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>

  <label for="exampleFormControlInput1" class="form-label d-flex justify-content-start">Product Category</label>
  <div class="nav-item"><a class="navbar-brand active d-flex justify-content-start" href="www.goggle.com">Select a category</a></div>
</div>
</div>
</div>

  </div>
        </form>
    <form class="container">
      <div class="mb-2">
        <div class="form-control w-50 h-50 "> 
        <h4 className="d-flex justify-content-start">Pricing</h4>
        
          <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Supply price</label>
        <div class="input-group mb-2">
  <label class="btn btn-outline-secondary" type="button" id="button-addon1">INR</label>
  <input type="text" class="form-control" placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <p class="d-flex justify-content-start">Retail sales</p>
        <p class="d-flex justify-content-start">Allow sales of this product at checkout.</p>

        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault">Enable retail sales</label>
        </div>
           
        <div class="input-group mb-2 ">
        <form>
        <p>Retail price</p>

  <input type="text" class="form-control " placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
  </form> 
   <form>
  <p>Special price </p>
 
  <input type="text" class="form-control m-1" placeholder="0.00" aria-label="Example text with button addon" aria-describedby="button-addon1" />
  </form>
  <form>
  <p>Markup </p>
  <input type="text" class="form-control " placeholder="0.00" aria-label="Example" aria-describedby="button-addon1" />
</form>
       </div>
       <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start">Tax</label>
  <textarea class="form-control" placeholder="Default: No tax" id="exampleFormControlTextarea1" rows="2" ></textarea>
       </div>

       <div class="border-top d-flex justify-content-start">
       <p>Team Member Commission</p>
       </div>
       <div class="d-flex justify-content-start">
       <label>Calculate team member commission when the product is sold.</label>
       </div>
       <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault">Enable team member commission</label>
        </div>
        
          </div>
        </div>
      </div>
    </form>
  </div>

  <form class="container">
       <div class="mb-2">
        <div class="form-control w-50 h-50 "> 
        <h4 className="d-flex justify-content-start mt-2">Inventory</h4>
        <p  className="d-flex justify-content-start border-bottom m-1">Manage stock levels of this product through Outlet Control.</p>
        
        <div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start mt-2">SKU(Stock keeping Unit)</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
        
        <div class="nav-item"><a class="navbar-brand active d-flex justify-content-start " href="www.goggle.com">Generate SKU automatically</a></div>
        <div class="nav-item"><a class="navbar-brand active d-flex justify-content-start mt-1 border-bottom" href="www.goggle.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle ms-1 " viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>Add another SKU code</a></div>
        <p  className="d-flex justify-content-start mt-1">Supplier</p>
        <div class="nav-item"><a class="navbar-brand active d-flex justify-content-start border-bottom  mb-1" href="www.goggle.com">Select a Supplier</a></div>
         
        <div class="d-flex justify-content-start mb-1">
       <label>Stock quantity</label>
       </div>
       <div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault">Track stock quantity</label>
        </div>

        <div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-start border-bottom">Current stock quantity</label>
  <textarea class="form-control border-bottom " id="exampleFormControlTextarea1" rows="2" placeholder="0"></textarea>
        </div>

        <div class="mb-2 border-top">
        <p  className="d-flex justify-content-start mt-2">Low stock and reordering</p>
        <p class="d-flex justify-content-start">Outlet Control will automatically notify you and pre-fill the recorder quantity set for
future stock orders.<span class="nav-item"><a class="navbar-brand m-3 active" href="www.goggle.com">Learn more</a></span></p>
        </div>
          
        <div class="input-group mb-1">  
        <form>
       <p className="d-flex justify-content-start ms-1"><b>Lock Stock level</b></p>
       <input type="text" class="form-control mt-1 me-1" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
       <p className="mt-1">The level to get notified to Reorder</p>
       </form>
       <form>
       <p className="d-flex justify-content-start ms-1"><b>Reorder quantity</b></p>
       <input type="text" class="form-control mt-1 ms-1" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
       <p className="mt-1 ms-1">The default amount to order</p>
       </form>
       </div>

       <div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label d-flex justify-content-start" for="flexSwitchCheckDefault">Receive low stock notifications.</label>
        </div>
      
        </div>   
       </div>
       </form>

        </div>
    )
}

export default NewProduct
