import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import chair from "../images/chair.png"
import modulo from "../images/modulo.svg"
import database from "../images/database.svg"
import { Check, Clock, ChevronLeft } from "react-feather"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Deals = () => {
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
      {/* Side menu */}
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
      <div >
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
        {/* side menu dropdown */}
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
            <div className="my-deals-container d-flex justify-content-between">
              <div className="deals-container-a">
                <div className="deals-text-container">
                  <p className="text-a1">
                    Reward and retain clients with deals
                  </p>
                  <p className="text-b1">
                    Whether you create discount codes for holidays, off-peak 
                    prices or offers to attract new clients, deals are a great way
                    to increase sales.
                  </p>
                  <div className="imp-points">
                    <div className='d-flex'>
                      <div className="check-symbol">
                          <Check size={15}/>
                      </div>
                      <div className='text-m1'>
                        Create and share a promotion with a discount code
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className="check-symbol">
                          <Check size={15}/>
                      </div>
                      <div className='text-m1'>
                        Introduce off-peak pricing to get more bookings
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className="check-symbol">
                          <Check size={15}/>
                      </div>
                      <div className='text-m1'>
                        Quickly fill your calendar with last-minute offers
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className="check-symbol">
                          <Check size={15} />
                      </div>
                      <div className='text-m1'>
                        Control and track the performance of all deals from one place
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deals-btn-wrapper">
                  <div className="start-now-btn-wrapper">
                    <NavLink
                      to="/promote/stepone"
                      className="text-c1"
                    >
                      Start now
                    </NavLink>
                  </div>
                  <div className="learn-more-btn">
                    <NavLink
                      to="/promote/deals"
                      style={{color:"#1bb70b"}}
                      className="text-d1"
                    >
                      Learn more
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="deals-container-b">
                <div className="deals-image-container">
                  <div className="circle-part">
                    <div className="white-box-wrapper">
                      <div className="white-box">
                        <img className="chair-image" src={chair} alt="chair" />
                        <div className="offer-menu-container">
                          <div className="offer-list offer-1">
                            <div className="img-box img-box-1"><img src={modulo} alt="" /></div>
                            <div className="text-box"><p className="text-e1">Promotions</p><p className="text-f1">Get 20% off with the code SAVE20</p></div>
                          </div>
                          <div className="offer-list offer-2">
                            <div className="img-box img-box-2"><img src={database} alt="" /></div>
                            <div className="text-box"><p className="text-e1">Off-peak prices</p><p className="text-f1">The same style for less at happy hours</p></div>
                          </div>
                          <div className="offer-list offer-3">
                            <div className="img-box img-box-3"><Clock/></div>
                            <div className="text-box"><p className="text-e1">Last-minute deal</p><p className="text-f1">Limited spaces available this week!</p></div>
                          </div>
                        </div>
                      </div>
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

export default Deals
