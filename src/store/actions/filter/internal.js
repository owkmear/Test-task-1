import * as t from '../../actionTypes/filter'

export function actionFilterPrice(filter) {
  return {
    type: t.FILTER_SET_PRICE,
    payload: filter
  }
}

export function actionFilterCategory(filter) {
  return {
    type: t.FILTER_SET_CATEGORY,
    payload: filter
  }
}

export function actionFilterCategoryList(list) {
  return {
    type: t.FILTER_SET_CATEGORY_LIST,
    payload: list
  }
}

export function actionFilterAvailable(filter) {
  return {
    type: t.FILTER_SET_AVAILABLE,
    payload: filter
  }
}
