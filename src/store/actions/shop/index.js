import { shopSuccess, shopFailure, shopRequest, shopDelete } from './internal'
import { actionFilterCategoryList } from '../filter/internal'

import { getAllProducts } from '../../../utils/refillHelpers'

export function getProductsList() {
  return (dispatch) => {
    dispatch(shopRequest())
    return new Promise((resolve, reject) => {
      getAllProducts()
        .then((responce) => {
          dispatch(shopSuccess(responce.data))
          let categoryList = []
          responce.data.forEach((product) => {
            if (!categoryList.some((category) => category.id === product.category.id)) {
              if (product.category.id) categoryList.push(product.category)
            }
          })
          dispatch(actionFilterCategoryList(categoryList))
          resolve()
        })
        .catch((error) => {
          dispatch(shopFailure('Network error'))
          reject(error)
        })
    })
  }
}

export function deleteProduct(id) {
  return (dispatch) => {
    dispatch(shopDelete(id))
  }
}
