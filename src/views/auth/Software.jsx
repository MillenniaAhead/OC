import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Software = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
          <AiOutlineClose style={{ marginTop: "20px" }} size={28} />
          <a
            href="/location"
            style={{
              marginTop: "25px",
              marginBottom: "10px",
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

        <a href="/hear" type="button" className="px-5 py-2 btn btn-secondary">
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "67%" }} className="progress-bar"></div>
      </div>

      <p
        style={{ fontWeight: 500, cursor: "default" }}
        className="text-center mt-3"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-12px" }}
        className="text-center fs-4"
      >
        Which software are you currently using ?
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
        If you’re looking to switch, we can help speed up your business setup
        and import your data in to your new account.
      </p>

      <div
        style={{ width: "700px", height: "1110px" }}
        className="card container mt-4 mb-4"
      >
        <div
          style={{ marginLeft: "30px", marginTop: "25px" }}
          className="form-check"
        >
          <input
            className="form-check-input h4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Acuity
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Booksy
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Janeapp
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Kitomba
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Square
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Mind body
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Ovatu
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Phorest
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Salon Iris
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Shortcuts
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Treatwell
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Squire
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Styleseat
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Timely
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Vagaro
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Zenoti
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            I’m not using any software
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
            style={{ fontSize: "20px", marginTop: "3px" }}
            className="form-check-label px-3"
            htmlFor="flexRadioDefault1"
          >
            Other
          </label>
        </div>
      </div>
    </div>
  );
};

export default Software;
