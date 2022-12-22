import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
// import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import client from '../../images/ClientList/client.jpg'
import filter from '../../images/ClientList/filers.jpg'
import FirstName from '../../images/ClientList/FirstName.jpg'

import '../CSS/ClientList.css'

const ClientList = () => {
    // const tableData = [
    //   {
    //     "avatar": "J",
    //     "Clint_name": "Jack Doe",
    //     "email": "ckeam0@bing.com",
    //     "Mobile_number":  '-',
    //     "gender": "Male",
    //     "reviews": "-",
    //     "total_sales": "-"
    //   }, {
    //     "avatar": "M",
    //     "Clint_name": "Mack Doe",
    //     "email": "ngreveson1@rambler.ru",
    //     "Mobile_number":'-',
    //     "gender": "Male",
    //     "reviews": "-",
    //     "total_sales": "-"
    //   }, {
    //     "avatar": "L",
    //     "Clint_name": "Liam  Doe",
    //     "email": "cdidomenico2@walmart.com",
    //     "Mobile_number":'-',
    //     "gender": "Male",
    //     "reviews": "-",
    //     "total_Sales": "-"
    //   }, {
    //     "avatar": "S",
    //     "Clint_name": "Shane Doe",
    //     "email": "svandermark3@ihg.com",
    //     "Mobile_number":'-',
    //     "gender": "male",
    //     "reviews": "-",
    //     "total_sales": "-"
    //   }, {
    //     "avatar": "L",
    //     "Clint_name": "Look Doe",
    //     "email": "agreated4@jugem.jp",
    //     "Mobile_number": "-",
    //     "gender": "Male",
    //     "reviews": "-",
    //     "total_sales": "-"
    //   }]
    return (
        <div>
            <div>
            <div className='d-flex justify-content-between mx-3 mt-5 '>
            <div>
                <div className='d-flex align-items-center'><h2>Clients list</h2> <p className='three '>3</p></div>
                <p className='fs-5'>View, add, edit and delete your client’s details. Learn more</p>
            </div>
            <div className='d-flex align-items-start'>
            <Dropdown className='p-2' style={{marginRight:'15px'}}>
      <Dropdown.Toggle style={{height:"60px", width:"150px"}} variant="light" id="dropdown-basic">
       Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            
    <button type="button" style={{height:"60px", width:"150px", marginTop:'8px'}} class="btn btn-secondary" >Add client</button>

            </div>
        </div>
            </div>
            <div className='container ' >
                <div className="row border rounded mx-3" style={{height:'280px', backgroundColor: 'rgba(217, 217, 217, 0.16)'}}>
                    <div className='col-8 '>
                        <h3 className='mt-3 ms-4'>Set up your Outlet Control profile for clients to book <br />
online.</h3>
                    <p className='fs-5 ms-4'>Free up time and get your clients self booking online 24/7.</p>
                    <button className='ms-4 mt-2 border-0 bg-white py-2 px-4 rounded'>start Now</button>
                    </div>
                    <div className='col-4 client '>
                   
                <Card className=' mx-auto' style={{ width: '215px', marginTop:'85px' }}>
      <Card.Img variant="top" src={client} />
      <Card.Body>
        
      </Card.Body>
    </Card>
                
                 
                    </div>
             </div>

        </div>
            <div className='border rounded mx-4 mt-4 d-flex justify-content-between align-items-center' style={{height:'90px',  backgroundColor:'rgba(217, 217, 217, 0.16)'}}>
                           <div className='d-flex align-items-center'>
                           <div>
                           <input style={{width:'560px', height: '48px'}} className=' border-0 rounded-pill ms-3 
                              text-center text-secondary py-2' type="text" placeholder='Search by 
                               name, email or mobile number'/>
                           </div>
                           <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px'}} src={filter} alt="" />
                           </div>
                           </div>
                           <div style={{width:'225px', height:"48px"}}  className=' bg-white d-flex justify-content-around align-items-center border-0 rounded-pill me-3'>
                            <h6 className='fs-5 mt-1'>First name(A-Z)</h6> 
                            <img style={{width:"24px", height:'24px'}} src={FirstName} alt="" />
                           </div>

            </div>

            <div  className='mt-3 mx-4'>
            <TableContainer style={{backgroundColor:'#F0F2F5'}} component={Paper}>
      <Table aria-label = 'sample table'>
          <TableHead>
              <TableRow>
                <TableCell><b>Clint name </b></TableCell>
                <TableCell><b>Mobile number</b></TableCell>
                <TableCell><b>Gender</b></TableCell>
                <TableCell><b>Reviews</b></TableCell>
                <TableCell><b>Total Sales</b></TableCell>
              </TableRow>
           </TableHead> 
        <TableBody>
         {
          tableData.map(row => (
            
              <TableRow 
                 key = {row.Clint_name}     
              >
                <TableCell>
                  <Stack direction="row" spacing={2} className="m-2 ">
                      <Avatar className='m-2 fs-2 w-40 h-40' > {row.avatar}</Avatar>
                    <div className='m-1 '>
                      <Link  >{row.Clint_name} </Link><br/>{row.email}
                      </div>
                  </Stack>
                
                </TableCell>
                <TableCell>{row.Mobile_number}</TableCell>
                <TableCell>{row.gender} </TableCell>
                <TableCell>{row.reviews}</TableCell>
                <TableCell>{row.total_sales}</TableCell>
              </TableRow>
            
          ))
         }
        </TableBody>
      </Table>
    </TableContainer>
  

            </div>
        </div>
    )
}

export default ClientList