// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  Row,
  Label,
  Input
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle,
  Fileinput,
  FileText,
  Archive,
  Trash2
} from 'react-feather'
// ** Icons Imports

// ** Reactstrap Imports

// ** Vars
const renderOg = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.name.og_avatar.length) {
    return <img className="me-75" src={row.name.og_avatar} alt="angular" height="20" width="20"/>
  } else {
    return <Avatar color={color} className='me-50' content={row.name ? row.name.name : 'No name'} initials />
  }
}

const renderStatus = row => {
  const active = row.status
  if (active === 1) {
    return <div>
      <div className="act">Active</div>
      <div>since 21 Jan 2021</div>
    </div>
  } else {
    return <div>
      <div className="noact">Not Active</div>
      <div>since 21 Jan 2021</div>
    </div>
  }
}

const renderSwitch = row => {
  const on = row.status
  if (on) {
    return <div className='d-flex flex-column'>
        <div className='form-switch form-check-primary'>
          <Input type='switch' id='switch-primary' name='primary' defaultChecked={on}/>
        </div>
      </div>
  } else {
    return <div className='d-flex flex-column'>
      <div className='form-switch form-check-primary'>
        <Input type='switch' id='switch-primary' name='primary' defaultChecked={!on}/>
      </div>
    </div>
  }
}

// ** Table columns
export const columns = [
  {
    name: 'Activation',
    maxWidth: '120px',
    // selector: row => row.total,
    cell: row => (renderSwitch(row))
  },
  {
    name: 'Organization Name',
    sortable: true,
    minWidth: '350px',
    sortField: 'name.og_name',
    // selector: row => row.client.name,
    cell: row => {
      const og_name = row.name.og_name ? row.name.og_name : 'No name'
      return (
        <Link to={"/groups/list/1"}>
          <div className='d-flex justify-content-left align-items-center'>
            {renderOg(row)}
            <div className='d-flex flex-column'>
              <h6 className='user-name text-truncate mb-0'>{og_name}</h6>
            </div>
          </div>
        </Link>
      )
    }
  },
  {
    name: 'Admins',
    minWidth: '250px',
    // selector: row => row.total,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <AvatarGroup data={row.admins} className="me-1"/>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate'>View Admins</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Groups',
    sortable: true,
    minWidth: '200px',
    sortField: 'groups',
    // selector: row => row.total,
    cell: row => <div className="pad_b-5">{row.groups} Groups<Link to={"#"}><div className="text-center text-primary">View</div></Link></div>
  },
  {
    name: 'Status',
    minWidth: '150px',
    // selector: row => row.total,
    cell: row => (renderStatus(row))
  },
  
  {
    name: 'Manage',
    minWidth: '150px',
    // selector: row => row.total,
    cell: () => (
      <div className="og_manage">
        <Copy size={20} className="me-1"/>
        <Edit size={20} className="me-1"/>
        <Trash size={20} className="me-1"/>
      </div>
    )
  }
]
