import React, { useState } from "react"
import X from "../../assets/images/pages/type/x.png"

import Head from "../../assets/images/pages/type/Woman Head.png"
import Nail from "../../assets/images/pages/type/Nail.png"
import Barber from "../../assets/images/pages/type/Barbershop.png"
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

const Other = () => {

  const [isActive, setIsActive] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)
  const [isActive5, setIsActive5] = useState(false)
  const [isActive6, setIsActive6] = useState(false)
  const [isActive7, setIsActive7] = useState(false)
  const [isActive8, setIsActive8] = useState(false)
  const [isActive9, setIsActive9] = useState(false)
  const [isActive10, setIsActive10] = useState(false)
  const [isActive11, setIsActive11] = useState(false)
  const [isActive12, setIsActive12] = useState(false)
  const [isActive13, setIsActive13] = useState(false)
  const [isActive14, setIsActive14] = useState(false)
  const [isActive15, setIsActive15] = useState(false)

  const handleClick = () => {
    setIsActive(current => !current)
   }
 
   const handleClick2 = () => {
     setIsActive2(current => !current)
    }
 
    const handleClick3 = () => {
     setIsActive3(current => !current)
    }
 
    const handleClick4 = () => {
     setIsActive4(current => !current)
    }
 
    const handleClick5 = () => {
     setIsActive5(current => !current)
    }
 
    const handleClick6 = () => {
     setIsActive6(current => !current)
    }
 
    const handleClick7 = () => {
     setIsActive7(current => !current)
    }
 
    const handleClick8 = () => {
     setIsActive8(current => !current)
    }
 
    const handleClick9 = () => {
     setIsActive9(current => !current)
    }
 
    const handleClick10 = () => {
     setIsActive10(current => !current)
    }
 
    const handleClick11 = () => {
     setIsActive11(current => !current)
    }
 
    const handleClick12 = () => {
     setIsActive12(current => !current)
    }
 
    const handleClick13 = () => {
     setIsActive13(current => !current)
    }
 
    const handleClick14 = () => {
     setIsActive14(current => !current)
    }
 
    const handleClick15 = () => {
     setIsActive15(current => !current)
    }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <a
            href="/type"
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

        <a style={{background: '#4E4E4E', color: 'white'}} href="/team" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </a>
      </div>
      <div style={{ height: "2px" }} className="progress">
        <div style={{ width: "30%", background: '#1E49E2' }} className="progress-bar"></div>
      </div>

      <p
        style={{ cursor: "default", color: 'black' }}
        className="text-center mt-1"
      >
        Business setup
      </p>
      <p
        style={{ fontWeight: 700, fontSize: '20px', cursor: "default", marginTop: "-12px", color: 'black' }}
        className="text-center"
      >
        Select other related business types to help users find you
      </p>
      <p
        style={{
          color: 'black',
          cursor: "default",
          marginTop: "-10px",
          fontSize: "12px"
        }}
        className="text-center"
      >
        If your business can be described by more types,choose up to 3 more that
        apply.
      </p>

      <div>
        <div className="d-flex mt-3">
          <div
            onClick={handleClick}
            style={{ backgroundColor: isActive ? '#D1E3F4CC' : '', color: isActive ? 'white' : '', width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer' }}
            className="card border-1"
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
            onClick={handleClick2}
            style={{ backgroundColor: isActive2 ? '#D1E3F4CC' : '', color: isActive2 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' }}
            className="card border-1"
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
           onClick={handleClick3}
            style={{ backgroundColor: isActive3 ? '#D1E3F4CC' : '', color: isActive3 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "25px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Barber shop
            </p>
          </div>

          <div
           onClick={handleClick4}
            style={{ backgroundColor: isActive4 ? '#D1E3F4CC' : '', color: isActive4 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' }}
            className="card border-1"
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
          <div
           onClick={handleClick5}
            style={{ backgroundColor: isActive5 ? '#D1E3F4CC' : '', color: isActive5 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "35px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Massage
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
           onClick={handleClick6}
            style={{ backgroundColor: isActive6 ? '#D1E3F4CC' : '', color: isActive6 ? 'white' : '', width: "150px", height: "100px", marginLeft: "265px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "56px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Spa
            </p>
          </div>
          <div
           onClick={handleClick7}
            style={{ backgroundColor: isActive7 ? '#D1E3F4CC' : '', color: isActive7 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "22px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Waxing Salon
            </p>
          </div>
          <div
           onClick={handleClick8}
            style={{ backgroundColor: isActive8 ? '#D1E3F4CC' : '', color: isActive8 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "18px",
                marginTop: "5px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Tanning Studio
            </p>
          </div>
          <div
            onClick={handleClick9}
            style={{ backgroundColor: isActive9 ? '#D1E3F4CC' : '', color: isActive9 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "12px",
                marginTop: "5px",
                fontSize: "13px",
                cursor: "default"
              }}
            >
              Eyebrows & Lashes
            </p>
          </div>
          <div
            onClick={handleClick10}
            style={{ backgroundColor: isActive10 ? '#D1E3F4CC' : '', color: isActive10 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
        </div>

        <div className="d-flex">
          <div
            onClick={handleClick11}
            style={{ backgroundColor: isActive11 ? '#D1E3F4CC' : '', color: isActive11 ? 'white' : '', width: "150px", height: "100px", marginLeft: "265px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "15px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
            >
              Therapy Center
            </p>
          </div>
          <div
            onClick={handleClick12}
            style={{ backgroundColor: isActive12 ? '#D1E3F4CC' : '', color: isActive12 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
            onClick={handleClick13}
            style={{ backgroundColor: isActive13 ? '#D1E3F4CC' : '', color: isActive13 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
            onClick={handleClick14}
            style={{ backgroundColor: isActive14 ? '#D1E3F4CC' : '', color: isActive14 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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
                marginLeft: "22px",
                marginTop: "5px",
                fontSize: "14px",
                cursor: "default"
              }}
            >
              Gym & Fitness
            </p>
          </div>
          <div
           onClick={handleClick15}
            style={{ backgroundColor: isActive15 ? '#D1E3F4CC' : '', color: isActive15 ? 'white' : '', width: "150px", height: "100px", marginLeft: "15px", marginTop: '-10px', cursor: 'pointer' }}
            className="card border-1"
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

export default Other
