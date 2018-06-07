import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({
  filters,
  children,
  handleUpdateFilters,
  filter,
  filterKey
}) => (
    <button
        className={`Button ${filters[filterKey] === filter && 'Button__active'}`}
        onClick={() => handleUpdateFilters(filterKey, filter)}
    >
      {children}
    </button>
);

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  handleUpdateFilters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterKey: PropTypes.string.isRequired
};

export default Filter
