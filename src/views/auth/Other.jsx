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

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Other = () => {
  const [business, setBusiness] = useState([])

 const selectBusiness = (e) => {
  if (business.includes(e.target.textContent)) {
      setBusiness(business.filter((type) => type !== e.target.textContent))
  } else {
    setBusiness([...business, e.target.textContent])
  }
  console.log(e.target.textContent)
 }

 const selectBusinessImage = (e) => {
  if (business.includes(e.target.id)) {
    setBusiness(business.filter((type) => type !== e.target.id))
} else {
  setBusiness([...business, e.target.id])
}
console.log(e.target.textContent)
  e.stopPropagation()
 }

  //For dispatch action
  const dispatch = useDispatch()
  const { CollectUserData } = bindActionCreators(actionCreators, dispatch) 

 //On next step click
 const SendData = () => {
  CollectUserData([business])
  console.log(business)
 }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/type"
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
          </NavLink>
        </div>

        <NavLink onClick={SendData} style={{background: '#4E4E4E', color: 'white'}} to="/team" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </NavLink>
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
            onClick={selectBusiness}
            style={business.includes("Hair Salon") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'} : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'}}
            className="card border-1"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Head}
              alt="head"
              onClick={selectBusinessImage}
              id="Hair Salon"
            />
            <p
              style={{
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Hair Salon
            </p>
          </div>
          <div
            onClick={selectBusiness}
            style={business.includes("Nail Salon") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Nail}
              alt="nail"
              id="Nail Salon"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Nail Salon
            </p>
          </div>
          <div
            onClick={selectBusiness}
            style={business.includes("Barber shop") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Barber}
              alt="barber"
              id="Barber shop"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "25px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Barber shop
            </p>
          </div>

          <div
            onClick={selectBusiness}
            style={business.includes("Aesthetics") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Meme}
              alt="meme"
              id="Aesthetics"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "36px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Aesthetics
            </p>
          </div>
          <div
            onClick={selectBusiness}
            style={business.includes("Massage") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Bed}
              alt="bed"
              id="Massage"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "35px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Massage
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
            style={business.includes("Spa") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'} : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Spa}
              alt="spa"
              id="Spa"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "56px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Spa
            </p>
          </div>
          <div
            style={business.includes("Waxing Salon") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Perfume}
              alt="perfume"
              id="Waxing Salon"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "22px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Waxing Salon
            </p>
          </div>
          <div
            style={business.includes("Tanning Studio") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Recliner}
              alt="Recliner"
              id="Tanning Studio"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "18px",
                marginTop: "5px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Tanning Studio
            </p>
          </div>
          <div
            style={business.includes("Eyebrows & Lashes") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Eye}
              alt="eye"
              id="Eyebrows & Lashes"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "12px",
                marginTop: "5px",
                fontSize: "13px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Eyebrows & Lashes
            </p>
          </div>
          <div
            style={business.includes("Tattoo & Piercing") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Arrow}
              alt="arrow"
              id="Tattoo & Piercing"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "10px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Tattoo & Piercing
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
            style={business.includes("Therapy Center") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'} : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Plus}
              alt="plus"
              id="Therapy Center"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "15px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Therapy Center
            </p>
          </div>
          <div
            style={business.includes("Weight Loss") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Scales}
              alt="scales"
              id="Weight Loss"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "28px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Weight Loss
            </p>
          </div>
          <div
            style={business.includes("Personal Trainer") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Running}
              alt="Running"
              id="Personal Trainer"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "12px",
                marginTop: "5px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Personal Trainer
            </p>
          </div>
          <div
            style={business.includes("Gym & Fitness") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Ropes}
              alt="ropes"
              id="Gym & Fitness"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "22px",
                marginTop: "5px",
                fontSize: "14px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Gym & Fitness
            </p>
          </div>
          <div
            style={business.includes("Other") ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Layout}
              alt="layout"
              id="Other"
              onClick={selectBusinessImage}
            />
            <p
              style={{
                color: 'black',
                marginLeft: "52px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
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
