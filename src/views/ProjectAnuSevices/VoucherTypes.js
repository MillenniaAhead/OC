// import { form  } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button' 
import './App.css'
export default function  VoucherTypeProduct () {
return (
<div class="row justify-content-center">
<form class="container">
<div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary">Next step</button></div>
<h6 className="justify-content-center">Step 1 of 2: Add your voucher type info </h6>
<b><h2 className="justify-content-center">Create a voucher Type </h2></b>
<div class="mb-3 border-top"></div>
</form>
<div class="form-control w-50 h-100 "> 
<form>
<div class="form-group d-flex flex-row"><h5><b>Voucher Info</b></h5></div>  
<div>add the voucher name,value and duration of the voucher.if the voucher value is higher than the retail price it will enciurage more sales.</div>
<div class="form-group">
  <span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><b>Voucher Name</b></label></span>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= " " />
</div>
<div class="row">
<div class="col-6">
<div class="form-group form-group d-flex flex-row">
<label for="formGroupExampleInput2"><b>Value</b></label></div>
<div class="input-group">
<div class="col-auto">
<div class="mb-3 border-top">
<div class="input-group mb-1">
<div class="input-group-prepend">
 <div class="input-group-text"><div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></div>
<input type="text" class="form-control w-30" id="inlineFormInputGroup" placeholder=" " rows="2" /></div>
</div>
</div >
</div>
</div>
</div>
</div>
<div class="col-6">
<div class="form-group form-group d-flex flex-row">
<label for="formGroupExampleInput2"><b>Retail Price</b></label></div>
<div class="input-group">
<div class="col-12">
<div class="mb-3 border-top">
<div class="input-group">
<div class="input-group-prepend">
 <div class="input-group-text"><div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></div><input type="text" class="form-control w-10" id="inlineFormInputGroup" placeholder=" " rows="2" /></div>
</div>
</div >
</div>
</div>
</div>
</div>
</div>
<div class="form-group d-flex flex-row"><h6><b>Valid for</b></h6></div>
<button class="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
6 months
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
</div>
<div class="form-check form-switch m-2">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
<label class="form-check-label d-flex justify-content-start m-4" for="flexSwitchCheckDefault"><b>Limit amount of sale</b></label>
</div>
<div class="form-group d-flex flex-row"><h6><b>Number of sales</b></h6></div>
<button class="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
50</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
</div>
<div class="mb-3 border-top"></div>
<h5 class="row justify-content-start m-1">Services Included</h5>
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><h6><b>Included services</b></h6></label></span>
<p><div class="input-group-prepend">
<span class="input-group-text row justify-content-start w-75 h-50 ">All Services<a href="#" class="link-success row justify-content-end ">Edit</a></span>   
</div></p>
<div class="form-control w-100 h-20 "> 
<div class="form-group">
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput"><h5><b>Online sales</b></h5></label></span>
<h6 class="row justify-content-start m-1">Choose if you would like to sell your voucher online.</h6>
<div class="mb-3 border-top"> 
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
<label class="form-check-label d-flex justify-content-start m-4" for="flexSwitchCheckDefault"><b>Enable online sales</b></label>
<div class="mb-3 border-top"></div>
 <div className='App-members p-2'><center><b>Online Membership sales are coming soon to </b>
<p><b>India with payments in fresha</b></p></center></div>
  </div>
  </div>
</div>
</div>
</form>
</div>
<div class="form-control w-50 h-50 "> 
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Voucher preview "/>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Voucher email subject: Voucher from UIUX Designer " />
<div className='App-voucher p-2'>
<center><img src="https://img.icons8.com/ios/2x/home-page.png"/></center>
<p>
<center><h2 class="p-2">UIUX Designer</h2></center>
<center><h4>Your location address will appear here</h4></center>
</p>
<center><div class="mb-3 border-top"></div></center>
<center><h4>Voucher value</h4></center>
<div><center><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>0</center></div>
<div class="mb-3 border-top"></div>
<div class="form-group mx-sm-3 mb-2">
<p><center><input type="text" class="form-control" id="inputPassword2" placeholder="Book Now"width="10" height="10" /></center>
</p> </div>
<p><center><h4 class="p-2">Voucher code:XXXXXX</h4></center></p>
<p><center><h4>Redeem on all services </h4></center></p>
<p><center><h4>Valid for 6 month</h4></center></p>
<p><center><h4>for multiple use until redeemed</h4></center></p>
</div>
</div>
</div>
)
}
