import { useState } from 'react'
import {   Card, CardBody, CardHeader,  Form, FormGroup, Input,  Label, InputGroup,  Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'

const ContactInfo = () => {
    const [dropdownIcon, setDropdownIcon] = useState(false)

  const toggleDropdownIcon = () => {
    setDropdownIcon(!dropdownIcon)
  }
 
  return (
    <div>
         <Card
         className="my-2"
         color="secondary"
         outline
           
         >
            <CardHeader><h3>Contact info</h3></CardHeader>
            <CardBody>
                <Form>
                     <FormGroup>
                        <Label for="firstname"> First name</Label>
                        <Input type="text" name="firstname" id="firstname"  placeholder='e.g. John'/>
                     </FormGroup>
                     <FormGroup>
                        <Label for="lastname"> Last name</Label>
                        <Input type="text" name="lastname" id="lastname"  placeholder='e.g. Doe'/>
                     </FormGroup> 

                     <Label for="phone"> Phone Number</Label>  
                     <InputGroup>
                     
          <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
            <DropdownToggle  caret outline>
             91+
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>Action 1</DropdownItem>
              <DropdownItem className='w-100'>Action </DropdownItem>
              
              
            </DropdownMenu>
          </Dropdown>
          <Input />
         
                     </InputGroup>                  

                     <Label for="telephone"> Telephone</Label>  
                     <InputGroup>
                                    
                        <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
                            <DropdownToggle  caret outline>
                            91+
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem className='w-100'>Action 1</DropdownItem>
                            <DropdownItem className='w-100'>Action </DropdownItem>
                            
                            
                            </DropdownMenu>
                          </Dropdown>
                        <Input />
         
                     </InputGroup>                  
                     <FormGroup>
                        <Label for="email"> Email</Label>
                        <Input type="email" name="femail" id="email"  placeholder='mail@example.com'/>
                     </FormGroup> 
                     <FormGroup>
                        <Label for="email"> Website</Label>
                        <Input type="text" name="website" id="website"  placeholder='www.google.com'/>
                     </FormGroup> 
                                          
                </Form>
            </CardBody> 
         </Card>

    </div>
  )
}

export default ContactInfo