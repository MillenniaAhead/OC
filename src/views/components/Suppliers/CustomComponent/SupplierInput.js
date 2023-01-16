import { useState } from 'react'

import { Row, Col, Input, InputGroup, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const SupplierInput = () => {
  const [dropdownIcon, setDropdownIcon] = useState(false)

  const toggleDropdownIcon = () => {
    setDropdownIcon(!dropdownIcon)
  }
 
  return (
    <Row>
         <Col md='12' sm='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
            <DropdownToggle color='success' caret outline>
             91+
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>Action 1</DropdownItem>
              <DropdownItem className='w-100' disabled>
                Action
              </DropdownItem>
              <DropdownItem className='w-100' divider />
              <DropdownItem className='w-100'>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
         
        </InputGroup>
      </Col>
    </Row>
  )
}

export default SupplierInput
