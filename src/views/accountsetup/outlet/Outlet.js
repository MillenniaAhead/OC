import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image1 from "./outlet/img.png"
import image2 from "./outlet/img2.png"
import { useHistory } from "react-router-dom"

function Outlet() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/Resource6")
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <div className="container w-75 mvh-100  mt-10">
      
        <Slider {...settings} style={{ height: "350px" }}>
        
          <div>
          <div className=" d-flex justify-content-center align-items-center " style={{height:'90%'}}>
              <div className="position-relative flex-shrink-1" style={{width:'46%', marginTop:'60px'}}>
                <img src={image1} className="" style={{width:"100%", height:'260px'}} />
                <div>
                <img
                  src={image2}
                  className=" position-absolute bottom-0  top-50 start-50 translate-middle-x  "
                  style={{ height: "10.625rem", objectFit: "contain", zIndex:''}}
                />
                <button style={{position:'absolute', top:'240px', left:'144px', backgroundColor:'rgba(27, 183, 11, 1)', border:'none', borderRadius:'4px', color:'white'}} >Book Now</button>
                </div>
              </div>

              <div className=" w-50">
                <h2 style={{marginTop:"80px"}}>Access to Outlet Control
                   Marketplace</h2>
                   <p style={{width:'400px', marginTop:'30px'}}>Create your own online shop and get discoveres
by new clients near you 24/7 on OutletControl.com and
the Outlet Control app.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="row align-items-center">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </Slider>
        <div className="d-flex justify-content-center aling-items-center mt-5">
        <button onClick={navigateHandler} style={{backgroundColor:"rgba(78,78,78,1)", color:'white', width:'140px', borderRadius:'5px'}}>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Outlet
