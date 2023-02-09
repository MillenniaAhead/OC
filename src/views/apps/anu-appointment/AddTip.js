import React, { useState, useEffect } from 'react'
import "./mycss/AddTip.css"
import { Settings, ArrowLeft, Check, MoreHorizontal, User, Trash2 } from 'react-feather'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './appointmentRedux'
import axios from 'axios'

const AddTip = () => { 
    // for select a tip value
    const [tipValue, setTipValue] = useState('No tip')
    //For store data
    const [appointment, setAppointment] = useState({services:[]})
    //demo price to complete functionality
    const [myPrice, setMyPrice] = useState("")
    //demo services for complete functionality
    const myServices = [{ name:'Haircut', price:40}, {name:'Hair Color', price:57}, {name:'Blow Dry', price:35}, {name:'Balayage', price:150}, {name:'Facial', price:115}]

    //Get appointment by id for add a tip
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/newAppointments/${id}`)
        .then(res => {
            console.log(res)
            setAppointment(res.data)
            setMyPrice(myServices.filter(data => data.name === res.data.services[0])[0].price)
        })
        .catch(err => console.log(err))
    }, [])

    //For select a tip
    const SelectTip = (e) => {
        if (e.target.id === "No tip" || e.target.id === "Custom amount") {
            setTipValue(e.target.id)
        } else {
        setTipValue(Number(e.target.id))
        }
     }
    
     //For select a tip
    const ChildSelectPayment = (e) => {
        if (e.target.parentElement.id === "No tip" || e.target.parentElement.id === "Custom amount") {
            setTipValue(e.target.parentElement.id)
        } else {
        setTipValue(Number(e.target.parentElement.id))
        e.stopPropagation()
        }
    }

    //For delete tip value
    const DeleteTipValue = () => {
        setTipValue("No tip")
    }
    
    //For redux
    const dispatch = useDispatch()
    const { addTip } = bindActionCreators(actionCreators, dispatch)
   const AddMyTip = () => {
       addTip(tipValue)
   }

 return (
    <div className="add-tip-container">
        <div className="left-container-aa3">
            <div className="top-text-aa3">
                <div className="text-aa3"><NavLink to={`/checkout/${id}`}><div className="back-arrow-aa3"><ArrowLeft size={30}/></div></NavLink><div> Add a tip amount</div></div>
                <div className="setting-icon-aa3" style={{cursor:"pointer"}}><Settings size={20} /></div>
            </div>
            <div className="tip-value-boxes">
                {/* Tip boxes */}
                <div className="tip-value-1 tip-box" id='No tip' style={tipValue === "No tip" ? {border:'1px solid #1bb70b'} : {}}  onClick={SelectTip} >No tip
                {tipValue === "No tip" && <Check id="check-badge" strokeWidth={3}/>}</div>

                <div className="tip-value-2 tip-box" id={(myPrice * 10) / 100} style={tipValue === (myPrice * 10) / 100 ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >10% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(myPrice * 10) / 100}
                {tipValue === (myPrice * 10) / 100 && <Check id="check-badge" strokeWidth={3}/>}</div></div>

                <div className="tip-value-3 tip-box" id={(myPrice * 18) / 100} style={tipValue === (myPrice * 18) / 100 ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >18% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(myPrice * 18) / 100}
                {tipValue === (myPrice * 18) / 100 && <Check id="check-badge" strokeWidth={3}/>}</div></div>

                <div className="tip-value-4 tip-box" id={(myPrice * 25) / 100} style={tipValue === (myPrice * 25) / 100 ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >25% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(myPrice * 25) / 100}
                {tipValue === (myPrice * 25) / 100 && <Check id="check-badge" strokeWidth={3}/>}</div></div>

                <div className="tip-value-5 tip-box" id={(myPrice * 35) / 100} style={tipValue === (myPrice * 35) / 100 ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >35% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(myPrice * 35) / 100}
                {tipValue === (myPrice * 35) / 100 && <Check id="check-badge" strokeWidth={3}/>}</div></div>

                <div className="tip-value-6 tip-box" id={(myPrice * 45) / 100} style={tipValue === (myPrice * 45) / 100 ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >45% <div className='text-cc3' onClick={ChildSelectPayment}>₹{(myPrice * 45) / 100}
                {tipValue === (myPrice * 45) / 100 && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                
                <div className="tip-value-7 tip-box" id='Custom amount' style={tipValue === "Custom amount" ? {border:'1px solid #1bb70b'} : {}} onClick={SelectTip} >Custom <div>amount
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
                    <div className='text-ff3'>{appointment.services[0]}</div>
                    <div className='text-gg3'>1*₹{myPrice}</div>
                </div>
                <div style={{marginTop:"3px"}} className='text-ee3 w-75 pe-1'> {appointment.duration} with {appointment.team_member}</div>
                </div>
            </div>
            </div>
            <div className='right-child-bb3'>
            <div className="total-box-aa3">
                <div className="subtotal d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Subtotal</div>
                    <div className='text-cc3'>₹{myPrice}</div>
                </div>
                <div className="taxes d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Taxes</div>
                    <div className='text-cc3'>₹0</div>
                </div>
                <div className="total d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Total</div>
                    <div className='text-cc3'>₹{myPrice}</div>
                </div>
                {/* for tip */}
                {tipValue !== 'No tip' && tipValue !== "Custom amount" ? <div className="tip d-flex justify-content-between my-row-aa3">
                    <div className='text-hh3 d-flex'><span style={{padding:"1px 3px 0 0", cursor:"pointer"}} className='d-flex'><Trash2 onClick={DeleteTipValue} size={20} style={{color:"black"}}/></span><span>Tip for {appointment.team_member}</span></div>
                    <div className='text-cc3'>₹{tipValue}</div>
                </div> : ""
}
            </div>
            <div className="bottom-box-aa3">
                 {/* total when tip is  given */}
                { tipValue !== "No tip" && tipValue !== "Custom amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{tipValue + myPrice}</div>
                </div> : "" }
                {/* total when No tip given */}
                { tipValue === "No tip" || tipValue === "Custom amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{myPrice}</div>
                </div> : "" }
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"> <MoreHorizontal size={30}/></button>
                <NavLink className='w-75 btn-bb3' onClick={AddMyTip}  to={`/selectpayment/${id}`} ><button className="continue-aa3 btn-bb3">Continue</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    </div>
 )
}

export default AddTip