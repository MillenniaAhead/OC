import React from 'react'
import {Table,  Card, CardImg, CardBody, Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import '../CSS/ClientList.css'
// ** Styles
import '@styles/react/apps/app-users.scss'
import client from '../../../images/ClientList/client.jpg'
import filter from '../../../images/ClientList/filers.jpg'
import FirstName from '../../../images/ClientList/FirstName.jpg'
import { Link } from 'react-router-dom'


const ClientList = () => {
  const tableData = [
    {
      avatar: "J",
      Clint_name: "Jack Doe",
      email: "ckeam0@bing.com",
      Mobile_number:  '-',
      gender: "Male",
      reviews:"-",
      total_sales: "-"
    }, {
      avatar: "M",
      Clint_name: "Mack Doe",
     email: "ngreveson1@rambler.ru",
      Mobile_number:'-',
     gender: "Male",
      reviews: "-",
     total_sales: "-"
    }
]
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
          tableData.map(row => (
            
        <tr  key = {row.Clint_name}>
         
          <td className='text-nowrap'><div  spacing={2} className=" d-flex">
                      <div className=' fs-2 w-40 h-40' > {row.avatar}</div>
                    <div className='ms-1 '>
                      <Link  >{row.Clint_name} </Link><br/>{row.email}
                      </div>
                  </div></td>
          <td className='text-nowrap'>{row.Mobile_number}</td>
          <td className='text-nowrap'>{row.gender}</td>
          <td className='text-nowrap'>{row.reviews}</td>
          <td className='text-nowrap'>{row.total_sales}</td>
          
        </tr>
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