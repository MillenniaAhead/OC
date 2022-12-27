import React from 'react'
import { Link } from 'react-router-dom'
import SupplierButton from './SupplierButton'
import SuppliersLayout from './Suppliyerlayout/SuppliersLayout'
const Suppliers = () => {
  return (
    <div>
           <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Suppliers</h3>
               <p> Add and manage details of your suppliers. <Link> Learn more</Link></p>

            </div>
            <div className=''> 
             <SupplierButton />
              
            
            </div>

       </div>
        <SuppliersLayout />
    </div>
  )
}

export default Suppliers