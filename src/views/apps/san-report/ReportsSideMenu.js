import React, {useState} from 'react'
import { ChevronLeft} from 'react-feather'
import { NavLink } from 'react-router-dom'

const SideMenu = (props) => {
    //For side menu
    const [styleTwo, setstyleTwo] = useState({ display: "block" })
    const [styleThree, setstyleThree] = useState()
    const [styleFour, setstyleFour] = useState({position: "relative", left: "-50%"})
    
    //Click on arrow circle
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
        <div className='d-flex'>
      <div className="side-menu-wrapper" style={styleTwo}>
        <div className="side-menu-container">
          <div className="promote-text-wrapper">
            <p className="promote-text">Reports</p>
          </div>
          <div className="links-wrapper">
            <NavLink to={props.link1}><button className="deals-link">
              Dashboard
            </button>
            </NavLink>
            <NavLink to={props.link2}>
            <button className="integrations-link">
              Reports
            </button>
            </NavLink>
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
      </div>
    )
}

export default SideMenu