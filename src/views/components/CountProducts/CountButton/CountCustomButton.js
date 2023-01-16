import React from 'react'


import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
export const CountCustomButton = () => {
  return (
    <div class ="mr-3">
         <UncontrolledButtonDropdown>
        <Button outline color='secondary'>
          Pause
        </Button>
        <DropdownToggle outline className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>Separated Link</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}
