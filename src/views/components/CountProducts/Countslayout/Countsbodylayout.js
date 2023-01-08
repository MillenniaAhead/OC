import React from 'react'
import CountSublayout from './CountSublayout'
import CountminLayout from './CountminLayout'

const Countsbodylayout = () => {
  return (
    <div>
        <div class = "container">
            <div class = "row">
            <div class = "col-8 overflow-scroll">
                <CountSublayout />
                <CountminLayout />
            </div>
            <div class = "col-4">right side</div>

            </div>

        </div>
    </div>
  )
}

export default Countsbodylayout