
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Upper from './Upper/Upper'
import Uiux from './UIUX/Uiux'
import Resource3 from './Resource/Resource3'
import Uiuxdesigne from './Uiuxdesing/Uiuxdesigne'
import Resource6 from './Resource6/Resource6'
import Choices from './choice/Choices'
import Choice from './choice2/Choice'
import Edit from './edit/Edit'
import Hours from './hours/Hours'
import Invoice from './invoice/Invoice'
import Online from './online/Online'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/Upper' element={<Upper/>}/>
          <Route path='/Uiux' element={<Uiux/>}/>
          
          <Route path='/Resource3' element={<Resource3/>}/>
          <Route path='/Uiuxdesigne' element={<Uiuxdesigne/>}/>
          <Route path='/Resource6' element={<Resource6/>}/>
          <Route path='/Choices' element={<Choices/>}/>
          <Route path='/Choice' element={<Choice/>}/>
          <Route path='/Edit' element={<Edit/>}/>
          <Route path='/Hours' element={<Hours/>}/>
          <Route path='/Invoice' element={<Invoice/>}/>
          <Route path='/online' element={<Online/>}/>
        </Switch>
      </BrowserRouter>
      )
    
}
export default App
