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
            <div class = "col-4">
                <h3>Your last counted products</h3>
                <div className="d-flex justify-content-between">
                    <div>Product</div>
                    <div>Counted</div>
                   

                </div>
                <hr></hr>
                <div className="card h-75 justify-content-center">
                     <div className="card-body ">
                       <div className="mt-5 mb-5 mx-auto text-center"> Products that you count will appear here to help you
                            keep track.</div>
                     </div>
                </div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Countsbodylayout