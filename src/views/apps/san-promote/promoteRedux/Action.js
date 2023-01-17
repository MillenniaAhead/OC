import { GET_ALL_DEALS_DATA, STORE_A_DEAL_DATA, COLLECT_A_DEAL_DATA, DELETE_LAST_DATA, CLEAR_DEAL_DATA } from './constant'


export const GetAllDeals = (mydata) => {
  return (dispatch) => {
    dispatch({
      type:GET_ALL_DEALS_DATA,
      data:mydata
    })
  }
}
export const StoreDealData = (mydata) => {
  return (dispatch) => {
    dispatch({
      type:STORE_A_DEAL_DATA,
      data:mydata
    })
  }
}
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