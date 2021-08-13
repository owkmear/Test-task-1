import React from 'react'
import { connect } from 'react-redux'
import { setFilterPrice } from '../../store/actions/filter'

class PriceFilter extends React.Component {
  render() {
    const { priceFilter } = this.props
    return (
      <div className="filter__price">
        <div>
          <input onChange={this.handleChange} type="radio" name="contact" value="all" id="all" checked={priceFilter === null} />
          <label>Show all</label>
        </div>
        <div>
          <input onChange={this.handleChange} type="radio" name="contact" value="less" id="less" checked={priceFilter === false} />
          <label>less 5000</label>
        </div>
        <div>
          <input onChange={this.handleChange} type="radio" name="contact" value="more" id="more" checked={priceFilter === true} />
          <label>more or equal 5000</label>
        </div>
      </div>
    )
  }

  handleChange = (event) => {
    let filter = null
    switch (event.target.value) {
      case 'more':
        filter = true
        break
      case 'less':
        filter = false
        break
      case 'all':
      default:
        filter = null
        break
    }
    const { setFilterPrice } = this.props
    setFilterPrice(filter)
  }
}

const mapStateToProps = (state) => {
  return {
    priceFilter: state.filter.price
  }
}

const mapDispatchToProps = {
  setFilterPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter)
