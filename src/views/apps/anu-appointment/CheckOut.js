import React from "react"
import { MoreVertical, Search, Filter, AlignCenter } from "react-feather"
import Detail from "./Detail"
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
            <div className="filter-option-aa5 text-aa5">Filter<div className="ms-1"><Filter size={20}/></div></div>
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
        <Detail mypath='/addtip' />
        </div>
    )
}

export default CheckOut