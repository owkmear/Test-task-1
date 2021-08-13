import React from 'react'
import { connect } from 'react-redux'
import { setFilterAvailable } from '../../store/actions/filter'

class AvailableFilter extends React.Component {
  render() {
    const { availableFilter } = this.props
    return (
      <div className="filter__available">
        <label>Available: </label>
        <input onChange={this.handleChange} type="checkbox" id="available" name="available" checked={availableFilter} />
      </div>
    )
  }

  handleChange = (event) => {
    const { setFilterAvailable } = this.props
    setFilterAvailable(event.target.checked)
  }
}

const mapStateToProps = (state) => {
  return {
    availableFilter: state.filter.available
  }
}

const mapDispatchToProps = {
  setFilterAvailable
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableFilter)
