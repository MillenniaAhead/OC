import { ADD_A_TIP } from './constant'

export const addTip = (mydata) => {
  return (dispatch) => {
    dispatch({
      type: ADD_A_TIP,
      data: mydata
    })
  }
}