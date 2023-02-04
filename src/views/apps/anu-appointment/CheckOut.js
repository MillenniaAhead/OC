import React from "react"
import { MoreVertical, Search, Sliders, AlignCenter, MoreHorizontal, User } from "react-feather"
import { NavLink } from 'react-router-dom'
import './mycss/AddTip.css'
import { Input, InputGroup, InputGroupText } from "reactstrap"

const CheckOut = () => {
    return (
        <div className="add-tip-container">
       <div className="check-out-container left-container-aa3">
        <div className='d-flex' style={{background:'#f2f2f7', padding:"15px 8px", borderRadius:'8px'}}> 
            <InputGroup style={{height:'fit-content'}}>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input style={{fontSize:'14px'}} placeholder='Search by client, team member or service name' />
      </InputGroup>
            <div className="filter-option-aa5 text-aa5">Filter<div className="ms-1"><Sliders size={20}/></div></div>
            <div className="sort-by-option-aa5 text-aa5">Sortby<div className="ms-1"><AlignCenter size={20}/></div></div>
        </div>
        <div className="date-aa5 text-cc5">16 Dec</div>
        <div className="service-box-aa5">
            <div className="time-day-box-aa5">
                <div className="text-dd5">12:00pm-1:00am</div>
                <div className="text-bb5">Friday</div>
            </div>
            <div className="service-detail-aa5">
                <div className="text-dd5">Walk-in</div>
                <div className="text-bb5">1h with Kondeti Anusha*Facial</div>
            </div>
            <div className="right-side-aa5">
                <div className="text-dd5">₹115</div>
                <div><MoreVertical size={25}/></div>
            </div>
        </div>
        <div className="service-box-aa5">
            <div className="time-day-box-aa5">
                <div className="text-dd5">12:00pm-1:00am</div>
                <div className="text-bb5">Friday</div>
            </div>
            <div className="service-detail-aa5">
                <div className="text-dd5">Walk-in</div>
                <div className="text-bb5">1h with Kondeti Anusha*Facial</div>
            </div>
            <div className="right-side-aa5">
                <div className="text-dd5">₹115</div>
                <div><MoreVertical size={25}/></div>
            </div>
        </div>
       </div>
       <div className="right-container-aa3">
            <div className='right-child-aa3'>
            <div className="top-box-aa3 d-flex align-items-center">
                <div className="circle-logo-aa3 me-3 d-flex align-items-center justify-content-center"><User style={{color:"#1bb70b"}} size={35} /></div>
                <div className="status-aa3 text-dd3">Walk In</div>
            </div>
            <div className="item-list-box-aa3">
                <div className="list-top-aa3 d-flex justify-content-between">
                    <div className='text-ee3'>Items</div>
                    <div className='text-ee3'>Amount</div>
                </div>
                <div className='mt-1'>
                <div className="list-item-aa3 d-flex  justify-content-between">
                    <div className='text-ff3'>Facial</div>
                    <div className='text-gg3'>1*₹115</div>
                </div>
                <div style={{marginTop:"3px"}} className='text-ee3 w-75 pe-1'> 1h with Kondeti Anusha</div>
                </div>
            </div>
            </div>
            <div className='right-child-bb3'>
            <div className="total-box-aa3">
                <div className="subtotal d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Subtotal</div>
                    <div className='text-cc3'>₹115</div>
                </div>
                <div className="taxes d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Taxes</div>
                    <div className='text-cc3'>₹0</div>
                </div>
                <div className="total d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Total</div>
                    <div className='text-cc3'>₹115</div>
                </div>
            </div>
            <div className="bottom-box-aa3">
                <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹115.50</div>
                </div>
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"> <MoreHorizontal size={30}/></button>
                <NavLink className='w-75 btn-bb3' to="/addtip" ><button className="continue-aa3 btn-bb3">Continue</button></NavLink>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CheckOut