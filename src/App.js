import React from 'react'
import { connect } from 'react-redux'
import Storefront from './components/Storefront'
import Filters from './components/Filters'
import { getProductsList } from './store/actions/shop'
import Spinner from './components/Spinner'

export class App extends React.Component {
  filterData(data) {
    data = this.filterPrice(data)
    data = this.filterAvailable(data)
    data = this.filterCategory(data)
    return data
  }

  filterPrice(data) {
    const { filterPrice } = this.props
    return data.filter((item) => {
      if (filterPrice === true) return item.price > 5000
      if (filterPrice === false) return item.price <= 5000
      return true
    })
  }

  filterAvailable(data) {
    const { filterAvailable } = this.props
    return data.filter((item) => {
      return filterAvailable ? item.quantity > 0 : true
    })
  }

  filterCategory(data) {
    const { filterCategory } = this.props
    if (filterCategory === 'all') return data
    return data.filter((item) => {
      return filterCategory === 'none' ? !item.category.id : filterCategory === String(item.category.id)
    })
  }

  componentWillMount() {
    this.props.getProductsList()
  }

  render() {
    const { isLoading, errorMessage } = this.props
    let { data } = this.props
    data = this.filterData(data)
    return isLoading ? (
      <div className="wrapper__loading">
        <div className="wrapper__spinner">
          <Spinner />
        </div>
      </div>
    ) : (
      <div className="wrapper">
        <Filters isLoading={isLoading} />
        <Storefront data={data} isLoading={isLoading} errorMessage={errorMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.shop.data,
    isLoading: state.shop.isLoading,
    errorMessage: state.shop.errorMessage,
    filterPrice: state.filter.price,
    filterCategory: state.filter.category,
    filterAvailable: state.filter.available
  }
}

const mapDispatchToProps = {
  getProductsList
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
