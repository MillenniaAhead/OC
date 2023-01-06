import React, { useState } from "react"
import Deals from "./Deals"
import Integrations from "./Integrations"
import { ChevronLeft } from 'react-feather'

const NavPromote = () => {

  //For side menu
  const [styleTwo, setstyleTwo] = useState({display:'block'})
  const [styleThree, setstyleThree] = useState()
  const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})
  const [styleFive, setStyleFive] = useState({mode:true})
  const [styleSix, setStyleSix] = useState({display:'none'})

  //For menu btn
  const [component, setcomponent] = useState(true)
  const [component2, setcomponent2] = useState(true)

  //On click of Deals
  const showDeals = () => {
    setcomponent(true)
  }
  //On click of Integration
  const showIntegrations = () => {
    setcomponent(false)
  }
  
  //On click of Deals
  const showDeals2 = () => {
    setcomponent2(true)
    setStyleSix({display:'block'})
    if (styleFive.mode === true) {
      setStyleFive({display:'none'})
    }
  }
  //On click of Integration
  const showIntegrations2 = () => {
    setcomponent2(false)
    setStyleSix({display:'block'})
    if (styleFive.mode === true) {
      setStyleFive({display:'none'})
    }
  }

  //On Click of arrow circle
  const toggleSideBar = () => {
    if (styleTwo.display === "block") {
      setstyleTwo({ display: "none" })
      setstyleThree({ transform: "rotate(180deg)" })
      setstyleFour({ position: "relative", left: "0" })
    } else {
      setstyleTwo({ display: "block" })
      setstyleThree()
      setstyleFour({ position: "relative", left: "-50%" })
    }
  }
  return (
    <div className="promote-container-wrapper">
      <div className="promote-container">
        <div className="side-menu-wrapper" style={styleTwo}>
          <div className="side-menu-container">
            <div className="promote-text-wrapper">
              <p className="promote-text">Promote</p>
            </div>
            <div className="links-wrapper">
              <button className="deals-link " onClick={showDeals}>
                Deals
              </button>
              <button className="integrations-link " onClick={showIntegrations}>
                Integrations
              </button>
            </div>
          </div>
        </div>
        <div className="side-menu-wrapper-2 w-100"  style={styleFive}>
          <div className="side-menu-container-2 w-100">
            <div className="promote-text-wrapper-2">
              <p className="promote-text text-center">Promote</p>
            </div>
            <div className="links-wrapper">
              <button className="deals-link " onClick={showDeals2}>
                Deals
              </button>
              <button className="integrations-link " onClick={showIntegrations2}>
                Integrations
              </button>
            </div>
          </div>
        </div>
        <div className='side-menu-toggler-arrow'>
          <button
            className="side-menu-toggle"
            style={styleFour}
            onClick={toggleSideBar}
          >
            <ChevronLeft style={styleThree}/>
          </button>
        </div>
        <div className="deals-component-wrapper">
          {component ? (
            <div>
              <Deals/>
            </div>
          ) : (
            <div>
              <Integrations />
            </div>
          )}
        </div>
        <div className="deals-component-wrapper-2" style={styleSix}>
          {component2 ? (
            <div>
              <Deals/>
            </div>
          ) : (
            <div>
              <Integrations />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavPromote
