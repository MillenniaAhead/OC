import React from 'react'
import modulo from '../images/modulo.svg'
import { MoreVertical } from "react-feather"
import '../mycss1/DealsList.css'

const DealsList = () => {
  return (
    <>
    <div className="my-deal-box d-flex justify-content-between">
        <div className='d-flex '>
        <div className='image-a'>
            <div>
            <img src={modulo} alt="" />
            </div>
        </div>
        <div className="list-detail-a">
            <p className='text-n'>promotion Deal</p>
            <p className='text-o'>10% discount for all services and products</p>
            <p className='text-o'>20 dec 2022 to outgoing</p>
        <div className='list-right-side list-right-side-3'>
        <div className='status'><p>STATUS</p></div>
        <div className='three-dot'>
            <MoreVertical/>
        </div>
        </div>
        </div>
        </div>
        <div className='list-right-side list-right-side-2'>
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
        <div className='d-flex justify-content-center mt-1'>1 of 1</div>
        </>
  )
}

export default DealsList
