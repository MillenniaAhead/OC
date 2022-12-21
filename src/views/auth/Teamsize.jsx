import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Idea from "../assets/Type/Idea.png";

const Teamsize = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
          <AiOutlineClose className="mt-3" size={28} />
          <a
            href="/team"
            style={{
              marginTop: "23px",
              marginBottom: "10px",
              marginLeft: "30px",
              textDecoration: "none",
              color: ["#1E49E2"],
              fontWeight: 400,
              fontSize: "22px",
            }}
          >
            Previous
          </a>
        </div>

        <a
          href="/location"
          type="button"
          className="px-5 py-2 btn btn-secondary"
        >
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "38%" }} className="progress-bar"></div>
      </div>

      <p
        style={{ fontWeight: 500, cursor: "default" }}
        className="text-center mt-2"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-12px" }}
        className="text-center fs-3"
      >
        What’s your team size?
      </p>
      <p
        style={{
          fontWeight: 500,
          cursor: "default",
          marginTop: "-12px",
          fontSize: "17px",
        }}
        className="text-center"
      >
        This will help us set up your calender correctly. Don’t worry, this
        doesn’t change the price- you can have unlimited team <br /> members for
        free on Salon!
      </p>
      <div
        style={{ width: "700px", height: "340px" }}
        className="card container align-items-center justify-content-center mt-4"
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
            style={{ fontSize: "17px", marginLeft: "10px" }}
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
            style={{ fontSize: "17px", marginLeft: "10px" }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            2-5 people
          </label>
        </div>

        <div
          style={{ marginRight: "490px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "10px" }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            6-10 people
          </label>
        </div>

        <div
          style={{ marginRight: "492px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "17px", marginLeft: "14px" }}
            className="form-check-label"
            for="flexRadioDefault1"
          >
            11+ people
          </label>
        </div>
        <div
          style={{ height: "73px", backgroundColor: ["#D1E3F4CC"] }}
          className="card container align-items-center justify-content-center mt-4 border border-0"
        >
          <div className="d-flex">
            <img
              style={{ width: "24px", height: "24px", marginTop: "18px" }}
              src={Idea}
              alt="idea"
            />
            <p
              style={{
                fontWeight: 500,
                marginLeft: "22px",
                marginTop: "12px",
                fontSize: "17px",
                marginRight: "80px",
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
  );
};

export default Teamsize;
