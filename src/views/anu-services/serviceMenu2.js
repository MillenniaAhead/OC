import React from "react"
import { Menu } from "react-feather"
import ServiceType from "./serviceType"
import { UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap"
import NewCategory from "./newCategory"

function ServiceMenu2() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="contanier ">
          <div className="d-flex justify-content-start "><p>Services.<b>Service menu</b></p>
          </div>
          <div className="d-flex flex-row-reverse bd-highlight me-4 "><button type="button" className="btn btn-outline-secondary  dropdown-toggle ms-2">Options</button>
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
          <h1 className="d-flex justify-content-start">Services menu</h1>
          <nav className="navbar navbar-light bg-light "><button type="button" className="btn btn-outline-success " ><Menu /></button></nav>

          <div className="d-flex justify-content-start mt-2">
          <Menu />
            <h4 className="ms-1">Hair</h4></div>
          <div >
            <table className="container">
              <tbody>
                <tr className="border">
                  <td><Menu /></td>
                  <td>Haircut</td>
                  <td className="m-2 fw-light">45min</td>
                  <td className="d-flex justify-content-end m-2">₹40</td>
                </tr>
                <tr className="border">
                <td><Menu /></td>
                  <td>Hair Color</td>
                  <td className="m-2 fw-light">1h 15min</td>
                  <td className="d-flex justify-content-end m-2">₹57</td>
                </tr>
                <tr className="border">
                  <td><Menu /></td>
                  <td>Blow Dry</td>
                  <td className="m-2 fw-light">35min</td>
                  <td className="d-flex justify-content-end m-2">₹35</td>
                </tr>
                <tr className="border">
                  <td><Menu /></td>
                  <td>Balayage</td>
                  <td className=" m-2 fw-light">2h 30min</td>
                  <td className="d-flex justify-content-end m-2">₹150</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-start mt-2">
          <Menu />
            <h4 className="ms-1">Face</h4></div>
          <table className="container">
            <tbody>
              <tr className="border">
              <td><Menu /></td>
                <td >Facial</td>
                <td className="m-2 fw-light">1h</td>
                <td className="d-flex justify-content-end m-2">₹115</td>
              </tr>
            </tbody>
          </table>

        </form>
      </div>
    </div>
  )

}

export default ServiceMenu2