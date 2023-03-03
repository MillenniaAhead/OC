import { ADD_A_TIP } from './constant'

const INI_DATA = {
    
  }
  
const AppointmentReducer = (state = INI_DATA, action) => {
    switch (action.type) {
      case ADD_A_TIP:
        return {
          ...state,
          tips: [action.data]
        }
       default:
        return state
    }
  }
  
  export default AppointmentReducer