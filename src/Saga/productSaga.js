import productConstant from '../Constants/productAction';
import { put, call } from 'redux-saga/effects'
import ProductService from  '../Service/product.service';

export function* getProduct() {
  try {
    const response = yield call(ProductService.getProduct)
    yield put({ type: productConstant.GET_PRODUCT_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.GET_PRODUCT_ERROR, e })
  }
}

export function* createProduct(action) {
  try {
    const { data, cb } = action;
    const response = yield call(ProductService.createProduct, data)
    yield call(getProduct);
    cb();
    // yield put({ type: productConstant.CREATE_PRODUCT_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.CREATE_PRODUCT_ERROR, e })
  }
}

export function* getProductDropDown(action) {
  const { data } = action;
  try {
    const categoryResponse = yield call(ProductService.getCategory, data)
    const response = { category: categoryResponse }
    yield put({ type: productConstant.GET_PRODUCT_DROP_DOWN_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.GET_PRODUCT_DROP_DOWN_ERROR, e })
  }
}

export function* updateProduct(action) {
  try {
    const { data, cb } = action;
    const response = yield call(ProductService.updateProduct, data)
    yield call(getProduct);
    cb();
    // yield put({ type: productConstant.CREATE_PRODUCT_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.CREATE_PRODUCT_ERROR, e })
  }
}

export function* deleteProduct(action) {
  try {
    const { ids } = action;
    const response = yield call(ProductService.deleteProduct, ids)
    yield call(getProduct);
    // yield put({ type: productConstant.CREATE_PRODUCT_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.CREATE_PRODUCT_ERROR, e })
  }
}

export function* getProductDetails(action) {
  try {
    console.log("id::::::", action.id);
    const { id } = action;
    const response = yield call(ProductService.getProductDetails, id);
    yield put({ type: productConstant.GET_PRODUCT_DETAILS_SUCCESS, response })
  } catch (e) {
    yield put({ type: productConstant.GET_PRODUCT_DETAILS_ERROR, e })
  }
}