import React ,{ useState} from "react"
import facebook from "../images/facebook.png"
import "../mycss1/Integrations.css"
import "../mycss1/FacebookAdd.css"
import facebookadd2 from "../images/facebookadd2.png"
import facebookadd1 from "../images/facebookadd1.png"
import { Check, Clock } from 'react-feather'
import { Button, Modal, ModalBody } from 'react-feather'

const Integrations = () => {
const [basicModal, setBasicModal] = useState(false)

  return (
    <div className="integrations-container">
      <div  className="integrations-wrapper">
        <div className="int-top-heading" style={{ paddingBottom: "24px" }}>
          <h1 className="text-a2">Integrations</h1>
          <p className="text-b2">
            Integrate Google Analytics and Facebook Ads onto your Outlet Control
            account.{" "}
            <a style={{ color: "#6B87E8", textDecoration: "none" }} href="#">
              Learn more
            </a>{" "}
          </p>
        </div>
        <div className="int-body-boxes">
          <div className="box-1 box d-flex">
            <div className="image-box-b" style={{width:"260px" , height:"185px",flexShrink:"0.3"}}>
              <div>
                <div className="google-image d-flex">
                <div className="short-box-1"></div>
                <div className="short-box-2"></div>
                <div className="short-box-3"></div>
                </div>
                <p>Google Analytics</p>
              </div>
            </div>
            <div className="box-content w-100">
              <div className="top-content d-flex justify-content-between">
                <div className="left-side-a">
                  <p className="text-c2">Google Analytics</p>
                  <p className="text-d2">
                    Send events about certain actions to Google Analytics, and
                    create goals based on events to track conversions.
                  </p>
                </div>
                <div className="right-side-a" style={{ marginTop: "4px" }}>
                  <p>DISABLED</p>
                </div>
              </div>
              <div className="set-up-btn">
                <button>Set up now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="int-body-boxes" onClick={() => setBasicModal(!basicModal)}>
          <div className="box-1 box d-flex">
            <div className="image-box-b" style={{width:"300px" , height:"200px"}}>
              <div>
                <img
                  src={facebook}
                  alt=""
                />
              </div>
            </div>
            <div className="box-content w-100 ">
              <div className="top-content d-flex justify-content-between">
                <div className="left-side-a">
                  <p className="text-c2">Facebook Pixel Ads</p>
                  <p className="text-d2">
                    Use your Facebook Ads Pixel to track events, and create
                    audiences based on their activities.
                  </p>
                </div>
                <div className="right-side-a" style={{ marginTop: "4px" }}>
                  <p>DISABLED</p>
                </div>
              </div>
              <div className="set-up-btn">
                <button onClick={() => setShow(true)} >Set up now</button>
              </div>
              {/* <FacebookAdd show={show}/> */}
            </div>
          </div>
        </div>
      </div>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalBody>
          <div className="my-deals-container d-flex justify-content-between">
            <div className="deals-container-a">
              <div className="deals-text-container">
                <p className="text-a4">
                  To add the Facebook pixel, Publish your
                  Outlet Control profile
                </p>
                <p className="text-b4">
                  Join the world's largest beauty and wellness marketplace
                </p>
                <div className="imp-points">
                  <div>
                    <div className="check-symbol">
                      {/* <img src={checkmark} alt="check" srcSet="" /> */}
                      <Check/>
                    </div>
                    <div>
                      Get your business listed on the Outlet Controler app
                    </div>
                  </div>
                  <div>
                    <div className="check-symbol">
                      <Check/>
                    </div>
                    <div>
                      Reach thousands of new clients who visit Outlet Control
                      every day{" "}
                    </div>
                  </div>
                  <div>
                    <div className="check-symbol">
                      <Check/>
                    </div>
                    <div>
                      Free up time and get your clients self-booking online 24/7{" "}
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="deals-btn-wrapper">
                <div className="start-now-btn-wrapper">
                  {/* <Link
                    to="/"
                    className="text-c1"
                  >
                    Start now
                  </Link> */}
                  <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Basic Modal
        </Button>
                </div>
              </div>
            </div>
            <div className="deals-container-b">
              <div className="deals-image-container">
                <div className="circle-part">
                  <div className="white-box-wrapper">
                    <div className="white-box-1">
                      <div className="circle-a4">
                      </div>
                      <div className="search-box-a4">
                        <p className="text-h4"><span className="search-icon-a4">!</span>Discover near me</p>
                      </div>
                      <div className="text-i4">Popular categories</div>
                      <div className="image-box-a4">
                        <div>
                        <img src={facebookadd1} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd1} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd1} alt="" />
                        </div>
                        <div>
                        <img src={facebookadd1} alt="" />
                        </div>
                      </div>
                      </div>
                    <div className="white-box-2">
                      <div className="image-a4">
                      <img src={facebookadd2} alt="" />
                      </div>
                      <div className="text-box-a4">
                        <p className="text-c4">Miller's Barbers</p>
                        <p className="text-d4">Beauty Salon</p>
                        <p className="text-e4">192 Bleecker St,New York,United States</p>
                        <p className="text-f4"><span className="star-icon">!</span> 5.0 Excellent (100+)</p>
                        </div>
                        <hr style={{margin:"0"}}/>
                        <div className="text-box-b4">
                        <p className="text-g4"><span className="icon-a4">!</span> Open now 10:00am - 8:00pm</p>
                        <p className="text-g4"><span className="icon-a4">!</span>Instant confirmation</p>
                        <p className="text-g4"><span className="icon-a4">!</span>Unisex</p>
                        <p className="text-g4"><span className="icon-a4">!</span>Pay by app</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Basic Modal
        </Button>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default Integrations
