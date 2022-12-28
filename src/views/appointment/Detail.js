import React from 'react'
import { MoreHorizontal, User, Trash2} from 'react-feather'
import { NavLink } from 'react-router-dom'
import '../mycss/AddTip.css'

const Detail = (props) => {
    return (
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
                <div style={{marginTop:"3px"}} className='text-ee3'> 1h with Kondeti Anusha</div>
                </div>
            </div>
            </div>
            <div className='right-child-bb3'>
            <div className="total-box-aa3">
                <div className="subtotal d-flex justify-content-between">
                    <div className='text-cc3'>Subtotal</div>
                    <div className='text-cc3'>₹115</div>
                </div>
                <div className="taxes d-flex justify-content-between">
                    <div className='text-cc3'>Taxes</div>
                    <div className='text-cc3'>₹0</div>
                </div>
                <div className="total d-flex justify-content-between">
                    <div className='text-cc3'>Total</div>
                    <div className='text-cc3'>₹115</div>
                </div>
                <div className="tip d-flex justify-content-between">
                    <div className='text-hh3 d-flex'><span style={{padding:"1px 3px 0 0", cursor:"pointer"}} className='d-flex'><Trash2 size={20} style={{color:"black"}}/></span><span>Tip for Kondeti Anusha</span></div>
                    <div className='text-cc3'>₹11.50</div>
                </div>
            </div>
            <div className="bottom-box-aa3">
                <div className="to-pay  d-flex justify-content-between">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹115.50</div>
                </div>
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"> <MoreHorizontal size={30}/></button>
                <NavLink className='w-75 btn-bb3' to={props.mypath} ><button className="continue-aa3 btn-bb3">Continue</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Detail