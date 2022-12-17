// ** React Imports
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// ** Icons Imports
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
import DailyRate from './DailyRate'
import DailyTest from './DailyTest'
import CaseReport from './CaseReport'
import RecentExport from './RecentExport'
import Vaccination from './Vaccination'
import AdminForm from '@src/views/ui-elements/overview/AdminForm'
import DetailedReport from './DetailedReport'
import RecentCheck from './RecentCheck'
import Groups from './Groups'
//import axios from 'axios'
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import { getData } from './store'
const Overview = () => {
  // ** Context
  const store = useSelector(state => state.overview)
  const dispatch = useDispatch()
  const [isRtl] = useRTL()
  const name = "Erik"
  
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.allData.length])

  return (
    <div id='dashboard-analytics'>
      
      <div style = {{fontSize:"26px", color:"#09477D", fontWeight:"bold"}}>
        Welcome, Dr.{name}
      </div>
      <div style = {{height:"50px"}}>
        Get summary of your daily participants check ins here
      </div>
      <br/>
      {store.allData.length !== 0 ? (
        <>
      <Row className='match-height'>
          <Col lg='6' sm='12'>
            <DailyRate data = {store.allData.chartdata} direction={isRtl ? 'rtl' : 'ltr'} />
          </Col>
          <Col lg='3' sm='6'>
            <CaseReport />
          </Col>
          <Col lg='3' sm='6'>
            <RecentExport />
          </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <Vaccination />
          </Col>
          <Col lg='6' xs='12'>
            <AdminForm />
          </Col>
        </Row>
      
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <DailyTest pdata = {store.allData.testvolume} direction={isRtl ? 'rtl' : 'ltr'}/>
          </Col>
          <Col lg='6' xs='12'>
            <DetailedReport></DetailedReport>
          </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <RecentCheck />
          </Col>
          <Col lg='6' xs='12'>
            <Groups/>
          </Col>
        </Row>
        </>
        ) : null}
    </div>
  )
}

export default Overview
