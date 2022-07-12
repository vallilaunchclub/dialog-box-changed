import constant from './index'

export function getContact() {
  return {
    type: constant.GET_CONTACT
  }
}

export function getContactSuccess(data) {
  return {
    type: constant.GET_CONTACT_SUCCESS,
    data
  }
}

export function getContactError(error) {
  return {
    type: constant.GET_CONTACT_ERROR,
    error
  }
}

export function createContact(data, cb) {
  return {
    type: constant.CREATE_CONTACT,
    data,
    cb
  }
}

export function createContactSuccess(data) {
  return {
    type: constant.CREATE_CONTACT_SUCCESS,
    data
  }
}

export function createContactError(error) {
  return {
    type: constant.CREATE_CONTACT_ERROR,
    error
  }
}

export function getContactDropDown(data) {
  return {
    type: constant.GET_CONTACT_DROP_DOWN,
    data
  }
}

export function getContactDropDownSuccess(data) {
  return {
    type: constant.GET_CONTACT_DROP_DOWN_SUCCESS,
    data
  }
}

export function getContactDropDownError(error) {
  return {
    type: constant.GET_CONTACT_DROP_DOWN_ERROR,
    error
  }
}

export function getContactDetails(id) {
  return {
    type: constant.GET_CONTACT_DETAILS,
    id
  }
}

export function getContactDetailsSuccess(data) {
  return {
    type: constant.GET_CONTACT_DETAILS_SUCCESS,
    data
  }
}

export function getContactDetailsError(error) {
  return {
    type: constant.GET_CONTACT_DETAILS_ERROR,
    error
  }
}

export function updateContact(data, cb) {
  return {
    type: constant.UPDATE_CONTACT,
    data,
    cb
  }
}

export function updateContactSuccess(data) {
  return {
    type: constant.UPDATE_CONTACT_SUCCESS,
    data
  }
}

export function updateContactError(error) {
  return {
    type: constant.UPDATE_CONTACT_ERROR,
    error
  }
}

export function deleteContact(ids) {
  return {
    type: constant.DELETE_CONTACT,
    ids
  }
}

export function deleteContactSuccess(data) {
  return {
    type: constant.DELETE_CONTACT_SUCCESS,
    data
  }
}

export function deleteContactError(error) {
  return {
    type: constant.DELETE_CONTACT_ERROR,
    error
  }
}
