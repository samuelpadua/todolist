import List from '../../components/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo, deleteTodo } from '../Todo/actions';
import orderByDate from '../../utils/orderByDate';
import { filters } from '../../constants';
import localStorage from '../../utils/localStorage';

const updateTodoLocalStorage = todos => {
  localStorage.put('tasks', todos);
};

const handleCompleteTodo = id => (dispatch, getState) => {
  dispatch(completeTodo(id));
  updateTodoLocalStorage(getState().todos);
};

const handleDeleteTodo = id => (dispatch, getState) => {
  dispatch(deleteTodo(id));
  updateTodoLocalStorage(getState().todos);
};
const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  completeTodo: handleCompleteTodo,
  deleteTodo: handleDeleteTodo
})(List);
