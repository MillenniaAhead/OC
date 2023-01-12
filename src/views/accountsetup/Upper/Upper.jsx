import React from 'react'
import { useHistory } from 'react-router-dom'
import { TbBrandDribbble } from "react-icons/tb"
import { FiFacebook } from "react-icons/fi"
import {AiOutlineInstagram } from "react-icons/ai"

function Upper() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/Uiux")
  }

  return (
    <div className='container w-75 p-4 mvh-100 border' >
    
      <div className={'d-flex justify-content-between align-items-center'}>
        <div>
        <p>Settings .  Business details</p>
        <h2>Business details</h2>
        </div>
        <button onClick={navigateHandler}  style={{width:'70px', borderRadius:'4px'}}className='p-1 border-0 text-white bg-dark'>save</button>
      </div>

      <div className='row justify-content-center align-items-start mt-2'>
        <div className="col ">

        <div className='mt-1'>
        <h4 style={{margin:"7px 5px"}}>Bussiness name</h4>
        <p style={{margin:"7px 5px"}}>Your business name is displayed across many areas including on</p>
        </div>
        
        <div className='mt-5'>
        <h4 style={{margin:" 100px 5px 7px 3px"}}>Time and calendar settings</h4>
        <p style={{margin:"7px 5px"}}>Choose the time zone and format which suit your bussiness.
Daylight savings changes will automatically apply based on your
selected time zone</p>
        </div>

        <div className=''>
        <h4 style={{margin:" 150px 5px 7px 3px"}}>Language settings</h4>
        <p style={{margin:"7px 5px"}}>Choose the default language for appointment notification
messages sent to your clients. Per-client language preferences can
also be set within the settings for each client.</p>
        </div>
        <div className=''>
        <h4 style={{margin:" 135px 5px 7px 3px"}}>Online links</h4>
        <p style={{margin:"7px 5px"}}>Add your company website and social media links for sharing with
clients.</p>
        </div>

        </div>

        <div className="col ms-4">
        <div style={{border:'1px solid rgba(0,0,0,0.2)'}}>
           <h4 style={{margin:"7px 5px"}}>Bussiness name</h4>
           <input type='text'  placeholder='Ui/Ux Designer' style={{width:"97%", margin:"7px 5px", height:'22px'}}></input>
           <p style={{margin:"7px 5px", backgroundColor:"#d7d7ea", borderRadius:'3px', padding:'5px'
}}>Your Country is set to india with INR currency. To change these setting, please contact our suppoet team</p>
          </div>

              <div className=" mt-2" style={{border:'1px solid rgba(0,0,0,0.2)'}}  >

          <h4 style={{margin:'9px'}}>Time jone</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px'}}>
    <option value="volvo">(GMT +05:30) Kolkata</option>
    
  </select>

          <h4 style={{margin:'9px'}}>Time Format</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px'}}>
    <option value="volvo">12 hours (e.g. 9:00pm)</option>
    
  </select>
          <h4 style={{margin:'9px'}}>Week start</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px'}}>
    <option value="volvo">Monday</option>
    
  </select>
          <h4 style={{margin:'9px'}}>Appointment color source</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px 9px 9px'}}>
    <option value="volvo">Service group</option>
    
  </select>
        </div>

        <div className=" mt-2" style={{border:'1px solid rgba(0,0,0,0.2)'}}>
          
        <h4 style={{margin:'9px'}}>Client notification language</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px'}}>
    <option value="volvo">GB English (English)</option>
    
  </select>

          <h4 style={{margin:'9px'}}>Default language for your team</h4>
          <select style={{width:"95%", height:"22px", margin:'0px 9px'}}>
    <option value="volvo">GB English (English)</option>
    
  </select>
  <p style={{margin:"9px", backgroundColor:"#d7d7ea", padding:'5px'
}}>New team members will see Fresha in this language but
they can override this in their personal user settings.</p>

        </div>
          <div style={{ border:'1px solid rgba(0,0,0,0.2)', marginTop:'15px'}}>
          <div style={{margin:'9px'}}>
         <form className="row g-3 needs-validation" novalidate>
        <div className=" mb-2  mt-2">
        <h6 for="validationCustom03" class="form-label">Website</h6>
        <div className='d-flex'>
  <span className='border' style={{fontSize:'14px', padding:'0 1px'}}><TbBrandDribbble/></span>
  <input type="text" class="form-control" id="validationCustom03" required style={{width:'95%', height:'22px'}} placeholder="www.yoursite.com" aria-label="Username" aria-describedby="basic-addon1"/>
  <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  
</div>
</form>

        <div className=" mb-2 ">
        <h6>Facebook Page</h6>
        <div className='d-flex'>
  <span className='border border-end-0' style={{fontSize:'14px', padding:' 0 1px'}}><FiFacebook/></span>
  <input style={{width:'95%', height:'22px'}} placeholder="www.facebook.com/yoursite" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
  
</div>
        <div className=" mb-2 ">
        <h6>Instagram Page</h6>
        <div className='d-flex'>
  <span className='border border-end-0' style={{fontSize:'14px', padding:'0 1px'}}><AiOutlineInstagram/></span>
  <input style={{width:'95%', height:'22px'}} placeholder="www.instagram.com/yoursite" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
  
</div>
</div>
        </div>
        </div>
      </div>
 
    </div>
  )
}

export default Upper
