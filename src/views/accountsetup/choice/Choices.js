import React from "react"
import image4 from "./image/image 4.png"
import image5 from "./image/image 5.png"
import image6 from "./image/image 6.png"
import image7 from "./image/image 7.png"
import image8 from "./image/image 8.png"
import image9 from "./image/image 9.png"
import image10 from "./image/image 10.png"
import image11 from "./image/image 11.png"
import image12 from "./image/image 12.png"
import image13 from "./image/image 13.png"
import image14 from "./image/image 14.png"
import image15 from "./image/image 15.png"
import image16 from "./image/image 16.png"
import image17 from "./image/image 17.png"
import image18 from "./image/image 18.png"
import Group60 from "./image/Group 60.png"
import { useHistory } from "react-router-dom"
import "./Chked.css"


function Choices() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/choice2")
  }

  const selectHandler = (e) => {
    const isClickedOnInnerItem = e.target.classList.contains("selector-inner")

    if (isClickedOnInnerItem) {
      if (e.target.parentElement.classList.contains("{checked")) {
        return e.target.parentElement.classList.remove("checked")
      }
      e.target.parentElement.classList.add("checked")
    } else {
      if (e.target.classList.contains("checked")) {
        return e.target.classList.remove("checked")
      }

      e.target.classList.add("checked")
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between aling-items-center border ">
        <div style={{ fontSize: "41px", marginLeft: "10px" }}>&#215;</div>
        <div>
          <button onClick={navigateHandler} className="mt-2 me-4" style={{height:'25px', width:'70px', backgroundColor:'rgba(78,78,78,1)', color:'white'}}>Next Step</button>
        </div>
      </div>
      <div className="d-flex justify-content-center aling-items-center m-2">
        <h2>Choose your main business type</h2>
      </div>

      <div className="container  ">
        {/* <div className="row row-cols-6 gap-2"> */}
        <div className="" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>

          <div onClick={selectHandler}
            className="border text-center"
          >
            <img src={image4} className="selector-inner" />
            <h6 className="selector-inner">Hair Salon</h6>
          </div>

          <div onClick={selectHandler} className="1 border text-center">
            <img src={image5} className="selector-inner" />
            <h6 className="selector-inner">New Salon</h6>
          </div>
          <div  onClick={selectHandler} className="border text-center ">
            <img src={image8} className="selector-inner"/>
            <h6 className="selector-inner">Barbershop</h6>
          </div>
          <div onClick={selectHandler} className="border text-center">
            <img src={image7}  className="selector-inner" />
            <h6>Beauty Salon</h6>
          </div>
          <div onClick={selectHandler} className="border text-center">
            <img src={image15}  className="selector-inner" />
            <h6>Aesthetics</h6>
          </div>
          <div onClick={selectHandler} className="border text-center ">
            <img src={image11}  className="selector-inner" />
            <h6>Spa</h6>
          </div>
        </div>

        <div className=""  style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>
          <div onClick={selectHandler} className="border text-center ">
            <img src={image10}  className="selector-inner"/>
            <h6>Massage</h6>
          </div>
          <div onClick={selectHandler} className="border text-center">
            <img src={image6}  className="selector-inner"/>
            <h6>Waxing Salon</h6>
          </div>
          <div onClick={selectHandler} className="border  text-center">
            <img src={image16}  className="selector-inner" />
            <h6>Tanning Studio</h6>
          </div>

          <div onClick={selectHandler} className="border text-center">
            <img src={image9}  className="selector-inner" />
            <h6>Eyebrows & Lashes</h6>
          </div>
          <div onClick={selectHandler} className="border text-center">
            <img src={image17}  className="selector-inner"/>
            <h6>Tattoo & Piercing</h6>
          </div>

          <div onClick={selectHandler} className="border text-center">
            <img src={image14}  className="selector-inner"/>
            <h6>Therapy Center</h6>
          </div>
        </div>

        <div className=""  style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>
          <div onClick={selectHandler} className="border text-center">
            <img src={image18}  className="selector-inner"/>
            <h6>Weight Loss</h6>
          </div>
          <div onClick={selectHandler} className="border text-center">
            <img src={image13}  className="selector-inner"/>
            <h6>Personal Trainer</h6>
          </div>

          <div onClick={selectHandler} className="border  text-center">
            <img src={image12}  className="selector-inner" />
            <h6>Gym & Fitness</h6>
          </div>

          <div onClick={selectHandler} className="border text-center">
            <img  src={Group60}  className="selector-inner" />
            <h6>Other</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Choices
