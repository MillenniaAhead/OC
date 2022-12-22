import React from "react"
import "../mycss1/Deals.css"
// import DealsList from "./DealsList"
import { NavLink } from "react-router-dom"
import chair from "../images/chair.png"
import modulo from "../images/modulo.svg"
import database from "../images/database.svg"
import { Search, Filter, Check, Clock } from "react-feather"

const Deals = () => {
  return (
    <div className="my-deals-container d-flex justify-content-between">
      <div className="deals-container-a">
        <div className="deals-text-container">
          <p className="text-a1">
            Reward and retain clients <br /> with deals
          </p>
          <p className="text-b1">
            Whether you create discount codes for holidays, off-peak <br />{" "}
            prices or offers to attract new clients, deals are a great way{" "}
            <br /> to increase sales.
          </p>
          <div className="imp-points">
            <div>
              <div className="check-symbol">
                  <Check size={15}/>
              </div>
              <div >
                Create and share a promotion with a discount code
              </div>
            </div>
            <div>
              <div className="check-symbol">
                  <Check size={15}/>
              </div>
              <div>
                Introduce off-peak pricing to get more bookings
              </div>
            </div>
            <div>
              <div className="check-symbol">
                {/* <img src={checkmark} alt="check" srcSet="" /> */}
                  <Check size={15}/>
              </div>
              <div>
                Quickly fill your calendar with last-minute offers
              </div>
            </div>
            <div >
              <div className="check-symbol">
                  <Check size={15} />
              </div>
              <div>
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
              to="/promote"
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
                <div className="shadow-box"></div>
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
    // <div className="deal-list-container">
    //   <div className="deal-list-wrapper">
    //     <div className="top-content">
    //       <div className="top-box-1 d-flex align-items-center">
    //         <div className="top-left">
    //           <div className="d-flex align-items-center">
    //           <div>
    //           <p className="text-g1">
    //             Deals
    //           </p>
    //           </div>
    //           <div>
    //           <span className="no-of-deals">2</span>
    //           </div>
    //           </div>
    //           <p className="text-h1">
    //             Set up and manage the deals you offer to your clients.
    //             <NavLink style={{color:"#1bb70b"}} className="text-h1" to="/"> Learn more</NavLink>{" "}
    //           </p>
    //         </div>
    //           <div className="top-right">
    //             <NavLink className="btn-c" to="/promote/stepone">Create new deal</NavLink>
    //           </div>
    //       </div>
    //       <div className="top-box-2 d-flex justify-content-start ">
    //         <div className="search-box d-flex
    //         align-items-center">
    //           <div className="search-icon"><Search size={20} /></div>
    //           <input className="input-field" type="text" name="" id="" placeholder="Search by deal name"/>
    //         </div>
    //         <div className="w-100 btn-box-b d-flex justify-content-between">
    //        <button className="filter-deals"><div className="d-flex align-items-center"><p>Filter</p><Filter size={20}/>
    //        </div>
    //         </button>
            
    //           <button className="filter-deals"><div className="d-flex align-items-center"><p>Created&#40;newest first&#41;</p><Filter size={20}/></div> </button>
            
    //         </div>
    //       </div>
    //     </div>
    //     <div className="deals-list-wrapper">
    //             <DealsList/>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Deals
