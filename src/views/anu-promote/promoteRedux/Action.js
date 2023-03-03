import { COLLECT_A_DEAL_DATA, DELETE_LAST_DATA, CLEAR_DEAL_DATA } from './constant'


export const CollectDealData = (mydata) => {
  return (dispatch) => {
    dispatch({
      type:COLLECT_A_DEAL_DATA,
      data:mydata
    })
  }
}

export const DeleteLastData = () => {
  return (dispatch) => {
    dispatch({
      type:DELETE_LAST_DATA,
      data:""
    })
  }
}
export const ClearDealData = () => {
  return (dispatch) => {
    dispatch({
      type:CLEAR_DEAL_DATA,
      data:""
    })
  }
}