import React from 'react'
import '../CSS/ClientList.css'
import check from '../../../images/section/check.png'
import box from '../../../images/section/box.png'
import circle from '../../../images/snr/plus-circle green.png'
import s from '../../../images/snr/image 4.png'
import greendot from '../../../images/snr/Ellipse 14.png'
import blackdot from '../../../images/snr/Ellipse 13.png'
import sign from '../../../images/snr/image 5.png'
import pen from '../../../images/snr/image 7.png'
import tv from '../../../images/snr/greentv.png'
import hand from '../../../images/snr/hand.png'

import { Card, CardBody,  CardImg, CardTitle, CardText, CardFooter  } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Paperless = () => {
    return (
        <div className='container-fulid '>
            <div className="row">
                <div className="col-lg-6 mt-5 pt-5">
                <ul style={{listStyle:'none'}} className='fs-5 mt-5 pt-5 float-end '>
                    <li><h1 className='fw-bolder'>Go paperless with online <br />
                        forms for clients</h1></li>
                        <li><p>Automatically get clients sharing important info a head of <br />
their visit:</p></li>
                        
                             <li> <img src={check} alt="" /> Build your own forms or use our ready-mode templates</li>
                        <li><img src={check} alt="" /> Tight integration with your client profiles and appointments</li>
                        <li><img src={check} alt="" /> Automatically request clients to fill forms ahead of their visit</li>

                        <li className='pt-5 mt-4'><h3>Free unlimited use</h3></li>
                        <li className='mt-5 pt-2'><NavLink to='/sanclient/form'><button type="button" className="btn btn-dark px-5 fw-bold fs-4 py-2">Star Now</button>
                        </NavLink>
                        <button type="button" style={{textDecoration:'none'}} className="btn btn-link text-success fw-bold ms-4 fs-4">Learn more</button></li>
                        </ul>

                </div>
                <div style={{position:'relative'}} className="col-lg-6  paperless mt-5 position-relative">    
                <ul style={{listStyle:'none'}} className='fs-5 '>
                <Card className='medical' style={{width:'320px'}}> 
                    <CardBody > 
               <li> <h3 className='text-dark fw-bolder'>Your medical history</h3></li>
                <hr />
                <li><h5 className='text-dark fw-bolder '>Client info</h5></li>
                
                    <li><img src={box} alt="" /><span>Heart condition</span></li>
                    <li><img src={box} alt="" /><span>Blood pressure high/low</span></li>
                    <li><img src={box} alt="" /><span>Diabetes</span></li>
                    <li className='mt-3'><img src={circle} alt="" /> <span className='text-success'>Add a new question or item</span></li>
                </CardBody>
                </Card>
                <div className='badgeba'>
                    <p className='text-center text-white '>Sign form</p>
                </div>
                <form className='inputbg'>
        <input  className='text-success text-center' placeholder='Drop a section here' type="text" />
      </form> 
      
                <Card className='cardab'>
        <CardImg top src={s} alt='card1' />
        <CardBody>
         
         
           <p>john smith,23.12.2021</p>
          <div className='d-flex justify-content-between'>
            <div>
                <img src={blackdot} alt="" />
            <img src={greendot} alt="" />
            </div>
            <div>
                <img src={sign} alt="" />
            <img src={pen} alt="" />
            </div>
            
          </div>
          
        </CardBody>
        
      </Card>
      <hr className='hrline'/>
      <div className='handtv'>
                <div className='d-flex justify-content-center mt-2 ms-1'><img src={tv} alt="" />
                </div>
                <p className='text-white text-center ms-1'>Client details</p>
                </div>
                <div className='hand'><img src={hand} alt="" /></div>
                </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default Paperless