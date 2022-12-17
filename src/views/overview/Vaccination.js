// ** Reactstrap Imports
import { Card, CardText, CardHeader, CardTitle, CardBody, Progress } from 'reactstrap'
const Vaccination = () => {
  return (
    <Card>
        <CardHeader className='d-flex justify-content-between'>
            <CardTitle className = "myTextColor">
                Vaccinations
            </CardTitle>
            
        </CardHeader>
        
        <CardBody>
            <CardText className = "overview_vaccination_cardtext">
            The number of participants who have recieved first and second dose of COVID -19 Vaccination.
            </CardText>
            <div className='demo-vertical-spacing' style = {{marginLeft:"20px"}}>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>First Dose</span>
                        <span>(82.5%)</span>
                    </div>
                    <Progress value='82.5'/>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>Second Dose</span>
                        <span>(82.5%)</span>
                    </div>
                    <Progress value={40} />
                </div>
                
            </div>
        </CardBody>
  </Card>
  )
}
export default Vaccination
