import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const Froms = () => {
    return (
        <div>
             <div className='d-flex justify-content-between mx-3 mt-5 '>
            <div>
              <h2>Forms</h2> 
                <p className='fs-5'>Create and send forms to your client. <span className='text-success'>Learn more</span></p>
            </div>
            <div >
            
            
            <button type="button" class="btn btn-dark px-4 fw-normal fs-4 py-2">Create form</button>

            </div>
        </div>
        <div>
        <TableContainer style={{backgroundColor:'#F0F2F5'}} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Consultation form name</TableCell>
            <TableCell align="right">Services</TableCell>
            <TableCell align="right">Request</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
             
            >
              <TableCell component="th" scope="row">
              COVID 19
              </TableCell>
              <TableCell align="right">All services</TableCell>
              <TableCell align="right">Before appointments</TableCell>
              <TableCell align="right"><span className='bg-danger mt-2 text-center px-2 py-1'>INACTIVE</span></TableCell>
              <TableCell align="right"><span className='fw-bolder fs-4'>...</span></TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
    )
}

export default Froms