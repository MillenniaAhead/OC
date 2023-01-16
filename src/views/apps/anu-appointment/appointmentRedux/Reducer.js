import { GET_APPOINTMENTS, POST_A_APPOINTMENT, DELETE_A_APPOINTMENT, Update_A_APPOINTMENT, ADD_A_TIP, SELECT_PAYMENT} from './constant'

const INI_DATA = {
    appointments: [],
    tips:[],
    payments:[]
  }
  
const AppointmentReducer = (state = INI_DATA, action) => {
    switch (action.type) {
      case GET_APPOINTMENTS:
        return {
          ...state,
          appointments: [action.data]
        }
      case POST_A_APPOINTMENT:
        return {
          ...state,
          appointments: [...state.appointments, action.data]
        }
      case DELETE_A_APPOINTMENT:
        return {
          ...state,
          appointments: [state.appointments.filter((appointment) => appointment.id !== action.data)]
        }
      case Update_A_APPOINTMENT:
        return {
          ...state,
          appointments: [state.appointments.filter((appointment)  => appointment.id !== action.data.id)]
        }
      case ADD_A_TIP:
        return {
          ...state,
          tips: [action.data]
        }
      case SELECT_PAYMENT:
        return {
          ...state,
          payments: [action.data]
        }
       default:
        return state
    }
  }
  
  export default AppointmentReducer