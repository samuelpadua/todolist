import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../../constants';
import Filter from '../../containers/Filters/Filters';

const OrderByDate = () => (
  <div className="Filters">
    <Filter filter={constants.filters.MOST_RECENT} filterKey="orderBy">Mais Recentes</Filter>
    <Filter filter={constants.filters.MOST_OLDER} filterKey="orderBy">Mais Antiga</Filter>
  </div>
);

export default OrderByDate;
