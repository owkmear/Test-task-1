import { actionFilterPrice, actionFilterCategory, actionFilterAvailable } from './internal'

export function setFilterPrice(filter) {
  return (dispatch) => {
    dispatch(actionFilterPrice(filter))
  }
}

export function setFilterCategory(filter) {
  return (dispatch) => {
    dispatch(actionFilterCategory(filter))
  }
}

export function setFilterAvailable(filter) {
  return (dispatch) => {
    dispatch(actionFilterAvailable(filter))
  }
}
