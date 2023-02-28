import React from 'react'
import { NavLink } from 'react-router-dom'
import { Table } from 'reactstrap'

const Froms = () => {
    return (
        <div>
             <div className='d-flex justify-content-between mx-3 mt-5 '>
            <div>
              <h2>Forms</h2> 
                <p className='fs-5'>Create and send forms to your client. <span className='text-success'>Learn more</span></p>
            </div>
            <div >
            
            
            <NavLink to='/sanclient/section'><button type="button" className="btn btn-dark px-4 fw-normal fs-4 py-2">Create form</button></NavLink>

            </div>
        </div>
        <div className='mt-2'>
        
    <Table responsive>
      <thead >
        <tr className='bg-white'>
          <th scope='col' className='text-nowrap'>
          Consultation form name
          </th>
          <th scope='col' className='text-nowrap'>
          Services
          </th>
          <th scope='col' className='text-nowrap'>
          Request
          </th>
          <th scope='col' className='text-nowrap'>
          Status
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td className='text-nowrap'>COVID 19</td>
          <td className='text-nowrap'>All services</td>
          <td className='text-nowrap'>Before appointments</td>
          <td className='text-nowrap'><span className='bg-danger mt-2 text-center px-2 text-white'>INACTIVE</span></td>
          <td className='text-nowrap'><span className='fw-bolder fs-4'>...</span></td>
          
        </tr>
        
      </tbody>
    </Table>
        </div>
        </div>
    )
}

export default Froms