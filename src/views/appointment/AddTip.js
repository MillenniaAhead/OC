import React, { useState } from 'react'
import "../mycss/AddTip.css"
import { Settings, ArrowLeft, Check } from 'react-feather'
import Detail from './Detail'

const AddTip = () => {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const myOne = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setOne(!one)
    }
    const myTwo = () => {
        setOne(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setTwo(!two)
    }
    const myThree = () => {
        setTwo(false)
        setOne(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setThree(!three)
    }
    const myFour = () => {
        setTwo(false)
        setThree(false)
        setOne(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setFour(!four)
    }
    const myFive = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setOne(false)
        setSix(false)
        setSeven(false)
        setFive(!five)
    }
    const mySix = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setOne(false)
        setSeven(false)
        setSix(!six)
    }
    const mySeven = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setOne(false)
        setSeven(!seven)
    }
    
 return (
    <div className="add-tip-container">
        <div className="left-container-aa3">
            <div className="top-text-aa3 d-flex justify-content-between">
                <div className="text-aa3 d-flex align-items-center"><div className="back-arrow-aa3 pe-3"><ArrowLeft size={30}/></div><div> Add a tip amount</div></div>
                <div className="setting-icon-aa3" style={{cursor:"pointer"}}><Settings size={20} /></div>
            </div>
            <div className="tip-value-boxes">
                <div className="tip-value-1 tip-box" onClick={myOne} >No tip
                {one && <Check id="check-badge" strokeWidth={3}/>}</div>
                <div className="tip-value-2 tip-box" onClick={myTwo} >10% <div className='text-cc3'>₹33
                {two && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-3 tip-box" onClick={myThree} >18% <div className='text-cc3'>₹59.40
                {three && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-4 tip-box" onClick={myFour} >25% <div className='text-cc3'>₹82.50
                {four && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-5 tip-box" onClick={myFive} >35% <div className='text-cc3'>₹115.50
                {five && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-6 tip-box" onClick={mySix} >45% <div className='text-cc3'>₹148.50
                {six && <Check id="check-badge" strokeWidth={3}/>}</div></div>
                <div className="tip-value-7 tip-box" onClick={mySeven} >Custom <div> amount
                    {seven && <Check id="check-badge" strokeWidth={3}/>}</div></div>
            </div>
                <div className='text-bb3'>Tips goes to Kondeti Anusha <a href="">Edit</a> </div>
        </div>
        <Detail/>
    </div>
 )
}

export default AddTip