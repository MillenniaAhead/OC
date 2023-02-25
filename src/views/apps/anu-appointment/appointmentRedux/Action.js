import { GET_APPOINTMENTS, POST_A_APPOINTMENT, DELETE_A_APPOINTMENT, Update_A_APPOINTMENT, ADD_A_TIP, SELECT_PAYMENT} from './constant'

export const GetAppointments = () => {
  return (dispatch) => {
    dispatch({
      type: GET_APPOINTMENTS,
      data: empty
    })
  }
}
export const PostAppointment = (appointmentDetail) => {
  return (dispatch) => {
    dispatch({
      type: POST_A_APPOINTMENT,
      data: appointmentDetail
    })
  }
}
export const DeleteAppointment = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_A_APPOINTMENT,
      data: id
    })
  }
}
export const UpdateAppointment = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: Update_A_APPOINTMENT,
      data: mydata
    })
  }
}

export const addTip = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: ADD_A_TIP,
      data: mydata
    })
  }
}
export const selectPayment = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_PAYMENT,
      data: mydata
    })
  }
}