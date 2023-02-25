import {Button} from 'reactstrap'

export default function MemberShipList () {
  return (
  <div className="container ">
 <div className="d-flex flex-row bd-light "><h6>Setting:<b>Memberships</b></h6></div>
<div className="d-flex flex-row-reverse bd-highlight"><button type="button" className="btn btn-dark">Create membership</button></div>
<span className="d-flex justify-content-start"><h2>Memberships</h2></span>
 <div className="form-control w-100% h-1px">
<form>
<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1evxvQnYHmmtVucexBPPQvrUurwCQ7lNQ7oi81DXvytyu0oH-Pkj6-YZtgTQbaUnwDQ&usqp=CAU"  width="100" height="100" /></center>
<div><center><b>Create a membership</b></center></div>
<div><center>You have no active memberships</center></div>
<div><center><Button variant="dark left mb-5">Create Membership</Button></center></div>
</form>
</div>
</div>
)
}
