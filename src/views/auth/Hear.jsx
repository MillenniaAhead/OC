import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Hear = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-3 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
          <AiOutlineClose size={30} />

          <a
            href="/software"
            style={{
              marginLeft: "30px",
              textDecoration: "none",
              color: ["#1E49E2"],
              fontWeight: 400,
              fontSize: "21px",
            }}
          >
            Previous
          </a>
        </div>

        <a
          href="/complete"
          type="button"
          className="px-5 py-2 btn btn-secondary"
        >
          Done
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "82%" }} className="progress-bar"></div>
      </div>
      <p
        style={{ fontWeight: 500, cursor: "default" }}
        className="text-center mt-3"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-12px" }}
        className="text-center fs-3"
      >
        How did you hear about OUTLETCONTROL ?
      </p>
      <div
        style={{ width: "768px", height: "380px" }}
        className="card container mt-4"
      >
        <div
          style={{ marginLeft: "30px", marginTop: "20px" }}
          className="form-check"
        >
          <input
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
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
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
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
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
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
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
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
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
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
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "18px", marginTop: "5px" }}
            className="form-check-label px-2"
            htmlFor="flexRadioDefault1"
          >
            Other
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hear;
