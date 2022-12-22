const MY_TYPE = "Add new appointment"

export const addNewAppointment = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: MY_TYPE,
      data: mydata
    })
  }
}