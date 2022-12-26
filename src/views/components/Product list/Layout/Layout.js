import React from 'react'
import { Link } from 'react-router-dom'
import CustomDropdown from '../ProductsComponents/CustomDropdown'

const Layout = () => {
  return (
       <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Product list</h3>
               <p> Add and manage your products in stock.<Link> Learn more </Link></p>

            </div>
            <div className=''> 
                 <CustomDropdown />
              
            
            </div>

       </div>
  )
}

export default Layout