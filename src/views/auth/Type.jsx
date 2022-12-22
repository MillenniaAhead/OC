import React from "react"
import X from "../../assets/images/pages/type/x.png"
import Head from "../../assets/images/pages/type/Woman Head.png"
import Barber from "../../assets/images/pages/type/Barbershop.png"
import Nail from "../../assets/images/pages/type/Nail.png"
import Female from "../../assets/images/pages/type/Female User.png"
import Meme from "../../assets/images/pages/type/not bad meme.png"

import Bed from "../../assets/images/pages/type/Occupied Bed.png"
import Spa from "../../assets/images/pages/type/Spa.png"
import Perfume from "../../assets/images/pages/type/Perfume Bottle.png"
import Recliner from "../../assets/images/pages/type/Recliner.png"
import Eye from "../../assets/images/pages/type/Closed Eye.png"

import Arrow from "../../assets/images/pages/type/Love Arrow.png"
import Plus from "../../assets/images/pages/type/Plus Math.png"
import Scales from "../../assets/images/pages/type/Kitchen Scales.png"
import Running from "../../assets/images/pages/type/Running.png"
import Ropes from "../../assets/images/pages/type/Battle Ropes.png"

import Layout from "../../assets/images/pages/type/Group Layouts.png"

const Type = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <a
            href="/details"
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

        <a style={{background: '#4E4E4E', color: 'white'}} href="/other" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </a>
      </div>
      <div style={{ height: "2px"}} className="progress">
        <div style={{ width: "21%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>
      <p
        style={{ fontWeight: 400, cursor: "default", color: 'black' }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, cursor: "default", marginTop: "-5px", color: 'black' }}
        className="text-center fs-3"
      >
        Choose your main business type
      </p>
      <div>
        <div className="d-flex">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px" }}
            className="card border"
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
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Hair Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card border"
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
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Nail Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card border"
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
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Barber shop
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card border"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Female}
              alt="Female"
            />
            <p
              style={{
                color: 'black',
                marginLeft: "30px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Beauty Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px" }}
            className="card border"
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
                color: 'black',
                marginLeft: "36px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Aesthetics
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px", marginTop: '-10px' }}
            className="card border"
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
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Massage
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "55px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Spa
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "20px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Waxing Salon
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "16px",
                marginTop: "5px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Tanning Studio
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "14px",
                marginTop: "5px",
                fontSize: "13px",
                cursor: "default"
              }}
            >
              Eyebrows & Lashes
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "10px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Tattoo & Piercing
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "14px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Therapy Center
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "28px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Weight Loss
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "12px",
                marginTop: "5px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Personal Trainer
            </p>
          </div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "25px",
                marginTop: "5px",
                fontSize: "14px",
                cursor: "default"
              }}
            >
              Gym & Fitness
            </p>
          </div>
        </div>

        <div>
          <div
            style={{ width: "150px", height: "100px", marginLeft: "265px", marginTop: '-10px'  }}
            className="card border"
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
                color: 'black',
                marginLeft: "52px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Other
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Type
