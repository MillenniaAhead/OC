import React from 'react'
import { Link } from 'react-router-dom'
import CustomDropdown from '../ProductsComponents/CustomDropdown'
import CustomsButton from '../ProductsComponents/CustomsButton'


const Layout = () => {
  return (
       <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Product list</h3>
               <p> Add and manage your products in stock.<Link> Learn more </Link></p>

            </div>
            <div className='d-flex justify-content-center align-items-center'> 
                 <CustomDropdown />
                 <CustomsButton />
            
            </div>

       </div>
  )
}

export default Layout