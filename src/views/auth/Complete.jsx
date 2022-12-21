import React from "react";
import Check from "../assets/Type/check.png";

const Complete = () => {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "620px" }}
      >
        <img src={Check} alt="check" />
      </div>
      <p
        className="d-flex align-items-center justify-content-center"
        style={{ fontSize: "22px", marginTop: "-200px", cursor: "default" }}
      >
        Yes, your business is set up here!
      </p>
    </div>
  );
};

export default Complete;
