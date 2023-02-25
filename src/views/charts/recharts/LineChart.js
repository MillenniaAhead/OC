// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Badge } from 'reactstrap'

// ** Third Party Components
import { ArrowDown } from 'react-feather'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// ** Chart Data
const data = [
  {
    name: '10 Dec',
    pv: 0
  },
  {
    name: '8/12',
    pv: 1
  },
  {
    name: '11 Dec',
    pv: 2
  },
  {
    name: '12 Dec',
    pv: 3
  },
  {
    name: '13 Dec',
    pv: 4
  },
  {
    name: '14 Dec',
    pv: 5
  },
  {
    name: '15 Dec',
    pv: 10
  },
  {
    name: '16 Dec',
    pv: 6
  },
  {
    name: '17 Dec',
    pv: 8
  },
  {
    name: '18 Dec',
    pv: 7
  },
  {
    name: '19 Dec',
    pv: 11
  },
  {
    name: '20 Dec',
    pv: 9
  },
  {
    name: '21 Dec',
    pv: 13
  },
  {
    name: '22 Dec',
    pv: 12
  },
  {
    name: '23 Dec',
    pv: 14
  }
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <span>{`${payload[0].value}%`}</span>
      </div>
    )
  }

  return null
}

const SimpleLineChart = ({ warning }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Balance</CardTitle>
          <small className='text-muted'>Commercial networks & enterprises</small>
        </div>
        <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
          <h5 className='fw-bold mb-0 me-1'>$ 100,000</h5>
          <Badge className='badge-md' color='light-secondary'>
            <ArrowDown className='text-danger me-50' size={15} />
            20%
          </Badge>
        </div>
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <LineChart height={300} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke={warning} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleLineChart
