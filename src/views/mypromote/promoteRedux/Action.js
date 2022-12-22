const MY_TYPE = "add a deal"

export const AddDeal = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: MY_TYPE,
      data: mydata
    })
  }
}