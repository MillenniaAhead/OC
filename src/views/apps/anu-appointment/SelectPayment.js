import React, { useState, useEffect } from 'react'
import "./mycss/AddTip.css"
import "./mycss/SelectPayment.css"
import { Modal, ModalBody, Input, InputGroup, InputGroupText, Alert } from 'reactstrap'
import { Settings, ArrowLeft, X, Search, Slash, DollarSign, Columns, User, Trash2, MoreHorizontal, Check } from 'react-feather'
import cashpayment from '../images/cashpayment.svg'
import voucherpayment from '../images/voucherpayment.svg'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from 'axios'

const SelectPayment = () => {
  //For modal
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  //For amount
  const [amount, setAmount] = useState("Select a amount")
  //For alert
  const [visible, setVisible] = useState(false)
  //For store data
  const [appointment, setAppointment] = useState({services:[]})
  //demo price to complete functionality
  const [myPrice, setMyPrice] = useState("")
  //demo services for complete functionality
  const myServices = [{ name:'Haircut', price:40}, {name:'Hair Color', price:57}, {name:'Blow Dry', price:35}, {name:'Balayage', price:150}, {name:'Facial', price:115}]

  //get data from reducer
  const reducerData = useSelector(state => state.AppointmentReducer.tips)

  const [tipValue, setTipValue] = useState(!reducerData ? "No tip" : reducerData[0])

  //Get appointment by id
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

  //For select a amount
  const SelectAmount = (current) => {
    setAmount(current.target.id)
  }
  //For costom amount
  const costomAmount = (e) => {
    setAmount(e.target.value)
  }

  //For redirect
  const history = useHistory()

  //Add tip and payment and update appointment
   const addPayment = () => {
    axios.put(`http://localhost:4000/api/newAppointments/${id}`, {tip:tipValue, payment:amount})
    .then(res => {
        console.log(res)
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
            history.push('/timegraph')
        }, 3000)
    })
    .catch(err => console.log(err))
   }

//Delete tip
 const DeleteTipValue = () => {
  setTipValue("No tip")
}

//Delete amount
  const DeleteAmount = () => {
    setAmount("Select a amount")
  }

  return (
    <div className="select-payment-container">
        {/* for alert */}
        <div className="my-alert-comp my-alert-comp-2 my-alert-comp-3">
      <Alert isOpen={visible}>
        <div className='alert-body text-center fs-4'>
        Checkout successfully
        </div>
      </Alert>
      </div>
        <div className="left-container-aa4" style={{background:"#f8f8fb"}}>
            <div className="top-text-aa4">
                <div className="text-aa4"><NavLink to={`/addtip/${id}`} ><div className="back-arrow-aa4"><ArrowLeft size={30}/></div></NavLink><div> Select payment</div></div>
                <div className="setting-icon-aa4" style={{cursor:"pointer"}}><Settings size={20}/></div>
            </div>
                {/* for payment option boxes */}
            <div className="payment-options-box">
                <div className="p-option-1 payment-box" style={amount !== "Select a amount" ? {border:'1px solid #1bb70b'} : {}} onClick={() => setCenteredModal1(!centeredModal1)}><div className='cash-icon'><img src={cashpayment} alt='cash'/></div>
                <div className="text-cc4">Cash</div>{amount !== "Select a amount" ? <Check id="check-badge" strokeWidth={3}/> : ""}</div>

                <div className="p-option-2 payment-box" onClick={() => setCenteredModal2(!centeredModal2)}><div className='voucher-icon'></div><img src={voucherpayment} alt='voucher'/><div className='text-cc4'>Voucher</div></div>
                <div className="p-option-3 payment-box"><div className='split-payment-icon'><Columns style={{color:'#4ECB71'}} size={35} /></div> <div className='text-cc4'>Split payment</div></div>
                <div className="p-option-4 payment-box"><div className="Others-icon"></div><DollarSign  style={{color:'#4ECB71'}} size={35}  /><div className='text-cc4'>Others</div></div>
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
                </div> : "" }
                {/* for cash */}
                {amount !== "Select a amount" ? <div className="total d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3 d-flex'><span style={{padding:"1px 3px 0 0", cursor:"pointer"}} className='d-flex'><Trash2 onClick={DeleteAmount} size={20}/></span><span>Cash</span></div>
                    <div className='text-cc3'>₹{amount}</div>
                </div> : ""}
            </div>
            <div className="bottom-box-aa3">
                {/* total with No tip */}
            {(tipValue === 'No tip' || tipValue === "Custom amount") && amount === "Select a amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{myPrice}</div>
                </div> : ""}
                {/* total with tip */}
            {tipValue !== 'No tip' && tipValue !== "Custom amount" && amount === "Select a amount" ? <div className="to-pay  d-flex justify-content-between my-row-aa3">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹{tipValue + myPrice}</div>
                </div> : ""}
                {/* change when No tip */}
                {(tipValue === 'No tip' || tipValue === "Custom amount") && amount !== "Select a amount" ?  <div className="total d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Change</div>
                    <div className='text-cc3'>₹{amount - myPrice}</div>
                </div> : ""}
                {/* change when tip given */}
                {tipValue !== 'No tip' && tipValue !== "Custom amount" && amount !== "Select a amount" ? <div className="total d-flex justify-content-between my-row-aa3">
                    <div className='text-cc3'>Change</div>
                    <div className='text-cc3'>₹{amount - (tipValue + myPrice)}</div>
                </div> : ""}
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"> <MoreHorizontal size={30}/></button>
                <button onClick={addPayment} className="continue-aa3 btn-bb3">Continue</button>
                </div>
            </div>
            </div>
        </div>
        {/* //Cash payment modal*/}
        <Modal style={{padding:'0'}}  isOpen={centeredModal1} toggle={() => setCenteredModal1(!centeredModal1)} className='modal-dialog-centered'>
          <ModalBody style={{background:"white", padding:"0"}}>
          <div className="modal-top-aa4 d-flex justify-content-between">
          <div className="cash-payment-aa4 text-bb4">Cash payment</div>
            <div className='text-bb4' style={{cursor:"pointer"}} onClick={() => setCenteredModal1(!centeredModal1)}><X/></div>
            </div>
          <div className="modal-body-aa4">
                <div className="d-flex justify-content-between amount-to-pay-aa4">
                    <div className="text-cc4">Amount to pay</div>
                    <div className='text-ff4'>₹126.50</div>
                </div>
                <div className="costomer-amount">
                    <div className='text-dd4 mb-1'>Amount given by the costomer</div>
                    <input value={amount} onChange={costomAmount} type='number' className="text-dd4 my-amount-aa4"/>
                </div>
                <div className="change-given-aa4">
                   <div className='text-ee4'> No change given </div>
                </div>
                <div className="amount-options-container-aa4">
                    <div onClick={SelectAmount} id={126} className="amount-aa4">₹126</div>
                    <div onClick={SelectAmount} id={127.50} className="amount-aa4">₹127.50</div>
                    <div onClick={SelectAmount} id={130}  className="amount-aa4">₹130</div>
                    <div onClick={SelectAmount} id={140} className="amount-aa4">₹140</div>
                    <div onClick={SelectAmount} id={150} className="amount-aa4">₹150</div>
                    <div onClick={SelectAmount} id={500} className="amount-aa4">₹500</div>
                </div>
            </div>
          <div className="modal-btn-box-aa4">
                <button className='btn-bb4' onClick={() => setCenteredModal1(!centeredModal1)}>Collect cash</button>
                <button className='btn-aa4' onClick={() => setCenteredModal1(!centeredModal1)}>Cancel</button>
            </div>
          </ModalBody>
        </Modal>
        {/* //Redeem voucher modal*/}
        <Modal style={{padding:'0'}}  isOpen={centeredModal2} toggle={() => setCenteredModal2(!centeredModal2)} className='modal-dialog-centered'>
          <ModalBody style={{background:"white", padding:"0"}}>
          <div className="modal-top-aa4 d-flex justify-content-between">
          <div className="use-voucher-aa4 text-bb4">Redeem voucher</div>
            <div className='text-bb4' style={{cursor:"pointer"}} onClick={() => setCenteredModal2(!centeredModal2)}><X/></div>
            </div>
          <div className="modal-body-bb4">
            <div className="d-flex justify-content-between amount-to-pay-aa4">
                    <div className="text-cc4">Amount to pay</div>
                    <div className='text-ff4'>₹126.50</div>
                </div>
                <div className="voucher-code-field-aa4">
                <InputGroup className='input-group-merge mb-2'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input style={{fontSize:'20px'}} placeholder='Enter voucher code' />
      </InputGroup>             
      </div>
                <div className="no-voucher-aa4 flex-column h-75 d-flex align-items-center justify-content-center">
                    <div><Slash size={70} strokeWidth={1}/></div>
                    <div className='text-hh4'>No voucher selected</div>
                </div>
            </div>
            <div className="modal-btn-box-bb4">
                <button className='btn-bb4' onClick={() => setCenteredModal2(!centeredModal2)}>Redeem</button>
                <button className='btn-aa4' onClick={() => setCenteredModal2(!centeredModal2)}>Cancel</button>
            </div>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default SelectPayment
