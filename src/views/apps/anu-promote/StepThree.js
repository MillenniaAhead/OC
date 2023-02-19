import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./promoteRedux"
import { NavLink, useHistory } from 'react-router-dom'
import { X } from "react-feather"
import Progress from "./Progress"
import { Alert } from 'reactstrap'
import axios from 'axios'

const StepThree = () => {

  //For discountcode
  const [discountCodeValue, setDiscountCodeValue] = useState("")
  //Visible discount code input field
  const [block1, setBlock1] = useState({display:'none'})
  //For alert compo
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
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

  //Toggller-1
  const toggler1Fun = () => {
    setToggle1(!toggle1)
  }

  //Toggller-2
  const toggler2Fun = () => {
    setToggle2(!toggle2)
    if (toggle2) {
      setBlock1({display:'none'})
      setStyle1({display:'none'})
      setStyle2()
      setDiscountCodeValue("")
    } else {
      setBlock1({display:'block'})
    }
  }

   //For dipatch action
   const dispatch = useDispatch()
   const { CollectDealData } = bindActionCreators(actionCreators, dispatch) 
   const { DeleteLastData } = bindActionCreators(actionCreators, dispatch) 
   const { ClearDealData } = bindActionCreators(actionCreators, dispatch) 
   const history = useHistory()
  
   //reducer
   const reducerData = useSelector(state => state.PromoteReducer.newDeal)

   //On click of next step
   const nextBtnFun = () => {
    const data = [...reducerData, {promotion1:toggle1, promotion2:toggle2, discount_code:discountCodeValue}]
    //Checked both option
    if (toggle1 && toggle2) {
      if (discountCodeValue === "") {
        setStyle1({display:'block', color:'red'})
        setStyle2({border:'1px solid red'})
        setVisible2(true)
        setTimeout(() => {
          setVisible2(false)
        }, 3000)
      } else {
        //axios
        CollectDealData([toggle1, toggle2, discountCodeValue])
        axios.post("http://localhost:4000/api/deals", {deal_name:data[0], name:data[1], description:data[2], services:data[3], products:data[4], memberships:[], vouchers:[], start_date:data[5], end_date:data[6], promotion_value:data[7], promotion_value_type:data[8], max_use_limit:data[9], min_purchase_amount:data[10], promotion1:toggle1, promotion2:toggle2, discount_code:discountCodeValue})
        .then(res => {
          console.log(res)
          setVisible3(true)
         setTimeout(() => {
           setVisible3(false)
           history.push('/promote/stepFour')
         }, 3000)
       })
      .catch(err => console.log(err))
    }

    //Checked option1
  } else if (toggle1 && !toggle2) {
    console.log(data[5])
    //axios
    CollectDealData([toggle1, toggle2, discountCodeValue])
    axios.post("http://localhost:4000/api/deals", {deal_name:data[0], name:data[1], description:data[2], services:data[3], products:data[4], memberships:[], vouchers:[], start_date:data[5], end_date:data[6], promotion_value:data[7], promotion_value_type:data[8], max_use_limit:data[9], min_purchase_amount:data[10], promotion1:toggle1, promotion2:toggle2, discount_code:discountCodeValue})
    .then(res => {
       console.log(res)
       setVisible3(true)
      setTimeout(() => {
        setVisible3(false)
        history.push('/promote/stepFour')
      }, 3000)
    })
    .catch(err => console.log(err))

  //Checked option2
  } else if (toggle2 && !toggle1) {
    if (discountCodeValue === "") {
      setStyle1({display:'block', color:'red'})
      setStyle2({border:'1px solid red'})
      setVisible2(true)
        setTimeout(() => {
          setVisible2(false)
        }, 3000)
    } else {
      //axios
      CollectDealData([toggle1, toggle2, discountCodeValue])
       axios.post("http://localhost:4000/api/deals", {deal_name:data[0], name:data[1], description:data[2], services:data[3], products:data[4], memberships:[], vouchers:[], start_date:data[5], end_date:data[6], promotion_value:data[7], promotion_value_type:data[8], max_use_limit:data[9], min_purchase_amount:data[10], promotion1:toggle1, promotion2:toggle2, discount_code:discountCodeValue})
       .then(res => {
        console.log(res)
        setVisible3(true)
       setTimeout(() => {
         setVisible3(false)
         history.push('/promote/stepFour')
       }, 3000)
   })
   .catch(err => console.log(err))
    }
    
    //Nothing checked
    } else {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 3000)
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
      {/* Alert comp */}
      <div className="my-alert-comp my-alert-comp-2">
      <Alert color='success' isOpen={visible3}>
        <div className='alert-body text-center fs-4'>
        deal created successfully
        </div>
      </Alert>
      </div>
      <div className="my-alert-comp">
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body text-center'>
        Please enable at least one option
        </div>
      </Alert>
      </div>
      <div className="my-alert-comp">
      <Alert color='danger' isOpen={visible2}>
        <div className='alert-body text-center'>
        Please fill all required fields
        </div>
      </Alert>
      </div>
      <div className="head-container-wrapper">
        <div className="head-container">
        <div className="btns-wrapper">
          <div className="left-side left-side-a5">
            <div onClick={Clear} className="cross-symbol">
              <NavLink to="/promote/deals">
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
              {/* toggler 1 */}
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
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                  <div className="option-text-wrapper">
                    <p className="text-a22"> Enable promotion at point of sale</p>
                    <p className='text-b22'>
                      This allows you to apply this promotion manually during
                      checkout at Point of Sale.
                    </p>
                  </div>
              </div>
              {/* toggler 2 */}
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
                      readOnly
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
