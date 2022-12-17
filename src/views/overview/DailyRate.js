// ** Third Party Components
import Chart from 'react-apexcharts'
import { useState } from 'react'
// ** import temp data
// ** Reactstrap Imports
import { Card, CardHeader, ButtonGroup, CardBody, Button } from 'reactstrap'

const DailyRate = ({ data, direction }) => {
  // ** Chart Options
  const [active, setActive] = useState('daily')
  
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: ["#00875A"]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ["#00875A", "#EB5757"],
   
    title: {
        text: 'Daily Positive Rate',
        align: 'left',
        style: {
            fontSize:  '18px',
            fontFamily:  undefined,
            color:  '#18477B'
        }
      },
    tooltip: {
        followCursor:true,
        shared:false,
        style:{
            fontSize:"10px"
        },
      custom(data) {
        return `<div className='px-50 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex] * 30} people were <br>affected</span>
            </div>`
      }
    },
    xaxis: {
        type: 'datetime',
        labels: {
            format: 'MMM-dd',
            style: {
                fontSize:  '10px',
                fontFamily:  "Poppins",
                colors:  '#276385',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label'
            }
        }
          
    },
    yaxis: {
      tickAmount:6,
      opposite: direction === 'rtl',
      labels: {
        formatter(value) {
          return `${value}%`
        }
      }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -35,
        offsetX: -5,
        markers: {
            width: 12,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 1,
            offsetX: 0,
            offsetY: -3
        }
      }
  }
  // ** Chart Series
  const series = [
    {
      name: "Negative",
      data: data.positive
    },
    {
      name: "Positive",
      data: data.negative
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-center'>
        <ButtonGroup className='d-flex justify-content-center'>
            <Button active={active === 'daily'} color="flat-primary" onClick={() => setActive('daily')}>
            Daily
            </Button>
            <Button active={active === 'weekly'}  color="flat-primary" onClick={() => setActive('weekly')}>
            Weekly
            </Button>
            <Button active={active === 'monthly'}  color="flat-primary" onClick={() => setActive('monthly')}>
            Monthly
            </Button>
            <Button active={active === 'yearly'} color="flat-primary"  onClick={() => setActive('yearly')}>
            Yearly
            </Button>
        </ButtonGroup>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={300} />
      </CardBody>
    </Card>
  )
}

export default DailyRate
