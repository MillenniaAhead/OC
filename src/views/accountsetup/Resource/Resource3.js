import React from 'react'
import { useHistory } from 'react-router-dom'

function Resource3() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("Uiuxdesing")
  }

  return (
    <>
    <form  class=" needs-validation" novalidate>

    <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
    <div className='d-flex justify-content-between  pb-1 '>
        <button style={{fontSize:'20px'}} type="submit" className="btn-close"></button>
        <button type='submit' className='btn' onClick={navigateHandler} style={{backgroundColor:"rgba(135, 140, 147, 1)", borderRadius:'3px', width:'141px', height:"40px", color:'white'}}>New Step</button>
    </div>
    </div>
  
    <div className='d-flex justify-content-center flex-column align-items-center '>
    <p>Add a new location</p>
    <h1>About your business</h1>

    </div>
    
    <div className='container w-50 ' style={{border:'1px solid rgba(0,0,0,0.2)'}}>
    <div className='d-flex justify-content-start align-items-center m-1 '>

    <h2>Basic</h2>
  
    </div>

    <div className='border-top'></div>
    
    <div className=' mt-1 w-75' >
      <div className='d-flex justify-content-between aling-items-center'>
      <h6  for="validationInput" className="form-h6">Location name</h6>
      <p  for="validationInput" className="form-p">0/60</p>


      </div>
      <div className=''>
      
      <input type='text' className="form-control" id="validationInput" placeholder="Required example textarea" required/>
      <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>

      <h5 className="mt-2">Location contact number</h5>
      
      <div className="input-group mt-1 bd-darkgrey">
      
  <button className="btn btn-outline-secondary dropdown-toggle bg-darkgrey" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
  
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
</div>
      <h5 className="mt-2">Location email address</h5>
      
      <div className="">
  
  <input type="text" className="form-control mb-3" aria-label="Text input with dropdown button"/>
</div>
      </div>
    </div>

    
    </div>
    </form>
</>
  )
}

export default Resource3
