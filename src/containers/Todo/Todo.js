import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import localStorage from '../../utils/localStorage';


import AddTaskInput from '../../components/AddTaskInput'
import { addTodo } from './actions';

const TodoContainer = ({
  handleAddTodo
}) => (
  <AddTaskInput handleInput={e => {
    if (e.keyCode === 13) {
      handleAddTodo(e.target.value);
      e.target.value = '';
    }
  }} />
);

const handleAddTodo = value => (dispatch, getState) =>  {
  dispatch(addTodo(value));
  localStorage.put('todos', getState().todos);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { handleAddTodo })(TodoContainer);
