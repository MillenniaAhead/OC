import React, {  useState, useEffect } from 'react'
import {Table,  Card, CardImg, CardBody, Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../CSS/ClientList.css'
// ** Styles
import '@styles/react/apps/app-users.scss'
import client from '../../../images/ClientList/client.jpg'

import FirstName from '../../../images/ClientList/FirstName.jpg'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import ClientFilter from './ClientFilter'


const ClientList = () => { 
   
const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/sanclients/client')
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
 
    return (
        <div>
            <div>
            <div className='d-flex justify-content-between mx-3 mb-3 mt-5 '>
            <div>
                <div className='d-flex align-items-center'><h2>Clients list</h2> <p className='three '>3</p></div>
                <p className='fs-5'>View, add, edit and delete your client’s details. Learn more</p>
            </div>
            <div className='d-flex align-items-start'>
    <UncontrolledButtonDropdown className='mt-2'>
        <DropdownToggle color='white'  caret>
          Option
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown></UncontrolledButtonDropdown>
            
    <NavLink to="/sanclient/addClient">
    <button type="button" style={{height:"60px", width:"150px", marginTop:'8px'}} className="btn btn-dark" >Add client</button>
    </NavLink>

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
                   
              
                <Card style={{ width: '215px', margin:'75px auto 0px' }}>
        <CardImg top src={client} alt='card2' />
        <CardBody>
          
        </CardBody>
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
                          <ClientFilter/>
                           </div>
                           <div style={{width:'225px', height:"48px"}}  className=' bg-white d-flex justify-content-around align-items-center border-0 rounded-pill me-3'>
                            <h6 className='fs-5 mt-1'>First name(A-Z)</h6> 
                            <img style={{width:"24px", height:'24px'}} src={FirstName} alt="" />
                           </div>

            </div>

            <div  className='mt-3 mx-4'>
            
    <Table responsive>
      <thead >
        <tr className='bg-white'>
          <th scope='col' className='text-nowrap'>
          Clint name
          </th>
          <th scope='col' className='text-nowrap'>
          Mobile number
          </th>
          <th scope='col' className='text-nowrap'>
          Gender
          </th>
          <th scope='col' className='text-nowrap'>
          Reviews
          </th>
          <th scope='col' className='text-nowrap'>
          Total Sales
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          
        </tr>
      </thead>
      <tbody>
      {
          data.map(row => (
            
        <NavLink to=''>
          <tr  key = {row._id}>
         
         <td className='text-nowrap'><div  spacing={2} className=" d-flex">
                     <div className=' fs-2 w-40 h-40' > {row.avatar}</div>
                   <div className='ms-1 '>
                     <Link to="#" >{row.firstName ? row.firstName : "-"} {row.lastName} </Link><br/>{row.email}
                     </div>
                 </div></td>
         <td className='text-nowrap'>{row.phone}</td>
         <td className='text-nowrap'>{row.gender}</td>
         <td className='text-nowrap'>{row.reviews}</td>
         <td className='text-nowrap'>{row.total_sales}</td>
         
       </tr>
        </NavLink>
        ))
      }
      </tbody>
    </Table>
  
  <div >
      
      
    </div>
            </div>
        </div>
    )
}

export default ClientList