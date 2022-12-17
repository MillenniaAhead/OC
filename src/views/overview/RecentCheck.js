// ** Third Party Components
import Chart from 'react-apexcharts'
// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

// ** Custom Components
import * as Icon from 'react-feather'
import { ChevronDown, FileText, ArrowRight, Check } from 'react-feather'
// ** Reactstrap Imports
import { Badge, Card, CardHeader, CardFooter, CardTitle, CardBody, Input, Button, Label, CardSubtitle } from 'reactstrap'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const projectsArr = [
  {
    date:"14 Dec, 2020",
    time:"10:00 AM",
    totalTasks: '233/240',
    status: "Not Tested",
    cstatus:"light-danger",
    subtitle: 'React Project',
    title: 'BGC eCommerce App',
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default
  },
  {
    date:"14 Dec, 2020",
    time:"10:00 AM",
    totalTasks: '9/50',
    status: "Tested",
    cstatus:"light-success",
    subtitle: 'UI/UX Project',
    title: 'Falcon Logo Design',
    img: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default
  },
  {
    date:"14 Dec, 2020",
    time:"10:00 AM",
    totalTasks: '100/190',
    status: "Testing in Process",
    cstatus:"light-secondary",
    subtitle: 'Vuejs Project',
    title: 'Dashboard Design',
    img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default
  },
  {
    date:"14 Dec, 2020",
    time:"10:00 AM",
    totalTasks: '12/86',
    status: "Tested",
    cstatus:"light-success",
    subtitle: 'iPhone Project',
    title: 'Foodista mobile app',
    img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default
  }
]

export const columns = [
  {
    sortable: true,
    minWidth: '300px',
    name: 'Name',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={row.img} alt={row.title} imgWidth='32' />
          </div>
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.title}</span>
            <small className='text-muted'>{row.subtitle}</small>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Time',
    selector: row => row.totalTasks,
    cell: row => {
        return (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
              <span className='text-truncate fw-bolder'>{row.date}</span>
              <small className='text-muted'>{row.time}</small>
            </div>
          </div>
        )
      }
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    cell: row => {
      return (
        <div className='d-flex flex-column'>
          <Badge pill color={row.cstatus} className='me-1'>
              {row.status}
            </Badge>
        </div>
      )
    }
  }
]

const RecentCheck = () => {
  
  return (
    <Card className='card-transaction'>
      <CardHeader className='d-flex justify-content-between'>
        <CardTitle>
            <img className='rounded mar_r-10 overview_title_img' src={require('@src/assets/images/icons/overview_recentcheck.png').default}/>
            <span style = {{fontSize:"14px"}} className = "myTextColor">Recent Check Ins</span>
        </CardTitle>
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
            See All Past Check ins <ArrowRight size={18} />
        </Button.Ripple>
      </div>
    </Card>
  )
}

export default RecentCheck
