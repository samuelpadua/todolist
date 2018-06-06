import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  id,
  text,
  completed,
  completeTodo,
  deleteTodo
}) => (
  <li>
    <input type="checkbox" onChange={(e) => completeTodo(id)} checked={completed} />
    {text}
    <a onClick={() => deleteTodo(id)}> Remover </a>
  </li>
);

const List = ({
  todos,
  completeTodo,
  deleteTodo
}) => (
  <ul>
    {
      todos
      .map(task => task.visible && (
        <Task key={task.id} deleteTodo={deleteTodo} completeTodo={completeTodo} {...task} />
      ))
    }
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      created_at: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired
    }).isRequired
  ),
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

List.defaultProps = {
  todos: []
};

export default List;
