import React from 'react'
import '../CSS/ClientList.css'
import { AiOutlineCheck } from 'react-icons/ai'


const Paperless = () => {
    return (
        <div className='container-fulid '>
            <div className="row">
                <div className="col-lg-6 mt-5 pt-5">
                <ul style={{listStyle:'none'}} className='fs-5 mt-5 pt-5 float-end '>
                    <li><h1 >Go paperless with online <br />
                        forms for clients</h1></li>
                        <li><p >Automatically get clients sharing important info a head of <br />
their visit:</p></li>
                        
                             <li> <AiOutlineCheck/> Build your own forms or use our ready-mode templates</li>
                        <li><AiOutlineCheck/> Tight integration with your client profiles and appointments</li>
                        <li><AiOutlineCheck/> Automatically request clients to fill forms ahead of their visit</li>

                        <li className='pt-5 mt-4'><h3>Free unlimited use</h3></li>
                        <li className='mt-5 pt-2'><button type="button" class="btn btn-dark px-5 fw-bold fs-4 py-2">Star Now</button>
                        <button type="button" style={{textDecoration:'none'}} className="btn btn-link text-success fw-bold ms-4 fs-4">Learn more</button></li>
                        </ul>

                </div>
                <div className="col-lg-6  paperless mt-5"> dk</div>
            </div>
            
        </div>
    )
}

export default Paperless