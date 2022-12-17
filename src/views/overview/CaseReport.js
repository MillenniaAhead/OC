// ** Third Party Components
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Input} from 'reactstrap'
import { Package } from 'react-feather'
const CaseReport = () => {
  const donutColors = {
    series1: '#3C9E7D',
    series2: '#EB5757',
    series3: '#DEDEDE'
  }

  // ** Chart Options
  const options = {
    legend: {
      show: true,
      position: 'bottom'
    },
    labels: ['Negative', 'Positive', 'Invalid'],

    colors: [donutColors.series1, donutColors.series2, donutColors.series3],
    dataLabels: {
      enabled: false
      /*0formatter(val) {
        return `${parseInt(val)}%`
      }*/
    },
    plotOptions: {
      pie: {
        customScale:0.9,
        donut: {
          size:"80%"
        }
      }
    }
    
  }

  // ** Chart Series
  const series = [15000, 8000, 2000]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between border-bottom'>
        <CardTitle >
            <img className='rounded mar_r-10' style = {{width:"40px", height:"40px"}} src={require('@src/assets/images/icons/overview_casereport.png').default} height='30'/>
            <span style = {{fontSize:"14px"}} className = "myTextColor">Case Reports</span>
        </CardTitle>
        <div className='d-flex align-items-center justify-content-end'>
            <Input
              type='select'
              id='rows-per-page'
              value={10}
              className='mt-md-0 mt-1'
            >
              <option value='10'>Nov21</option>
              <option value='25'>Nov22</option>
              <option value='50'>Nov23</option>
            </Input>              
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='donut' height={300} />
        <div className = "d-flex align-items-center flex-column" style = {{marginTop:"-200px"}}>
            <p style = {{fontSize:"11px"}}>COVID-19</p>
            <p style = {{fontSize:"32px"}}>25,000</p>
            <span style = {{fontSize:"11px"}}>Participants</span>
            <span style = {{fontSize:"11px"}}>tested this month</span>
          </div>

      </CardBody>
    </Card>
  )
}

export default CaseReport
