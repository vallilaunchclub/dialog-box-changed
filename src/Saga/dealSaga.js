import dealConstant from '../Constants/dealAction';
import { put, call } from 'redux-saga/effects'
import DealService from  '../Service/deal.service';

export function* getDeal(action) {
  const { listType } = action;
  try {
    if(listType === 'Kanban') {
      const response = yield call(DealService.getDeal)
      yield put({ type: dealConstant.GET_DEAL_SUCCESS, response })
    } else {
      const response = yield call(DealService.getDealList);
      console.log("response>>>>>.", response);
      yield put({ type: dealConstant.GET_DEAL_LIST_SUCCESS, response })
    }
  } catch (e) {
    yield put({ type: dealConstant.GET_DEAL_ERROR, e })
  }
}

export function* updateDealOrder(action) {
  const { data } = action;
  try {
    yield call(DealService.updateDealOrder, data)
    console.log()
    yield call(getDeal, {listType:'Kanban'});
    // yield put({ type: dealConstant.UPDATE_DEAL_ORDER_SUCCESS, response })
  } catch (e) {
    yield put({ type: dealConstant.UPDATE_DEAL_ORDER_ERROR, e })
  }
}

export function* getDealDropDown(action) {
  const { id } = action;
  try {
    const ownerResponse = yield call(DealService.getOwnerDropDown, id)
    const companyResponse =  yield call(DealService.getCompanyDropDown, id)
    const stageResponse =  yield call(DealService.getStageDropDown, id)
    console.log(">>>>>>>ownerResponse", ownerResponse);
    console.log(">>>>>>>companyResponse", companyResponse);
    const response = { ownerResponse: ownerResponse.list, companyResponse: companyResponse.data, stageResponse: stageResponse.list };
    yield put({ type: dealConstant.GET_DEAL_DROP_DOWN_SUCCESS, response })
  } catch (e) {
    yield put({ type: dealConstant.GET_DEAL_DROP_DOWN_ERROR, e })
  }
}

export function* createDeals(action) {
  const { data, listType, cb } = action;
  try {
    yield call(DealService.createDeals, data)
    yield call(getDeal, {listType: listType});
    cb();
    // yield put({ type: dealConstant.CREATE_DEALS_SUCCESS, response })
  } catch (e) {
    yield put({ type: dealConstant.CREATE_DEALS_ERROR, e })
  }
}

export function* deleteDeals(action) {
  const { ids } = action;
  try {
    yield call(DealService.deleteDeals, ids)
    yield call(getDeal, {listType: 'List'});
    // yield put({ type: dealConstant.CREATE_DEALS_SUCCESS, response })
  } catch (e) {
    yield put({ type: dealConstant.CREATE_DEALS_ERROR, e })
  }
}