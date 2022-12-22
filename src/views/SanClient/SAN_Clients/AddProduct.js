import React from 'react'
import X from '../../../images/ClientList/x.png'

const AddProduct = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mx-4 mt-3'>
                <div>
                    <img src={X} alt="" />
                </div>
                <div>
                <button type="button" class="btn btn-dark px-4 py-1">Save</button>
                </div>
            </div>
            <div className="container">
                
                <div className="row">
                    <h2 className='text-center'>Add a new client</h2>
                    <div className="col-lg-6">
                        <div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct