// import { form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';  
import './App.css'
export default function VoucherSettingList () {
  return (
<div class="row justify-content-center">
<form class="container ">
 <div class="d-flex justify-content-center"><h6>Settings: Vouchers Settings</h6></div>
<div class="d-flex flex-row-reverse bd-highlight"><button type="button" class="btn btn-dark">Save</button></div>
<p class="d-flex justify-content-center"><h2>Vouchers Settings</h2></p>
</form>
<div class="form-control w-50 h-50 "> 
<form>
<div class="d-flex flex-row form-control h-50"><h5><b>Vouchers</b></h5></div>  
<div class="form-group">
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput">Default Expiry Period </label></span>
<div>
<div class="dropdown show d-flex justify-content- start">
<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
6 Months
</a>
{/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
<a class="dropdown-item" href="#"> </a>
<a class="dropdown-item" href="#"> </a>
<a class="dropdown-item" href="#"> </a>
</div> */}
</div>
</div>
</div>
</form>
</div>
<p>
<div class="row justify-content-center">
<div class="form-control w-50 h-50 "> 
<form>
<div  class="d-flex flex-row form-control h-50"><h5><b>Upselling</b></h5></div>  
<div class="form-group">
<span class="form-group d-flex flex-row">
<label for="formGroupExampleInput">Encourage clients to book additional services and buy suitable membership when booking online.<a href="#" class="link-success">How it works</a> </label></span>
<p><div>
<center><img src=" https://cdn0.iconfinder.com/data/icons/green-magnifier-icons-set-version-01/487/41_search_magnifier_zoom_glass_delete_trash_remove-512.png " alt=" "  width="50" height="50"/></center>
<div><center><b>You don't have any online bookings enabled</b></center></div>
<div><center><a href="#" class="link-success">Enable online bookings</a></center></div>
</div>
</p>
</div>
</form>
</div>
</div>
</p>
</div> 
)
}
