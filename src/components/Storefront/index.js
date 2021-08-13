import React from 'react'
import ProductsList from './ProductsList'

export class Storefront extends React.Component {
  render() {
    const { data, errorMessage } = this.props
    return errorMessage !== null ? (
      <div className="storefront storefront__error">{errorMessage}</div>
    ) : data.length > 0 ? (
      <div className="storefront">
        <ProductsList data={data} />
      </div>
    ) : (
      <div className="storefront storefront__empty">No items</div>
    )
  }
}

export default Storefront
