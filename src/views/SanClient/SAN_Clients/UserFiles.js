import React from 'react'
import files from '../../../images/ClientList/NoFiles.png'

const UserFiles = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mx-5 mb-3 mt-5'>
            <div className='ms-3'>
                <h1>Files</h1>
            </div>
            
            <div className='me-3'>
            <button type="button" className="btn btn-dark px-5 py-1">
                Add files
            </button>
                           </div>
             </div>
             <div className='text-center'>
             <div
      style={{
        width: 940,
        height: 300,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        backgroundColor:'white',
        margin:'0px auto'
        
      }}
    >  <img className='mx-auto d-block my-5 pt-3' src={files} alt="" />
    <p className='mt-2'> 
    <span className='fs-6'>Add your first file by clicking on the black button <br />
above.</span></p>
    </div>
             </div>
        </div>
    )
}

export default UserFiles