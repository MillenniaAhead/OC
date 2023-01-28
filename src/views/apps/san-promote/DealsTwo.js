import React, { useState } from 'react'
import DealsList from "./DealsList"
import { Filter, Search, ChevronLeft } from 'react-feather'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input, InputGroup, InputGroupText  } from 'reactstrap'
import {NavLink} from 'react-router-dom'

export const DealsTwo = () => {
    //For dropdown
   const [dropdownOpen, setDropdownOpen] = useState(false)

   //For side menu
   const [styleTwo, setstyleTwo] = useState({display:'block'})
   const [styleThree, setstyleThree] = useState()
   const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})

   //dropdown
   const toggleDropdown = () => {
     setDropdownOpen(!dropdownOpen)
   }

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

  return (
      <div className="deal-list-container" style={{overflowY:"scroll"}}>
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
  <div className="deal-list-wrapper">
      <div  className="side-menu-wrapper-2 mb-1">
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
        <div className="my-top-content">
          <div className="top-box-1 d-flex align-items-center">
            <div className="top-left">
              <div className="d-flex align-items-center">
              <div>
              <p className="text-g1">
                Deals
              </p>
              </div>
              <div>
              <span className="no-of-deals">0</span>
              </div>
              </div>
              <p className="text-h1">
                Set up and manage the deals you offer to your clients.
                <NavLink style={{color:"#1bb70b"}} className="text-h1" to="/"> Learn more</NavLink>{" "}
              </p>
            </div>
              <div className="top-right">
              <NavLink className="btn-c" to="/promote/stepone">
                <Button.Ripple size='lg'>
                Create new deal
            </Button.Ripple>
            </NavLink>
              </div>
              <div className="top-right-2">
                <NavLink className="btn-c-2" to="/promote/stepone"><Button.Ripple className='round' color='primary'>
        +
      </Button.Ripple></NavLink>
              </div>
          </div>
          <div className="top-box-2 d-flex justify-content-between">
            <InputGroup style={{width:'fit-content', height:'fit-content'}} className='input-group-merge'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input placeholder='Search by deal name' />
      </InputGroup>
            <div className="btn-box-b d-flex justify-content-between">
           <button className="filter-deals"><div className="d-flex align-items-center"><p>Filter</p><Filter className="deals-filter-icon"/>
           </div>
            </button>
              <button className="filter-deals my-filter-deals"><div className="d-flex align-items-center"><p>Created&#40;newest first&#41;</p><Filter size={20}/></div> </button>
            </div>
          </div>
        </div>
        <div className="deals-list-wrapper">
                <DealsList/>
        </div>
      </div>
    </div>
  )
}


export default DealsTwo