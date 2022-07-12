import { takeEvery } from 'redux-saga/effects';
import { LOGIN_USER } from '../Constants/userAction';
import { loginUser } from './userSaga';
//Contact
import { GET_CONTACT, CREATE_CONTACT, GET_CONTACT_DROP_DOWN, GET_CONTACT_DETAILS, UPDATE_CONTACT, 
  DELETE_CONTACT } from '../Constants/contactAction';
import { getContact, createContact, getContactDropDown, getContactDetails, updateContact, deleteContact } from './contactSaga';
//Product
import { GET_PRODUCT, CREATE_PRODUCT, GET_PRODUCT_DROP_DOWN, UPDATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_DETAILS } from '../Constants/productAction';
import { getProduct, createProduct, getProductDropDown, updateProduct, deleteProduct, getProductDetails } from './productSaga';
//Deal
import { GET_DEAL, UPDATE_DEAL_ORDER, GET_DEAL_DROP_DOWN, CREATE_DEALS, DELETE_DEALS } from '../Constants/dealAction';
import { getDeal, updateDealOrder, getDealDropDown, createDeals, deleteDeals } from './dealSaga';

export default function* saga() { 
  yield takeEvery(LOGIN_USER, loginUser);
  //Contact
  yield takeEvery(GET_CONTACT, getContact);
  yield takeEvery(CREATE_CONTACT, createContact);
  yield takeEvery(GET_CONTACT_DROP_DOWN, getContactDropDown);
  yield takeEvery(GET_CONTACT_DETAILS, getContactDetails);
  yield takeEvery(UPDATE_CONTACT, updateContact);
  yield takeEvery(DELETE_CONTACT, deleteContact);
  //Product
  yield takeEvery(GET_PRODUCT, getProduct);
  yield takeEvery(CREATE_PRODUCT, createProduct);
  yield takeEvery(GET_PRODUCT_DROP_DOWN, getProductDropDown);
  yield takeEvery(UPDATE_PRODUCT, updateProduct);
  yield takeEvery(DELETE_PRODUCT, deleteProduct);
  yield takeEvery(GET_PRODUCT_DETAILS, getProductDetails);
  //Deal
  yield takeEvery(GET_DEAL, getDeal);
  yield takeEvery(UPDATE_DEAL_ORDER, updateDealOrder);
  yield takeEvery(GET_DEAL_DROP_DOWN, getDealDropDown);
  yield takeEvery(CREATE_DEALS, createDeals);
  yield takeEvery(DELETE_DEALS, deleteDeals);
  
}