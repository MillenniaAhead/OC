import React from 'react'
import { Link } from 'react-router-dom'

import StockTakesLayout from './StokTakeslayout/StockTakesLayout'
import StockTakesModal from './StockTakesModal/StockTakesModal'

const Stocktakes = () => {
  return (
    <div>
     <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Stocktakes</h3>
               <p> Count and record the amount and value of stock your business holds.<Link> Learn more </Link></p>

            </div>
            <div className=''> 
                          <StockTakesModal />
            
            </div>

       </div>
       <StockTakesLayout />

    </div>
  )
}

export default Stocktakes