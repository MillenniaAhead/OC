import React from 'react'
import Switch from '@mui/material/Switch'
import Box from '@mui/material/Box'
import EmailPh from '../../images/ClientList/EmailPh.png'
import EmailNT from '../../images/ClientList/emailNoti.png'
import { AiOutlineClose } from 'react-icons/ai'


const SelectChannel = () => {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } }
    return (
        <div>
            <div className=' px-5 d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <button type='button' className="border-0 fs-4 text-dark"><AiOutlineClose/></button>
                    <button type="button" className="border-0 fs-4 text-dark">Previous</button></div>
                  <div><button type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <div>
                <p className='text-muted fs-5 text-center'>New appointment automated message</p>
                <h2 className='text-center'>Select channels</h2>
                <div><div className="container">
                <Box
      sx={{
        width: 700,
        height: 328,
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
         <div><Switch {...label} defaultChecked color="success" /></div>
        </div>
        <button type="button" class="btn btn-success my-3 btn-sm">FREE</button>
        <p className="fs-6 my-2">
        Send this automated message via <br />
        email.Customise your email with <br />
        important information for clients.
        </p>
        <button type="button" class="bg-white border px-5 py-3 mt-3 border-1 rounded">Preview and edit</button>

         </div>
        </div>
    </div>
      
     
        </Box>
                <Box
      sx={{
        width: 700,
        height: 328,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        margin:'0px auto'
        
      }}
    > <div className="row">
      <div className="col-lg-6">
        <img src={EmailNT} alt="" />
      </div>
      <div className="col-lg-6 ">
         <div className='mt-3'>
         <div className='d-flex justify-content-between me-2 '>
           <div><h3>App notification</h3></div>
         <div><Switch {...label} defaultChecked color="success" /></div>
        </div>
        <button type="button" class="btn btn-success my-3 btn-sm">FREE</button>
        <p className="fs-6 my-2">
         Send this automated message via app <br />
          notification, to all your clients who use <br />
          Outlet control marketplace app.
        </p>
        <button type="button" class="bg-white border px-3 py-3 mt-3 border-1 rounded">Preview </button>

         </div>
        </div>
    </div>
      
     
        </Box>
        
        
        </div>
                </div>
            </div>
        </div>
    )
}

export default SelectChannel