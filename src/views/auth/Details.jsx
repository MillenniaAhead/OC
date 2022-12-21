import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Details = () => {
  return (
    <div>
      <div className="d-flex justify-content-between px-5 py-3 border-bottom border-2">
        <AiOutlineClose className="mt-2" size={23} />
        <a href="/type" type="button" className="px-5 py-2 btn btn-secondary">
          Next step
        </a>
      </div>
      <p
        style={{ fontWeight: 400, cursor: "default" }}
        className="text-center mt-4"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default" }}
        className="text-center mt-3 fs-3"
      >
        What’s your business name?
      </p>
      <p
        style={{ fontWeight: 400, cursor: "default", fontSize: "19px" }}
        className="text-center mt-3"
      >
        This is the brand name your clients will see. Your billing and legal
        name can be added later.
      </p>
      <div
        style={{ width: "50%", marginLeft: "340px" }}
        className="card px-4 py-3 mt-4"
      >
        <p style={{ fontWeight: "500", cursor: "default" }}>Business name</p>
        <input
          style={{
            marginTop: "-10px",
            borderWidth: "1px",
            height: "40px",
            width: "80%",
            borderRadius: "6px",
            borderColor: ["#1E49E2"],
          }}
          type="text"
          className="card px-3"
          placeholder="Salon"
        />
        <p style={{ fontWeight: "500", marginTop: "25px", cursor: "default" }}>
          Website
        </p>
        <input
          style={{
            marginTop: "-10px",
            borderWidth: "1px",
            height: "40px",
            width: "80%",
            borderRadius: "6px",
          }}
          type="text"
          className="card px-3"
          placeholder="www.yoursite.com"
        />
      </div>
    </div>
  );
};

export default Details;
