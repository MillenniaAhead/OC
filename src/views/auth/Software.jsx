import React from "react"
import X from "../../assets/images/pages/type/x.png"

const Software = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <a
            href="/location"
            style={{
              marginTop: "18px",
              marginBottom: "10px",
              marginLeft: "30px",
              textDecoration: "none",
              color: ["#1E49E2"],
              fontSize: "20px"
            }}
          >
            Previous
          </a>
        </div>

        <a style={{background: '#4E4E4E', color: 'white'}} href="/hear" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "67%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>

      <p
        style={{color: 'black', cursor: "default" }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-4"
      >
        Which software are you currently using ?
      </p>
      <p
        style={{
          color: 'black',
          cursor: "default",
          marginTop: "-5px",
          fontSize: "17px"
        }}
        className="text-center"
      >
        If you’re looking to switch, we can help speed up your business setup
        and import your data in to your new account.
      </p>

      <div
        style={{ width: "700px", height: "1000px" }}
        className="card container mt-2 mb-4 border"
      >
        <div
          style={{ marginLeft: "10px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Acuity
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Booksy
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Janeapp
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Kitomba
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Square
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Mind body
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Ovatu
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Phorest
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Salon Iris
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Shortcuts
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Treatwell
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Squire
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Styleseat
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Timely
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Vagaro
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Zenoti
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            I’m not using any software
          </label>
        </div>

        <div
          style={{ marginLeft: "10px", marginTop: "20px" }}
          className="form-check"
        >
          <input
          style={{width: '25px', height: '25px'}}
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Other
          </label>
        </div>
      </div>
    </div>
  )
}

export default Software
