import dealConstant from '../Constants/dealAction';

const initialState = {
  dealData: [],
  dealListData: [],
  ownerDropDown: [],
  companyDropDown: [],
  stageDropDown: []
}

export default function dealReducer (state = initialState, action) {
  switch (action.type) {
    case dealConstant.GET_DEAL_SUCCESS:
      return {
        ...state,
        dealData: action.response.data.stages
      }
    case dealConstant.GET_DEAL_LIST_SUCCESS:
      return {
        ...state,
        dealListData: action.response.table
      }
    case dealConstant.GET_DEAL_DROP_DOWN_SUCCESS:
      return {
        ...state,
        ownerDropDown: [{id: '', name: 'Select'}, ...action.response.ownerResponse],
        companyDropDown: [{id: '', name: 'Select'}, ...action.response.companyResponse],
        stageDropDown: [{id: '', name: 'Select'}, ...action.response.stageResponse]
      }
    default:
      return state
  }
}