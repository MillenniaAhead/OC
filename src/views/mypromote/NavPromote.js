import React, { useState } from "react"
import Deals from "./Deals"
import Integrations from "./Integrations"
import { ChevronLeft } from 'react-feather'

const NavPromote = () => {
  const [styleOne, setstyleOne] = useState({ justifyContent: "flex-end" })

  //For side menu
  const [styleTwo, setstyleTwo] = useState({ display: "block" })
  const [styleThree, setstyleThree] = useState()
  const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})

  //For menu btn
  const [dealsStyle, setDealsStyle] = useState({background:"rgba(27, 183, 11, 0.3)"})
  const [integrationsStyle, setIntegrationsStyle] = useState({})
  const [component, setcomponent] = useState(true)

  //On click of Deals
  const showDeals = () => {
    setcomponent(true)
    setDealsStyle({background:"rgba(27, 183, 11, 0.3)"})
    setIntegrationsStyle({})
  }
  //On click of Integration
  const showIntegrations = () => {
    setcomponent(false)
    setDealsStyle({})
    setIntegrationsStyle({background:"rgba(27, 183, 11, 0.3)"})
  }

  //On Click of arrow circle
  const toggleSideBar = () => {
    if (styleTwo.display === "block") {
      setstyleTwo({ display: "none" })
      setstyleOne({ justifyContent: "space-around" })
      setstyleThree({ transform: "rotate(180deg)" })
      setstyleFour({ position: "relative", left: "0" })
    } else {
      setstyleTwo({ display: "block" })
      setstyleOne({ justifyContent: "flex-end" })
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

export default NavPromote
