import initialState from './initialState'
import * as t from '../../actionTypes/filter'

function filter(state = initialState, action) {
  switch (action.type) {
    case t.FILTER_SET_PRICE:
      return { ...state, price: action.payload }
    case t.FILTER_SET_CATEGORY:
      return { ...state, category: action.payload }
    case t.FILTER_SET_CATEGORY_LIST:
      return { ...state, categoryList: action.payload }
    case t.FILTER_SET_AVAILABLE:
      return { ...state, available: action.payload }
    default:
      return state
  }
}

export default filter
