import React from 'react'
import { Table } from 'reactstrap'


const SaleInvoice = () => {
    return (
        <div className='mx-5 mt-5'>
             <div >
                <p className='fs-5'>Settings . Invoice sequencing</p>
                <h1 className='text-dark'>Invoice sequencing</h1>
            </div>
            <div className='mx-2 mt-3'>
            <Table responsive>
      <thead >
        <tr className='bg-white'>
          <th scope='col' className='text-nowrap'>
          Location Name
          </th>
          <th scope='col' className='text-nowrap'>
          Invoice No. Prefix
          </th>
          <th scope='col' className='text-nowrap'>
          Next Invoice Number
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          <th scope='col' className='text-nowrap'>
            
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td className='text-nowrap'>UIUX Designer</td>
          <td className='text-nowrap'>-</td>
          <td className='text-nowrap'>4</td>
          <td className='text-nowrap'></td>
          <td className='text-nowrap'></td>
          
        </tr>
        
      </tbody>
    </Table>
            </div>
        </div>
    )
}

export default SaleInvoice