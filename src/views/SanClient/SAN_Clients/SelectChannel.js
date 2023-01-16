import React from 'react'
import { Input } from 'reactstrap'
import EmailPh from '../../../images/ClientList/EmailPh.png'
import EmailNT from '../../../images/ClientList/emailNoti.png'
import X from '../../../images/ClientList/x.png'


const SelectChannel = () => {
    return (
        <div>
            <div className=' px-5 d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <button type='button' className="border-0 fs-4 text-dark"><img src={X} alt="" /></button>
                    <button type="button" className="border-0 fs-4 text-dark">Previous</button></div>
                  <div><button type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <div>
                <p className='text-muted fs-5 text-center'>New appointment automated message</p>
                <h2 className='text-center'>Select channels</h2>
                <div><div className="container">
                <div
      style={{
        width: 700,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        borderRadius:'10px',
        margin:'30px auto'
        
      }}
    > <div className="row">
      <div className="col-lg-6">
        <img src={EmailPh} alt="" />
      </div>
      <div className="col-lg-6 ">
         <div className='mt-3'>
         <div className='d-flex justify-content-between me-2 '>
           <div><h3>Email</h3></div>
         <div><div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div></div>
        </div>
        <button type="button" class="btn btn-success my-1 btn-sm">FREE</button>
        <p className="fs-6 mt-1">
        Send this automated message via <br />
        email.Customise your email with <br />
        important information for clients.
        </p>
        <button type="button" class="bg-white border py-1 px-2 fw-bold  my-2 border-1 rounded">Preview and edit</button>

         </div>
        </div>
    </div>
      
     
        </div>
                <div
      style={{
        width: 700,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        margin:'0px auto'
        
      }}
    > <div className="row">
      <div className="col-lg-6">
        <img src={EmailNT} alt="" />
      </div>
      <div className="col-lg-6 ">
         <div className='mt-3'>
         <div className='d-flex justify-content-between '>
           <div><h3>App notification</h3></div>
         <div><div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div></div>
        </div>
        <button type="button" class="btn btn-success my-1 btn-sm">FREE</button>
        <p className="fs-6 mt-1">
         Send this automated message via app <br />
          notification, to all your clients who use <br />
          Outlet control marketplace app.
        </p>
        <button type="button" class="bg-white border fw-bold my-2  px-2 py-1 border-1 rounded">Preview </button>

         </div>
        </div>
    </div>
      
     
        </div>
        
        
        </div>
                </div>
            </div>
        </div>
    )
}

export default SelectChannel