import React from 'react'
import PriceFilter from './PriceFilter'
import AvailableFilter from './AvailableFilter'
import CategoryFilter from './CategoryFilter'

export class Filters extends React.Component {
  render() {
    return (
      <div className="filter">
        <PriceFilter />
        <AvailableFilter />
        <CategoryFilter />
      </div>
    )
  }
}

export default Filters
