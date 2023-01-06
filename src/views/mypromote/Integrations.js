import React, { useState} from "react"
import facebook from "../images/facebook.png"
import facebookadd1 from "../images/facebookadd1.png"
import facebookadd2 from "../images/facebookadd2.png"
import facebookadd3 from "../images/facebookadd3.png"
import facebookadd4 from "../images/facebookadd4.png"
import facebookadd5 from "../images/facebookadd5.png"
import { Check, Search, Star, Clock, ArrowRight, Users, DollarSign, X, ChevronLeft } from 'react-feather'
import { Modal, ModalBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink } from "react-router-dom"

const Integrations = () => {
  const [centeredModal, setCenteredModal] = useState(false)

   //For side menu
   const [styleTwo, setstyleTwo] = useState({display:'block'})
   const [styleThree, setstyleThree] = useState()
   const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})
   
   //On Click of arrow circle
   const toggleSideBar = () => {
     if (styleTwo.display === "block") {
       setstyleTwo({ display: "none" })
       setstyleThree({ transform: "rotate(180deg)" })
       setstyleFour({ position: "relative", left: "0" })
     } else {
       setstyleTwo({ display: "block" })
       setstyleThree()
       setstyleFour({ position: "relative", left: "-50%" })
     }
   }

   //For dropdown
   const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="promote-container-wrapper">
    <div className="promote-container">
      <div className="side-menu-wrapper" style={styleTwo}>
        <div className="side-menu-container">
          <div className="promote-text-wrapper">
            <p className="promote-text">Promote</p>
          </div>
          <div className="links-wrapper">
            <NavLink to='/promote/deals'><button className="deals-link">
              Deals
            </button>
            </NavLink>
            <NavLink to='/promote/integrations'>
            <button className="integrations-link">
              Integrations
            </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='side-menu-toggler-arrow'>
        <button
          className="side-menu-toggle"
          style={styleFour}
          onClick={toggleSideBar}
        >
          <ChevronLeft style={styleThree}/>
        </button>
      </div>
      <div className="deals-component-wrapper">
      <div  className="side-menu-wrapper-2">
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
    <DropdownToggle caret>
      Promote
    </DropdownToggle>
    <DropdownMenu>
      <NavLink to='/promote/deals'>
      <DropdownItem tag='div'>
            Deals
      </DropdownItem>
          </NavLink>
      <NavLink to='/promote/integrations'>
      <DropdownItem tag='div'>
            Integrations
      </DropdownItem>
          </NavLink>
    </DropdownMenu>
  </ButtonDropdown>
  </div>
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
            <div className="image-box-b">
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
              <div className="top-content">
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
            <div className="image-box-b">
              <div>
                <img
                  src={facebook}
                  alt=""
                />
              </div>
            </div>
            <div className="box-content w-100 ">
              <div className="top-content">
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
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered modal-lg ps-0'>
         
          <ModalBody>
          <div className="my-deals-container d-flex justify-content-between">
            <X style={{cursor:'pointer'}} onClick={() => setCenteredModal(!centeredModal)} />
            <div className="deals-container-a4">
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
                    <span className="check-symbol">
                      <Check size={15} />
                    </span>
                    <span className="text-m1">
                      Get your business listed on the Outlet Controler app
                    </span>
                  </div>
                  <div>
                    <span className="check-symbol">
                      <Check size={15}/>
                    </span>
                    <span className="text-m1">
                      Reach thousands of new clients who visit Outlet Control
                      every day{" "}
                    </span>
                  </div>
                  <div>
                    <span className="check-symbol">
                      <Check size={15}/>
                    </span>
                    <span className="text-m1">
                      Free up time and get your clients self-booking online 24/7{" "}
                    </span>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="deals-btn-wrapper">
                <div className="start-now-btn-wrapper">
                <NavLink to='/promote/deals' className="text-c1" color='dark' onClick={() => setCenteredModal(!centeredModal)}>
          Start now
              </NavLink>
                </div>
              </div>
            </div>
            <div className="deals-container-b4">
              <div className="deals-image-container">
                <div className="circle-part-a4">
                  <div className="white-box-wrapper">
                    <div className="white-box-1">
                      <div className="circle-a4">
                      </div>
                      <div className="search-box-a4">
                        <p className="text-h4"><span className="search-icon-a4"><Search className="feather-icon-a4" /></span><span>Discover near me</span></p>
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
                        <p className="text-f4"><span className="star-icon"><Star className="feather-icon-a4" style={{color:'#F6CE3D'}} /></span> 5.0 Excellent (100+)</p>
                        </div>
                        <div className="text-box-b4">
                        <p className="text-g4"><span className="icon-a4"><Clock className="feather-icon-a4"/></span> Open now 10:00am - 8:00pm</p>
                        <p className="text-g4"><span className="icon-a4"><ArrowRight className="feather-icon-a4"/></span>Instant confirmation</p>
                        <p className="text-g4"><span className="icon-a4"><Users className="feather-icon-a4"/></span>Unisex</p>
                        <p className="text-g4"><span className="icon-a4"><DollarSign className="feather-icon-a4"/></span>Pay by app</p>
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
      </div>
    </div>
  </div>
  )
}

export default Integrations
