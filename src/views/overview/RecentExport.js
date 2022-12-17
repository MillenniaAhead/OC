// ** Third Party Components
import Chart from 'react-apexcharts'
// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'

import * as Icon from 'react-feather'
import { FileText, ArrowRight, Check } from 'react-feather'
// ** Reactstrap Imports
import { Card, CardHeader, CardFooter, CardTitle, CardBody, Input, Button, Label, CardSubtitle } from 'reactstrap'
const RecentExport = () => {
    const transactionsArr = [
        {
          title: 'Medicine Precription.pdf',
          uploadTime: 'Today, 12:35pm',
          filesize: '250kb'
        },
        {
          title: 'Blood Test Report.pdf',
          uploadTime: '5 jun, 2019, 10:25 am',
          filesize: '250kb'

        },
        {
          title: 'Covid-19 Test Report.pdf',
          uploadTime: '23 Nov, 2020, 07:33 pm',
          filesize: '250kb'
        }

      ]
      const renderTransactions = () => {
        return transactionsArr.map(item => {
          return (
            <div key={item.title} className='transaction-item border-top'>
              <div className='d-flex pad_t-10'>
                <FileText size={18} />
                <div className = "mar_l-10">
                  <h6 className='transaction-title'>{item.title}</h6>
                  <small>{item.uploadTime}</small>
                </div>
              </div>
              <div >{item.filesize}</div>
            </div>
          )
        })
      }
  return (
    <Card className='card-transaction'>
      <CardHeader className='d-flex justify-content-between'>
        <CardTitle>
            <img className='rounded mar_r-10 overview_title_img' src={require('@src/assets/images/icons/overview_recentexports.png').default}/>
            <span style = {{fontSize:"14px"}} className = "myTextColor">Recent Exports</span>
        </CardTitle>
        <div className='d-flex align-items-center justify-content-end'>
            <Button.Ripple outline size = "sm" className = "pad_l-5 pad_r-5" >
            <img className='' src={require('@src/assets/images/icons/overview_newexport.png').default} />
                <span className = "mar_l-5">New Export</span>
            </Button.Ripple>            
        </div>
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
      <div className = "d-flex justify-content-center mar_b-10">
        <Button.Ripple color='flat-info' tag={Link} to='/'>
          View All Exports <ArrowRight size={18} />
        </Button.Ripple>
      </div>
    </Card>
  )
}

export default RecentExport
