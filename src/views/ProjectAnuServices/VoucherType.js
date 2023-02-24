// import { form  } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button' 
import './App.css'
import axios from 'axios'
import { useState } from 'react'


function VoucherTypeProduct ()  {
 
    // const [formModal, setFormModal] = useState(false)
    const [formData, setFormData] = useState({})
  
    const formDataFun = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
    }
  const postData = (e) => {
      e.preventDefault()
      console.log(formData)
      axios.post("http://localhost:4000/api/VoucherTypes", formData)
        .then((response) => {
          console.log(response.data)
        })
        .catch(err => console.log(err))
    }
   return (
    // <div className="row justify-content-center">
    //   {/* <form className="container"> */}
    //     <div className="d-flex justify-content-end">
    //       {/* <button color='primary' onClick={() => setFormModal(!formModal)} > */}
    //         <button onClick={postData} >Save</button>
    //       {/* </button> */}
    //       </div>
         
<div className="row justify-content-start">
<form className="container">
<div className="d-flex justify-content-end"> <button onClick={postData} >Next step</button></div>
<h6 className="justify-content-center">Step 1 of 2: Add your voucher type info </h6>
<b><h2 className="justify-content-center">Create a voucher Type </h2></b>
<div className="mb-3 border-top"></div>
</form>
<div className="form-control w-50 h-100 "> 
<form>
<div className="form-group d-flex flex-row"><h5><b>Voucher Info</b></h5></div>  
<div>add the voucher name,value and duration of the voucher.if the voucher value is higher than the retail price it will enciurage more sales.</div>
<div className="form-group">
  <span className="form-group d-flex flex-row">
<label htmlFor="formGroupExampleInput"><b>Voucher Name</b></label></span>
  <input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="" required /></div>
<div className="row"> 
<div className="col-6">
<div className="form-group form-group d-flex flex-row">
<label htmlFor="formGroupExampleInput2"><b>Value</b></label></div>
<div className="input-group">
  
<div className="col-auto">
<div className="mb-3 border-top">
<div className="input-group mb-1">
<div className="input-group-prepend">
 <div className="input-group-text"><div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></div>
<input onChange={formDataFun} name='name' type="number" className="form-control" id="validationDefault01" placeholder="" required /></div>
{/* <input type="text" className="form-control w-30" id="inlineFormInputGroup" placeholder=" " rows="2" /></div> */}
</div>
</div >
</div>
</div>
</div>
</div>
<div className="col-6">
<div className="form-group form-group d-flex flex-row">
<label htmlFor="formGroupExampleInput2"><b>Retail Price</b></label></div>
<div className="input-group">
<div className="col-12">
<div className="mb-3 border-top">
<div className="input-group">
<div className="input-group-prepend">
 <div className="input-group-text"><div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></div>
<input onChange={formDataFun} name='name' type="number" className="form-control" id="validationDefault01" placeholder="" required /></div>
{/* <input type="text" className="form-control w-10" id="inlineFormInputGroup" placeholder=" " rows="2" /></div> */}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="form-group d-flex flex-row"><h6><b>Valid for</b></h6></div>
<button className="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
6 months
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
</div>
<div className="form-check form-switch m-2">
<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
<label className="form-check-label d-flex justify-content-start m-4" htmlFor="flexSwitchCheckDefault"><b>Limit amount of sale</b></label>
</div>
<div className="form-group d-flex flex-row"><h6><b>Number of sales</b></h6></div>
<button className="dropdown-toggle  w-100 h-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
50</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
</div>
<div className="mb-3 border-top"></div>
<h5 className="row justify-content-start m-1">Services Included</h5>
<span className="form-group d-flex flex-row">
<label htmlFor="formGroupExampleInput"><h6><b>Included services</b></h6></label></span>
<span><div className="input-group-prepend">
<span className="input-group-text row justify-content-start w-75 h-50 ">All Services<a href="#" className="link-success row justify-content-end ">Edit</a></span>   
</div></span>
<div className="form-control w-100 h-20 "> 
<div className="form-group">
<span className="form-group d-flex flex-row">
<label htmlFor="formGroupExampleInput"><h5><b>Online sales</b></h5></label></span>
<h6 className="row justify-content-start m-1">Choose if you would like to sell your voucher online.</h6>
<div className="mb-3 border-top"> 
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
<label className="form-check-label d-flex justify-content-start m-4" htmlFor="flexSwitchCheckDefault"><b>Enable online sales</b></label>
<div className="mb-3 border-top"></div>
 <div className='App-members p-2'><center><b>Online Membership sales are coming soon to </b>
<span><b>India with payments in fresha</b></span></center></div>
  </div>
  </div>
</div>
</div>
</form>
<div className="form-control w-50 h-50 "> 
<input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="Voucher preview" required /></div>
{/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Voucher preview "/> */}
{/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Voucher email subject: Voucher from UIUX Designer " /> */}
<input onChange={formDataFun} name='name' type="text" className="form-control" id="validationDefault01" placeholder="Voucher email subject: Voucher from UIUX Designer" required /></div>
{/* </div> */}
<div className='App-voucher p-2'>
<center><img src="https://img.icons8.com/ios/2x/home-page.png"/></center>
<span>
<center><h2 className="p-2">UIUX Designer</h2></center>
<center><h4>Your location address will appear here</h4></center>
</span>
<center><div className="mb-3 border-top"></div></center>
<center><h4>Voucher value</h4></center>
<div><center><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>0</center></div>
<div className="mb-3 border-top"></div>
<div className="form-group mx-sm-3 mb-2">
<span><center><input type="text" className="form-control" id="inputPassword2" placeholder="Book Now"width="10" height="10" /></center>
</span> 
<span><center><h4 className="p-2">Voucher code:XXXXXX</h4></center></span>
<span><center><h4>Redeem on all services </h4></center></span>
<span><center><h4>Valid for 6 month</h4></center></span>
<span><center><h4>for multiple use until redeemed</h4></center></span></div>
</div>
</div>
// </div>
// </div>
)
}

export default VoucherTypeProduct