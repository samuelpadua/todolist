import Filter from '../../components/Filters/Filter';
import { connect } from 'react-redux';
import { updateFilters } from '../Filters/actions';
import { applyFilters } from '../Todo/actions';


const mapStateToProps = state => state;

const handleUpdateFilters = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilters(filter, value));

  const { filters } = getState();
  if (!filters) {
    return;
  }

  return dispatch(applyFilters(filters))
};

export default connect(mapStateToProps, { handleUpdateFilters })(Filter);
