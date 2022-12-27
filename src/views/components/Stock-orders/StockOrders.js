import React from 'react'
import { Link } from 'react-router-dom'
import StockOrderButton from './StockOrderButton'
import StockOrderLayout from './Stock-order-layout/StockOrderLayout'

const StockOrders = () => {
  return (
    <div>
         <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Stock orders</h3>
               <p> Add and manage your stock orders. <Link> Learn more </Link></p>

            </div>
            <div className=''> 
             <StockOrderButton />
              
            
            </div>

       </div>
       <StockOrderLayout />

    </div>
  )
}

export default StockOrders