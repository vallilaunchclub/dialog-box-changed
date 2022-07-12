import productConstant from '../Constants/productAction';

const initialState = {
  productData: {},
  category: [{id: '', name: 'Select'}],
  productDetails: {}
}

export default function productReducer (state = initialState, action) {
  switch (action.type) {
    case productConstant.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.response.table
      }
    case productConstant.GET_PRODUCT_DROP_DOWN_SUCCESS:
      return {
        ...state,
        category: [{id: '', name: 'Select'}, ...action.response.category]
      }
    case productConstant.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.response.data ? action.response.data : {},
      }
    default:
      return state
  }
}