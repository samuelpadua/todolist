import moment from 'moment';
import { filters } from '../constants';


const orderByDate = (todos = [], orderBy = filters.MOST_RECENT) => {
  let ordered = todos.sort((a, b) => moment(a.created_at).diff(moment(b.created_at)));
  if (orderBy === filters.MOST_OLDER) {
    return ordered.reverse();
  }

  return ordered;
};

export default orderByDate;
