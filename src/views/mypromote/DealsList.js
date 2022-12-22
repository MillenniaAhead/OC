import React from 'react'
import modulo from '../images/modulo.svg'
import { MoreVertical } from "react-feather"
import '../mycss1/DealsList.css'

const DealsList = () => {
  return (
    <div className="mb-3 my-deal-box d-flex justify-content-between">
        <div className='d-flex '>
        <div className='image-a'>
            <div>
            <img src={modulo} alt="" />
            </div>
        </div>
        <div className="list-detail-a">
            <p className='text-n'>Name</p>
            <p className='text-o'>x % discount for service and product</p>
            <p className='text-o'>20 dec 2022</p>
        </div>
        </div>
        <div className='list-right-side'>
        <div className='status'><p>STATUS</p></div>
        <div className='total-sales'>
            <p className='text-p'>Total sales</p>
            <p className='text-p'>₹0</p>
        </div>
        <div className='three-dot'>
            <MoreVertical/>
        </div>
        </div>
    </div>
  )
}

export default DealsList
