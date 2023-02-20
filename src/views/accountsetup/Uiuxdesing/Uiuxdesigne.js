import React from 'react'
import { useHistory } from 'react-router-dom'

function Uiuxdesigne() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/Outlet")
  }
  return (
    <>
    <div className='  w-100  border' style={{height:'60px'}}>
      
    </div>
    <div className='d-flex '>

    <div className='d-flex justify-content-start border flex-coumn' style={{width:'70px', height:'50rem'}}>
     
    </div>
        
    <div className='container w-75 '>

    <div className='d-flex justify-content-between'>
    <h2 className='mt-2'>&#x2190; UIUX Designer</h2>
    <button  onClick={navigateHandler} style={{border:'none', backgroundColor:'white'}}><div style={{fontSize:'20px', marginTop:'10px'}}>&#8594;</div></button>
    </div>

    <div className='w-100 h-18 border d-flex ' style={{backgroundColor:'rgba(78, 78, 78, 1)', color:'white', borderRadius:'7px'}}>
    <div className='mt-3 ms-3'>
      <h4 style={{color:'white'}}>Get your business online </h4>
      <p>Increase your bookings by listing your business online on the fresha marketplace and allow your clients
to book with you directly through your website and social media pages.</p>
<button style={{borderRadius:'4px', width:'154px', height:'35px', border:'none', marginBottom:'15px'}}>Enable online listing </button>
    </div>
    <div className='border border-bottom-0 w-50 mt-2 me-3' style={{borderTopLeftRadius:'25px', borderTopRightRadius:'25px', borderBottom:'none'}}>
      
    </div>
    </div>
    <div className='d-flex'>
    
      <div className='w-50  mt-3 me-3' style={{border:'1px solid rgba(0,0,0,0.2)', height:'18rem'}}>
      <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
        <div className=' d-flex justify-content-between m-1'><h5>Contact details</h5><p style={{color:'rgba(27, 183, 11, 1)'}}>Edit</p></div>
        </div>
        <div className='m-2'>
      <h6>Location email address </h6>
      <p style={{color:' rgba(27, 183, 11, 1)'}}>anushak1905@gmail.com</p>
      </div>
      <div className='m-2'>
        <h6 className='mt-3'>Location contact number </h6>
        <p style={{color:'rgba(27, 183, 11, 1)'}}>+91 9398663823</p>
      </div>

      </div>
      <div className='w-50  mt-3 ms-2' style={{border:'1px solid rgba(0,0,0,0.2)', height:'18rem'}}>
      <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
        <div className='d-flex justify-content-between border-bottom m-1'>
          <h5>Business types</h5>
          <p style={{color:'rgba(27, 183, 11, 1)'}}>Edit</p>
        </div>
        </div>
        <div className='m-2'>
          <h6>Main</h6>
          <h6>hair salon</h6>
        </div>
        <div className='m-2'>
          <h6>Additional</h6>
          <h6>Beauty salon,spa</h6>
        </div>
      </div>
    </div>
    <div className='w-100  mt-1'  style={{border:'1px solid rgba(0,0,0,0.2)'}}>
    <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}} >
      <h6 className=' p-1'>Location </h6>
      </div>
      <p style={{color:'rgba(27, 183, 11, 1)'}} className='m-1'>+Add</p>
    </div>

    <div className=' w-100 h-30 mt-3' style={{border:'1px solid rgba(0,0,0,0.2)'}}>
    <div  style={{border:'1px solid rgba(0,0,0,0.2)'}}>
      <div className=' d-flex justify-content-between'>
        <h6 className='m-2'>Opening hours</h6>
        <p className='m-2'  style={{color:'rgba(27, 183, 11, 1)'}}>Edit</p>
      </div>
      <div>
      <p className='m-2'>Opening hours for these locations are default working hours for your team and will be visible to your clients. You can amend
closed dates for events like Bank Holidays in Settings.</p>
</div>
      </div>

    <div  className='d-flex justify-content-around aling-items-center mt-2 '>
      <div className='d-flex flex-column  aling-items-center border mt-2 mb-3 ' style={{width:'12%', height:'100px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}> Monday</div>
      <div className='d-flex  flex-column  ' style={{padding:'14px 22px'}}>
      <div>10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column  aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}> Tuesdayy</div>
      <div className=''  style={{padding:'14px 22px'}}>
      <div>10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column  aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}>Wednesday</div>
      <div className=''  style={{padding:'14px 22px'}}>
      <div>10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column  aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}>Thursday</div>
      <div className=''  style={{padding:'14px 22px'}}>
      <div>10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column  aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}>Friday</div>
      <div className=''  style={{padding:'14px 22px'}}>
      <div >10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column  aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:'rgba(27, 183, 11, 1)', color:'white'}}>Saturday</div>
      <div className=''  style={{padding:'14px 22px'}}>
      <div>10:00AM</div>
      <div className='ps-2'>-</div>
      <div>7:00AM</div>
      </div>
    
      </div>
      <div className='d-flex flex-column aling-items-center border mt-2' style={{width:'12%', height:'94px'}}>
      
      <div className='border-bottom d-flex justify-content-center'  style={{backgroundColor:' rgba(231, 232, 233, 1)'}}> Sunday</div>
      <div className='d-flex justify-content-center aling-items-center'>
      
      <div className='mt-2'>closed</div>
      
      </div>
    
      </div>

      </div>

    </div>
    <div className='mt-3' style={{border:'1px solid rgba(0,0,0,0.2)'}}>
    <div className='d-flex justify-content-between alind-items-center p-2 '>
     <h6>Billing details for clients invoice</h6>
     <p style={{color:'rgba(27, 183, 11, 1)'}}>Edit</p>
    </div>
    <p className=' ps-2 pb-2' style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}} >These details will appear on the client’s invoice for this location as well as the information you’ve configured in your
Invoice Template settings.</p>
<div className='p-2'>
    <h6>Company details</h6>
    <p>UIUX Designer</p>
    </div>
</div>
    
    </div>
    </div>
    </>
  )
}

export default Uiuxdesigne
