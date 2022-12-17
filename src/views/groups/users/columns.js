// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
// ** Store & Actions

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
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
  ArrowDownCircle
} from 'react-feather'

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='me-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='me-50' content={row.createdby ? row.createdby.name : 'No name'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: 'Filename',
    sortable: true,
    sortField: 'filename',
    minWidth: '280px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.filename}`}>{`${row.filename}`}</Link>
  },
  {
    name: 'Type',
    sortable: true,
    sortField: 'type',
    minWidth: '150px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.type}`}>{`${row.type}`}</Link>
  },
  {
    name: 'Params',
    sortable: true,
    sortField: 'params',
    minWidth: '200px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.params}`}>{`${row.params}`}</Link>
  },
  {
    name: 'Done',
    sortable: true,
    sortField: 'done',
    minWidth: '50px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.done}`}>{`${row.done}`}</Link>
  },
  {
    name: 'Created',
    sortable: true,
    sortField: 'created',
    minWidth: '150px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.created}`}>{`${row.created}`}</Link>
  },
  {
    name: 'Createdby',
    sortable: true,
    minWidth: '260px',
    sortField: 'createdby.name',
    // selector: row => row.client.name,
    cell: row => {
      const name = row.createdby ? row.createdby.name : 'No name'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Download',
    sortable: true,
    sortField: 'download',
    minWidth: '140px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.download}`}><Download width={25} size={20} viewBox={"0, 0, 25, 25"}/>{`${row.download}`}</Link>
  }
]