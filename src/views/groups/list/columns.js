// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'

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
    return <Avatar className='me-50 og_avatar' img={row.name.og_avatar} imgHeight={45} imgWidth={45}/>
  } else {
    return <Avatar color={color} className='me-50' content={row.name ? row.name.name : 'No name'} initials />
  }
}

const renderOwg = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.owing_organiztion.owg_avatar.length) {
    return <Avatar className='me-50' img={row.owing_organiztion.owg_avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='me-50' content={row.owing_organiztion.owg_name ? row.owing_organiztion.owg_name : 'No name'} initials />
  }
}

const renderStatus = row => {
  const active = row.status
  if (active === 1) {
    return <row>
      <div className="act">Active</div>
      <div>since 21 Jan 2021</div>
    </row>
  } else {
    return <row>
      <div className="noact">Not Active</div>
      <div>since 21 Jan 2021</div>
    </row>
  }
}

const renderSwitch = row => {
  const on = row.status
  if (on) {
    return <div className='d-flex flex-column'>
        <div className='form-switch form-check-primary'>
          <Input type='switch' id='switch-primary' name='primary' defaultChecked={!on}/>
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
    name: 'name',
    sortable: true,
    minWidth: '260px',
    sortField: 'name.og_name',
    // selector: row => row.client.name,
    cell: row => {
      const og_name = row.name.og_name ? row.name.og_name : 'No name'
      return (
        <Link to={`/groups/details/1`}>
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
    name: 'Services',
    sortable: true,
    minWidth: '300px',
    sortField: 'services',
    // selector: row => row.total,
    cell: row => <Link to={`/groups/details/1`}><div className="pad_b-5">{row.services}</div></Link>
  },
  {
    name: 'Owing Organation',
    sortable: true,
    minWidth: '200px',
    sortField: 'owing_organiztion.owg_name',
    // selector: row => row.client.name,
    cell: row => {
      const owg_name = row.owing_organiztion.owg_name ? row.owing_organiztion.owg_name : 'No name'
      return (
        <Link to={`/groups/details/1`}>
        <div className='d-flex justify-content-left align-items-center'>
          {renderOwg(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{owg_name}</h6>
          </div>
        </div>
        </Link>
      )
    }
  },
  {
    name: 'Users',
    sortable: true,
    minWidth: '150px',
    sortField: 'users',
    // selector: row => row.total,
    cell: row => <Link to={`/groups/details/1`}><span>{row.users}</span></Link>
  },
  {
    name: 'Type',
    sortable: true,
    minWidth: '150px',
    sortField: 'type',
    // selector: row => row.total,
    cell: row => <Link to={`/groups/details/1`}><span>{row.type}</span></Link>
  },
  {
    name: 'Status',
    minWidth: '170px',
    // selector: row => row.total,
    cell: row => (renderStatus(row))
  },
  {
    name: 'Activation',
    minWidth: '120px',
    // selector: row => row.total,
    cell: row => (renderSwitch(row))
  },
  {
    name: 'Actions',
    minWidth: '150px',
    // selector: row => row.total,
    cell: row => (
      <div className='column-action float-right'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={20} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
