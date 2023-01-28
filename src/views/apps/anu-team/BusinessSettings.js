import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './mycss3/businessSettings.css'
import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'react-feather'

 const BusinessSettings = () => {
  return (
    <div className="bussiness-settings-container-xa">
        <div>
        <div className="top-xa mb-3">
            <div style={{fontSize:"35px", fontWeight:"800"}}>Business settings</div>
            <div className='fs-4'>Manage all your Outlet Control settings in one place.</div>
        </div>
        <div className="bussiness-settings-body-xa">
            <div className="bussiness-settings-body-box-xa">
            <Card>
             <CardHeader className='text-xa'>
             Account setup
             </CardHeader>
             <CardBody>
                <div className='box-xa'>
               <NavLink to="#">
                <div>
                <div>
                <div className='text-xc'>Business details</div>
                <div className="text-xd">Manage settings such as your business name and
time zone</div>
</div>
               </div>
               <span><ChevronRight/></span>
               </NavLink>
</div>
<div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Locations</div>
                    <div className="text-xd">Manage multiple outlets for your business</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Online booking</div>
                    <div className="text-xd">Adjust your business info and profile images 
displayed online</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Resources</div>
                    <div className="text-xd">Set up bookable resources such as rooms and
equipment and assign them to services</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Closed dates</div>
                    <div className="text-xd">Set the dates when your business is closed</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            <Card>
             <CardHeader className='text-xa'>
             Services
             </CardHeader>
             <CardBody>
             <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Services menu</div>
                    <div className="text-xd">Add, edit and delete the type of services available
for appointment bookings</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Vouchers</div>
                    <div className="text-xd">Add, edit and delete the types of vochers available
for sale</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Memberships</div>
                    <div className="text-xd">Add, edit and delete multi session memberships
available for sale</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Voucher settings</div>
                    <div className="text-xd">Choose your vocher expiry period and upsell your  
services and memberships.</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            </div>
            <div className="bussiness-settings-body-box-xb">
            <Card>
            <CardHeader className='text-xa'>
             Clients
             </CardHeader>
             <CardBody>
             <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Client notifications</div>
                    <div className="text-xd">Review messages sent to clients about their
appointments</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Referral sources</div>
                    <div className="text-xd">Set up custom sources to track how clients found
your business</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Cancellation reasons</div>
                    <div className="text-xd">Track why clients did not arrive for their
appointements</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            <Card>
            <CardHeader className='text-xa'>
             Sales
             </CardHeader>
             <CardBody>
             <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Invoice sequencing</div>
                    <div className="text-xd">Configure details displayed on invoices issued to your
clients</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Invoice template</div>
                    <div className="text-xd">Configure details displayed on invoices issued to your 
clients</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Taxes</div>
                    <div className="text-xd">Manage tax rates that apply to items sold at
checkout</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Service charges</div>
                    <div className="text-xd">Manage any extra charges that apply to services and
items sold at checkout.</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Tips</div>
                    <div className="text-xd">Manage tipping settings for your business</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="#">
                    <div>
                    <div className="text-xc">Payment types</div>
                    <div className="text-xd">Set up manual payment types for use during 
checkout</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            <Card>
            <CardHeader className='text-xa'>
             Teams
             </CardHeader>
             <CardBody>
             <div className='box-xa'>
                <NavLink to="/team/teamMembers">
                    <div>
                    <div className="text-xc">Team members</div>
                    <div className="text-xd">Add, edit and delete your team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/team/workingHours">
                    <div>
                    <div className="text-xc">Working hours</div>
                    <div className="text-xd">Manage working hours of your team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/team/permissions">
                    <div>
                    <div className="text-xc">Permissions</div>
                    <div className="text-xd">Configure level of access to Fresha for each of your
team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/team/commission">
                    <div>
                    <div className="text-xc">Commisions</div>
                    <div className="text-xd">Set up the calculation of commissions for  team
members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BusinessSettings
