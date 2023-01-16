// import { form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';  
import './App.css' 
import {Button} from 'reactstrap'
export default function VoucherList () {
  return (
  <div class="container ">
 <div class="d-flex flex-row bd-light "><h6>Setting<b>Vouchers</b></h6></div>
<div class="d-flex flex-row-reverse bd-highlight"><button type="button" class="btn btn-dark">Add Voucher type</button></div>
<p class="d-flex justify-content-start"><h2>Vouchers</h2></p>
 <div class="form-control w-50% h-1px">
<form>
<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSQiUNgqSdh9g8ALIrCEKdO6AHvoceknaZg&usqp=CAU"  width="50" height="50" /></center>
<div><b><center>Add a Voucher type.</center></b></div>
<div><center>You have no active voucher types</center></div>
<div><center><Button variant="dark left mb-5">Add Voucher type</Button></center></div>
</form>
</div>
</div>
 )
}
