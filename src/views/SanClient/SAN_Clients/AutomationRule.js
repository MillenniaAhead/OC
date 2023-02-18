import React from 'react' 
import X from '../../../images/ClientList/x.png'

const AutomationRule = () => {
    return (
        <div>
            
               <div className=' px-5 d-flex justify-content-between align-items-center'>
                  <div >
                    <button> <img src={X} alt="" /></button>
                    <hr />
                    </div>
                    
                  <div><button  type="button" className="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <div>
                <p className='text-center'>New appointment automated message</p>
                <h2 className='text-center'>Automation rules</h2>
            </div>
            <div style={{height:'174px', width:'670px'}} className='mx-auto border rounded'>
                <h3 className='ms-4 mt-4'>Trigger</h3>
                <p className='ms-4 fs-5'>Automatically sends to all clients when their new <br />
appointment is booked.</p>

            </div>
        </div>
        

    )
}

export default AutomationRule