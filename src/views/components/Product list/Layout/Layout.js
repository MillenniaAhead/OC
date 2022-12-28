import React from 'react'
import { Link } from 'react-router-dom'
import CustomDropdown from '../ProductsComponents/CustomDropdown'
import AddNewModal from '../ProductsModal/AddNewModal'

const Layout = () => {
  return (
       <div className=' d-flex justify-content-between'> 
            <div>
               <h3> Product list</h3>
               <p> Add and manage your products in stock.<Link> Learn more </Link></p>

            </div>
            <div className=' d-flex  justify-content-center align-content-center mb-2'> 
                 <CustomDropdown />
                 <AddNewModal />
              
            
            </div>

       </div>
  )
}

export default Layout