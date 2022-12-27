import React from 'react'
import { Link } from 'react-router-dom'
import StokTakesButton from './StokTakesButton'
import StockTakesLayout from './StokTakeslayout/StockTakesLayout'

const Stocktakes = () => {
  return (
    <div>
     <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Stocktakes</h3>
               <p> Count and record the amount and value of stock your business holds.<Link> Learn more </Link></p>

            </div>
            <div className=''> 
             <StokTakesButton />
              
            
            </div>

       </div>
       <StockTakesLayout />

    </div>
  )
}

export default Stocktakes