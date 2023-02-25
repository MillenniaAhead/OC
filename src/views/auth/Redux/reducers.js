import { COLLECT_USER_DATA } from './constant'

const INI_DATA = {
    UserData: []
  }

  const UserReducer = (state = INI_DATA, action) => {
    switch (action.type) {
      case COLLECT_USER_DATA:
      return {
        ...state,
        UserData : [...state.UserData, ...action.data]
      }
      default : return state
    }
}

export default UserReducer
