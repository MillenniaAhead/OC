// ** Reactstrap Imports
import {Form,
    Input,
    Button, 
    InputGroup, 
    InputGroupText, 
    Card, 
    Row, Col, 
    CardHeader, CardTitle, CardBody 
 } from 'reactstrap'
 // ** Custom Components
 import { Search} from 'react-feather'
 import Avatar from '@components/avatar'
 const AdminForm = () => {
     const data = [
         {
           name:"Anna",
           img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default
         },
         {
             name:"Mike",
           img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default
         },
         {
             name:"Shazia",
           img: require('@src/assets/images/portrait/small/avatar-s-10.jpg').default
         },
         {
             name:"Shazia",
           img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default
         }
       ]
       const renderAdmins = () => {
         return data.map((item, index) => {
             if (index < 3) {
                 return (
                     <Col lg='2' className = "text-center" key = {index}>
                         <Avatar img={item.img} imgWidth='70' imgHeight='70' className = "mar_b-10"/>
                         <br/>
                         {item.name}
                     </Col>
                 )
             }
         })
       }
   return (
     <Card>
         <CardHeader className='d-flex justify-content-between'>
             <CardTitle className = "myTextColor">
                 Admins
             </CardTitle>
         </CardHeader>
         
         <CardBody>
             <Row style = {{marginBottom:"30px"}}>
                 {renderAdmins()}
                 <Col lg='2' className = "text-center">
                     <img src= {require('@src/assets/images/icons/overview_10.png').default} width='70' height="70" className = "mar_b-10"/>
                     <br/>
                 </Col>
                 <Col lg='2' className = "text-center">
                     <img src= {require('@src/assets/images/icons/overview_addadmin.png').default} width='70' height="70" className = "mar_b-10"/>
                     <br/>Add Admin
                 </Col>
             </Row>
             <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
             <InputGroup className='input-group-merge'>
               <Input onChange={e => onChange(e)} placeholder='Type to Search Members' />
               <InputGroupText className = "mar_r-10">
                 <Search size={14} />
               </InputGroupText>
               <Button color="info" style = {{width:"200px", marginRight:"20px"}}>
                     Search
               </Button>
             </InputGroup>
           </Form>
         </CardBody>
   </Card>
   )
 }
 export default AdminForm
 