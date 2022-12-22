const INI_DATA = {
    appointment: []
  }
  
const AppointmentReducer = (state = INI_DATA, action) => {
    switch (action.type) {
      case "Add new appointment":
        return {
          ...state,
          appointment: [...state.appointment, action.data]
        }
      default:
        return state
    }
  }
  
  export default AppointmentReducer