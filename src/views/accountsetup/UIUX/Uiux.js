import React from 'react'
import {AiTwotoneHome} from "react-icons/ai"
import { useHistory } from 'react-router-dom'

function Uiux() {

  const history = useHistory()
  const navigateHandler = function() {
    history.push("/Resource")
  }

  return (
    <div className='container w-75  p-1 mvh-100 '>
    
    
    <div className='d-flex justify-content-between align-items-center' style={{marginTop:'50px'}}>
        <div>
        <p>Settings .  Locations</p>
        <h2 style={{TextWeight:'bold'}}>Locations</h2>
        </div>
        <div>
        <select style={{padding:'3px', margin:'2px', height:'32px'}}>
    <option value="volvo">Options</option>
    
  </select>
        <button  onClick={navigateHandler} className='  border-0 text-white bg-dark' style={{padding:'5px', margin:'2px', width:'136px', borderRadius:'3px'}}>Add new product</button>
        </div>


      </div>
      <div className='d-flex ' style={{marginTop:'50px', border:'1px solid rgba(0,0,0,0.2)'}}>
        <div style={{height:'50px '}}>

        <h2 style={{backgroundColor:"rgba(27, 183, 11, 1)", width:'250px', height:'26vh', display:'flex', alignItems:'center', justifyContent:'center', margin:'15px', borderRadius:'3px'}}><AiTwotoneHome /></h2>
        </div>
        <div style={{padding:'64px 18px'}}>
          <h2>UIUX Designer</h2>
          <p>No business address added</p>
        </div>
      </div>

      
</div>

  )
}

export default Uiux

