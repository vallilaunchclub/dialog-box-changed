import axios from "axios";

export default class ContactService {
  static getContact() {
    return axios({
      method: "post",
      url: `contact/list`,
      data: {
        "select": ["id","first_name", "last_name", "email", "email_type", "company", "mobile","mobile_type", "source", "stage"],
        "provider": "CONTACT_LIST",
        "sort": [{
          "field":"id",
          "type":"asc"
        }],
        "criteria": [],
        "start":0,
        "count":100,
        "limit": 100,
        "fetchHits":true,
        "fetchStruct":true
      }
    });
  }

  static createContact(data) {
    return axios({
      method: "post",
      url: `contact/mgmt`,
      data: {
        type: "create",
        data
      }
    });
  }

  static getSourceDropDown(orgId) {
    return axios({
      method: "post",
      url: `/contact/source/mgmt`,
      data: {
        "type":"list",
        "data" : {
          "orgId": orgId
        }
      }
    });
  }

  static getStageDropDown(orgId) {
    return axios({
      method: "post",
      url: `contact/stage/mgmt`,
      data: {
        "type":"list",
        "data" : {
          "orgId": orgId
        }
      }
    });
  }

  static getCompanyDropDown(orgId) {
    return axios({
      method: "post",
      url: `/contact/company/mgmt`,
      data: {
        "type":"list",
        "data" : {
          "orgId": orgId
        }
      }
    });
  }

  static getContactDetails(id) {
    return axios({
      method: "post",
      url: `/contact/mgmt`,
      data: {
        "type":"get",
        "data": {
          "orgId" : 1,
          "id" : id
        }
      }
    });
  }

  static updateContact(data) {
    return axios({
      method: "post",
      url: `contact/mgmt`,
      data: {
        type: "update",
        data
      }
    });
  }

  static deleteContact(ids) {
    return axios({
      method: "post",
      url: `contact/mgmt`,
      data: {
        type: "bDelete",
        data: {
          "orgId":1,
          "ids" : ids
        }
      }
    });
  }
}