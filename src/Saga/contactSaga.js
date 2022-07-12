import contactConstant from '../Constants/contactAction';
import { put, call } from 'redux-saga/effects'
import ContactService from  '../Service/contact.service';

export function* getContact() {
  try {
    const response = yield call(ContactService.getContact)
    yield put({ type: contactConstant.GET_CONTACT_SUCCESS, response })
  } catch (e) {
    yield put({ type: contactConstant.GET_CONTACT_ERROR, e })
  }
}

export function* createContact(action) {
  try {
    const { data, cb } = action;
    const response = yield call(ContactService.createContact, data)
    yield call(getContact);
    cb();
    // yield put({ type: contactConstant.CREATE_CONTACT_SUCCESS, response })
  } catch (e) {
    yield put({ type: contactConstant.CREATE_CONTACT_ERROR, e })
  }
}

export function* getContactDropDown(action) {
  try {
    const { data: orgId } = action;
    const sourceResponse = yield call(ContactService.getSourceDropDown, orgId)
    const stageResponse = yield call(ContactService.getStageDropDown, orgId)
    const companyResponse = yield call(ContactService.getCompanyDropDown, orgId)
    yield call(getContact);
    const response = { stage: stageResponse , source: sourceResponse, company: companyResponse };
    yield put({ type: contactConstant.GET_CONTACT_DROP_DOWN_SUCCESS, response });
  } catch (e) {
    yield put({ type: contactConstant.CREATE_CONTACT_ERROR, e })
  }
}

export function* getContactDetails(action) {
  try {
    console.log("id::::::", action.id);
    const { id } = action;
    const response = yield call(ContactService.getContactDetails, id);
    console.log("main>>>>>>", response);
    yield put({ type: contactConstant.GET_CONTACT_DETAILS_SUCCESS, response })
  } catch (e) {
    yield put({ type: contactConstant.GET_CONTACT_DETAILS_ERROR, e })
  }
}

export function* updateContact(action) {
  try {
    const { data, cb } = action;
    const response = yield call(ContactService.updateContact, data)
    yield call(getContact);
    cb();
    // yield put({ type: contactConstant.CREATE_CONTACT_SUCCESS, response })
  } catch (e) {
    yield put({ type: contactConstant.CREATE_CONTACT_ERROR, e })
  }
}

export function* deleteContact(action) {
  try {
    const { ids } = action;
    const response = yield call(ContactService.deleteContact, ids)
    yield call(getContact);
    // yield put({ type: contactConstant.CREATE_CONTACT_SUCCESS, response })
  } catch (e) {
    yield put({ type: contactConstant.CREATE_CONTACT_ERROR, e })
  }
}