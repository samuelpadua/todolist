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
    <label className={`TodoList__label ${completed && 'TodoList__label-completed'}`}>{text}</label>
    <input type="checkbox" checked={completed} readOnly />
    <span className="TodoList__check" onClick={(e) => completeTodo(id)}></span>
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
          !task.completed && <Task key={task.id} deleteTodo={deleteTodo} completeTodo={completeTodo} {...task} />
        ))
    }
    {
      todos
        .map(task => task.visible && (
          task.completed && <Task key={task.id} deleteTodo={deleteTodo} completeTodo={completeTodo} {...task} />
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
