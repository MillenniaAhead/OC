import React, { useState} from "react"
import "../mycss1/Integrations.css"
import "../mycss1/FacebookAdd.css"
import facebook from "../images/facebook.png"
import facebookadd1 from "../images/facebookadd1.png"
import facebookadd2 from "../images/facebookadd2.png"
import facebookadd3 from "../images/facebookadd3.png"
import facebookadd4 from "../images/facebookadd4.png"
import facebookadd5 from "../images/facebookadd5.png"
import { Check, Search, Star, Clock, ArrowRight, Users, DollarSign, X } from 'react-feather'
import { Button, Modal, ModalBody } from 'reactstrap'

const Integrations = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div className="integrations-container">
      <div  className="integrations-wrapper">
        <div className="int-top-heading" style={{ paddingBottom: "24px" }}>
          <h1 className="text-a2">Integrations</h1>
          <p className="text-b2">
            Integrate Google Analytics and Facebook Ads onto your Outlet Control
            account.
            <a style={{ color: "#6B87E8", textDecoration: "none" }} href="#">
              Learn more
            </a>
          </p>
        </div>
        <div className="int-body-boxes">
          <div className="box-a29 box d-flex">
            <div className="image-box-b" style={{width:"260px", minHeight:"185px", flexShrink:"0.3"}}>
              <div>
                <div className="google-image d-flex">
                <div className="short-box-1"></div>
                <div className="short-box-2"></div>
                <div className="short-box-3"></div>
                </div>
                <p>Google Analytics</p>
              </div>
            </div>
            <div className="box-content w-100">
              <div className="top-content d-flex justify-content-between">
                <div className="left-side-a">
                  <p className="text-c2">Google Analytics</p>
                  <p className="text-d2">
                    Send events about certain actions to Google Analytics, and
                    create goals based on events to track conversions.
                  </p>
                </div>
                <div className="right-side-a" style={{ marginTop: "4px" }}>
                  <p>DISABLED</p>
                </div>
              </div>
              <div className="set-up-btn">
                <button>Set up now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="int-body-boxes">
          <div className="box-a29 box d-flex">
            <div className="image-box-b" style={{width:"300px", height:"200px"}}>
              <div>
                <img
                  src={facebook}
                  alt=""
                />
              </div>
            </div>
            <div className="box-content w-100 ">
              <div className="top-content d-flex justify-content-between">
                <div className="left-side-a">
                  <p className="text-c2">Facebook Pixel Ads</p>
                  <p className="text-d2">
                    Use your Facebook Ads Pixel to track events, and create
                    audiences based on their activities.
                  </p>
                </div>
                <div className="right-side-a" style={{ marginTop: "4px" }}>
                  <p>DISABLED</p>
                </div>
              </div>
              <div className="set-up-btn">
                <button onClick={() => setCenteredModal(!centeredModal)} >Set up now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered modal-lg'>
         
          <ModalBody>
          <div className="my-deals-container d-flex justify-content-between">
            <X style={{cursor:'pointer'}} onClick={() => setCenteredModal(!centeredModal)} />
            <div className="deals-container-a">
              <div className="deals-text-container">
                <p className="text-a4">
                  To add the Facebook pixel, Publish your
                  Outlet Control profile
                </p>
                <p className="text-b4">
                  Join the world's largest beauty and wellness marketplace
                </p>
                <div className="imp-points">
                  <div>
                    <div className="check-symbol">
                      <Check size={15} />
                    </div>
                    <div>
                      Get your business listed on the Outlet Controler app
                    </div>
                  </div>
                  <div>
                    <div className="check-symbol">
                      <Check size={15}/>
                    </div>
                    <div>
                      Reach thousands of new clients who visit Outlet Control
                      every day{" "}
                    </div>
                  </div>
                  <div>
                    <div className="check-symbol">
                      <Check size={15}/>
                    </div>
                    <div>
                      Free up time and get your clients self-booking online 24/7{" "}
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="deals-btn-wrapper">
                <div className="start-now-btn-wrapper">
                <Button className="text-c1" color='dark' onClick={() => setCenteredModal(!centeredModal)}>
          Start now
              </Button>
                </div>
              </div>
            </div>
            <div className="deals-container-b">
              <div className="deals-image-container">
                <div className="circle-part">
                  <div className="white-box-wrapper">
                    <div className="white-box-1">
                      <div className="circle-a4">
                      </div>
                      <div className="search-box-a4">
                        <p className="text-h4"><span className="search-icon-a4"><Search size={12} /></span>Discover near me</p>
                      </div>
                      <div className="text-i4">Popular categories</div>
                      <div className="image-box-a4">
                        <div>
                        <img src={facebookadd1} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd3} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd4} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd5} alt="" />
                        </div>
                      </div>
                      </div>
                    <div className="white-box-2">
                      <div className="image-a4">
                      <img src={facebookadd2} alt="" />
                      </div>
                      <div className="text-box-a4">
                        <p className="text-c4">Miller's Barbers</p>
                        <p className="text-d4">Beauty Salon</p>
                        <p className="text-e4">192 Bleecker St,New York,United States</p>
                        <p className="text-f4"><span className="star-icon"><Star size={14} style={{color:'#F6CE3D'}} /></span> 5.0 Excellent (100+)</p>
                        </div>
                        <hr style={{margin:"0"}}/>
                        <div className="text-box-b4">
                        <p className="text-g4"><span className="icon-a4"><Clock size={14}/></span> Open now 10:00am - 8:00pm</p>
                        <p className="text-g4"><span className="icon-a4"><ArrowRight size={14}/></span>Instant confirmation</p>
                        <p className="text-g4"><span className="icon-a4"><Users size={14}/></span>Unisex</p>
                        <p className="text-g4"><span className="icon-a4"><DollarSign size={14}/></span>Pay by app</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default Integrations
