const INI_DATA = {
    myDeals: []
  }
  
const MyReducer = (state = INI_DATA, action) => {
    switch (action.type) {
      case "add a deal":
        return {
          ...state,
          myDeals: [...state.myDeals, action.data]
        }
      default:
        return state
    }
  }
  
  export default MyReducer