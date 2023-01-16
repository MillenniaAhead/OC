import React from "react"
import X from "../../assets/images/pages/type/x.png"

const Hear = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <a
            href="/software"
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

        <a
        style={{background: '#4E4E4E', color: 'white'}}
          href="/complete"
          type="button"
          className="px-5 py-1 btn rounded-1"
        >
          Done
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "82%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>
      <p
        style={{color: 'black', cursor: "default" }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-3"
      >
        How did you hear about OUTLETCONTROL ?
      </p>
      <div
        style={{ width: "768px", height: "360px" }}
        className="card container border mt-2"
      >
        <div
          style={{ marginLeft: "30px", marginTop: "30px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Recommended by a friend
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Search engine (e.g. Google, Yahoo)
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Social media
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Magazine ad
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Ratings website (e.g. Capterra, Trustpilot)
          </label>
        </div>

        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
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
            style={{ fontSize: "16px", marginTop: "1px", color: 'black' }}
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

export default Hear
