import "../mycss1/Promote.css"
import React from "react"
import Deals from "./Deals"
import { useState } from "react"
import Integrations from "./Integrations"
import { ChevronLeft } from 'react-feather'

const Promote = () => {
  const [styleTwo, setstyleTwo] = useState({ display: "block" })
  const [styleOne, setstyleOne] = useState({ justifyContent: "flex-end" })
  const [styleThree, setstyleThree] = useState({ transform: "rotate(0deg)" })
  const [styleFour, setstyleFour] = useState({
    position: "relative",
    left: "-50%",
  })
  const [dealsStyle, setDealsStyle] = useState({background:"#d9d9d9"})
  const [integrationsStyle, setIntegrationsStyle] = useState({})
  const [component, setcomponent] = useState(true)
  const showDeals = () => {
    setcomponent(true)
    setDealsStyle({background:"#d9d9d9"})
    setIntegrationsStyle({})
  };
  const showIntegrations = () => {
    setcomponent(false)
    setDealsStyle({})
    setIntegrationsStyle({background:"#d9d9d9"})
  };

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
  };
  return (
    <div className="promote-container-wrapper">
      <div className="promote-container">
        <div className="side-menu-wrapper" style={styleTwo}>
          <div className="side-menu-container">
            <div className="promote-text-wrapper">
              <p className="promote-text">Promote</p>
            </div>
            <div className="links-wrapper">
              {/* <Link  to="/promote/deals" className='deals-link nav-link'>Deals</Link>
     
    <Link to="/promote/integrations" className='integrations-link nav-link'>Integrations</Link> */}
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
            {/* <img style={styleThree} src={Left} alt="" /> */}
            <ChevronLeft/>
          </button>
        </div>
        <div className="deals-component-wrapper">
          {/* <Route exact  path="/promote/deals"><Deals styleOne={styleOne}/></Route>
<Route exact  path="/promote/integrations"><Integrations/></Route> */}
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
