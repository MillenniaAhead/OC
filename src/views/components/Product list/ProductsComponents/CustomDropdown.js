// ** Reactstrap Imports
import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'


const CustomDropdown = () => {
  return (
    <div className='demo-inline-spacing '>
   
      <UncontrolledButtonDropdown>
        <Button outline color='secondary'>
          Option
        </Button>
        <DropdownToggle outline className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
        <DropdownMenu end>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>

        
      </UncontrolledButtonDropdown>
          

    </div>
  )
}

export default CustomDropdown
