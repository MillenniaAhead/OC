import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./promoteRedux"
import { NavLink, useHistory } from 'react-router-dom'
import { X } from "react-feather"
import Progress from "./Progress"
import { Alert } from 'reactstrap'

const StepThree = () => {

  //For discountcode
  const [discountCodeValue, setDiscountCodeValue] = useState(null)
  //For togglers
  const [applyPromotion1, setApplyPromotion1] = useState('Enable promotionat point of sale')
  const [applyPromotion2, setApplyPromotion2] = useState(false)
  //For Discount code field 
  const [block1, setBlock1] = useState({display:'none'})
  //For alert compo
  const [visible, setVisible] = useState(false)
  //For required
  const [style1, setStyle1] = useState({display:'none'})
  const [style2, setStyle2] = useState()
  //For check or uncheck toggle1 or toggle2
  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(false)

  //Discount field
  const discountCode = (e) => {
    setDiscountCodeValue(e.target.value)
    setStyle1({display:'none'})
    setStyle2()
  }

  const toggler1Fun = () => {
    setToggle1(!toggle1)
    if (toggle1) {
      setApplyPromotion1(false)
    } else {
      setApplyPromotion1('Enable promotionat point of sale')
    }
  }
  const toggler2Fun = () => {
    setToggle2(!toggle2)
    if (toggle2) {
      setBlock1({display:'none'})
      setApplyPromotion2(false)
    } else {
      setBlock1({display:'block'})
      setApplyPromotion2('Enable discount code')
    }
  }

   //For dipatch action
   const dispatch = useDispatch()
   const { StoreDealData } = bindActionCreators(actionCreators, dispatch) 
   const { DeleteLastData } = bindActionCreators(actionCreators, dispatch) 
   const { ClearDealData } = bindActionCreators(actionCreators, dispatch) 
   const history = useHistory()
  
   const nextBtnFun = () => {
    if (toggle1 && toggle2) {
      if (discountCodeValue === null) {
        setStyle1({display:'block', color:'red'})
        setStyle2({border:'1px solid red'})
      } else {
        StoreDealData([{promotion:applyPromotion1}, {promotion:applyPromotion2, discount_code:discountCodeValue}])
      history.push('/promote/stepFour')
    }
  } else if (toggle1 && !toggle2) {
      StoreDealData({promotion:applyPromotion1})
    history.push('/promote/stepFour')
  } else if (toggle2 && !toggle1) {
    if (discountCodeValue === null) {
      setStyle1({display:'block', color:'red'})
      setStyle2({border:'1px solid red'})
    } else {
      StoreDealData({promotion:applyPromotion2, discount_code:discountCodeValue})
      history.push('/promote/stepFour')
    }
    } else {
      setVisible(true)
    }
   }

  //On click of previous
  const Previous = () => {
    DeleteLastData()
  }

  //On click of X
  const Clear = () => {
    ClearDealData()
  }

  return (
    <div className="step-three-container">
      <div className="head-container-wrapper">
        <div className="head-container">
        <div className="btns-wrapper">
          <div className="left-side">
            <div onClick={Clear} className="cross-symbol">
              <NavLink to="/navigationpromote">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
              </NavLink>
            </div>
            <div onClick={Previous} className="previous-page">
              <NavLink to='/promote/steptwo' style={{color:"#1BB70B"}}>Previous</NavLink>
            </div>
          </div>
          <div className="right-side">
            <div className="next-step-btn">
              <div onClick={nextBtnFun}> Next step </div>
            </div>
          </div>
        </div>
        <div className="progress-wrapper">
          <Progress width='75%' />
        </div>
      </div>
      </div>
      <div className="my-alert-comp" style={{width:'30%', margin:'auto'}}>
      <Alert color='danger' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body text-center'>
        Please enable at least one option
        </div>
      </Alert>
      </div>
      <div className="step-two-body-container">
        <div className="step-two-body-wrapper">
          <div className="step-two-heading-box">
            <p className="text-a10">
              Create a deal
            </p>
            <h3 className="text-b10">
              Choose how to apply this promotion
            </h3>
            <p className="text-c10">
              Choose how clients can get and apply this promotion
              <a href="" style={{color:"#1BB70B"}}>Learn more</a>
            </p>
          </div>
          <div className="how-to-apply-promotion-container">
            <div className="how-to-apply-promotion-wrapper">
              <div className="step-three-option option-one">
                <div className="toggle-btn">
                <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      style={{width:"48px", height:"24px"}}
                      onClick={toggler1Fun}
                      checked={toggle1}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                  <div className="option-text-wrapper">
                    <p className="text-a22"> Enable promotionat point of sale</p>
                    <p className='text-b22'>
                      This allows you to apply this promotion manually during
                      checkout at Point of Sale.
                    </p>
                  </div>
              </div>
              <div className="step-three-option option-two"  style={{marginBottom:'5px'}}>
                <div className="toggle-btn">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      style={{width:"48px", height:"24px"}}
                      onClick={toggler2Fun}
                      checked={toggle2}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                  <div className="option-text-wrapper">
                    <p className="text-a22"> Enable discount code</p>
                    <p className="text-b22">
                      This promotion can be redeemed by clients entering the
                      code when booking services online.
                    </p>
                  </div>
              </div>
              <div style={block1}>
                  <div className="text-k5">Discount code</div>
                  <div className="box-a22" style={style2}>
                  <input onChange={discountCode} value={discountCodeValue} type="text" name="" id="validationCustom03" placeholder="Enter a code, e.g. SALE10" required/>
                  </div>
                <div style={style1}>This field is required</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
