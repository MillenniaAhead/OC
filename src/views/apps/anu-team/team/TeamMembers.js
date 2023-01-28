import React, { useState } from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button, InputGroup, Input, InputGroupText, Card, ButtonGroup, Col, CardText} from 'reactstrap'
import "../mycss3/TeamMembers.css"
import { ChevronsDown, Search, List, PhoneCall, Mail } from 'react-feather'
import Avatar from '@components/avatar'
import { NavLink } from 'react-router-dom'

const TeamMembers = () => {
  const [rSelected, setRSelected] = useState(1)

  return (
    <div className='team-member-container-ua'>
        <div className='mb-1'> 
            <span className='fs-5' style={{color:'rgba(0, 0, 0, 0.5)'}}>Settings </span><span className='fs-5' style={{color:'black'}}>Team members</span>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='fs-1' style={{fontWeight:"900"}}>Team members</div>
            <div>
            <UncontrolledButtonDropdown className='me-1 dropdown-ua'>
        <DropdownToggle outline color='dark' caret>
          Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
Change the order
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Download CSV
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Download Excel
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Create share link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <NavLink to="/team/addTeamMember"><Button.Ripple className="btn-ua fs-3 fw-bolder" color='dark'>Add a team member</Button.Ripple></NavLink>
      <Button.Ripple className='round btn-ub' color='primary'>
        +Add
      </Button.Ripple>
      </div>
        </div>
        <div className='box-ua'>
          <div className='d-flex'>
        <ButtonGroup className='me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected(2)} active={rSelected === 2}>
            <ChevronsDown/>
          </Button>
          <Button color='success' onClick={() => setRSelected(3)} active={rSelected === 3}>
            <List/>
          </Button>
        </ButtonGroup>
        <InputGroup className='input-group-merge'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input placeholder='Search by name or title' />
      </InputGroup>
      </div>
      <UncontrolledButtonDropdown className='dropdown-ua'>
        <DropdownToggle outline color='dark' caret>
          Surname
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
Costom order
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Surname (A-Z)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Surname (Z-A)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Started at (oldest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Started at (newest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Rating (highest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Rating (lowest first)
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        </div>
        <div className="team-member-body-ua row">
          <Card className='col-md-4 col-sm-12 p-2'>
            <div className='card-body-ua'>
          <Avatar color='light-success' content='Kondeti Anusha' size='xl' initials />
          <div className='text-ua'>Kondeti Anusha</div>
          <div className='text-ub text-center'>+Add team member title</div>
          </div>
          <div className='box-ub mt-4'>
          <span className='me-2'>
              <PhoneCall style={{background:" rgba(27, 183, 11, 0.3)", color:"#1bb70b", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          <span>
              <Mail style={{background:"rgba(246, 206, 61, 0.3)", color:"#F6CE3D", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          </div>
          </Card>
          <Card className='col-md-4 p-2'>
            <div className='card-body-ua'>
          <Avatar color='light-success' content='Wendy Smith' size='xl' initials />
          <div className='text-ua'>Wendy Smith</div>
          <div className='text-ub text-center'>+Add team member title</div>
          </div>
          <div className='box-ub mt-4'>
          <span className='me-2'>
              <PhoneCall style={{background:" rgba(27, 183, 11, 0.3)", color:"#1bb70b", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          <span>
              <Mail style={{background:"rgba(246, 206, 61, 0.3)", color:"#F6CE3D", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          </div>
          </Card>
        </div>
    </div>
  )
}

export default TeamMembers