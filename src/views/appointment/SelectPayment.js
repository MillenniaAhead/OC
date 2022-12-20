import React, { useState } from 'react'
import "../mycss/AddTip.css"
import "../mycss/SelectPayment.css"
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Settings, MoreHorizontal, User, Trash2, ArrowLeft, X, Search, Check, Slash } from 'react-feather'

const SelectPayment = () => {
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)

  return (
    <div className="select-payment-container">
        <div className="left-container-aa4">
            <div className="top-text-aa4 d-flex justify-content-between">
                <div className="text-aa4 d-flex align-items-center"><div className="back-arrow-aa4 pe-3"><ArrowLeft size={30}/></div><div> Select payment</div></div>
                <div className="setting-icon-aa4" style={{cursor:"pointer"}}><Settings size={20}/></div>
            </div>
            <div className="payment-options-box">
                <div className="p-option-1 payment-box" onClick={() => setCenteredModal1(!centeredModal1)}><div className='cash-icon'>*</div><div className="text-cc4">Cash<Check id="check-badge" strokeWidth={3}/></div></div>
                <div className="p-option-2 payment-box" onClick={() => setCenteredModal2(!centeredModal2)}><div className='voucher-icon'></div>*<div className='text-cc4'>Voucher</div></div>
                <div className="p-option-3 payment-box"><div className='split-payment-icon'>*</div> <div className='text-cc4'>Split payment</div></div>
                <div className="p-option-4 payment-box"><div className="Others-icon"></div>*<div className='text-cc4'>Others</div></div>
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
                <div style={{marginTop:"3px"}} className='text-ee1'> 1h with Kondeti Anusha</div>
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
                    <div className='text-hh3 d-flex'><span style={{cursor:"pointer", padding:"1px 3px 0 0"}} className='d-flex'><Trash2 size={20} style={{color:"black"}}/></span><span>Tip for Kondeti Anusha</span></div>
                    <div className='text-cc3'>₹11.50</div>
                </div>
            </div>
            <div className="bottom-box-aa3">
                <div className="to-pay  d-flex justify-content-between">
                    <div className="text-cc3">To pay</div>
                    <div className='text-cc3'>₹115.50</div>
                </div>
                <div className='btn-box-aa3 d-flex justify-content-between'> 
                <button className="three-dit btn-aa3"><MoreHorizontal size={30}/></button>
                <button className="continue-aa3 btn-bb3">Continue</button>
                </div>
            </div>
            </div>
        </div>
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
                    <div className="text-dd4 my-amount-aa4">₹126.50</div>
                </div>
                <div className="change-given-aa4">
                   <div className='text-ee4'> No change given </div>
                </div>
                <div className="amount-options-container-aa4">
                    <div className="amount-aa4">₹126</div>
                    <div className="amount-aa4">₹127.50</div>
                    <div className="amount-aa4">₹130</div>
                    <div className="amount-aa4">₹140</div>
                    <div className="amount-aa4">₹150</div>
                    <div className="amount-aa4">₹500</div>
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
