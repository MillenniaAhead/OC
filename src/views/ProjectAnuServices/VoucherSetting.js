import './App.css'
import { Alert } from 'reactstrap'
import { useState } from 'react'

function VoucherSettingList() {

  const [visible, setVisible] = useState(true)
  return (
    <div className="row justify-content-center">
      <form className="container ">
        <div className="d-flex justify-content-center"><h6>Settings: Vouchers Settings</h6></div>
        <div className="d-flex flex-row-reverse bd-highlight"><button type="button" className="btn btn-dark">Save</button>
        <Alert color='primary' isOpen={visible} toggle={() => setVisible(false)}>
            <div className='alert-body'>
              Data Added Successfully
            </div>
          </Alert></div>
        <span className="d-flex justify-content-center"><h2>Vouchers Settings</h2></span>
      </form>
      <div className="form-control w-50 h-50 ">
        <form>
          <div className="d-flex flex-row form-control h-50"><h5><b>Vouchers</b></h5></div>
          <div className="form-group">
            <span className="form-group d-flex flex-row">
              <label htmlFor="formGroupExampleInput">Default Expiry Period </label></span>
            <div>
              <div className="dropdown show d-flex justify-content- start">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  6 Months
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <span>
        <div className="row justify-content-center">
          <div className="form-control w-50 h-50 ">
            <form>
              <div className="d-flex flex-row form-control h-50"><h5><b>Upselling</b></h5></div>
              <div className="form-group">
                <span className="form-group d-flex flex-row">
                  <label htmlFor="formGroupExampleInput">Encourage clients to book additional services and buy suitable membership when booking online.<a href="#" className="link-success">How it works</a> </label></span>
                <span><div>
                  <center><img src=" https://cdn0.iconfinder.com/data/icons/green-magnifier-icons-set-version-01/487/41_search_magnifier_zoom_glass_delete_trash_remove-512.png " alt=" " width="50" height="50" /></center>
                  <div><center><b>You don't have any online bookings enabled</b></center></div>
                  <div><center><a href="#" className="link-success">Enable online bookings</a></center></div>
                </div>
                </span>
              </div>
            </form>
          </div>
        </div>
      </span>
    </div>
  )
}
export default VoucherSettingList