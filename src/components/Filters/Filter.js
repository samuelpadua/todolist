import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({
  active,
  children,
  handleUpdateFilters,
  filter,
  filterKey
}) => (
    <button
       onClick={() => handleUpdateFilters(filterKey, filter)}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
);

Filter.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  handleUpdateFilters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterKey: PropTypes.string.isRequired
};

export default Filter
