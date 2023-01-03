import React, { useState } from "react"
import Progress from "./Progress"
import { NavLink, useHistory } from "react-router-dom"
import Flatpickr from "react-flatpickr"
import { Modal, ModalBody, Button } from "reactstrap"
import { X } from "react-feather"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./promoteRedux"

const StepTwo = () => {
  //For required field
  const [redStyle, setRedStyle] = useState({ display: "none" })
  const [redBox, setRedBox] = useState({ border: "1px solid #d9d9d9", bordeRadius:"4px" })

  //For modals
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  const [centeredModal3, setCenteredModal3] = useState(false)
  const [centeredModal4, setCenteredModal4] = useState(false)

  //For name and description values
  const [promotionDetail, setPromotionDetail] = useState({name:"", description:''})

  //For product
  const [product, setProduct] = useState([])

  //For service
  const [service, setService] = useState([])

  //For date picker
  const [picker1, setPicker1] = useState(new Date())
  const [picker2, setPicker2] = useState(new Date())

  //For color change of promotion value type box
  const [color1, setColor1] = useState('#1bb70b')
  const [color2, setColor2] = useState('white')

  //For select promotion value type
  const [promotionValueType, setPromotionValueType] = useState('%')

  //For write promotion value in input field
  const [myPromotionValue, setMyPromotionValue] = useState(10.00)

  //For hide input fields
  const [block1, setBlock1] = useState({display:'none'})
  const [block2, setBlock2] = useState({display:'none'})

  //For maxUse value
  const [maxUseValue, setMaxUseValue] = useState('no-limits')

  //For minPurchase value
   const [minPurchaseValue, setMinPurchaseValue] = useState('no-limits')

   //For check toggle one true or false
   const [toggle1, setToggle1] = useState(false)

   //For checked or unchecked toggle2
   const [toggle2, setToggle2] = useState(false)

  //For add and remove products 
  const addProduct = (event) => {
    if (product.includes(event.target.value)) {
      const deselect = product.filter(
        (myproduct) => myproduct !== event.target.value
      )
      setProduct(deselect)
    } else {
      setProduct([...product, event.target.value])
    }
  }

  //For add and remove servoces
  const addService = (event) => {
    if (service.includes(event.target.value)) {
      const deselect = service.filter(
        (myservice) => myservice !== event.target.value
        )
        setService(deselect)
      } else {
      setService([...service, event.target.value])
    }
  }

  //For change box color
  const promotionValue1 = (e) => {
    setPromotionValueType(e.target.textContent)
    setColor2('white')
    setColor1('#1bb70b')
  }
  const promotionValue2 = (e) => {
    setPromotionValueType(e.target.textContent)
    setColor1('white')
    setColor2('#1bb70b')
  }
  //For set promotion value type
  const promotionValue = (e) => {
    setMyPromotionValue(e.target.value)
  }

  //For update values of name and description
  const updateValue = (current) => {
    setPromotionDetail({...promotionDetail, [current.target.name]:current.target.value})
    // alert gone (name)
    setRedStyle({display:'none'})
    setRedBox({border: "1px solid #d9d9d9", borderRadius:'4px'})
  }
  
  //For input fields
  const maxUse = (e) => {
    setMaxUseValue(e.target.value)
  }
  
  const minPurchaseFun = (e) => {
    setMinPurchaseValue(e.target.value)
  }
  
  //For togglers
  const toggler1 = () => {
    if (toggle2 !== true) {
      setToggle1(!toggle1)
    } else {
      alert('Limit total number of uses is checked')
      setToggle1(false)
    }
  }
  const toggler2 = () => {
    if (toggle1 === true) {
      setToggle2(false)
      alert('Limit to one use per client is checked')
    } else {
    if (block1.display === 'none') {
      setBlock1({display:'block'})
      setToggle2(true)
    } else {
      setBlock1({display:'none'})
      setToggle2(false)
    }
    if (toggle1 === false) {
      setMaxUseValue('no-limit')
    } else {
      setMaxUseValue(1)
    }
  }
  }
  const toggler3 = () => {
    if (block2.display === 'none') {
      setBlock2({display:'block'})
    } else {
      setBlock2({display:'none'})
    }
  }

  //For navigate next step with condition
  const nextStep = useHistory()

   //For dispatch action from action.js
   const dispatch = useDispatch()
   const { CollectDealData } = bindActionCreators(actionCreators, dispatch) 
   const { DeleteLastData } = bindActionCreators(actionCreators, dispatch) 
   const { ClearDealData } = bindActionCreators(actionCreators, dispatch) 

  //On next step click
  const formHandle = () => {
    if (promotionDetail.name === "") {
      //Show alert (name)
      setRedStyle({ display: "block" })
      setRedBox({ border: "1px solid red", bordeRadius:'4px' })
    } else {
      //Navigate
      nextStep.push("/promote/stepthree")
      //Call action 
      CollectDealData([promotionDetail, product, service, picker1, picker2, { promotion_value: myPromotionValue, promotion_value_type: promotionValueType}, {max_use: maxUseValue, min_purchase: minPurchaseValue}])
    }
  }

  //On click of Previous
  const Previous = () => {
    DeleteLastData()
  }
  //On click of X
  const Clear = () => {
    ClearDealData()
  }

  return (
    <div className="step-two-container">
      <div className="head-component-wrapper">
        <div className="head-container">
          <div className="btns-wrapper">
            <div className="left-side">
              <div onClick={Clear} className="cross-symbol">
                <NavLink to="/navigationpromote">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
                </NavLink>
              </div>
              <div onClick={Previous} className="previous-page">
                <NavLink  to="/promote/stepone" style={{ color: "#1BB70B" }}>
                  Previous
                </NavLink>
              </div>
            </div>
            <div className="right-side">
              <div className="next-step-btn">
                <div className="next-btn-a5" onClick={formHandle}>
                  Next step{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="progress-wrapper">
            <Progress width="50%" />
          </div>
        </div>
      </div>
      <div className="step-two-body-container">
        <div className="step-two-body-wrapper">
          <div className="step-two-heading-box">
            <p className="text-a10">Create a deal</p>
            <h3 className="text-b10">Customise promotion details</h3>
            <p className="text-c10">
              Choose how and when to apply the promotion. Learn more
            </p>
          </div>
          <div className="deal-costomise-container">
            <div className="deal-costomise-container-a">
              <div
                className="top-description-text-wrapper"
              >
                <p className="text-c5">Basic details</p>
                <p className="text-d5" style={{ marginTop: "2px" }}>
                  Choose a unique name, active dates and items to sell with the
                  promotion
                </p>
              </div>
              <div
                className="detail-container"
                style={{ padding: "24px 32px" }}
              >
                <div className="input-wrapper">
                  <div className="name-input">
                    <label className="text-e5" htmlFor="">
                      Name
                    </label>
                    <div className="input-wrapper-a">
                      <input
                        style={redBox}
                        type="text"
                        onChange={updateValue}
                        name="name"
                        id="name"
                        className="input-a"
                        placeholder="Enter promotion name here"
                      />
                      <p style={redStyle} className="text-a5">
                        This field is required
                      </p>
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "25px" }}>
                    <div className="desc-box d-flex justify-content-between">
                      <label htmlFor="" className="text-e5">
                        Description{" "}
                        <span className="text-d10">&#40;Optional&#41;</span>
                      </label>
                      <p>0/600</p>
                    </div>
                    <div className="input-wrapper-b">
                      <textarea
                        maxLength={600}
                        type="text"
                        onChange={updateValue}
                        name="description"
                        id=""
                        className="input-a"
                        placeholder="Enter promotion description here"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="edit-options-wrapper"
                  style={{ marginTop: "20px"}}
                >
                  <div className="edit-option-heading">
                    <p className="text-e5" style={{ marginBottom: "20px" }}>
                      Apply promotion to
                    </p>
                  </div>
                  <div className="edit-options">
                    <div className="option-1 edit-option">
                      <div className="option-text">
                        <p className="text-f5">All services</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal1(!centeredModal1)}
                        >
                          Edit
                        </div>
                      </div>
                      <Modal
                        isOpen={centeredModal1}
                        toggle={() => setCenteredModal1(!centeredModal1)}
                        className="modal-dialog-centered"
                      >
                        <ModalBody>
                          <h2>Select services</h2>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="service"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service1"
                                value="service1"
                                onClick={addService}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">service1</div>
                          </div>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="service"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service2"
                                value="service2"
                                onClick={addService}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">service2</div>
                          </div>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="service"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service3"
                                value="service3"
                                onClick={addService}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">service3</div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple
                              color="dark me-1"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                              outline
                            >
                              cancel
                            </Button.Ripple>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="option-2 edit-option">
                      <div className="option-text">
                        <p className="text-f5">All products</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal2(!centeredModal2)}
                        >
                          Edit
                        </div>
                      </div>
                      <Modal
                        isOpen={centeredModal2}
                        toggle={() => setCenteredModal1(!centeredModal2)}
                        className="modal-dialog-centered"
                      >
                        <ModalBody>
                          <h2>Select products</h2>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="product"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="product1"
                                value="product1"
                                onClick={addProduct}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">product1</div>
                          </div>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="product"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="product2"
                                value="product2"
                                onClick={addProduct}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">product2</div>
                          </div>
                          <div className="select-box-mini">
                            <label
                              className="edit-list-label"
                              htmlFor="product"
                            >
                              <input
                                className="edit-checkbox"
                                type="checkbox"
                                name="product3"
                                value="product3"
                                onClick={addProduct}
                                readOnly
                              />
                            </label>
                            <div className="list-item-names">product3</div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple
                              color="dark me-1"
                              onClick={() => setCenteredModal2(!centeredModal2)}
                              outline
                            >
                              cancel
                            </Button.Ripple>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal2(!centeredModal2)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="option-3 edit-option">
                      <div className="option-text">
                        <p className="text-f5">No memberships</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal3(!centeredModal3)}
                        >
                          Edit
                        </div>
                      </div>
                      <Modal
                        isOpen={centeredModal3}
                        toggle={() => setCenteredModal3(!centeredModal3)}
                        className="modal-dialog-centered"
                      >
                        <ModalBody>
                          <h2>Select products</h2>
                          <h1 className="mt-4 mb-4 text-center">
                            No Membership found
                          </h1>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple
                              color="dark me-1"
                              onClick={() => setCenteredModal3(!centeredModal3)}
                              outline
                            >
                              cancel
                            </Button.Ripple>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal3(!centeredModal3)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="option-4 edit-option">
                      <div className="option-text">
                        <p className="text-f5">No vouchers</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal4(!centeredModal4)}
                        >
                          Edit
                        </div>
                      </div>
                      <Modal
                        isOpen={centeredModal4}
                        toggle={() => setCenteredModal4(!centeredModal4)}
                        className="modal-dialog-centered"
                      >
                        <ModalBody>
                          <h2>Select products</h2>
                          <h1 className="mt-4 mb-4 text-center">
                            No voucher found
                          </h1>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple
                              color="dark me-1"
                              onClick={() => setCenteredModal4(!centeredModal4)}
                              outline
                            >
                              cancel
                            </Button.Ripple>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal4(!centeredModal4)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                  <div className="date-container">
                    <div className="start-date-wrapper me-1">
                      <p className="text-e5">Start date</p>
                      <div className="select-box">
                        <Flatpickr
                          className="form-control"
                          value={picker1}
                          onChange={(date) => setPicker1(date)}
                          id="default-picker"
                        />
                      </div>
                    </div>
                    <div className="end-date-wrapper">
                      <p className="text-e5">End date</p>
                      <div className="select-box">
                        <Flatpickr
                          className="form-control"
                          value={picker2}
                          onChange={(date) => setPicker2(date)}
                          id="default-picker"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="promotion-value-container">
              <div className="promotion-value-wrapper">
                <div className="top-description-text-wrapper">
                  <p className="text-c5">Promotion value and limits</p>
                  <p className="text-d5" style={{ marginTop: "2px" }}>
                    Reduce the price by a fixed amount or a percentage, and
                    limit the number of time this promotion can be used
                  </p>
                </div>
                <div className="body-container">
                  <p className="text-e5" style={{ marginBottom: "5px" }}>
                    Promotion value
                  </p>
                  <div className="box-container-wrapper d-flex flex-column">
                    <div className="box-container">
                      <div className="box-1">
                        <div>
                          {promotionValueType}
                        </div>
                        <input
                          type="text"
                          value={myPromotionValue}
                          onChange={promotionValue}
                          className='myinput-a'
                        />
                      </div>
                      <div className="box-2">
                        <button
                          style={{
                            marginLeft: "5px",
                            borderRadius: "4px 0 0 4px",
                            background:`${color1}`,
                            borderWidth:'1px 0 1px 1px'
                          }}
                          className="btn-b"
                          onClick={promotionValue1}
                        >
                          %
                        </button>
                        <button
                          style={{ borderRadius: "0 4px 4px 0",
                           background:`${color2}`,
                           borderWidth:'1px 1px 1px 0px'}}
                          className="btn-b"
                          onClick={promotionValue2}
                        >
                          INR
                        </button>
                      </div>
                    </div>
                    <div className="info-text text-j5">
                      Discount applies to each item in sale.
                    </div>
                  </div>
                  <div className="three-option-wrapper">
                    <div className="dabba1 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  style={{ width: "48px", height: "24px" }}
                  value='Limit to one use per client'
                  onClick={toggler1}
                  readOnly
                  checked={toggle1}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Limit to one use per client</p>
                        <p className="text-j5">
                          Each client will be able to use this promotion only
                          once.
                        </p>
                      </div>
                    </div>
                    <div className="dabba2 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                      <input 
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        style={{ width: "48px", height: "24px" }}
                        value='Limit total number of uses'
                        onClick={toggler2}
                        readOnly
                        checked={toggle2}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Limit total number of uses</p>
                        <p className="text-j5">
                          Set the total amount of times this promotion can be
                          used.
                        </p>
                      </div>
                    </div>
                    <div style={block1} className='block-input-box'>
                      <div className="text-k5">Max uses</div>
                      <div className='input-field-a max-uses'><input type="number" onChange={maxUse} value={maxUseValue}/></div>
                      </div>
                    <div className="dabba3 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                     <input
                       className="form-check-input"
                       type="checkbox"
                       role="switch"
                       id="flexSwitchCheckDefault"
                       style={{ width: "48px", height: "24px" }}
                       value='Set minimum purchase amount'
                       onClick={toggler3}
                       readOnly
                     />
                     <label
                       className="form-check-label"
                       htmlFor="flexSwitchCheckDefault"
                     ></label>
                   </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Set minimum purchase amount</p>
                        <p className="text-j5">
                          The client must spend a minimum amount to qualify for
                          this promotion.
                        </p>
                      </div>
                    </div>
                    <div style={block2} className='block-input-box'>
                      <div className="text-k5">Minimum purchase amount</div>
                      <div className='input-field-a'><div className='myspan-a'>INR</div><input type="number" value={minPurchaseValue} placeholder='100' onChange={minPurchaseFun}/></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo