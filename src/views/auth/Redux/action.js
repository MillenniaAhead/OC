import { COLLECT_USER_DATA } from './constant'

export const CollectUserData = (mydata) => {
    return (dispatch) => {
      dispatch({
        type: COLLECT_USER_DATA,
        data: mydata
      })
    }
  }