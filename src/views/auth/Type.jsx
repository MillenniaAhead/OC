import React, { useState } from "react"
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

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./Redux"
import { NavLink } from 'react-router-dom'

const Type = () => {

 const [business, setBusiness] = useState("")

 const selectBusiness = (e) => {
  setBusiness(e.target.textContent)
  console.log(e.target.textContent)
 }

 const selectBusinessImage = (e) => {
  setBusiness(e.target.id)
  console.log(e.target.id)
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

  // const reducerData = useSelector(state => state.UserReducer.UserData)
  // console.log(reducerData)

 
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 py-1 border-bottom border-1">
        <div className="d-flex justify-content-between align-items-center">
        <img style={{width: '35px', height: '35px', marginTop: '5px'}} src={X} alt="x" />
          <NavLink
            to="/details"
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

        <NavLink onClick={SendData} style={{background: '#4E4E4E', color: 'white'}} to="/other" type="button" className="px-4 py-1 btn rounded-1">
          Next step
        </NavLink>
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
            onClick={selectBusiness}
            style={business === "Hair Salon" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'} : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer'}}
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
            style={business === "Nail Salon" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Nail}
              alt="nail"
              onClick={selectBusinessImage}
              id="Nail Salon"
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
            style={business === "Barber shop" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Barber}
              alt="barber"
              onClick={selectBusinessImage}
              id="Barber shop"
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
              Barber shop
            </p>
          </div>
          <div
            style={business === "Beauty Salon" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Female}
              alt="Female"
              onClick={selectBusiness}
              id="Beauty Salon"
            />
            <p
              style={{
                color: 'black',
                marginLeft: "30px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Beauty Salon
            </p>
          </div>
          <div
            style={business === "Aesthetics" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer'}}
            className="card border-1"
            onClick={selectBusiness}
          >
            <img
              style={{ marginLeft: "58px", marginTop: "26px" }}
              width={28}
              height={28}
              src={Meme}
              alt="meme"
              onClick={selectBusinessImage}
              id="Aesthetics"
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
        </div>

        <div className="d-flex">
          <div
            style={business === "Massage" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px'}}
            className="card border-1"
            onClick={selectBusiness}
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
                marginLeft: "40px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Massage
            </p>
          </div>
          <div
            style={business === "Spa" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "55px",
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
            style={business === "Waxing Salon" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "20px",
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
            style={business === "Tanning Studio" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "16px",
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
           style={business === "Eyebrows & Lashes" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "14px",
                marginTop: "5px",
                fontSize: "13px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Eyebrows & Lashes
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div
           style={business === "Tattoo & Piercing" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px'}}
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
          <div
            style={business === "Therapy Center" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "14px",
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
            style={business === "Weight Loss" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
            style={business === "Personal Trainer" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
            style={business === "Gym & Fitness" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "15px", cursor: 'pointer', marginTop: '-10px'}}
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
                marginLeft: "25px",
                marginTop: "5px",
                fontSize: "14px",
                cursor: "default"
              }}
              onClick={selectBusiness}
            >
              Gym & Fitness
            </p>
          </div>
        </div>

        <div>
          <div
            style={business === "Other" ? {border:'1px solid green', backgroundColor:"lightgreen", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px' } : {border: "", width: "150px", height: "100px", marginLeft: "265px", cursor: 'pointer', marginTop: '-10px'}}
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

export default Type
