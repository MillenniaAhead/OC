// ** Third Party Components
import Chart from 'react-apexcharts'
// ** import temp data
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const DailyTest = ({ pdata, direction }) => {
  // ** Chart Options
  
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
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: ["#00875A"]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width:3
    },
    colors: ["#FF8F73"],
   
    title: {
        text: 'Daily Test Volume',
        align: 'left',
        style: {
            fontSize:  '18px',
            fontFamily:  undefined,
            color:  '#18477B'
        }
      },
    tooltip: {
       enabled:false
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
      tickAmount:3,
      min:0,
      opposite: direction === 'rtl',
      labels: {
        formatter(value) {
          return `${value}k`
        }
      }
    },
    legend: {
        show: true,
       showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -45,
        offsetX: -5,
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#333',
            radius: 12,
            offsetX: 0,
            offsetY: 0
        }
      }
  }
  // ** Chart Series
  const series = [
    {
      name: "Test Completed",
      data: pdata
    }
  ]

  return (
    <Card>
      <CardBody>
        <Chart options={options} series={series} type='line' height={200} />
      </CardBody>
    </Card>
  )
}

export default DailyTest
