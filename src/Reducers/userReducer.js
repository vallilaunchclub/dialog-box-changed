import userConstant from '../Constants/userAction';

const initialState = {
  userData: {}
}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case userConstant.LOGIN_USER_SUCCESS:
      return {
        ...state,
        userData: action.data
      }
    default:
      return state
  }
}