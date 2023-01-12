import React from 'react'
import { useHistory } from 'react-router-dom'

function Invoice() {
   const history = useHistory()
  const navigateHandler = function() {
    history.push("/online")
  }
  return (
    <>
      <div className="container w-75 ">
            <div className='d-flex justify-content-between aling-items-center mt-3'>
            <div>
                <p>Settings .  Invoice template</p>
                <h2>Invoice template</h2>
                </div>
                <button onClick={navigateHandler} style={{backgroundColor:'rgba(78,78,78,1)', color:'white', borderRadius:'3px', width:'72px', height:'30px'}}>Save</button>
            </div>
            <div className='d-flex mt-4'>
                <div className='w-50 mt-2'>
                    <h4 className='mb-2'>Invoice settings</h4>
                    <p>Customize the content displayed on invoices issued to your clients</p>
                </div>
                <div className='w-50 border'>
                <div className='ms-3 me-2'>
                <div className="form-check mt-3">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Automatically print receipts upon sale completion
                 </label>
                    </div>
                <div className="form-check mt-3">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Show client mobile and email on invoices
                 </label>
                    </div>
                <div className="form-check mt-3">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Show client address on invoices
                 </label>
                    </div>
                    <div class="mb-3 mt-3">
                <label for="exampleFormControlInput1" class="form-label">Invoice title</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Invoice "/>
                    </div>
                    <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    </div>
</div>
            </div>
      </div>
    </>
  )
}

export default Invoice
