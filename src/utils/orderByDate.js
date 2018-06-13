import { filters } from '../constants';


const orderByDate = (todos = [], orderBy = filters.MOST_RECENT) => {
  const desc = (a, b) => new Date(b.created_at) - new Date(a.created_at);
  const asc = (a, b) => new Date(a.created_at) - new Date(b.created_at);

  const order = orderBy === filters.MOST_OLDER ? asc : desc;

  const ordered = todos.sort(order);

  return ordered;
};

export default orderByDate;
