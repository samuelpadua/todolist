import React from 'react';
import PropTypes from 'prop-types';
import { filters } from '../../constants';
import Filter from '../../containers/Filters/Filters';

const ShowByStatus = () => (
  <div>
    <Filter filter={filters.SHOW_ALL} filterKey="showByStatus">Todas</Filter>
    <Filter filter={filters.SHOW_COMPLETED} filterKey="showByStatus">Concluídas</Filter>
  </div>
);

export default ShowByStatus;
