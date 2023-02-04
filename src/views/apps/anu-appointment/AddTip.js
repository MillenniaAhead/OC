import React, { useState } from 'react'
import "./mycss/AddTip.css"
import { Settings, ArrowLeft, Check, MoreHorizontal, User, Trash2 } from 'react-feather'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './appointmentRedux'

const AddTip = () => { 
    // for select a tip value
    const [tipValue, setTipValue] = useState('No tip')
    
    const SelectTip = (current) => {
        setTipValue(current.target.textContent)
     }
    
    const ChildSelectPayment = (e) => {
        setTipValue(e.target.parentElement.textContent)
        e.stopPropagation()
    }

    const DeleteTipValue = () => {
        setTipValue("No tip")
    }
    
    //For redux
    const dispatch = useDispatch()
    const { addTip } = bindActionCreators(actionCreators, dispatch)
   const AddMyTip = () => {
       addTip(tipValue)
   }

   const value1 = [...'₹115']
   value1.splice(0, 1)
   
    const value2 = [...tipValue.split(" ")[1]]
    value2.splice(0, 1)

 return (
    <div className="add-tip-container">
        <div className="left-container-aa3">
            <div className="top-text-aa3">
                <div className="text-aa3"><NavLink to='checkout'><div className="back-arrow-aa3"><ArrowLeft size={30}/></div></NavLink><div> Add a tip amount</div></div>
                <div className="setting-icon-aa3" style={{cursor:"pointer"}}><Settings size={20} /></div>
            </div>
            <div className="tip-value-boxes">
                <div className="tip-value-1 tip-box" style={tipValue === "No tip" ? {border:'1px solid #1bb70b'} : {}}  onClick={SelectTip} >No tip
                {tipValue === "No tip" && <Check id="check-badge" strokeWidth={3}/>}</div>
                <div className="tip-value-2 tip-box" style={tipValue === `10% ₹${(115 * 10) / 100}` ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >10% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(115 * 10) / 100}
                {tipValue === `10% ₹${(115 * 10) / 100}` && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-3 tip-box" style={tipValue === `18% ₹${(115 * 18) / 100}` ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >18% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(115 * 18) / 100}
                {tipValue === `18% ₹${(115 * 18) / 100}` && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-4 tip-box" style={tipValue === `25% ₹${(115 * 25) / 100}` ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >25% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(115 * 25) / 100}
                {tipValue === `25% ₹${(115 * 25) / 100}` && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-5 tip-box" style={tipValue === `35% ₹${(115 * 35) / 100}` ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >35% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(115 * 35) / 100}
                {tipValue === `35% ₹${(115 * 35) / 100}` && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-6 tip-box" style={tipValue === `45% ₹${(115 * 45) / 100}` ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >45% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(115 * 45) / 100}
                {tipValue === `45% ₹${(115 * 45) / 100}` && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-7 tip-box" style={tipValue === "Custom amount" ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >Custom <div>amount
                    {tipValue === "Custom amount" && <Check id="check-badge" strokeWidth={3}/>}</div></div>
            </div>
                <div className='text-bb3'>Tips goes to Kondeti Anusha <a href="">Edit</a> </div>
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
                {tipValue !== 'No tip' && tipValue !== "Custom amount" ? <div className="tip d-flex justify-content-between my-row-aa3">
                    <div className='text-hh3 d-flex'><span style={{padding:"1px 3px 0 0", cursor:"pointer"}} className='d-flex'><Trash2 onClick={DeleteTipValue} size={20} style={{color:"black"}}/></span><span>Tip for Kondeti Anusha</span></div>
                    <div className='text-cc3'>{tipValue.split(" ")[1]}</div>
                </div> : ""
}
            </div>
            <div className="bottom-box-aa3">
                { tipValue !== "No tip" && tipValue !== "Custom amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{Number(value1.join("")) + Number(value2.join(""))}</div>
                </div> : "" }
                { tipValue === "No tip" || tipValue === "Custom amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{Number(value1.join(""))}</div>
                </div> : "" }
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"> <MoreHorizontal size={30}/></button>
                <NavLink className='w-75 btn-bb3' onClick={AddMyTip}  to='/selectpayment' ><button className="continue-aa3 btn-bb3">Continue</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    </div>
 )
}

export default AddTip