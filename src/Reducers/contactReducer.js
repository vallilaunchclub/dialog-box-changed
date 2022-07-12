import contactConstant from '../Constants/contactAction';

const initialState = {
  contactData: {},
  stages: [],
  sources: [],
  companies: [],
  contactDetails: {}
}

export default function contactReducer (state = initialState, action) {
  switch (action.type) {
    case contactConstant.GET_CONTACT_SUCCESS:
      console.log("action.response", action.response);
      return {
        ...state,
        contactData: action.response.table
      }
    case contactConstant.GET_CONTACT_DROP_DOWN_SUCCESS:
      return {
        ...state,
        stages: [{id: '', name: 'Select'}, ...action.response.stage],
        sources: [{id: '', name: 'Select'}, ...action.response.source],
        companies: [{id: '', name: 'Select'}, ...action.response.company]
      }
    case contactConstant.GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contactDetails: action.response.data ? action.response.data : {},
      }
    default:
      return state
  }
}