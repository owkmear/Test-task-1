import initialState from './initialState'
import * as t from '../../actionTypes/shop'

function shop(state = initialState, action) {
  switch (action.type) {
    case t.SHOP_GET_REQUEST:
      return { ...state, isLoading: true, errorMessage: null }
    case t.SHOP_GET_SUCCESS:
      return { ...state, isLoading: false, data: action.payload }
    case t.SHOP_GET_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case t.SHOP_DELETE:
      return { ...state, data: state.data.filter((record) => record.id !== Number(action.payload)) }
    default:
      return state
  }
}

export default shop
