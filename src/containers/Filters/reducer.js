import { filters } from '../../constants';


const initialState = {
  orderBy: filters.MOST_RECENT,
  showByStatus: filters.SHOW_ALL
};

const orderBy = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      state[action.filter] = action.value
      return state;
    default:
      return state
  }
}

export default orderBy;
