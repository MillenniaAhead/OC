import React, { useState } from "react"
import "../mycss1/Promote.css"
import '../mycss1/SideMenu.css'
import Deals from "./Deals"
import Integrations from "./Integrations"
import { ChevronLeft } from 'react-feather'

const Promote = () => {
  const [styleOne, setstyleOne] = useState({ justifyContent: "flex-end" })
  const [styleTwo, setstyleTwo] = useState({ display: "block" })
  const [styleThree, setstyleThree] = useState({ transform: "rotate(0deg)" })
  const [styleFour, setstyleFour] = useState({
    position: "relative", left: "-50%"
  })
  const [dealsStyle, setDealsStyle] = useState({background:"#d9d9d9"})
  const [integrationsStyle, setIntegrationsStyle] = useState({})
  const [component, setcomponent] = useState(true)
  const showDeals = () => {
    setcomponent(true)
    setDealsStyle({background:"#d9d9d9"})
    setIntegrationsStyle({})
  }
  const showIntegrations = () => {
    setcomponent(false)
    setDealsStyle({})
    setIntegrationsStyle({background:"#d9d9d9"})
  }

  const toggleSideBar = () => {
    if (styleTwo.display === "block") {
      setstyleTwo({ display: "none" })
      setstyleOne({ justifyContent: "space-around" })
      setstyleThree({ transform: "rotate(180deg)" })
      setstyleFour({ position: "relative", left: "0" })
    } else {
      setstyleTwo({ display: "block" })
      setstyleOne({ justifyContent: "flex-end" })
      setstyleThree({ transform: "rotate(0deg)" })
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
              <button style={dealsStyle} className="deals-link " onClick={showDeals}>
                Deals
              </button>
              <button style={integrationsStyle} className="integrations-link " onClick={showIntegrations}>
                Integrations
              </button>
            </div>
          </div>
        </div>
        <div>
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
              <Deals styleOne={styleOne}/>
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

export default Promote
