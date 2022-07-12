import axios from "axios";

export default class DealService {
  static getDeal() {
    return axios({
      method: "post",
      url: `/deal/mgmt`,
      data: {
        "type":"getPipeLine",
        "data":{
           "pipelineId":1,
           "orgId":1
        }
     }
    });
  }
  
  static getDealList() {
    return axios({
      method: "post",
      url: `/deal/list`,
      data: {
        "select":[
           "id",
           "title",
           "expectedCloseDate",
           "value",
           "stage"
        ],
        "provider":"DEAL_LIST",
        "sort":[
           {
              "field":"id",
              "type":"desc"
           }
        ],
        "criteria":[
           
        ],
        "limit": {
          "start":1,
          "count":100
        },
        "fetchHits":true,
        "fetchStruct":true
     }
    });
  }

  static updateDealOrder(data) {
    return axios({
      method: "post",
      url: `/deal/mgmt`,
      data: {
        "code": 0,
        "type":"orderChange",
        "data": data
      }
    });
  }

  static getOwnerDropDown(id) {
    return axios({
      method: "post",
      url: `/contact/mgmt`,
      data: {
        "type":"dropdown",
        "data": {
          "orgId":1
        }
      }
    });
  }

  static getCompanyDropDown(id) {
    return axios({
      method: "post",
      url: `/contact/company/mgmt`,
      data: {
        "type":"list",
        "data": {
          "orgId": id
        }
      }
    });
  }

  static getStageDropDown(id) {
    return axios({
      method: "post",
      url: `/pipeline/stage/mgmt`,
      data: {
        "type":"dropdown",
        "data": {
          "orgId": 1
        }
      }
    });
  }

  static createDeals(data) {
    return axios({
      method: "post",
      url: `/deal/mgmt`,
      data: data
    });
  }

  static deleteDeals(ids) {
    return axios({
      method: "post",
      url: `/deal/mgmt`,
      data: {
        "type":"bDelete",
        "data":{
           "ids": ids,
           "orgId":1
        }
     }
    });
  }


}