import React from "react";
import { AiOutlineClose} from "react-icons/ai";

import Head from "../assets/Type/Woman Head.png";
import Nail from "../assets/Type/Nail.png";
import Barber from "../assets/Type/Barbershop.png";
import Meme from "../assets/Type/not bad meme.png";

import Bed from "../assets/Type/Occupied Bed.png";
import Spa from "../assets/Type/Spa.png";
import Perfume from "../assets/Type/Perfume Bottle.png";
import Recliner from "../assets/Type/Recliner.png";
import Eye from "../assets/Type/Closed Eye.png";

import Arrow from "../assets/Type/Love Arrow.png";
import Plus from "../assets/Type/Plus Math.png";
import Scales from "../assets/Type/Kitchen Scales.png";
import Running from "../assets/Type/Running.png";
import Ropes from "../assets/Type/Battle Ropes.png";

import Layout from "../assets/Type/Group Layouts.png";

const Other = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-5 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
          <AiOutlineClose className="mt-3" size={28} />
          <a
            href="/type"
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

        <a href="/team" type="button" className="px-5 py-2 btn btn-secondary">
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "30%" }} className="progress-bar"></div>
      </div>

      <p
        style={{ fontWeight: 400, cursor: "default" }}
        className="text-center mt-2"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-12px" }}
        className="text-center fs-5"
      >
        Select other related business types to help users find you
      </p>
      <p
        style={{
          fontWeight: 400,
          cursor: "default",
          marginTop: "-12px",
          fontSize: "12px",
        }}
        className="text-center"
      >
        If your business can be described by more types,choose up to 3 more that
        apply.
      </p>

      <div>
        <div className="d-flex mt-3">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Head}
              alt="head"
            />
            <p
              style={{
                marginLeft: "40px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Hair Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Nail}
              alt="nail"
            />
            <p
              style={{
                marginLeft: "40px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Nail Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Barber}
              alt="barber"
            />
            <p
              style={{
                marginLeft: "40px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Barber shop
            </p>
          </div>

          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Meme}
              alt="meme"
            />
            <p
              style={{
                marginLeft: "36px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Aesthetics
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Bed}
              alt="bed"
            />
            <p
              style={{
                marginLeft: "40px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Massage
            </p>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Spa}
              alt="spa"
            />
            <p
              style={{
                marginLeft: "60px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Spa
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Perfume}
              alt="perfume"
            />
            <p
              style={{
                marginLeft: "28px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Waxing Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Recliner}
              alt="Recliner"
            />
            <p
              style={{
                marginLeft: "22px",
                marginTop: "5px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Tanning Studio
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Eye}
              alt="eye"
            />
            <p
              style={{
                marginLeft: "14px",
                marginTop: "5px",
                fontWeight: 500,
                fontSize: "14px",
                cursor: "default",
              }}
            >
              Eyebrows & Lashes
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Arrow}
              alt="arrow"
            />
            <p
              style={{
                marginLeft: "15px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Tattoo & Piercing
            </p>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Plus}
              alt="plus"
            />
            <p
              style={{
                marginLeft: "20px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Therapy Center
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Scales}
              alt="scales"
            />
            <p
              style={{
                marginLeft: "28px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Weight Loss
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Running}
              alt="Running"
            />
            <p
              style={{
                marginLeft: "22px",
                marginTop: "5px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Personal Trainer
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Ropes}
              alt="ropes"
            />
            <p
              style={{
                marginLeft: "25px",
                marginTop: "5px",
                fontWeight: 500,
                fontSize: "14px",
                cursor: "default",
              }}
            >
              Gym & Fitness
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Layout}
              alt="layout"
            />
            <p
              style={{
                marginLeft: "52px",
                marginTop: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "default",
              }}
            >
              Other
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
