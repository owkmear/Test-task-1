import * as t from '../../actionTypes/shop'

export function shopRequest() {
  return {
    type: t.SHOP_GET_REQUEST
  }
}

export function shopSuccess(list) {
  return {
    type: t.SHOP_GET_SUCCESS,
    payload: list
  }
}

export function shopFailure(errorMessage) {
  return {
    type: t.SHOP_GET_FAILURE,
    payload: errorMessage
  }
}

export function shopDelete(list) {
  return {
    type: t.SHOP_DELETE,
    payload: list
  }
}
