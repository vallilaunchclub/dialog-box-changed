import constant from './index'

export function getDeal(listType) {
  return {
    type: constant.GET_DEAL,
    listType
  }
}

export function getDealSuccess(data) {
  return {
    type: constant.GET_DEAL_SUCCESS,
    data
  }
}

export function getDealError(error) {
  return {
    type: constant.GET_DEAL_ERROR,
    error
  }
}

export function updateDealOrder(data) {
  return {
    type: constant.UPDATE_DEAL_ORDER,
    data
  }
}

export function updateDealOrderSuccess(data) {
  return {
    type: constant.UPDATE_DEAL_ORDER_SUCCESS,
    data
  }
}

export function updateDealOrderError(error) {
  return {
    type: constant.UPDATE_DEAL_ORDER_ERROR,
    error
  }
}

export function getDealDropDown(id) {
  return {
    type: constant.GET_DEAL_DROP_DOWN,
    id
  }
}

export function getDealDropDownSuccess(data) {
  return {
    type: constant.GET_DEAL_DROP_DOWN_SUCCESS,
    data
  }
}

export function getDealDropDownError(error) {
  return {
    type: constant.GET_DEAL_DROP_DOWN_ERROR,
    error
  }
}

export function createDeals(data, listType, cb) {
  return {
    type: constant.CREATE_DEALS,
    data, 
    listType,
    cb
  }
}

export function createDealsSuccess(data) {
  return {
    type: constant.CREATE_DEALS_SUCCESS,
    data
  }
}

export function createDealsError(error) {
  return {
    type: constant.CREATE_DEALS_ERROR,
    error
  }
}

export function deleteDeals(ids) {
  return {
    type: constant.DELETE_DEALS,
    ids, 
  }
}

export function deleteDealsSuccess(data) {
  return {
    type: constant.DELETE_DEALS_SUCCESS,
    data
  }
}

export function deleteDealsError(error) {
  return {
    type: constant.DELETE_DEALS_ERROR,
    error
  }
}




