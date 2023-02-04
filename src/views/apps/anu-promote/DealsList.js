import React, { useState, useEffect } from 'react'
import modulo from '../images/modulo.svg'
import { MoreHorizontal } from "react-feather"
import './mycss1/DealsList.css'
import {  ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import axios from "axios"
import { NavLink } from 'react-router-dom'

const DealsList = () => {
    //For dropdown
   const [dropdownOpen, setDropdownOpen] = useState(false)
   //store data from backend
   const [detail, setDetail] = useState([])
   const [dealLength, setDealLength] = useState(0)

   //dropdown
   const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }


  //Fetch api by axios
  useEffect(() => {
    axios.get("http://localhost:4000/api/deals")
    .then((res) => {
        setDetail(res.data)
        setDealLength(res.data.length)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
    {detail.map((deal, key) => <div key={key} className="my-deal-box">
        <div className='d-flex '>
        <div className='image-a'>
            <div>
            <img src={modulo} alt="" />
            </div>
        </div>
        <div className="list-detail-a">
            <p className='text-n'>{deal.name}</p>
            <p className='text-o'>{deal.promotion_value} discount for all services and products</p>
            <p className='text-o'>{deal.start_date} to {deal.end_date === "Invalid Date" ? 'Outgoing' : deal.end_date}</p>
        </div>
        </div>
        <div className='list-right-side'>
        <div className='status'><p>STATUS</p></div>
        <div className='total-sales'>
            <p className='text-p'>Total sales</p>
            <p className='text-p'>₹0</p>
        </div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <div style={{width:"50px", height:"fit-content"}} onClick={toggleDropdown} className='three-dot'>
            <MoreHorizontal/>
      </div>
      <DropdownMenu style={{ minWidth:"fit-content", top:'20px'}}>
        <DropdownItem style={{padding:"5px 10px"}} to={`/promote/steptwoedit/${deal._id}`} tag={NavLink} onClick={e => e.preventDefault()}>
          Edit
        </DropdownItem>
        <DropdownItem style={{padding:"5px 10px"}} href='/' tag='a' onClick={e => e.preventDefault()}>
          Deactivate
        </DropdownItem>
        <DropdownItem style={{padding:"5px 10px"}} href='/' tag='a' onClick={e => e.preventDefault()}>
          Duplicate
        </DropdownItem>
        <DropdownItem style={{padding:"5px 10px"}} href='/' tag='a' onClick={e => e.preventDefault()}>
          Archive
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
        </div>
    </div> 
    )}
        <div className='d-flex justify-content-center mt-1'>{dealLength} of {dealLength}</div>
        </>
  )
}

export default DealsList
