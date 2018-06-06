import { filters } from '../../constants';

const updateFilters = (filter, value) => ({
  type: 'UPDATE_FILTERS',
  filter,
  value
});

export {
  updateFilters
};
