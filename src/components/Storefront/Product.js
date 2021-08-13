import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../../store/actions/shop'

class Product extends React.Component {
  handleCLick = (event) => {
    const { deleteProduct } = this.props
    if (event.currentTarget.className === 'storefront__card') deleteProduct(event.currentTarget.getAttribute('value'))
  }

  render() {
    const { image, category, title, price, id } = this.props
    return (
      <div onClick={this.handleCLick} className="storefront__card" value={id}>
        <img className="storefront__image" src={image} alt={title} />
        <p className="storefront__category">{category.title}</p>
        <p className="storefront__name">{title}</p>
        <p className="storefront__price">{price}</p>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteProduct
}

export default connect(null, mapDispatchToProps)(Product)
