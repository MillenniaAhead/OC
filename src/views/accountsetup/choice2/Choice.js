import React from 'react'
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
import Vector from "./image/Group 60.png"
import { useHistory } from 'react-router-dom'
import "./Chked.css"

function Choice() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/edit")
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
      <div className='d-flex justify-content-between aling-items-center border '>

        <div  className=' '>
        <div style={{fontSize:'30px', marginLeft:'10px', color:'green', marginTop:'11px'}}>&#215; Previous</div>
        </div>
        <div>

        <button onClick={navigateHandler}  style={{borderRadius:'4px'}} className='mt-1 me-3  w-5'>save</button>
        </div>
      </div>
      <div className='d-flex justify-content-center aling-items-center m-1'>
        <h2>Choose your main business type</h2>
      </div>

      <div className="container">

        <div className='text-center' style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>

        <div onClick={selectHandler} className='border '>

      <img src={image5} className="selector-inner"/>
      <h6>New Salon</h6>
        </div>

            <div onClick={selectHandler} className='border '>
        <img src={image8} className="selector-inner"/>
        <h6>Barbershop</h6>
      </div>
      
      <div onClick={selectHandler} className='border '>

        <img src={image7} className="selector-inner"/>
        <h6>Beauty Salon</h6>
      </div>

      <div onClick={selectHandler} className='border'>

      <img src={image15} className="selector-inner" />
        <h6>Aesthetics</h6>
        </div>
    
    <div onClick={selectHandler} className='border '>

      <img src={image11} className="selector-inner" />
        <h6>Spa</h6>
        </div>
          <div onClick={selectHandler} className='border '>
        <img src={image10} className="selector-inner" />
        <h6>Massage</h6>
      </div>
      
      </div>

      <div className=' text-center  '  style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>
    
      <div onClick={selectHandler} className='border '>
        <img src={image6} className="selector-inner" />
        <h6>Waxing Salon</h6>
      </div>
       <div onClick={selectHandler} className='border '>

        <img  src={image16} className="selector-inner" />
        <h6>Tanning Studio</h6>
      </div>
        
      <div onClick={selectHandler} className='border '>

        <img src={image9} className="selector-inner" />
        <h6>Eyebrows & Lashes</h6>
      </div>
        <div onClick={selectHandler} className='border '>

        <img src={image17} className="selector-inner"/>
        <h6>Tattoo & Piercing</h6>
      </div>
     
      <div onClick={selectHandler} className='border '>

        <img src={image14} className="selector-inner" />
        <h6>Therapy Center</h6>
      </div>
      <div onClick={selectHandler} className='border '>

<img src={image18} className="selector-inner" />
<h6>Weight Loss</h6>
</div>
    
      </div>

      <div className=' text-center'  style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '10px', margin: '0px 0 10px 0'}}>
     
       <div onClick={selectHandler} className='border'>

        <img src={image13}  className="selector-inner"  />
        <h6>Personal Trainer</h6>
      </div>
      
      <div onClick={selectHandler} className='border '>

        <img src={image12} className="selector-inner" />
        <h6>Gym & Fitness</h6>
      </div>
      <div onClick={selectHandler} className='border '>

        <img src={Vector}  className="selector-inner" />
        <h6>Other</h6>
      </div>
       </div>

      </div>
    </>
  )
}

export default Choice
