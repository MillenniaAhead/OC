import React, {useState} from 'react'
import '../mycss3/AddTeamMemberForm.css'
import { ChevronDown, X } from 'react-feather'
import { Button, Label, Input, Alert } from "reactstrap"
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'

const AddViaEmail = () => {
//For store data from input fields        
const [formData, setFormData] = useState({first_name:"", last_name:'', email:""})
//For alert
const [visible1, setVisible1] = useState(false)
const [visible2, setVisible2] = useState(false)
const [block1, setBlock1] = useState({display:'none'})
const [block2, setBlock2] = useState({display:'none'})
const [border1, setBorder1] = useState()
const [border2, setBorder2] = useState()

//For store data from input fields        
const CollectData = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        if (e.target.name === 'first_name') {
                setBlock1({display:"none"})
                setBorder1()
        } else if (e.target.name === "email") {
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
                setBlock2({display:"none"})
                setBorder2()
                }
        }
}

//For redirect
const history = useHistory()

//On submit
const HandleSubmit = () => {
    if (formData.first_name === "") {
        setBlock1()
        setBorder1({borderColor:'red'})
        setVisible1(true)
        setTimeout(() => {
          setVisible1(false)
        }, 3000)
} else if (formData.email === ""  || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
        setBlock2()
        setBorder2({borderColor:'red'})
        setVisible1(true)
        setTimeout(() => {
                setVisible1(false)
        }, 3000)
    } else {
    axios.post('http://localhost:4000/api/teamMembers', formData)
    .then((res) => {
        console.log(res)
        setVisible2(true)
        setTimeout(() => {
           setVisible2(false) 
           history.push('/team/teamMembers')
        }, 3000)
})
    .catch((err) => console.log(err))
}
    }

  return (
    <div className='add-via-email-ta mb-5'>
        {/* For alert */}
        <div className="my-alert-comp">
      <Alert isOpen={visible1}>
        <div className='alert-body text-center'>
        Please fill all required fields
        </div>
      </Alert>
      </div>
        <div className="my-alert-comp my-alert-comp-2">
      <Alert isOpen={visible2}>
        <div className='alert-body text-center'>
        Team member invited successfully
        </div>
      </Alert>
      </div>
        <div className="top-va">
                <div><NavLink to='/team/teamMembers'><X size={45} style={{color:'black'}}  strokeWidth={1.2}/></NavLink></div>
                <NavLink to='#'>
                <Button.Ripple className="btn-va" color='dark' onClick={HandleSubmit}>Save</Button.Ripple>
                </NavLink>
            </div>
            <div className="add-via-email-ta">
            <div className='text-vc'>Invite via email</div>
            <div style={{width:"fit-content", margin:"auto", fontSize:"16px", padding:"0 8px"}} className="text-center mb-2">Anyone with the invitation has permission set: <NavLink to="#" style={{color:"#1bb70b"}}>Low<ChevronDown color="#1bb70b" size={20}/></NavLink>Link will expire after 7 days</div>
            </div>
            <div className="form-box-va">
                <form action="" method="post"></form>
                <div className="top-info-vb box-tb">
                    <div className='box-ta'>
            <Label className='text-vb' for='first-name'>
                    First name
                    </Label>
                    <Input style={border1} onChange={CollectData} name='first_name' type='text' id='first-name' bsSize='lg' placeholder='' />
                    <div style={block1} className='text-danger'>Name is required</div>
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
                    <Input style={border2} onChange={CollectData} name='email' type='text' id='email' bsSize='lg' placeholder='mail@example.com' />
                    <div style={block2} className='text-danger'>Please provide a valid Email</div>
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
