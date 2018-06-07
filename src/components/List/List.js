import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  id,
  text,
  completed,
  completeTodo,
  deleteTodo
}) => (
  <li className="TodoList__item">
    <input className="TodoList__toggle" type="checkbox" onChange={(e) => completeTodo(id)} checked={completed} />
    <label className={`TodoList__label ${completed && 'TodoList__label-completed'}`}>{text}</label>
    <button className="TodoList__remove" onClick={() => deleteTodo(id)}></button>
  </li>
);

const List = ({
  todos,
  completeTodo,
  deleteTodo
}) => (
  <ul className="TodoList">
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
      id: PropTypes.number.isRequired,
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
