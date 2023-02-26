import React from 'react'
import { InputGroup, Input, InputGroupText, Button  } from 'reactstrap'
import { Search } from 'react-feather'
const CountminLayout = () => {
  return (
    <div className="container bg-#D9D9D9 border-1">
        <div className="row">
            <div className="col-6 mt-2">
            <InputGroup className='input-group-merge mb-2 ' >
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
     
            </div>
        <div>
                  <div className="d-flex  justify-content-start  gap-2 ">
                 <div className="">
                 <Button color='relief-success' className='round'>All</Button>
                </div>
                <Button.Ripple className='round text-success'  outline>
                     Uncounted (0)
                 </Button.Ripple>
                <Button.Ripple className='round text-success'  outline>
                Counted (0)
                 </Button.Ripple>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <div>Product name</div>
                 <div className="d-flex gap-1">
                     <div>Expected</div>
                     <div>Counted</div>
                 </div>
            </div>
            <hr></hr>
        </div>
        </div>
       
    </div>
  )
}

export default CountminLayout