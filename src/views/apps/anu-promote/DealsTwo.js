import React, { useState, useEffect } from 'react'
import modulo from '../images/modulo.svg'
import './mycss1/DealsTwo.css'
import { Filter, Sliders, Search, ChevronLeft, MoreHorizontal } from 'react-feather'
import { UncontrolledButtonDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input, InputGroup, InputGroupText, Alert  } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import axios from "axios"

export const DealsTwo = () => {
  //For dropdown
  const [dropdownOpenx, setDropdownOpenx] = useState(false)

   //For side menu
   const [styleTwo, setstyleTwo] = useState({display:'block'})
   const [styleThree, setstyleThree] = useState()
   const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})

   //for alert
   const [visible, setVisible] = useState(false)

   //store data from backend
   const [detail, setDetail] = useState([])
   const [dealLength, setDealLength] = useState(0)

   //dropdown
   const toggleDropdownx = () => {
     setDropdownOpenx(!dropdownOpenx)
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

  //Fetch api by axios
  useEffect(() => {
    axios.get("http://localhost:4000/api/deals")
    .then((res) => {
        setDetail(res.data)
        setDealLength(res.data.length)
    })
    .catch((err) => console.log(err))
  })

  //For delete a deal from database
  const deleteDealFun = (id) => {
    axios.delete(`http://localhost:4000/api/deals/${id}`)
    .then(res => {
      console.log(res)
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 3000)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className="deal-list-container" style={{overflowY:"scroll"}}>
        {/* alert */}
      <div className="my-alert-comp my-alert-comp-2 my-alert-comp-3">
      <Alert isOpen={visible}>
        <div className='alert-body text-center fs-4'>
        Deal deleted successfully
        </div>
      </Alert>
      </div>
        {/* side menu */}
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
    {/* side menu dropdown */}
      <div  className="side-menu-wrapper-2 mb-1">
   <ButtonDropdown isOpen={dropdownOpenx} toggle={toggleDropdownx}>
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
              <span className="no-of-deals">{dealLength}</span>
              </div>
              </div>
              <p className="text-h1">
                Set up and manage the deals you offer to your clients.
                <NavLink style={{color:"#1bb70b"}} className="text-h1" to="/"> Learn more</NavLink>{" "}
              </p>
            </div>
              <div className="top-right">
              <NavLink className="btn-c" to="/promote/stepone">
                <Button color='dark' size='lg'>
                Create new deal
            </Button>
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
           <button className="filter-deals"><div className="d-flex align-items-center"><p>Filter</p><Sliders className="deals-filter-icon"/>
           </div>
            </button>
              <button className="filter-deals my-filter-deals"><div className="d-flex align-items-center"><p>Created&#40;newest first&#41;</p><Filter size={20}/></div> </button>
            </div>
          </div>
        </div>
        {/* display all deal (using map method) */}
        <div className="deals-list-wrapper">
        {detail.map((deal, key) => {

          // Change date formate
          const start_date0 = new Date(deal.start_date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })

          const end_date0 = new Date(deal.end_date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })

        return (

        <div key={key} className="my-deal-box">
        <div className='d-flex '>
        <div className='image-a'>
            <div>
            <img src={modulo} alt="" />
            </div>
        </div>
        <div className="list-detail-a">
            <p className='text-n'>{deal.name}</p>
            <p className='text-o'>{deal.promotion_value + deal.promotion_value_type} discount for {deal.services.length === 3 ? "All services" : `${deal.services.length} services`} and {deal.products.length === 3 ? "All products" : `${deal.products.length} products`}</p>
            <p className='text-o'>{start_date0} to {end_date0 === "Invalid Date" ? 'Outgoing' : end_date0}</p>
        </div>
        </div>
        <div className='list-right-side'>
        <div className='status'><p>STATUS</p></div>
        <div className='total-sales'>
            <p className='text-p'>Total sales</p>
            <p className='text-p'>₹0</p>
        </div>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='light'>
        <div style={{width:"50px", height:"fit-content"}} className='three-dot'>
            <MoreHorizontal/>
      </div>
      </DropdownToggle>
      <DropdownMenu style={{ minWidth:"fit-content"}}>
        <DropdownItem to={`/promote/steptwoedit/${deal._id}`} tag={NavLink}>
          Edit
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Deactivate
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Duplicate
        </DropdownItem>
        <DropdownItem href='/' tag='div' onClick={() => {
          deleteDealFun(deal._id)
        }}>
          Archive
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
        </div>
    </div>
    ) 
    })}
        <div className='d-flex justify-content-center mt-1'>{dealLength} of {dealLength}</div>
        </div>
      </div>
    </div>
    </>
  )
}


export default DealsTwo