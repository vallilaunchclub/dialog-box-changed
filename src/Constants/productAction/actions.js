import constant from './index'

export function getProduct() {
  return {
    type: constant.GET_PRODUCT
  }
}

export function getProductSuccess(data) {
  return {
    type: constant.GET_PRODUCT_SUCCESS,
    data
  }
}

export function getProductError(error) {
  return {
    type: constant.GET_PRODUCT_ERROR,
    error
  }
}

export function createProduct(data, cb) {
  return {
    type: constant.CREATE_PRODUCT,
    data,
    cb
  }
}

export function createProductSuccess(data) {
  return {
    type: constant.CREATE_PRODUCT_SUCCESS,
    data
  }
}

export function createProductError(error) {
  return {
    type: constant.CREATE_PRODUCT_ERROR,
    error
  }
}

export function getProductDropDown(data) {
  return {
    type: constant.GET_PRODUCT_DROP_DOWN,
    data
  }
}

export function getProductDropDownSuccess(data) {
  return {
    type: constant.GET_PRODUCT_DROP_DOWN_SUCCESS,
    data
  }
}

export function getProductDropDownError(error) {
  return {
    type: constant.GET_PRODUCT_DROP_DOWN_ERROR,
    error
  }
}

export function updateProduct(data, cb) {
  return {
    type: constant.UPDATE_PRODUCT,
    data,
    cb
  }
}

export function updateProductSuccess(data) {
  return {
    type: constant.UPDATE_PRODUCT_SUCCESS,
    data
  }
}

export function updateProductError(error) {
  return {
    type: constant.UPDATE_PRODUCT_ERROR,
    error
  }
}

export function deleteProduct(ids) {
  return {
    type: constant.DELETE_PRODUCT,
    ids
  }
}

export function deleteProductSuccess(data) {
  return {
    type: constant.DELETE_PRODUCT_SUCCESS,
    data
  }
}

export function deleteProductError(error) {
  return {
    type: constant.DELETE_PRODUCT_ERROR,
    error
  }
}

export function getProductDetails(id) {
  return {
    type: constant.GET_PRODUCT_DETAILS,
    id
  }
}

export function getProductDetailsSuccess(data) {
  return {
    type: constant.GET_PRODUCT_DETAILS_SUCCESS,
    data
  }
}

export function getProductDetailsError(error) {
  return {
    type: constant.GET_PRODUCT_DETAILS_ERROR,
    error
  }
}