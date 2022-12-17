// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

// ** Custom Components
import { ChevronDown, ArrowRight } from 'react-feather'
// ** Reactstrap Imports
import { Badge, Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const projectsArr = [
  {
    name: "QC CC Walkins",
    organization:"QC e Clinic Labs",
    users:"Participants",
    status: "Not Active",
    cstatus:"light-danger",
    fromdate:"21 Jan 2021",
    img2: require('@src/assets/images/icons/Group9373.png').default,
    img1: require('@src/assets/images/icons/Group9788.png').default
  },
  {
    name: "QC TX Walkins",
    organization:"QC e Clinic Labs",
    users:"Appointments",
    status: "Active",
    cstatus:"light-success",
    fromdate:"21 Jan 2021",
    img2: require('@src/assets/images/icons/Group9373.png').default,
    img1: require('@src/assets/images/icons/Group9788.png').default
  },
  {
    name: "QC TX Appointments",
    organization:"QC e Clinic Labs",
    users:"Participants",
    status: "Active",
    cstatus:"light-success",
    fromdate:"21 Jan 2021",
    img2: require('@src/assets/images/icons/Group9373.png').default,
    img1: require('@src/assets/images/icons/Group9788.png').default
  },
  {
    name: "QC Corpus Christi",
    organization:"QC e Clinic Labs",
    users:"Participants",
    status: "Active",
    cstatus:"light-success",
    fromdate:"21 Jan 2021",
    img2: require('@src/assets/images/icons/Group9373.png').default,
    img1: require('@src/assets/images/icons/Group9788.png').default
  }
]

export const columns = [
  {
    sortable: true,
    name: 'Name',
    minWidth: '200px',
    selector: row => row.name,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar size = "sm" className='me-1' img={row.img1} alt={row.name} imgWidth='16' />
          </div>
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.name}</span>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Owning Organization',
    minWidth: '200px',
    selector: row => row.organization,
    cell: row => {
        return (
        <div className='d-flex justify-content-left align-items-center'>
            <div className='avatar-wrapper'>
              <Avatar  size = "sm" className='me-1' img={row.img2} alt={row.organization} />
            </div>
            <div className='d-flex flex-column'>
              <span className='text-truncate fw-bolder'>{row.organization}</span>
            </div>
          </div>
        )
      }
  },
  {
    name: 'Users',
    minWidth: '100px',
    selector: row => row.users,
    cell: row => {
      return (
        <div className='d-flex flex-column'>
              {row.users}
        </div>
      )
    }
  },
  {
    name: 'Status',
    selector: row => row.status,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
                <Badge pill color={row.cstatus} style = {{width:"80px"}} className='me-1'>
                     {row.status}
                </Badge>
                <small className='text-muted'>{row.fromdate}</small>
            </div>
      </div>
      )
    }
  }
]

const Groups = () => {
  
  return (
    <Card className='card-transaction'>
        <CardHeader className='d-flex justify-content-between'>
            <CardTitle>
                <img className='rounded mar_r-10 overview_title_img' src={require('@src/assets/images/icons/overview_group.png').default}/>
                <span style = {{fontSize:"14px"}} className = "myTextColor">Groups</span>
                <span style = {{fontSize:"12px"}}>(24)</span>
            </CardTitle>
            <div className='d-flex align-items-center justify-content-end'>
                <Button.Ripple outline size = "sm" className = "pad_l-5 pad_r-5" >
                    <span className = "mar_l-5 myTextColor">Create a Group</span>
                </Button.Ripple>            
            </div>
        </CardHeader>
      <CardBody>
        <div className='react-dataTable user-view-account-projects'>
            <DataTable
            noHeader
            responsive
            striped 
            columns={columns}
            data={projectsArr}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            />
        </div>
      </CardBody>
      <div className = "d-flex justify-content-center mar_b-10">
        <Button.Ripple color='flat-info' tag={Link} to='/'>
            See All Groups<ArrowRight size={18} />
        </Button.Ripple>
      </div>
    </Card>
  )
}

export default Groups
