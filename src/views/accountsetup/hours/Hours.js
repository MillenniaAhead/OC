import React from 'react'
import { useHistory } from 'react-router-dom'

function Hours() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/invoice")
  }
  return (
    <>
    <div className='d-flex justify-content-between aling-items-center ' style={{borderBottom:'1px solid green'}}>

    <div style={{fontSize:'30px', marginLeft:'10px'}}>&#215;</div>
    <div>
    
    <button onClick={navigateHandler} style={{width:'70px', margin:'10px 5px', padding:'5px', borderRadius:'3px'}}>Save</button>
    </div>
    </div>
    <div className='d-flex justify-content-center aling-items-center mt-3'>
        <h2>Opening hours</h2>
    </div>
    <div className="container w-75 " style={{border:'1px solid rgba(0,0,0,0.2)'}}>
        <div className='d-flex justify-content-center aling-items-center mt-1 mb-' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1'> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Monday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'195px'}}>
  <button className="btn btn-secondary dropdown-toggle border " type="button"  data-bs-toggle="dropdown" >
   10:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-1 ms-3'>+</div>
        </div>
        <div className='d-flex justify-content-center aling-items-center mt-1 mb-1' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1'> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Tuesday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'195px'}}>
  <button className="btn btn-secondary dropdown-toggle border ms-7" type="button"  data-bs-toggle="dropdown">
   10:00Am
  </button>
  <ul   class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a  class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-1 ms-3'>+</div>
        </div>
        <div className='d-flex justify-content-center aling-items-center  mt-1 mb-1' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1 '> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"  style={{marginLeft:'none'}}/>
  <label className="form-check-label" for="flexCheckDefault" >
   Wednesday
  </label></div>

  <div className='mb-1' style={{marginLeft:'181px'}}>
  <button className="btn btn-secondary dropdown-toggle border " type="button"  data-bs-toggle="dropdown" >
   10:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-1 ms-3'>+</div>
        </div>
        <div className='d-flex justify-content-center aling-items-center mt-1 mb-1' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1'> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Thursday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'195px'}}>
  <button className="btn btn-secondary dropdown-toggle border ms-7" type="button"  data-bs-toggle="dropdown" >
   10:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-2 ms-3'>+</div>
        </div>
        <div className='d-flex justify-content-center aling-items-center mt-2 mb-2' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1'> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Friday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'219px'}}>
  <button className="btn btn-secondary dropdown-toggle border ms-7" type="button"  data-bs-toggle="dropdown" >
   10:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-2 ms-3'>+</div>
        </div>
        <div className='d-flex justify-content-center aling-items-center mt-2 mb-2' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1'> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Saturday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'195px'}}>
  <button className="btn btn-secondary dropdown-toggle border ms-7" type="button"  data-bs-toggle="dropdown" >
   10:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='ms-4 me-4 mt-1 mb-1'>-</div>
  <div className='mb-1'>
  <button className="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   7:00Am
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div>
<div className='mt-1 ms-3'>+</div>
        </div>
        <div className='d-flex  mt-1 mb-1'  style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
            <div className='mt-1 mb-1' style={{marginLeft:'68px'}}> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Sunday
  </label></div>

  <div  className='mb-1' style={{marginLeft:'240px'}}>
     Closed
</div>

  
        </div>
        <div className='d-flex ' style={{marginLeft:'101px'}}>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={{fontSize:'17px'}}/>
  <h6 className='mt-2'>Update team working hours</h6>
  <p>Override this location’s team members working hours (starting from tomorrow) with the new working hours
your set here.</p>
</div>
        </div>
    </div>
    </>
  )
}

export default Hours
