import { GET_ALL_DEALS_DATA, STORE_A_DEAL_DATA, COLLECT_A_DEAL_DATA, DELETE_LAST_DATA, CLEAR_DEAL_DATA } from './constant'

const INI_DATA = {
    newDeal: [],
    successDeals: []
  }
  
const PromoteReducer = (state = INI_DATA, action) => {
        switch (action.type) {
          case GET_ALL_DEALS_DATA:
          return {
            ...state,
            successDeals: [action.data]
          }
          case STORE_A_DEAL_DATA:
          return {
            ...state,
            successDeals: [...state.successDeals, [...state.newDeal, action.data]],
            newDeal : []
          }
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