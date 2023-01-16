import React, { Component } from "react"
import { Menu } from "react-feather"
import ServiceType from "./serviceType"
import {  UncontrolledDropdown, DropdownMenu, DropdownToggle} from "reactstrap"
import NewCategory from "./newCategory"

class ServiceMenu2 extends Component  {
  render () {
    return (
        <div class="container">
        <div class="row justify-content-center">
        <form class="contanier ">
        <div class="d-flex justify-content-start "><p>Services.<b>Service menu</b></p>
        </div>
        <div class="d-flex flex-row-reverse bd-highlight me-4 "><button type="button" class="btn btn-outline-secondary  dropdown-toggle ms-2">Options</button>
        <UncontrolledDropdown>
        <DropdownToggle caret >
       AddNew
      </DropdownToggle>
        <DropdownMenu>
        <label className="mb-1"><NewCategory /> </label>
       <ServiceType />
      </DropdownMenu>
      
      </UncontrolledDropdown>
        </div>
        <h1 class="d-flex justify-content-start">Services menu</h1>
        <nav class="navbar navbar-light bg-light "><button type="button" class="btn btn-outline-success " ><Menu /></button></nav>

        <div class="d-flex justify-content-start mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-1" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg><h3>Hair</h3></div><div class="d-flex justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg></div>

    <div >
        <table class="container">
        <tbody>
    <tr class="border">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <td>Haircut</td>
      <td class="m-2 fw-light">45min</td>
      <td class="d-flex justify-content-end m-2">₹40</td>
    </tr>
    <tr class="border">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <td>Hair Color</td>
      <td class="m-2 fw-light">1h 15min</td>
      <td class="d-flex justify-content-end m-2">₹57</td>
    </tr>
    <tr class="border">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <td>Blow Dry</td>
      <td class="m-2 fw-light">35min</td>
      <td class="d-flex justify-content-end m-2">₹35</td>
    </tr>
    <tr class="border">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <td>Balayage</td>
      <td class=" m-2 fw-light">2h 30min</td>
      <td class="d-flex justify-content-end m-2">₹150</td>
    </tr>
    </tbody>
        </table>
       </div>

       <div class="d-flex justify-content-start mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list m-1" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg><h3>Face</h3></div><div class="d-flex justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots mb-4" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg></div>

    <table class="container">
        <tbody>
    <tr class="border">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list mb-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <td>Facial</td>
      <td class="m-2 fw-light">1h</td>
      <td class="d-flex justify-content-end m-2">₹115</td>
    </tr>
    </tbody>
    </table>

        </form>
        </div>
        </div>
    )
  }
}

export default ServiceMenu2