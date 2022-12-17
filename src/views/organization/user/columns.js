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
const renderQc = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

    if (row.qc_id.avatar.length) {
      return <Avatar className='me-50 og_avatar' img={row.qc_id.avatar} imgHeight={45} imgWidth={45}/>
    } else {
      return <Avatar color={color} className='me-50' content={row.qc_id.name ? row.qc_id.name : 'No name'} initials />
    }
}


const renderStatus = row => {
  const active = row.status
  if (active === 1) {
    return <div>
      <div className="act">Active</div>
      <div>Last login 03 mins ago</div>
    </div>
  } else {
    return <div>
      <div className="noact">Not Active</div>
      <div>Last login 03 mins ago</div>
    </div>
  }
}

const renderSwitch = row => {
  console.log(row.status, 1321321)
  const on = row.status
  if (on) {
    return <div className='d-flex flex-column text-center'>
        <div className='form-switch form-check-primary'>
          <Input type='switch' id='switch-primary' name='primary' defaultChecked={!on}/>
        </div>
      </div>
  } else {
    return <div className='d-flex flex-column text-center'>
      <div className='form-switch form-check-primary'>
        <Input type='switch' id='switch-primary' name='primary' defaultChecked={!on}/>
      </div>
    </div>
  }
}

// ** Table columns
export const columns = [
  {
    name: 'QC ID',
    minWidth: '150px',
    sortField: 'qc_id.id',
    sortable: true,
    cell: row => {
      const id = row.qc_id ? row.qc_id.id : 'No ID'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderQc(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{id}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    sortField: 'name',
    cell: row => (row.name)
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    sortField: 'email',
    cell: row =>  (row.email)
  },
  {
    name: 'Phone Number',
    sortable: true,
    minWidth: '170px',
    sortField: 'phone_number',
    cell: row => (row.phone_number)
  },
  {
    name: 'Role',
    sortable: true,
    minWidth: '50px',
    sortField: 'role',
    cell: row => (row.role === 1 ? 'Admin' : 'Staff') 
  },
  {
    name: 'Result Success',
    sortable: true,
    minWidth: '170px',
    sortField: 'result_success',
    cell: row => (row.result_success === 1 ? <div className="text-primary text-center ml-1">True</div> : <div className="">False</div>) 
  },
  {
    name: 'Status',
    minWidth: '200px',
    cell: row => (renderStatus(row))
  },
  {
    name: 'Activation',
    minWidth: '120px',
    cell: row => (renderSwitch(row))
  },
  {
    name: 'Manage',
    minWidth: '150px',
    // selector: row => row.total,
    cell: () => (
      <div className="">
        <Edit size={20} className="me-1"/>
        <Trash size={20} className="me-1"/>
      </div>
    )
  }
]
