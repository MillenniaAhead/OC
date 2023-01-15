import React, { useState } from 'react'
import "./mycss/AddTip.css"
import { Settings, ArrowLeft, Check, MoreHorizontal, User, Trash2 } from 'react-feather'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './appointmentRedux'

const AddTip = () => { 
    //For select tip box
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const [tipValue, setTipValue] = useState('No tip')
    //tip-box1
    const myOne = (current) => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setOne(!one)
        setTipValue(current.target.textContent)
    }
    //tip-box2
    const myTwo = (current) => { 
        setOne(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setTwo(!two)
        setTipValue(current.target.textContent)
    }
    //tip-box3
    const myThree = (current) => { 
        setTwo(false)
        setOne(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setThree(!three)
        setTipValue(current.target.textContent)
    }
    //tip-box4
    const myFour = (current) => {
        setTwo(false)
        setThree(false)
        setOne(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setFour(!four)
        setTipValue(current.target.textContent)
    }
    //tip-box5
    const myFive = (current) => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setOne(false)
        setSix(false)
        setSeven(false)
        setFive(!five)
        setTipValue(current.target.textContent)
    }
    //tip-box6
    const mySix = (current) => { 
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setOne(false)
        setSeven(false)
        setSix(!six)
        setTipValue(current.target.textContent)
    }
    //tip-box7
    const mySeven = (current) => { 
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setOne(false)
        setSeven(!seven)
        setTipValue(current.target.textContent)
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
                <div className="text-aa3"><NavLink to='checkout'><div className="back-arrow-aa3"><ArrowLeft size={30}/></div></NavLink><div> Add a tip amount</div></div>
                <div className="setting-icon-aa3" style={{cursor:"pointer"}}><Settings size={20} /></div>
            </div>
            <div className="tip-value-boxes">
                <div className="tip-value-1 tip-box" style={{border: one ? '1px solid #1bb70b' : 'none'}} onClick={myOne} >No tip
                {one && <Check id="check-badge" strokeWidth={3}/>}</div>
                <div className="tip-value-2 tip-box" style={{border: two ? '1px solid #1bb70b' : 'none'}} onClick={myTwo} >10% <div className='text-cc3'>₹33
                {two && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-3 tip-box" style={{border: three ? '1px solid #1bb70b' : 'none'}} onClick={myThree} >18% <div className='text-cc3'>₹59.40
                {three && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-4 tip-box" style={{border: four ? '1px solid #1bb70b' : 'none'}} onClick={myFour} >25% <div className='text-cc3'>₹82.50
                {four && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-5 tip-box" style={{border: five ? '1px solid #1bb70b' : 'none'}} onClick={myFive} >35% <div className='text-cc3'>₹115.50
                {five && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-6 tip-box" style={{border: six ? '1px solid #1bb70b' : 'none'}} onClick={mySix} >45% <div className='text-cc3'>₹148.50
                {six && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-7 tip-box" style={{border: seven ? '1px solid #1bb70b' : 'none'}} onClick={mySeven} >Custom <div> amount
                    {seven && <Check id="check-badge" strokeWidth={3}/>}</div></div>
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
                <NavLink className='w-75 btn-bb3' onClick={AddMyTip}  to='selectpayment' ><button className="continue-aa3 btn-bb3">Continue</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    </div>
 )
}

export default AddTip