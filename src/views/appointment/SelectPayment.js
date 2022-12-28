import React, { useState } from 'react'
import "../mycss/AddTip.css"
import "../mycss/SelectPayment.css"
import { Modal, ModalBody } from 'reactstrap'
import { Settings, ArrowLeft, X, Search, Slash, DollarSign, Columns } from 'react-feather'
import Detail from './Detail'
import cashpayment from '../images/cashpayment.svg'
import voucherpayment from '../images/voucherpayment.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SelectPayment = () => {
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  const [amount, setAmount] = useState("Select a amount")

  const AddTipAppointment = useSelector(state => state.AppointmentReducer)
  const AddTipArray = AddTipAppointment.tipAdded
  console.log(AddTipArray)

  const SelectAmount = (current) => {
    setAmount(current.target.textContent)
  }

  return (
    <div className="select-payment-container">
        <div className="left-container-aa4" style={{background:"#f8f8fb"}}>
            <div className="top-text-aa4 d-flex justify-content-between">
                <div className="text-aa4 d-flex align-items-center"><NavLink to='/addtip' ><div className="back-arrow-aa4 pe-3"><ArrowLeft size={30}/></div></NavLink><div> Select payment</div></div>
                <div className="setting-icon-aa4" style={{cursor:"pointer"}}><Settings size={20}/></div>
            </div>
            <div className="payment-options-box">
                <div className="p-option-1 payment-box" onClick={() => setCenteredModal1(!centeredModal1)}><div className='cash-icon'><img src={cashpayment} alt='cash'/></div><div className="text-cc4">Cash</div></div>
                <div className="p-option-2 payment-box" onClick={() => setCenteredModal2(!centeredModal2)}><div className='voucher-icon'></div><img src={voucherpayment} alt='voucher'/><div className='text-cc4'>Voucher</div></div>
                <div className="p-option-3 payment-box"><div className='split-payment-icon'><Columns style={{color:'#4ECB71'}} size={35} /></div> <div className='text-cc4'>Split payment</div></div>
                <div className="p-option-4 payment-box"><div className="Others-icon"></div><DollarSign  style={{color:'#4ECB71'}} size={35}  /><div className='text-cc4'>Others</div></div>
            </div>
        </div>
        <Detail mypath="/timegraph" />
        {/* //Cash payment */}
        <Modal isOpen={centeredModal1} toggle={() => setCenteredModal1(!centeredModal1)} className='modal-dialog-centered'>
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
                    <div className="text-dd4 my-amount-aa4">{amount}</div>
                </div>
                <div className="change-given-aa4">
                   <div className='text-ee4'> No change given </div>
                </div>
                <div className="amount-options-container-aa4">
                    <div onClick={SelectAmount} className="amount-aa4">₹126</div>
                    <div onClick={SelectAmount} className="amount-aa4">₹127.50</div>
                    <div onClick={SelectAmount}  className="amount-aa4">₹130</div>
                    <div onClick={SelectAmount} className="amount-aa4">₹140</div>
                    <div onClick={SelectAmount} className="amount-aa4">₹150</div>
                    <div onClick={SelectAmount} className="amount-aa4">₹500</div>
                </div>
            </div>
          <div className="modal-btn-box-aa4">
                <button className='btn-bb4' onClick={() => setCenteredModal1(!centeredModal1)}>Collect cash</button>
                <button className='btn-aa4' onClick={() => setCenteredModal1(!centeredModal1)}>Cancel</button>
            </div>
          </ModalBody>
        </Modal>
        {/* //Redeem voucher */}
        <Modal isOpen={centeredModal2} toggle={() => setCenteredModal2(!centeredModal2)} className='modal-dialog-centered'>
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
                    <div style={{paddingRight:"15px"}}><Search size={18}/></div><input className='text-gg4' type="text" placeholder='Enter voucher code'/>
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
