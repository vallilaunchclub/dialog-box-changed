import axios from "axios";

export default class ProductService {
  static getProduct() {
    return axios({
      method: "post",
      url: `product/list`,
      data: {
        "select": ["id","name", "productCode", "skuNumber"],
        "provider": "PRODUCT_LIST",
        "sort": [{
          "field":"name",
          "type":"asc"
        }],
        "start":0,
        "count":10,
        "limit": 10,
        "fetchHits":true,
        "fetchStruct":true
      }
    });
  }

  static createProduct(data) {
    return axios({
      method: "post",
      url: `product/mgmt`,
      data: {
        type: "create",
        data
      }
    });
  }

  static getCategory(orgId) {
    return axios({
      method: "post",
      url: `product/category/mgmt`,
      data: {
        "type":"list",
        "data": {
          "orgId": orgId,
        }
      }
    });
  }

  static updateProduct(data) {
    return axios({
      method: "post",
      url: `product/mgmt`,
      data: {
        type: "update",
        data
      }
    });
  }

  static deleteProduct(ids) {
    return axios({
      method: "post",
      url: `product/mgmt`,
      data: {
        type: "bDelete",
        data: {
          "orgId":1,
          "ids" : ids
        }
      }
    });
  }

  static getProductDetails(id) {
    return axios({
      method: "post",
      url: `/product/mgmt`,
      data: {
        "type":"get",
        "data": {
          "orgId" : 1,
          "id" : id
        }
      }
    });
  }
}