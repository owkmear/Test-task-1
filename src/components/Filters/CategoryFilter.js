import React from 'react'
import { connect } from 'react-redux'
import { setFilterCategory } from '../../store/actions/filter'

class CategoryFilter extends React.Component {
  render() {
    let { categoryList } = this.props
    categoryList = categoryList.slice()
    categoryList.unshift({
      id: 'all',
      title: 'All categories'
    })
    categoryList.push({
      id: 'none',
      title: 'Without category'
    })
    return (
      <div className="filter__category">
        <select onChange={this.handleChange} name="select">
          {categoryList.map((category) => (
            <option key={category.id} value={category.id} select={category}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
    )
  }

  handleChange = (event) => {
    const { setFilterCategory } = this.props
    setFilterCategory(event.target.value)
  }
}

const mapStateToProps = (state) => {
  return {
    categoryFilter: state.filter.category,
    categoryList: state.filter.categoryList
  }
}

const mapDispatchToProps = {
  setFilterCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
