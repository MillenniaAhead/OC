import React, {useState} from 'react'
import '../mycss3/AddTeamMemberForm.css'
import { ChevronDown, X } from 'react-feather'
import { Button, Label, Input } from "reactstrap"
import { NavLink } from 'react-router-dom'

const AddViaEmail = () => {
const [formData, setFormData] = useState()

const CollectData = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
}
const HandleSubmit = () => {
        console.log(formData)
}

  return (
    <div className='add-via-email-ta mb-5'>
        <div className="top-va">

                <div><NavLink to='/businessSettings'><X size={45} style={{color:'black'}}  strokeWidth={1.2}/></NavLink></div>
                <NavLink to='#'>
                <Button.Ripple className="btn-va" color='dark' onClick={HandleSubmit}>Save</Button.Ripple>
                </NavLink>
            </div>
            <div className="add-via-email-ta">
            <div className='text-vc'>Invite via email</div>
            <div style={{width:"fit-content", margin:"auto", fontSize:"16px", padding:"0 8px"}} className="text-center mb-2">Anyone with the invitation has permission set: <NavLink to="#" style={{color:"#1bb70b"}}>Low<ChevronDown color="#1bb70b" size={20}/></NavLink>Link will expire after 7 days</div>
            </div>
            <div className="form-box-va">
                <div className="top-info-vb box-tb">
                    <div className='box-ta'>
            <Label className='text-vb' for='first-name'>
                    First name
                    </Label>
                    <Input onChange={CollectData} name='first_name' type='text' id='first-name' bsSize='lg' placeholder='' />
                    </div>
                    <div className='box-ta'>
            <Label className='text-vb' for='last-name'>
                    Last name
                    </Label>
                    <Input onChange={CollectData} name='last_name' type='text' id='last-name' bsSize='lg' placeholder='' />
                    </div>
                    <div className='box-ta'>
            <Label className='text-vb' for='email'>
                    Email
                    </Label>
                    <Input onChange={CollectData} name='email' type='text' id='email' bsSize='lg' placeholder='mail@example.com' />
                    </div>
                    </div>
            </div>
            <div style={{width:"fit-content", margin:"auto"}}>
            <button className="btn-vc mt-4"><span className="plus-va me-1">+</span><span className="text-vf">Add next email</span></button>
            </div>
    </div>
  )
}

export default AddViaEmail
