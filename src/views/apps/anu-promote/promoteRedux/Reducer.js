import { GET_ALL_DEALS_DATA, STORE_A_DEAL_DATA, COLLECT_A_DEAL_DATA, DELETE_LAST_DATA, CLEAR_DEAL_DATA } from './constant'

const INI_DATA = {
    newDeal: []
  }
  
const PromoteReducer = (state = INI_DATA, action) => {
        switch (action.type) {
          case COLLECT_A_DEAL_DATA:
          return {
            ...state,
            newDeal : [...state.newDeal, ...action.data]
          }
          case DELETE_LAST_DATA:
          return {
            ...state,
          newDeal : state.newDeal.filter((element, index) => index !== state.newDeal.length - 1)
          }
          case CLEAR_DEAL_DATA:
          return {
            ...state,
            newDeal : []
          }
      default:
        return state
    }
  }
  
  export default PromoteReducer