import orderByDate from '../../utils/orderByDate';
import { filters } from '../../constants';
import _ from 'lodash';
import guid from '../../utils/guid';


const applyFilters = (todos, filter = {}) => {
  switch (filter.showByStatus) {
    case filters.SHOW_ALL:
      return orderByDate(todos.map(t => {
        t.visible = true
        return t;
      }), filter.orderBy)
    case filters.SHOW_COMPLETED:
      return orderByDate(todos.map(t => {
        t.visible = t.completed;
        return t;
      }), filter.orderBy)
    default:
      return todos
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return applyFilters([
        ...state,
        {
          id: guid(),
          text: action.text,
          completed: false,
          visible: true,
          updated_at: new Date(),
          created_at: new Date(),
        }
      ], action.filters);
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          todo.updated_at = new Date();
        }
        return todo;
      })
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'APPLY_FILTERS':
      const tasks = _.cloneDeep(applyFilters(state, action.filters));
      return tasks
    default:
      return state
  }
}

export default todos;
