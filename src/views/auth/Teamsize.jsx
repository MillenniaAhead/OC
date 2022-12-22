import React from "react"
import X from "../../assets/images/pages/type/x.png"
import Idea from "../../assets/images/pages/type/Idea.png"

const Teamsize = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <a
            href="/team"
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
          href="/location"
          type="button"
          className="px-4 py-1 btn rounded-1"
        >
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "38%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>

      <p
        style={{ cursor: "default", color: 'black'  }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black'  }}
        className="text-center fs-3"
      >
        What’s your team size?
      </p>
      <p
        style={{
          color: 'black', 
          cursor: "default",
          marginTop: "5px",
          fontSize: "17px"
        }}
        className="text-center"
      >
        This will help us set up your calender correctly. Don’t worry, this
        doesn’t change the price- you can have unlimited team <br /> members for
        free on Salon!
      </p>
      <div
        style={{ width: "680px", height: "340px" }}
        className="card container align-items-center justify-content-center border mt-2"
      >
        <div
          style={{ marginRight: "500px", marginTop: "20px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            It’s just me
          </label>
        </div>

        <div
          style={{ marginRight: "500px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            2-5 people
          </label>
        </div>

        <div
          style={{ marginRight: "494px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px", color: 'black' }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            6-10 people
          </label>
        </div>

        <div
          style={{ marginRight: "505px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "12px", color: 'black' }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            11+ people
          </label>
        </div>
        <div
          style={{ height: "72px", width: '620px', backgroundColor: ["#D1E3F4CC"] }}
          className="card container align-items-center justify-content-center mt-3 border-0"
        >
          <div className="d-flex">
            <img
              style={{ width: "24px", height: "24px", marginTop: "18px" }}
              src={Idea}
              alt="idea"
            />
            <p
              style={{
                color: 'black',
                marginLeft: "22px",
                marginTop: "12px",
                fontSize: "13px",
                marginRight: "80px"
              }}
            >
              We’ll add ‘Wendy’ as an example employee so you can see how the{" "}
              <br />
              system works. You can manage employees later once you’re in!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamsize
