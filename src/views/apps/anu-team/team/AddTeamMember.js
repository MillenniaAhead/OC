import React from 'react'
import { Mail, UserPlus, X } from 'react-feather'
import '../mycss3/AddTeamMember.css'
import { NavLink } from 'react-router-dom'

const AddTeamMember = () => {

  return (
    <div>
        <div className='d-flex justify-content-end p-1'><NavLink to="/team/teamMembers" style={{color:"black"}}><X size={45} strokeWidth={1.2}/></NavLink></div>
        <div className="body-wa">
            <div className='fs-1 text-center mb-2 fw-bolder'>Add team members</div>
            {/* Add manually */}
            <NavLink to='/team/addTeamMemberForm'>
            <div className="box-wa mb-2">
                <div>
                <div className='fs-3 fw-bolder'>Add manually</div>
                <div className='fs-5'>Add info about the new team member manually.</div>
                </div>
                <div><UserPlus size={30} className="ms-2"/></div>
            </div>
            </NavLink>
            {/* Invite via email */}
            <NavLink to='/team/addViaEmail'>
            <div className="box-wb">
                <div>
                <div className='fs-3 fw-bolder'>Invite via email</div>
                <div className='fs-5'>Invite one or more new team members to create their
account.</div>
</div>
           <div><Mail size={30} className="ms-2"/></div>
            </div>
            </NavLink>
        </div>
    </div>
  )
}

export default AddTeamMember
