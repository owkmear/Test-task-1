import React, { Fragment } from 'react'
import Product from './Product'

class ProductsList extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Fragment>
        {data.map((productInfo) => (
          <Product key={productInfo.id} {...productInfo} />
        ))}
      </Fragment>
    )
  }
}

export default ProductsList
