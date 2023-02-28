import React from 'react'
import X from '../../../images/ClientList/x.png'
import tv from '../../../images/section/tv.png'
import plusSqure from '../../../images/section/plus-square.png'
import mike from '../../../images/section/image 9.png'
import star from '../../../images/section/star.png'

import { Badge } from 'reactstrap'
import AddASection from './AddASection'

const Section = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mx-1 mt-3'>
                <div>
                    <img src={X} alt="" />
                </div>
                <div className='text-center'>
                    <p>Step 1 of 2</p>
                    <h3>Add sections to your consultation form</h3>
                </div>
                <div>
                <button type="button" className="btn btn-secondary px-4 py-1">Next Step</button>
                </div>
                
            </div>
            
            <div className="container-fluid">
                <div className="row">
                <hr />
                   <div style={{borderRight:'.4px solid rgba(217, 217, 217, 0.80)'}} className="col-lg-2 ">
                    <div >
                    <div  className='m-2 text-center'>
                        <div className='border py-4'>
                       
                        <img className='d-block mx-auto' src={tv} alt="" />
                       
                        <h6 className='mt-1'>Client details</h6>
                        </div>
                        <div className='border mt-2 position-relative'>
                        <Badge className='position-absolute top-0 end-0' color='success'>
                        SOON
                        </Badge>
                        <div className='py-4'>
                            
                        <img className='d-block mx-auto' src={plusSqure} alt="" />
                       
                       <h6 className='mt-1'>Medical history</h6>
                        </div>
                        </div>
                        <div className='border mt-2 position-relative'>
                        <Badge className='position-absolute top-0 end-0' color='success'>
                        SOON
                        </Badge>
                        <div className='pt-4 pb-2'>
                            
                        <img className='d-block mx-auto' src={mike} alt="" />
                       
                       <h6 className='mt-1'>Marketing <br />
                        preferences</h6>
                        </div>
                        </div>
                        </div>
                        <hr />
                        
                        
                        <div className='m-2 text-center'>
                            
                        <div className='border mt-2 py-4'>
                       
                        <img className='d-block mx-auto' src={star} alt="" />
                       
                        <h6 className='mt-1'>Custom section</h6>
                        </div>
                        
                        </div>
                    </div>
                   </div>
                   <div className="col-lg-10">
                   <AddASection/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Section