import React from "react"
import { MoreVertical, Search, Filter, AlignCenter } from "react-feather"
import Detail from "./Detail"

const CheckOut = () => {
    return (
        <div className="add-tip-container">
       <div className="check-out-container left-container-aa3">
        <div className="search-container-aa5">
            <div className="search-field-aa5 text-bb5">
                <span className="search-icon-aa5 ps-1 pe-1"><Search size={20}/></span><input type="text" name="new-sale" id="" placeholder="Search by client, team member or service name"/>
            </div>
            <div className="filter-option-aa5 text-aa5">Filter<span className="ms-1"><Filter size={20}/></span></div>
            <div className="sort-by-option-aa5 text-aa5">Sort by<span className="ms-1"><AlignCenter size={20}/></span></div>
        </div>
        <div className="date-aa5 text-cc5">16 Dec</div>
        <div className="service-box-aa5 d-flex">
            <div className="time-day-box-aa5">
                <div className="text-dd5">12:00pm-1:00am</div>
                <div className="text-bb5">Friday</div>
            </div>
            <div className="service-detail-aa5">
                <div className="text-dd5">Walk-in</div>
                <div className="text-bb5">1h with Kondeti Anusha*Facial</div>
            </div>
            <div className="right-side-aa5 d-flex flex-column align-items-center">
                <div className="text-dd5">₹115</div>
                <div><MoreVertical size={25}/></div>
            </div>
        </div>
        <div className="service-box-aa5 d-flex">
            <div className="time-day-box-aa5">
                <div className="text-dd5">12:00pm-1:00am</div>
                <div className="text-bb5">Friday</div>
            </div>
            <div className="service-detail-aa5">
                <div className="text-dd5">Walk-in</div>
                <div className="text-bb5">1h with Kondeti Anusha*Facial</div>
            </div>
            <div className="right-side-aa5 d-flex flex-column align-items-center">
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